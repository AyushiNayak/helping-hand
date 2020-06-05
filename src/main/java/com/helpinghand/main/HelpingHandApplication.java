package com.helpinghand.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("com.helpinghand")
@EntityScan("com.helpinghand")
@ComponentScan(basePackages = "com.helpinghand")
public class HelpingHandApplication {

  public static void main(String[] args) {
    SpringApplication.run(HelpingHandApplication.class, args);
  }




}

