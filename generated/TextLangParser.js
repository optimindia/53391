// Generated from TextLang.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import TextLangListener from './TextLangListener.js';
import TextLangVisitor from './TextLangVisitor.js';

const serializedATN = [4,1,22,139,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,5,0,34,8,0,10,0,12,0,37,9,0,1,0,1,0,1,
1,1,1,1,1,1,1,1,1,3,1,46,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,
58,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,70,8,3,1,4,1,4,1,4,1,
4,1,4,1,4,3,4,78,8,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,3,5,87,8,5,1,6,5,6,90,8,
6,10,6,12,6,93,9,6,1,7,1,7,1,7,1,7,3,7,99,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,
8,1,8,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,
1,11,1,12,1,12,1,12,1,12,1,13,1,13,1,13,3,13,131,8,13,1,14,1,14,3,14,135,
8,14,1,15,1,15,1,15,0,0,16,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,0,
1,1,0,5,9,139,0,35,1,0,0,0,2,45,1,0,0,0,4,57,1,0,0,0,6,69,1,0,0,0,8,71,1,
0,0,0,10,83,1,0,0,0,12,91,1,0,0,0,14,98,1,0,0,0,16,100,1,0,0,0,18,108,1,
0,0,0,20,110,1,0,0,0,22,117,1,0,0,0,24,123,1,0,0,0,26,130,1,0,0,0,28,134,
1,0,0,0,30,136,1,0,0,0,32,34,3,2,1,0,33,32,1,0,0,0,34,37,1,0,0,0,35,33,1,
0,0,0,35,36,1,0,0,0,36,38,1,0,0,0,37,35,1,0,0,0,38,39,5,0,0,1,39,1,1,0,0,
0,40,46,3,4,2,0,41,46,3,8,4,0,42,46,3,16,8,0,43,46,3,20,10,0,44,46,3,22,
11,0,45,40,1,0,0,0,45,41,1,0,0,0,45,42,1,0,0,0,45,43,1,0,0,0,45,44,1,0,0,
0,46,3,1,0,0,0,47,48,5,1,0,0,48,49,3,30,15,0,49,50,5,10,0,0,50,51,3,6,3,
0,51,52,5,11,0,0,52,58,1,0,0,0,53,54,5,1,0,0,54,55,3,30,15,0,55,56,5,11,
0,0,56,58,1,0,0,0,57,47,1,0,0,0,57,53,1,0,0,0,58,5,1,0,0,0,59,60,3,18,9,
0,60,61,5,13,0,0,61,62,3,28,14,0,62,63,5,14,0,0,63,70,1,0,0,0,64,65,3,28,
14,0,65,66,5,17,0,0,66,67,3,28,14,0,67,70,1,0,0,0,68,70,3,26,13,0,69,59,
1,0,0,0,69,64,1,0,0,0,69,68,1,0,0,0,70,7,1,0,0,0,71,72,5,2,0,0,72,77,3,30,
15,0,73,74,5,13,0,0,74,75,3,10,5,0,75,76,5,14,0,0,76,78,1,0,0,0,77,73,1,
0,0,0,77,78,1,0,0,0,78,79,1,0,0,0,79,80,5,15,0,0,80,81,3,12,6,0,81,82,5,
16,0,0,82,9,1,0,0,0,83,86,5,20,0,0,84,85,5,12,0,0,85,87,3,10,5,0,86,84,1,
0,0,0,86,87,1,0,0,0,87,11,1,0,0,0,88,90,3,14,7,0,89,88,1,0,0,0,90,93,1,0,
0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,13,1,0,0,0,93,91,1,0,0,0,94,99,3,16,8,
0,95,99,3,20,10,0,96,99,3,22,11,0,97,99,3,24,12,0,98,94,1,0,0,0,98,95,1,
0,0,0,98,96,1,0,0,0,98,97,1,0,0,0,99,15,1,0,0,0,100,101,5,20,0,0,101,102,
5,10,0,0,102,103,3,18,9,0,103,104,5,13,0,0,104,105,3,28,14,0,105,106,5,14,
0,0,106,107,5,11,0,0,107,17,1,0,0,0,108,109,7,0,0,0,109,19,1,0,0,0,110,111,
5,20,0,0,111,112,5,10,0,0,112,113,3,28,14,0,113,114,5,17,0,0,114,115,3,28,
14,0,115,116,5,11,0,0,116,21,1,0,0,0,117,118,5,3,0,0,118,119,5,13,0,0,119,
120,3,26,13,0,120,121,5,14,0,0,121,122,5,11,0,0,122,23,1,0,0,0,123,124,5,
4,0,0,124,125,3,26,13,0,125,126,5,11,0,0,126,25,1,0,0,0,127,131,5,18,0,0,
128,131,5,19,0,0,129,131,5,20,0,0,130,127,1,0,0,0,130,128,1,0,0,0,130,129,
1,0,0,0,131,27,1,0,0,0,132,135,5,18,0,0,133,135,5,20,0,0,134,132,1,0,0,0,
134,133,1,0,0,0,135,29,1,0,0,0,136,137,5,20,0,0,137,31,1,0,0,0,10,35,45,
57,69,77,86,91,98,130,134];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TextLangParser extends antlr4.Parser {

    static grammarFileName = "TextLang.g4";
    static literalNames = [ null, "'variable'", null, "'imprimir'", "'devolver'", 
                            null, null, "'longitud'", "'invertir'", "'reemplazar'", 
                            "'='", "';'", "','", "'('", "')'", "'{'", "'}'", 
                            "'+'" ];
    static symbolicNames = [ null, "VARIABLE", "FUNCION", "IMPRIMIR", "DEVOLVER", 
                             "MAYUSCULAS", "MINUSCULAS", "LONGITUD", "INVERTIR", 
                             "REEMPLAZAR", "EQ", "PUNTOCOMA", "COMA", "LPAREN", 
                             "RPAREN", "LLAVEIZQ", "LLAVEDER", "SUMA", "TEXTO", 
                             "NUMERO", "IDENTIFICADOR", "NEWLINE", "WS" ];
    static ruleNames = [ "programa", "sentencia", "declaracion", "expresion", 
                         "funcion", "argumentos", "cuerpoFuncion", "instruccionFuncion", 
                         "operacionTexto", "transformacion", "concatenar", 
                         "impresion", "retorno", "valor", "cadena", "nombre" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TextLangParser.ruleNames;
        this.literalNames = TextLangParser.literalNames;
        this.symbolicNames = TextLangParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, TextLangParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1048590) !== 0)) {
	            this.state = 32;
	            this.sentencia();
	            this.state = 37;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 38;
	        this.match(TextLangParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, TextLangParser.RULE_sentencia);
	    try {
	        this.state = 45;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 40;
	            this.declaracion();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 41;
	            this.funcion();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 42;
	            this.operacionTexto();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 43;
	            this.concatenar();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 44;
	            this.impresion();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, TextLangParser.RULE_declaracion);
	    try {
	        this.state = 57;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new DeclConValorContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 47;
	            this.match(TextLangParser.VARIABLE);
	            this.state = 48;
	            this.nombre();
	            this.state = 49;
	            this.match(TextLangParser.EQ);
	            this.state = 50;
	            this.expresion();
	            this.state = 51;
	            this.match(TextLangParser.PUNTOCOMA);
	            break;

	        case 2:
	            localctx = new DeclSinValorContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 53;
	            this.match(TextLangParser.VARIABLE);
	            this.state = 54;
	            this.nombre();
	            this.state = 55;
	            this.match(TextLangParser.PUNTOCOMA);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, TextLangParser.RULE_expresion);
	    try {
	        this.state = 69;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ExprTransformContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 59;
	            this.transformacion();
	            this.state = 60;
	            this.match(TextLangParser.LPAREN);
	            this.state = 61;
	            this.cadena();
	            this.state = 62;
	            this.match(TextLangParser.RPAREN);
	            break;

	        case 2:
	            localctx = new ExprConcatContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 64;
	            this.cadena();
	            this.state = 65;
	            this.match(TextLangParser.SUMA);
	            this.state = 66;
	            this.cadena();
	            break;

	        case 3:
	            localctx = new ExprValorContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 68;
	            this.valor();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcion() {
	    let localctx = new FuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, TextLangParser.RULE_funcion);
	    var _la = 0;
	    try {
	        localctx = new DefFuncionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(TextLangParser.FUNCION);
	        this.state = 72;
	        this.nombre();
	        this.state = 77;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 73;
	            this.match(TextLangParser.LPAREN);
	            this.state = 74;
	            this.argumentos();
	            this.state = 75;
	            this.match(TextLangParser.RPAREN);
	        }

	        this.state = 79;
	        this.match(TextLangParser.LLAVEIZQ);
	        this.state = 80;
	        this.cuerpoFuncion();
	        this.state = 81;
	        this.match(TextLangParser.LLAVEDER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentos() {
	    let localctx = new ArgumentosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, TextLangParser.RULE_argumentos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(TextLangParser.IDENTIFICADOR);
	        this.state = 86;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 84;
	            this.match(TextLangParser.COMA);
	            this.state = 85;
	            this.argumentos();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cuerpoFuncion() {
	    let localctx = new CuerpoFuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, TextLangParser.RULE_cuerpoFuncion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1048600) !== 0)) {
	            this.state = 88;
	            this.instruccionFuncion();
	            this.state = 93;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccionFuncion() {
	    let localctx = new InstruccionFuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, TextLangParser.RULE_instruccionFuncion);
	    try {
	        this.state = 98;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 94;
	            this.operacionTexto();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 95;
	            this.concatenar();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 96;
	            this.impresion();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 97;
	            this.retorno();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operacionTexto() {
	    let localctx = new OperacionTextoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, TextLangParser.RULE_operacionTexto);
	    try {
	        localctx = new OpTextoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.match(TextLangParser.IDENTIFICADOR);
	        this.state = 101;
	        this.match(TextLangParser.EQ);
	        this.state = 102;
	        this.transformacion();
	        this.state = 103;
	        this.match(TextLangParser.LPAREN);
	        this.state = 104;
	        this.cadena();
	        this.state = 105;
	        this.match(TextLangParser.RPAREN);
	        this.state = 106;
	        this.match(TextLangParser.PUNTOCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	transformacion() {
	    let localctx = new TransformacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, TextLangParser.RULE_transformacion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 992) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	concatenar() {
	    let localctx = new ConcatenarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, TextLangParser.RULE_concatenar);
	    try {
	        localctx = new OpConcatenarContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(TextLangParser.IDENTIFICADOR);
	        this.state = 111;
	        this.match(TextLangParser.EQ);
	        this.state = 112;
	        this.cadena();
	        this.state = 113;
	        this.match(TextLangParser.SUMA);
	        this.state = 114;
	        this.cadena();
	        this.state = 115;
	        this.match(TextLangParser.PUNTOCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	impresion() {
	    let localctx = new ImpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, TextLangParser.RULE_impresion);
	    try {
	        localctx = new OpImprimirContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.match(TextLangParser.IMPRIMIR);
	        this.state = 118;
	        this.match(TextLangParser.LPAREN);
	        this.state = 119;
	        this.valor();
	        this.state = 120;
	        this.match(TextLangParser.RPAREN);
	        this.state = 121;
	        this.match(TextLangParser.PUNTOCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retorno() {
	    let localctx = new RetornoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, TextLangParser.RULE_retorno);
	    try {
	        localctx = new OpRetornoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this.match(TextLangParser.DEVOLVER);
	        this.state = 124;
	        this.valor();
	        this.state = 125;
	        this.match(TextLangParser.PUNTOCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, TextLangParser.RULE_valor);
	    try {
	        this.state = 130;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            localctx = new ValorTextoContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 127;
	            this.match(TextLangParser.TEXTO);
	            break;
	        case 19:
	            localctx = new ValorNumeroContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 128;
	            this.match(TextLangParser.NUMERO);
	            break;
	        case 20:
	            localctx = new ValorVariableContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 129;
	            this.match(TextLangParser.IDENTIFICADOR);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, TextLangParser.RULE_cadena);
	    try {
	        this.state = 134;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            localctx = new CadenaTextoContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 132;
	            this.match(TextLangParser.TEXTO);
	            break;
	        case 20:
	            localctx = new CadenaVariableContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 133;
	            this.match(TextLangParser.IDENTIFICADOR);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombre() {
	    let localctx = new NombreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, TextLangParser.RULE_nombre);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(TextLangParser.IDENTIFICADOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

TextLangParser.EOF = antlr4.Token.EOF;
TextLangParser.VARIABLE = 1;
TextLangParser.FUNCION = 2;
TextLangParser.IMPRIMIR = 3;
TextLangParser.DEVOLVER = 4;
TextLangParser.MAYUSCULAS = 5;
TextLangParser.MINUSCULAS = 6;
TextLangParser.LONGITUD = 7;
TextLangParser.INVERTIR = 8;
TextLangParser.REEMPLAZAR = 9;
TextLangParser.EQ = 10;
TextLangParser.PUNTOCOMA = 11;
TextLangParser.COMA = 12;
TextLangParser.LPAREN = 13;
TextLangParser.RPAREN = 14;
TextLangParser.LLAVEIZQ = 15;
TextLangParser.LLAVEDER = 16;
TextLangParser.SUMA = 17;
TextLangParser.TEXTO = 18;
TextLangParser.NUMERO = 19;
TextLangParser.IDENTIFICADOR = 20;
TextLangParser.NEWLINE = 21;
TextLangParser.WS = 22;

TextLangParser.RULE_programa = 0;
TextLangParser.RULE_sentencia = 1;
TextLangParser.RULE_declaracion = 2;
TextLangParser.RULE_expresion = 3;
TextLangParser.RULE_funcion = 4;
TextLangParser.RULE_argumentos = 5;
TextLangParser.RULE_cuerpoFuncion = 6;
TextLangParser.RULE_instruccionFuncion = 7;
TextLangParser.RULE_operacionTexto = 8;
TextLangParser.RULE_transformacion = 9;
TextLangParser.RULE_concatenar = 10;
TextLangParser.RULE_impresion = 11;
TextLangParser.RULE_retorno = 12;
TextLangParser.RULE_valor = 13;
TextLangParser.RULE_cadena = 14;
TextLangParser.RULE_nombre = 15;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TextLangParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(TextLangParser.EOF, 0);
	};

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TextLangVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TextLangParser.RULE_sentencia;
    }

	declaracion() {
	    return this.getTypedRuleContext(DeclaracionContext,0);
	};

	funcion() {
	    return this.getTypedRuleContext(FuncionContext,0);
	};

	operacionTexto() {
	    return this.getTypedRuleContext(OperacionTextoContext,0);
	};

	concatenar() {
	    return this.getTypedRuleContext(ConcatenarContext,0);
	};

	impresion() {
	    return this.getTypedRuleContext(ImpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TextLangVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TextLangParser.RULE_declaracion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DeclSinValorContext extends DeclaracionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	VARIABLE() {
	    return this.getToken(TextLangParser.VARIABLE, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	PUNTOCOMA() {
	    return this.getToken(TextLangParser.PUNTOCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.enterDeclSinValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.exitDeclSinValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TextLangVisitor ) {
	        return visitor.visitDeclSinValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TextLangParser.DeclSinValorContext = DeclSinValorContext;

class DeclConValorContext extends DeclaracionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	VARIABLE() {
	    return this.getToken(TextLangParser.VARIABLE, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	EQ() {
	    return this.getToken(TextLangParser.EQ, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	PUNTOCOMA() {
	    return this.getToken(TextLangParser.PUNTOCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.enterDeclConValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.exitDeclConValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TextLangVisitor ) {
	        return visitor.visitDeclConValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TextLangParser.DeclConValorContext = DeclConValorContext;

class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TextLangParser.RULE_expresion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ExprConcatContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	cadena = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CadenaContext);
	    } else {
	        return this.getTypedRuleContext(CadenaContext,i);
	    }
	};

	SUMA() {
	    return this.getToken(TextLangParser.SUMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.enterExprConcat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.exitExprConcat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TextLangVisitor ) {
	        return visitor.visitExprConcat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TextLangParser.ExprConcatContext = ExprConcatContext;

class ExprValorContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.enterExprValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.exitExprValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TextLangVisitor ) {
	        return visitor.visitExprValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TextLangParser.ExprValorContext = ExprValorContext;

class ExprTransformContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	transformacion() {
	    return this.getTypedRuleContext(TransformacionContext,0);
	};

	LPAREN() {
	    return this.getToken(TextLangParser.LPAREN, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	RPAREN() {
	    return this.getToken(TextLangParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.enterExprTransform(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.exitExprTransform(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TextLangVisitor ) {
	        return visitor.visitExprTransform(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TextLangParser.ExprTransformContext = ExprTransformContext;

class FuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TextLangParser.RULE_funcion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DefFuncionContext extends FuncionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FUNCION() {
	    return this.getToken(TextLangParser.FUNCION, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	LLAVEIZQ() {
	    return this.getToken(TextLangParser.LLAVEIZQ, 0);
	};

	cuerpoFuncion() {
	    return this.getTypedRuleContext(CuerpoFuncionContext,0);
	};

	LLAVEDER() {
	    return this.getToken(TextLangParser.LLAVEDER, 0);
	};

	LPAREN() {
	    return this.getToken(TextLangParser.LPAREN, 0);
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	RPAREN() {
	    return this.getToken(TextLangParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.enterDefFuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.exitDefFuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TextLangVisitor ) {
	        return visitor.visitDefFuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TextLangParser.DefFuncionContext = DefFuncionContext;

class ArgumentosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TextLangParser.RULE_argumentos;
    }

	IDENTIFICADOR() {
	    return this.getToken(TextLangParser.IDENTIFICADOR, 0);
	};

	COMA() {
	    return this.getToken(TextLangParser.COMA, 0);
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.enterArgumentos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.exitArgumentos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TextLangVisitor ) {
	        return visitor.visitArgumentos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CuerpoFuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TextLangParser.RULE_cuerpoFuncion;
    }

	instruccionFuncion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionFuncionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionFuncionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.enterCuerpoFuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.exitCuerpoFuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TextLangVisitor ) {
	        return visitor.visitCuerpoFuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionFuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TextLangParser.RULE_instruccionFuncion;
    }

	operacionTexto() {
	    return this.getTypedRuleContext(OperacionTextoContext,0);
	};

	concatenar() {
	    return this.getTypedRuleContext(ConcatenarContext,0);
	};

	impresion() {
	    return this.getTypedRuleContext(ImpresionContext,0);
	};

	retorno() {
	    return this.getTypedRuleContext(RetornoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.enterInstruccionFuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.exitInstruccionFuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TextLangVisitor ) {
	        return visitor.visitInstruccionFuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperacionTextoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TextLangParser.RULE_operacionTexto;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class OpTextoContext extends OperacionTextoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IDENTIFICADOR() {
	    return this.getToken(TextLangParser.IDENTIFICADOR, 0);
	};

	EQ() {
	    return this.getToken(TextLangParser.EQ, 0);
	};

	transformacion() {
	    return this.getTypedRuleContext(TransformacionContext,0);
	};

	LPAREN() {
	    return this.getToken(TextLangParser.LPAREN, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	RPAREN() {
	    return this.getToken(TextLangParser.RPAREN, 0);
	};

	PUNTOCOMA() {
	    return this.getToken(TextLangParser.PUNTOCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.enterOpTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.exitOpTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TextLangVisitor ) {
	        return visitor.visitOpTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TextLangParser.OpTextoContext = OpTextoContext;

class TransformacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TextLangParser.RULE_transformacion;
    }

	MAYUSCULAS() {
	    return this.getToken(TextLangParser.MAYUSCULAS, 0);
	};

	MINUSCULAS() {
	    return this.getToken(TextLangParser.MINUSCULAS, 0);
	};

	LONGITUD() {
	    return this.getToken(TextLangParser.LONGITUD, 0);
	};

	INVERTIR() {
	    return this.getToken(TextLangParser.INVERTIR, 0);
	};

	REEMPLAZAR() {
	    return this.getToken(TextLangParser.REEMPLAZAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.enterTransformacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.exitTransformacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TextLangVisitor ) {
	        return visitor.visitTransformacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConcatenarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TextLangParser.RULE_concatenar;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class OpConcatenarContext extends ConcatenarContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IDENTIFICADOR() {
	    return this.getToken(TextLangParser.IDENTIFICADOR, 0);
	};

	EQ() {
	    return this.getToken(TextLangParser.EQ, 0);
	};

	cadena = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CadenaContext);
	    } else {
	        return this.getTypedRuleContext(CadenaContext,i);
	    }
	};

	SUMA() {
	    return this.getToken(TextLangParser.SUMA, 0);
	};

	PUNTOCOMA() {
	    return this.getToken(TextLangParser.PUNTOCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.enterOpConcatenar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.exitOpConcatenar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TextLangVisitor ) {
	        return visitor.visitOpConcatenar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TextLangParser.OpConcatenarContext = OpConcatenarContext;

class ImpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TextLangParser.RULE_impresion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class OpImprimirContext extends ImpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IMPRIMIR() {
	    return this.getToken(TextLangParser.IMPRIMIR, 0);
	};

	LPAREN() {
	    return this.getToken(TextLangParser.LPAREN, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	RPAREN() {
	    return this.getToken(TextLangParser.RPAREN, 0);
	};

	PUNTOCOMA() {
	    return this.getToken(TextLangParser.PUNTOCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.enterOpImprimir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.exitOpImprimir(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TextLangVisitor ) {
	        return visitor.visitOpImprimir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TextLangParser.OpImprimirContext = OpImprimirContext;

class RetornoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TextLangParser.RULE_retorno;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class OpRetornoContext extends RetornoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DEVOLVER() {
	    return this.getToken(TextLangParser.DEVOLVER, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	PUNTOCOMA() {
	    return this.getToken(TextLangParser.PUNTOCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.enterOpRetorno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.exitOpRetorno(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TextLangVisitor ) {
	        return visitor.visitOpRetorno(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TextLangParser.OpRetornoContext = OpRetornoContext;

class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TextLangParser.RULE_valor;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ValorVariableContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IDENTIFICADOR() {
	    return this.getToken(TextLangParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.enterValorVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.exitValorVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TextLangVisitor ) {
	        return visitor.visitValorVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TextLangParser.ValorVariableContext = ValorVariableContext;

class ValorNumeroContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMERO() {
	    return this.getToken(TextLangParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.enterValorNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.exitValorNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TextLangVisitor ) {
	        return visitor.visitValorNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TextLangParser.ValorNumeroContext = ValorNumeroContext;

class ValorTextoContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TEXTO() {
	    return this.getToken(TextLangParser.TEXTO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.enterValorTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.exitValorTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TextLangVisitor ) {
	        return visitor.visitValorTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TextLangParser.ValorTextoContext = ValorTextoContext;

class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TextLangParser.RULE_cadena;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CadenaTextoContext extends CadenaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TEXTO() {
	    return this.getToken(TextLangParser.TEXTO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.enterCadenaTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.exitCadenaTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TextLangVisitor ) {
	        return visitor.visitCadenaTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TextLangParser.CadenaTextoContext = CadenaTextoContext;

class CadenaVariableContext extends CadenaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IDENTIFICADOR() {
	    return this.getToken(TextLangParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.enterCadenaVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.exitCadenaVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TextLangVisitor ) {
	        return visitor.visitCadenaVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TextLangParser.CadenaVariableContext = CadenaVariableContext;

class NombreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TextLangParser.RULE_nombre;
    }

	IDENTIFICADOR() {
	    return this.getToken(TextLangParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.enterNombre(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TextLangListener ) {
	        listener.exitNombre(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TextLangVisitor ) {
	        return visitor.visitNombre(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




TextLangParser.ProgramaContext = ProgramaContext; 
TextLangParser.SentenciaContext = SentenciaContext; 
TextLangParser.DeclaracionContext = DeclaracionContext; 
TextLangParser.ExpresionContext = ExpresionContext; 
TextLangParser.FuncionContext = FuncionContext; 
TextLangParser.ArgumentosContext = ArgumentosContext; 
TextLangParser.CuerpoFuncionContext = CuerpoFuncionContext; 
TextLangParser.InstruccionFuncionContext = InstruccionFuncionContext; 
TextLangParser.OperacionTextoContext = OperacionTextoContext; 
TextLangParser.TransformacionContext = TransformacionContext; 
TextLangParser.ConcatenarContext = ConcatenarContext; 
TextLangParser.ImpresionContext = ImpresionContext; 
TextLangParser.RetornoContext = RetornoContext; 
TextLangParser.ValorContext = ValorContext; 
TextLangParser.CadenaContext = CadenaContext; 
TextLangParser.NombreContext = NombreContext; 
