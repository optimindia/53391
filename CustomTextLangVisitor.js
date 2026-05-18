import TextLangVisitor from "./generated/TextLangVisitor.js";
import TextLangParser from "./generated/TextLangParser.js";

export class CustomTextLangVisitor extends TextLangVisitor {

    constructor() {
        super();
        this.memory = new Map();
        this.functions = new Map();
        this.jsCode = [];
        this.output = [];
    }

    // ========== PROGRAMA ==========

    visitPrograma(ctx) {
        for (let i = 0; i < ctx.getChildCount(); i++) {
            const child = ctx.getChild(i);
            if (child.constructor.name !== 'TerminalNodeImpl') {
                this.visit(child);
            }
        }
        return null;
    }

    visitSentencia(ctx) {
        return this.visitChildren(ctx);
    }

    // ========== DECLARACIONES ==========

    visitDeclConValor(ctx) {
        const varName = ctx.nombre().getText();
        const exprResult = this.visit(ctx.expresion());
        this.memory.set(varName, exprResult.value);
        this.jsCode.push(`let ${varName} = ${exprResult.js};`);
        return exprResult.value;
    }

    visitDeclSinValor(ctx) {
        const varName = ctx.nombre().getText();
        this.memory.set(varName, undefined);
        this.jsCode.push(`let ${varName};`);
        return undefined;
    }

    // ========== EXPRESIONES ==========

    visitExprTransform(ctx) {
        const transform = ctx.transformacion().getText();
        const cadenaResult = this.resolveCadena(ctx.cadena());
        const cadenaJs = this.cadenaToJs(ctx.cadena());

        let value;
        let js;
        const str = String(cadenaResult);

        switch (transform) {
            case 'mayúsculas':
            case 'mayusculas':
                value = str.toUpperCase();
                js = `${cadenaJs}.toUpperCase()`;
                break;
            case 'minúsculas':
            case 'minusculas':
                value = str.toLowerCase();
                js = `${cadenaJs}.toLowerCase()`;
                break;
            case 'longitud':
                value = str.length;
                js = `${cadenaJs}.length`;
                break;
            case 'invertir':
                value = str.split('').reverse().join('');
                js = `${cadenaJs}.split('').reverse().join('')`;
                break;
            case 'reemplazar':
                value = str;
                js = cadenaJs;
                break;
            default:
                value = str;
                js = cadenaJs;
        }

        return { value, js };
    }

    visitExprConcat(ctx) {
        const left = this.resolveCadena(ctx.cadena(0));
        const right = this.resolveCadena(ctx.cadena(1));
        const leftJs = this.cadenaToJs(ctx.cadena(0));
        const rightJs = this.cadenaToJs(ctx.cadena(1));

        return {
            value: String(left) + String(right),
            js: `${leftJs} + ${rightJs}`
        };
    }

    visitExprValor(ctx) {
        const val = this.resolveValor(ctx.valor());
        const js = this.valorToJs(ctx.valor());
        return { value: val, js };
    }

    // ========== FUNCIONES ==========

    visitDefFuncion(ctx) {
        const funcName = ctx.nombre().getText();
        const args = [];
        if (ctx.argumentos()) {
            this.collectArgs(ctx.argumentos(), args);
        }

        const jsArgs = args.join(', ');
        this.jsCode.push(`function ${funcName}(${jsArgs}) {`);

        // Visitar cuerpo de la funcion
        const body = ctx.cuerpoFuncion();
        for (let i = 0; i < body.getChildCount(); i++) {
            const child = body.getChild(i);
            if (child.constructor.name !== 'TerminalNodeImpl') {
                this.visit(child);
            }
        }

        this.jsCode.push(`}`);
        return null;
    }

    collectArgs(ctx, args) {
        args.push(ctx.IDENTIFICADOR().getText());
        if (ctx.argumentos()) {
            this.collectArgs(ctx.argumentos(), args);
        }
    }

    visitInstruccionFuncion(ctx) {
        return this.visitChildren(ctx);
    }

    // ========== OPERACIONES ==========

    visitOpTexto(ctx) {
        const varName = ctx.IDENTIFICADOR().getText();
        const transform = ctx.transformacion().getText();
        const cadenaVal = this.resolveCadena(ctx.cadena());
        const cadenaJs = this.cadenaToJs(ctx.cadena());

        let value;
        let jsTransform;
        const str = String(cadenaVal);

        switch (transform) {
            case 'mayúsculas':
            case 'mayusculas':
                value = str.toUpperCase();
                jsTransform = `${cadenaJs}.toUpperCase()`;
                break;
            case 'minúsculas':
            case 'minusculas':
                value = str.toLowerCase();
                jsTransform = `${cadenaJs}.toLowerCase()`;
                break;
            case 'longitud':
                value = str.length;
                jsTransform = `${cadenaJs}.length`;
                break;
            case 'invertir':
                value = str.split('').reverse().join('');
                jsTransform = `${cadenaJs}.split('').reverse().join('')`;
                break;
            case 'reemplazar':
                value = str;
                jsTransform = cadenaJs;
                break;
            default:
                value = str;
                jsTransform = cadenaJs;
        }

        this.memory.set(varName, value);
        this.jsCode.push(`let ${varName} = ${jsTransform};`);
        return value;
    }

    visitOpConcatenar(ctx) {
        const varName = ctx.IDENTIFICADOR().getText();
        const left = this.resolveCadena(ctx.cadena(0));
        const right = this.resolveCadena(ctx.cadena(1));
        const leftJs = this.cadenaToJs(ctx.cadena(0));
        const rightJs = this.cadenaToJs(ctx.cadena(1));

        const result = String(left) + String(right);
        this.memory.set(varName, result);
        this.jsCode.push(`let ${varName} = ${leftJs} + ${rightJs};`);
        return result;
    }

    visitOpImprimir(ctx) {
        const val = this.resolveValor(ctx.valor());
        const jsVal = this.valorToJs(ctx.valor());
        this.output.push(val);
        this.jsCode.push(`console.log(${jsVal});`);
        return val;
    }

    visitOpRetorno(ctx) {
        const val = this.resolveValor(ctx.valor());
        const jsVal = this.valorToJs(ctx.valor());
        this.jsCode.push(`return ${jsVal};`);
        return val;
    }

    // ========== HELPERS ==========

    resolveValor(ctx) {
        if (ctx.TEXTO && ctx.TEXTO()) {
            const raw = ctx.TEXTO().getText();
            return raw.substring(1, raw.length - 1);
        }
        if (ctx.NUMERO && ctx.NUMERO()) {
            return parseInt(ctx.NUMERO().getText());
        }
        if (ctx.IDENTIFICADOR && ctx.IDENTIFICADOR()) {
            const name = ctx.IDENTIFICADOR().getText();
            if (this.memory.has(name)) return this.memory.get(name);
            return name;
        }
        return null;
    }

    valorToJs(ctx) {
        if (ctx.TEXTO && ctx.TEXTO()) {
            return ctx.TEXTO().getText();
        }
        if (ctx.NUMERO && ctx.NUMERO()) {
            return ctx.NUMERO().getText();
        }
        if (ctx.IDENTIFICADOR && ctx.IDENTIFICADOR()) {
            return ctx.IDENTIFICADOR().getText();
        }
        return 'null';
    }

    resolveCadena(ctx) {
        if (ctx.TEXTO && ctx.TEXTO()) {
            const raw = ctx.TEXTO().getText();
            return raw.substring(1, raw.length - 1);
        }
        if (ctx.IDENTIFICADOR && ctx.IDENTIFICADOR()) {
            const name = ctx.IDENTIFICADOR().getText();
            if (this.memory.has(name)) return this.memory.get(name);
            return name;
        }
        return '';
    }

    cadenaToJs(ctx) {
        if (ctx.TEXTO && ctx.TEXTO()) {
            return ctx.TEXTO().getText();
        }
        if (ctx.IDENTIFICADOR && ctx.IDENTIFICADOR()) {
            return ctx.IDENTIFICADOR().getText();
        }
        return '""';
    }

    getGeneratedJs() {
        return this.jsCode.join('\n');
    }

    getOutput() {
        return this.output;
    }
}
