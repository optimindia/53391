# Analizador Sintáctico — Tema 25914_11

Materia: Sintaxis y Semántica de los Lenguajes — UTN FRM

Analizador léxico y sintáctico para un lenguaje de manipulación de texto, implementado con ANTLR4 y Node.js. Dado un archivo de entrada, el programa muestra la tabla de tokens, el árbol de análisis sintáctico y la traducción equivalente a JavaScript junto con su resultado de ejecución.

---

## Requisitos

- Node.js v16 o superior
- Java (solo si se necesita regenerar el parser desde la gramática)

---

## Instalación

Clonar el repositorio e instalar las dependencias:

```
git clone https://github.com/optimindia/53391.git
cd 53391
npm install
```

---

## Cómo ejecutar

El programa lee el archivo `input.txt` por defecto. Para probarlo con alguno de los ejemplos incluidos, copiar el contenido al archivo de entrada y correr:

```
npm start
```

Por ejemplo, para probar el ejemplo correcto 1:

**Windows:**
```
copy input_correcto_1.txt input.txt
npm start
```

**Linux/Mac:**
```
cp input_correcto_1.txt input.txt
npm start
```

Los archivos de ejemplo disponibles son:

- `input_correcto_1.txt` — declaración de variable y transformación a mayúsculas
- `input_correcto_2.txt` — concatenación, inversión, longitud y minúsculas
- `input_incorrecto_1.txt` — error: falta punto y coma
- `input_incorrecto_2.txt` — error: paréntesis sin cerrar

---

## Salida del programa

Si la entrada es válida, muestra:

- Tabla de lexemas y tokens con su posición (línea:columna)
- Árbol de análisis sintáctico en formato LISP e indentado
- Traducción a JavaScript y resultado de la ejecución

Si hay errores de sintaxis, informa la línea y columna donde ocurrió el problema.

---

## Ejemplo

Entrada (`input_correcto_1.txt`):
```
variable saludo = "hola mundo";
variable enMayusculas = mayusculas(saludo);
imprimir(enMayusculas);
```

Traducción generada:
```javascript
let saludo = "hola mundo";
let enMayusculas = saludo.toUpperCase();
console.log(enMayusculas);
```

Resultado:
```
→ HOLA MUNDO
```

---

## Regenerar el parser (opcional)

Si se modifica `TextLang.g4`, regenerar los archivos con:

```
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -visitor -listener -o generated TextLang.g4
```
