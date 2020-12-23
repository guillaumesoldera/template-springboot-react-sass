package com.serli.controllers;

import java.util.Date;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @RequestMapping("/api/hello")
    public String hello() {
        return new Date().toString() + " : Hello from API !";
    }
}
