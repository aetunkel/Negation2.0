library(readr)
library(knitr)
library(purrr)
library(tibble)
library(tidyr)
library(tidyverse)
library(here)
library(jsonlite)

#E1
files <- map(here("raw_data/Experiment1/partner"), 
                  ~list.files(.x, pattern = ".json", 
                              full.names = T, recursive = T)) %>%
  unlist()

#E2
files <- map(here("raw_data/Experiment2"), 
             ~list.files(.x, pattern = ".json", 
                         full.names = T, recursive = T)) %>%
  unlist() %>%
  enframe() %>%
  filter(!str_detect(value, "hit-ids"),
         !str_detect(value, "settings")) %>%
  pull(value)

trial_types <- read_csv(here("trial_types.csv"))

read_file <- function(file) {
  
  json_out <- fromJSON(file)
  id <- json_out$WorkerId
  
  raw_data <- json_out$answers$data 
  
  responses <- raw_data$responses %>%
    read_csv() %>%
    select(-internal_node_id, -trial_type) %>%
    rowwise() %>%
    mutate(responses = str_split(responses, ":") %>% unlist() %>% last(),
           responses = gsub("[^[:alnum:] ]", "", responses),
           responses = str_trim(responses)) %>%
    rename(response = responses) %>%
    # Experiment 2
    slice((n() - 17):n()) %>%
    #Experiment 1
    #slice(4:21) %>%
    ungroup() %>%
    mutate(trial = 1:n()) %>%
    select(-trial_index)
  
  trials <- raw_data$trial_info 
  
  # Experiment 2
  if(str_detect(file,"contrastB")) {
    tmp <- trials[3]
    trials[3] <- trials[4]
    trials[4] <- tmp
  }
  
  
  practice <- trials[1:2] %>%
    unlist() %>%
    enframe() %>%
    mutate(value = str_split(value, " class=")) %>%
    rowwise() %>%
    mutate(pic = value[1] %>% str_split("/") %>% unlist() %>% last(),
           pic = gsub(".jpg'", "", pic),
           type =  gsub("[^[:alnum:] ]", "", value[2])) %>%
    select(-value, -name) %>%
    mutate(trial = as.numeric(gsub("[^0-9]", "", pic))) %>%
    spread(type, pic) %>%
    mutate(type = "practice") %>%
    rename(distractor = image)
  
  test <- trials[3:4] %>%
    map(as_tibble) %>%
    bind_rows(.id = "type") %>%
    separate(V1, sep = " class=", into = c("pic_1", "kind_1")) %>%
    separate(V2, sep = " class=", into = c("pic_2", "kind_2")) %>%
    mutate(trial = 1:n()) %>%
    gather(measure, value, pic_1, pic_2, kind_1, kind_2) %>%
    separate(measure, into = c("measure", "image"), sep = "_") %>%
    spread(measure, value) %>%
    rowwise() %>%
    mutate(pic = pic[1] %>% str_split("/") %>% unlist() %>% last(),
           pic = gsub(".jpg'", "", pic),
           kind =  gsub("[^[:alnum:] ]", "", kind)) %>%
    select(-image) %>%
    spread(kind, pic) %>%
    rename(distractor = image) %>%
    ungroup() %>%
    mutate(trial = trial + nrow(practice)) %>%
    select(-type) %>%
    left_join(trial_types, by = c("target" = "image"))
  
  
  # 
  # if(str_detect(file, "unknown-first")) {
  #   tidy_test <- test %>%
  #     mutate(type = as.character(factor(type, 
  #                                       labels = c("unknown", "known"))))
  # } else {
  #   tidy_test <- test %>%
  #     mutate(type = as.character(factor(type, 
  #                                       labels = c("known", "unknown"))))
  # }
  # 
  responses %>%
    left_join(bind_rows(practice, test), by = "trial") %>%
    mutate(id = id) %>%
    mutate(file = file)
  
}

raw_data <- map_df(files, read_file) %>%
  ungroup() %>%
  mutate(id = factor(id, labels = 1:length(unique(id))))

write_csv(raw_data, here("data/experiment3.csv"))

