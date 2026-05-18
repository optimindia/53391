// ============================================================
// PUNTO DE ENTRADA — Analizador de Lenguaje de Manipulación de Texto
// Tema: 25914_11
// ============================================================
//
// Este programa realiza:
// 1. Análisis léxico y sintáctico (ANTLR4)
// 2. Generación de tabla de lexemas-tokens
// 3. Construcción del árbol de análisis sintáctico
// 4. Traducción a JavaScript e interpretación
//
// Flujo: texto → Lexer → Parser → Árbol → Visitor → Traducción JS + Ejecución

import TextLangLexer from "./generated/TextLangLexer.js";
import TextLangParser from "./generated/TextLangParser.js";
import { CustomTextLangVisitor } from "./CustomTextLangVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

// ============================================================
// Error Listener personalizado para capturar errores de sintaxis
// ============================================================
class CustomErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.errors = [];
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.errors.push({ line, column, msg });
    }
}

// ============================================================
// Función para generar la tabla de lexemas-tokens
// ============================================================
function generarTablaTokens(lexer) {
    lexer.reset();
    const tokens = lexer.getAllTokens();
    const tokenNames = TextLangLexer.symbolicNames;

    console.log("\n╔══════════════════════════════════════════════════════════════╗");
    console.log("║              TABLA DE LEXEMAS - TOKENS                      ║");
    console.log("╠══════════════════════╦═══════════════════╦══════════════════╣");
    console.log("║ LEXEMA               ║ TOKEN             ║ LÍNEA:COLUMNA    ║");
    console.log("╠══════════════════════╬═══════════════════╬══════════════════╣");

    for (const token of tokens) {
        if (token.type === antlr4.Token.EOF) continue;
        const lexema = token.text.replace(/\n/g, '\\n').replace(/\r/g, '\\r');
        const tokenName = tokenNames[token.type] || `T${token.type}`;
        const position = `${token.line}:${token.column}`;

        console.log(`║ ${lexema.padEnd(20)} ║ ${tokenName.padEnd(17)} ║ ${position.padEnd(16)} ║`);
    }

    console.log("╚══════════════════════╩═══════════════════╩══════════════════╝");

    // Resetear el lexer para que el parser pueda usarlo
    lexer.reset();
}

// ============================================================
// Función para mostrar el árbol con indentación
// ============================================================
function mostrarArbol(tree, parser, indent = 0) {
    const prefix = "  ".repeat(indent);
    const ruleNames = parser.ruleNames;

    if (tree.getChildCount() === 0) {
        // Nodo terminal (token)
        return `${prefix}${tree.getText()}`;
    }

    // Nodo regla
    const ruleName = ruleNames[tree.ruleIndex] || "desconocido";
    let result = `${prefix}(${ruleName}`;

    if (tree.getChildCount() === 1 && tree.getChild(0).getChildCount() === 0) {
        result += ` ${tree.getChild(0).getText()})`;
    } else {
        result += '\n';
        for (let i = 0; i < tree.getChildCount(); i++) {
            result += mostrarArbol(tree.getChild(i), parser, indent + 1) + '\n';
        }
        result += `${prefix})`;
    }

    return result;
}

// ============================================================
// Función principal
// ============================================================
async function main() {
    let input;

    // PASO 0: Obtener la entrada
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        input = await leerCadena();
    }

    console.log("═══════════════════════════════════════════════════════════════");
    console.log("  ANALIZADOR DE LENGUAJE DE MANIPULACIÓN DE TEXTO");
    console.log("  Tema: 25914_11 - Sintaxis y Semántica de Lenguajes");
    console.log("═══════════════════════════════════════════════════════════════");
    console.log("\n📄 Código fuente de entrada:");
    console.log("───────────────────────────────────────────────────────────────");
    console.log(input);
    console.log("───────────────────────────────────────────────────────────────");

    // PASO 1: Análisis léxico
    let inputStream = CharStreams.fromString(input);
    let lexer = new TextLangLexer(inputStream);

    // Mostrar tabla de lexemas-tokens
    generarTablaTokens(lexer);

    // PASO 2: Análisis sintáctico
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new TextLangParser(tokenStream);

    // Agregar error listener personalizado
    const errorListener = new CustomErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);

    let tree = parser.programa();

    // PASO 3: Verificar errores
    if (errorListener.errors.length > 0) {
        console.log("\n❌ Se encontraron ERRORES de sintaxis en la entrada:\n");
        for (const err of errorListener.errors) {
            console.log(`  → Línea ${err.line}, Columna ${err.column}: ${err.msg}`);
        }
        console.log("\n  El análisis no puede continuar.");
    } else {
        console.log("\n✅ Entrada válida. No se detectaron errores léxicos ni sintácticos.");

        // Mostrar árbol de análisis sintáctico (formato texto LISP)
        console.log("\n╔══════════════════════════════════════════════════════════════╗");
        console.log("║           ÁRBOL DE ANÁLISIS SINTÁCTICO (formato LISP)       ║");
        console.log("╚══════════════════════════════════════════════════════════════╝");
        const cadenaTree = tree.toStringTree(parser.ruleNames);
        console.log(cadenaTree);

        // Mostrar árbol con indentación
        console.log("\n╔══════════════════════════════════════════════════════════════╗");
        console.log("║           ÁRBOL DE ANÁLISIS SINTÁCTICO (indentado)          ║");
        console.log("╚══════════════════════════════════════════════════════════════╝");
        console.log(mostrarArbol(tree, parser));

        // PASO 4: Interpretación con Visitor
        const visitor = new CustomTextLangVisitor();
        visitor.visit(tree);

        // Mostrar traducción a JavaScript
        console.log("\n╔══════════════════════════════════════════════════════════════╗");
        console.log("║              TRADUCCIÓN A JAVASCRIPT                        ║");
        console.log("╚══════════════════════════════════════════════════════════════╝");
        console.log(visitor.getGeneratedJs());

        // Mostrar salida de la ejecución (interpretación)
        const output = visitor.getOutput();
        if (output.length > 0) {
            console.log("\n╔══════════════════════════════════════════════════════════════╗");
            console.log("║              RESULTADO DE LA EJECUCIÓN                      ║");
            console.log("╚══════════════════════════════════════════════════════════════╝");
            for (const o of output) {
                console.log(`  → ${o}`);
            }
        }
    }
}

// Función para leer entrada por teclado
function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        console.log("No se encontró el archivo input.txt.");
        rl.question("Ingrese el código fuente (finalice con línea vacía):\n", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();
