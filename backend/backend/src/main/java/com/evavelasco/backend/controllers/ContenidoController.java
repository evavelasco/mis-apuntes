package com.evavelasco.backend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class ContenidoController {

@PostMapping("/api/agregarContenido")
public String agregarContenido(@RequestBody String nuevo Contenido){
return "Contenido agregado:"+ nuevoContenido;
}
}