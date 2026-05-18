import TextLangListener from "./generated/TextLangListener.js";

// Listener personalizado con fines ilustrativos.
// Registra los eventos de entrada/salida de las reglas de la gramática.
export class CustomTextLangListener extends TextLangListener {

    enterPrograma(ctx) {
        console.log("  [Listener] Entrando a programa");
    }

    exitPrograma(ctx) {
        console.log("  [Listener] Saliendo de programa");
    }

    enterDeclVar(ctx) {
        console.log(`  [Listener] Declaración de variable detectada`);
    }

    enterOpImprimir(ctx) {
        console.log(`  [Listener] Instrucción imprimir detectada`);
    }

    enterDefFuncion(ctx) {
        console.log(`  [Listener] Definición de función detectada`);
    }
}
