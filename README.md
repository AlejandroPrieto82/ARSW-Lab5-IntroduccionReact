# ARSW - Lab 5: Introducción a React

Este proyecto es una aplicación básica que combina **Spring Boot** en el backend con **React** y **p5.js** en el frontend. El servidor maneja sesiones y permite establecer un nombre de usuario y consultar el estado del servidor, mientras que el frontend muestra componentes dinámicos de React y un tablero interactivo con p5.js.

## Getting Started

Estas instrucciones te permitirán obtener una copia del proyecto y ejecutarlo en tu máquina local para propósitos de desarrollo y pruebas.

### Prerequisites

Debes tener instalados:

- [Java 17+](https://adoptium.net/)  
- [Maven](https://maven.apache.org/)  
- Un IDE como IntelliJ o Eclipse (opcional)  
- Navegador moderno para el frontend (Chrome, Firefox, Edge)

### Installing

1. Clona el repositorio:

   ```bash
   git clone https://github.com/AlejandroPrieto82/ARSW-Lab5-IntroduccionReact.git
   cd ARSW-Lab5-IntroduccionReact
    ```

2. Compila y corre el backend con Maven:

   ```bash
   ./mvnw spring-boot:run
   ```

3. Abre en tu navegador [http://localhost:8080/index.html](http://localhost:8080/index.html) para ver la interfaz en React.
   También puedes probar el tablero en [http://localhost:8080/sketch.html](http://localhost:8080/sketch.html).

Ejemplo de endpoints disponibles:

* `GET /status` → devuelve estado del servidor y fecha/hora actual.
* `GET /setname?name=TuNombre` → guarda el nombre en sesión.

## Running the tests

Actualmente no hay pruebas automatizadas implementadas, pero puedes añadirlas con JUnit y Spring Boot Test.

### Break down into end to end tests

Ejemplo: probar que `/status` responde correctamente cuando hay un nombre en sesión.

```java
@Test
public void testStatusWithName() {
    mockMvc.perform(get("/setname?name=TestUser"))
           .andExpect(status().isOk());

    mockMvc.perform(get("/status"))
           .andExpect(status().isOk())
           .andExpect(content().string(containsString("TestUser")));
}
```

### And coding style tests

Se recomienda usar herramientas como **Checkstyle** o **SpotBugs** para mantener la calidad del código.

## Deployment

Para desplegar en un servidor:

1. Empaqueta el proyecto:

   ```bash
   ./mvnw clean package
   ```

   Esto genera un archivo `.jar` en `target/`.

2. Ejecuta el jar:

   ```bash
   java -jar target/arsw-tablero-0.0.1-SNAPSHOT.jar
   ```

3. Accede en [http://localhost:8080](http://localhost:8080).

## Built With

* [Spring Boot](https://spring.io/projects/spring-boot) - Framework backend
* [Maven](https://maven.apache.org/) - Gestión de dependencias
* [React](https://react.dev/) - Librería de frontend
* [p5.js](https://p5js.org/) - Librería de dibujo interactivo

## Authors

* **Alejandro Prieto** - *Trabajo inicial* - [AlejandroPrieto82](https://github.com/AlejandroPrieto82)

## License

Este proyecto está licenciado bajo la licencia [MIT](LICENSE).
