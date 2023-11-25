# Project Objectives

The main objectives of this project are:

- Understand how Node.js works
- Learn how to interact with Node.js
- Acquire proficiency in handling Node.js
- Comprehend the concept of NPM (Node Package Manager)
- Learn how to manage NPM packages

## 1.1 Exercises

### Exercise 1

1. Create a folder named `ej1`.
2. Initialize a Node.js project using NPM within the `ej1` folder.
3. Name the project "Ejercicio-1".
4. Create a file named `index.js`.
5. Configure the project so that running `npm start` executes the code in `index.js`.
6. As a result, it should display the following message in the console:
   ```plaintext
   Mi primer script en The Bridge!!!

   
### Exercise 2

1. Create a folder named `ej2`.
2. Initialize a Node.js project using NPM within the `ej2` folder.
3. Name the project "Ejercicio-2".
4. Create a file named `index.js`.
5. Install the `logplease` module as the only development dependency of the project.
6. Read the documentation of the module to learn how to use it.
7. Configure the project so that running `npm start` executes the code in `index.js`. Display the following messages in the console:
- Hola Mundo de Node (using the `debug` method)
- Noticias de última hora, Node.js me encanta!! (using the `info` method)
- Tirando warnings como campeones (using the `warn` method)
- Algo no está bien!!! (using the `error` method)

### Exercise 3

1. Create a folder named `ej3`.
2. Initialize a Node.js project using NPM within the `ej3` folder.
3. Name the project "Ejercicio-3".
4. Create a file named `index.js`.
5. Create a file named `numeros.js`.
6. Declare a function named `esPar` in `numeros.js`. This function takes a number as a parameter and returns a boolean value `true` if the number is even and `false` otherwise. Export the function in `index.js`.
7. Install the `logplease` module as the only development dependency of the project.
8. Import the `logplease` module and the `numeros` module in `index.js`. Call the `esPar` function with the following values: 2, 3, 101, 201, 202, 100.
9. If the number is even, display the following message in the console using the appropriate methods of the `logplease` module:
- El número es par (use the `info` method)
- El número no es par (use the `error` method)

## 1.2 Exercises Part 2: Routing with Node.js

1. Create HTML code to serve a classic webpage (Home | ¿Quiénes somos? | ¿Dónde Estamos? | ¿Qué hacemos? | Contacto, etc.).
2. Serve a response for each route (endpoint) with the corresponding HTML files: `home.html`, `contact.html`, `about.html`, etc.
3. Make the necessary modifications for our script to run with `npm start`.
