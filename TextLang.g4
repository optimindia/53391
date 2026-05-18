grammar TextLang;

// =====================
// REGLAS DEL PARSER
// =====================

programa: sentencia* EOF;

sentencia: declaracion
         | funcion
         | operacionTexto
         | concatenar
         | impresion
         ;

declaracion: VARIABLE nombre EQ expresion PUNTOCOMA              #declConValor
           | VARIABLE nombre PUNTOCOMA                           #declSinValor
           ;

expresion: transformacion LPAREN cadena RPAREN                   #exprTransform
         | cadena SUMA cadena                                    #exprConcat
         | valor                                                 #exprValor
         ;

funcion: FUNCION nombre (LPAREN argumentos RPAREN)? LLAVEIZQ cuerpoFuncion LLAVEDER   #defFuncion;

argumentos: IDENTIFICADOR (COMA argumentos)?;

cuerpoFuncion: instruccionFuncion*;

instruccionFuncion: operacionTexto | concatenar | impresion | retorno;

operacionTexto: IDENTIFICADOR EQ transformacion LPAREN cadena RPAREN PUNTOCOMA   #opTexto;

transformacion: MAYUSCULAS | MINUSCULAS | LONGITUD | INVERTIR | REEMPLAZAR;

concatenar: IDENTIFICADOR EQ cadena SUMA cadena PUNTOCOMA   #opConcatenar;

impresion: IMPRIMIR LPAREN valor RPAREN PUNTOCOMA   #opImprimir;

retorno: DEVOLVER valor PUNTOCOMA   #opRetorno;

valor: TEXTO                        #valorTexto
     | NUMERO                       #valorNumero
     | IDENTIFICADOR                #valorVariable
     ;

cadena: TEXTO                       #cadenaTexto
      | IDENTIFICADOR               #cadenaVariable
      ;

nombre: IDENTIFICADOR;

// =====================
// REGLAS DEL LEXER
// =====================

// Palabras reservadas
VARIABLE: 'variable';
FUNCION: 'funci\u00F3n' | 'funcion';
IMPRIMIR: 'imprimir';
DEVOLVER: 'devolver';
MAYUSCULAS: 'may\u00FAsculas' | 'mayusculas';
MINUSCULAS: 'min\u00FAsculas' | 'minusculas';
LONGITUD: 'longitud';
INVERTIR: 'invertir';
REEMPLAZAR: 'reemplazar';

// Simbolos
EQ: '=';
PUNTOCOMA: ';';
COMA: ',';
LPAREN: '(';
RPAREN: ')';
LLAVEIZQ: '{';
LLAVEDER: '}';
SUMA: '+';

// Literales
TEXTO: '"' (~["\r\n])* '"';
NUMERO: '-'? [0-9]+;

// Identificadores
IDENTIFICADOR: [a-zA-Z_][a-zA-Z0-9_]*;

// Espacios en blanco y saltos de linea
NEWLINE: '\r'? '\n' -> skip;
WS: [ \t]+ -> skip;
