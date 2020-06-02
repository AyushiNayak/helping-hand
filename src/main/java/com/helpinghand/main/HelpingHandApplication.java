package com.helpinghand.main;

import com.helpinghand.entity.User;
import com.helpinghand.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
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


  @Bean
  public CommandLineRunner demo(UserRepository repository) {
    return (args) -> {
      // save a few customers
      repository.save(new User(11L, "sanjida", "barlaskar"));
    };
  }

}

