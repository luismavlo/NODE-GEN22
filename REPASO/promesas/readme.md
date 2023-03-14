Promesas (Promises): Una promesa es un objeto que representa el resultado pendiente de una operación asíncrona. Las promesas se utilizan para manejar el flujo de ejecución en operaciones asíncronas y permiten que el código sea más legible y fácil de mantener.

.then() y .catch() (then() and catch() methods): Estos son métodos utilizados con las promesas en JavaScript. El método then() se ejecuta cuando la promesa se resuelve exitosamente, mientras que el método catch() se ejecuta cuando la promesa es rechazada o arroja un error. El método then() toma una función de callback que se ejecutará cuando la promesa se resuelve y el método catch() toma una función de callback que se ejecutará cuando la promesa sea rechazada o arroje un error.

async/await: Estos son dos nuevos conceptos introducidos en ES2017 (también conocido como ES8) que hacen que el código asíncrono en JavaScript sea más fácil de leer y escribir. La palabra clave "async" se utiliza para marcar una función como asíncrona, lo que significa que devolverá una promesa. La palabra clave "await" se utiliza para esperar a que una promesa se resuelva antes de continuar con la ejecución del código. En lugar de utilizar los métodos then() y catch(), se utiliza el bloque try/catch para manejar los errores en el código asíncrono.

::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::::Explicación del ejemplo visto::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::

En este código, hemos creado una función esperar que devuelve una promesa que se resuelve después de un cierto número de milisegundos. Luego, hemos creado una función saludar que utiliza async/await para esperar dos segundos antes de imprimir el siguiente mensaje.

Después, hemos creado una función saludarYDespedir que llama a la función saludar y luego imprime un mensaje adicional y llama a la función despedir. Esta función también utiliza try/catch para manejar cualquier error que pueda ocurrir durante la ejecución de la función saludar.

Finalmente, hemos llamado a la función saludarYDespedir con el nombre 'Juan'. Este código es mucho más fácil de leer y entender que el código original con callbacks.

::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::::::::::::::DATO EXTRA:::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::

estructura de un new Promise

const miPromesa = new Promise((resolve, reject) => {
// Aquí se escribe el código que realiza la tarea asíncrona

if (/_ la tarea asíncrona se completa exitosamente _/) {
resolve(/_ valor retornado si se completa exitosamente _/);
} else {
reject(/_ valor retornado si hay un error _/);
}
});

La función que se pasa como argumento del constructor de Promise recibe dos parámetros: "resolve" y "reject". Cuando la tarea asíncrona se completa exitosamente, se llama a "resolve" con el valor retornado como argumento. Si hay algún error, se llama a "reject" con el valor del error como argumento.

Una vez que se crea la promesa, se puede utilizar el método .then() para manejar el resultado exitoso de la promesa y el método .catch() para manejar los errores que puedan surgir.
