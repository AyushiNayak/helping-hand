package com.helpinghand.controller;

import com.helpinghand.entity.Category;
import com.helpinghand.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CategoryController {

  @Autowired
  private CategoryRepository categoryRepository;

  @GetMapping(path = "/categories")
  public List<Category> findAll(){
     return  categoryRepository.findAll();
  }

}
