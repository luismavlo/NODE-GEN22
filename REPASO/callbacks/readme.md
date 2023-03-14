Los callbacks son una herramienta importante en JavaScript que se utiliza para ejecutar una función después de que se complete otra función.

Para entender los callbacks, es útil primero entender que en JavaScript las funciones son tratadas como objetos de primera clase. Esto significa que pueden ser pasadas como argumentos a otras funciones, y pueden ser retornadas por otras funciones.

Un callback es simplemente una función que se pasa como argumento a otra función, y que se ejecuta después de que la función original haya terminado su ejecución. Los callbacks son útiles porque nos permiten controlar el flujo de ejecución en JavaScript de manera asíncrona, lo que significa que podemos continuar ejecutando nuestro código mientras se espera que se complete una tarea.

::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::::Explicación del ejemplo visto::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::

En este ejemplo, tenemos dos funciones: saludar() y despedir(). La función saludar() toma dos argumentos: nombre y callback. Dentro de la función, primero se imprime "Hola" seguido del nombre que se le pasa como argumento. Luego, se llama a la función callback().

La función despedir() simplemente imprime "Adiós".

Finalmente, se llama a la función saludar(), pasando como primer argumento el nombre "Juan" y como segundo argumento la función despedir(). Esto significa que después de imprimir "Hola Juan", se llamará a la función despedir().

En resumen, los callbacks son una herramienta útil en JavaScript para controlar el flujo de ejecución asíncrona. Al pasar una función como argumento a otra función, podemos asegurarnos de que se ejecute solo después de que se haya completado una tarea específica.

::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::: DATO IMPORTANTE ::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::

cuando hablamos de pasar una función como referencia, nos referimos a pasar la función como un valor, similar a como pasaríamos una variable o un objeto como un valor.

En JavaScript, una función es un tipo de dato y, como tal, se puede almacenar en una variable y pasar como un argumento a otra función. Cuando pasamos una función como argumento a otra función, en realidad estamos pasando una referencia a la función.
