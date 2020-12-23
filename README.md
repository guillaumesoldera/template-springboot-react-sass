# Welcome !

Template for Java SpringBoot + React + Sass project

# Structure
This project contains Java SpringBoot part, React part and Sass part.

## SpringBoot
SpringBoot part is located in `src/main/java`, `src/main/resources`.

## React
React part is located in `src/main/js`.
`package.json` and `webpack.config.js` is in root directory.

## Sass
 Sass part is located in `src/main/scss`.
 
# Launch project
Project is built from `pom.xml`. This file contains instructions to build React and Sass parts too.
To build these parts, a `frontend-maven-plugin` calls scripts defined in `package.json`.

Just run `./mvnw spring-boot:run`.

# Watch project (in dev)

## SpringBoot part
Run `./mvnw spring-boot:run`.

`spring-boot-devtools` is defined in dependency, so if your IDE is configured to build the project automatically, the server will restart.

To enable 'build project automatically' in IntelliJ : 
 * `> IntelliJ Settings`
 * `> Build, Execution, Deployment`
 * `> Compiler`
 * then enable `build project automatically`

In VSCode you must have a Java plugin and the `java.autobuild` option enabled and `hot code replace` option set to `auto`.

## React and Sass part
Run `yarn watch`.
 
# Build project (prod)
Run `./mvnw package`. A jar will be generated into `target/` directory. Launch it with `java -jar` command.

# The App
Amazing app with a simple page built from Thymeleaf template engine. This page load a React app which displays a button. This button is a wrapper for `cc-button` Web Components provided by Clever Cloud ([https://github.com/CleverCloud/clever-components](https://github.com/CleverCloud/clever-components)). A click on this button call an API provided by our Spring Boot App.
 
