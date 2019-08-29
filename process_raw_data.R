library(tidyverse)
library(here)
library(jsonlite)

dirs <- c("raw_data")

files <- map(here("raw_data/"), ~list.files(.x, pattern = ".json", 
                               full.names = T, recursive = T)) %>%
  unlist()

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
    mutate(trial = trial_index - 2) %>%
    select(-trial_index)
  
  trials <- raw_data$trial_info 
  
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
    mutate(trial = trial + nrow(practice))
  
    if(str_detect(file, "unknown-first")) {
      tidy_test <- test %>%
        mutate(type = as.character(factor(type, 
                                          labels = c("unknown", "known"))))
    } else {
      tidy_test <- test %>%
        mutate(type = as.character(factor(type, 
                                          labels = c("known", "unknown"))))
    }
         
  responses %>%
    left_join(bind_rows(practice, tidy_test), by = "trial") %>%
    mutate(id = id)
  
}

raw_data <- map_df(files, read_file) %>%
  ungroup() %>%
  mutate(id = factor(id, labels = 1:length(unique(id))))

write_csv(raw_data, here("data/pilot.csv"))