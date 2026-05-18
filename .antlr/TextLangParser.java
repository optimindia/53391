// Generated from c:/Users/HP/Documents/UNIVERSIDAD/CURSADO/2. SEGUNDO AÑO/1. PRIMER SEMESTRE/Sintaxis y Semántica de los Lenguajes/ANALIZADOR/53391/25914_11/TextLang.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class TextLangParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		VARIABLE=1, FUNCION=2, IMPRIMIR=3, DEVOLVER=4, MAYUSCULAS=5, MINUSCULAS=6, 
		LONGITUD=7, INVERTIR=8, REEMPLAZAR=9, EQ=10, PUNTOCOMA=11, COMA=12, LPAREN=13, 
		RPAREN=14, LLAVEIZQ=15, LLAVEDER=16, SUMA=17, TEXTO=18, NUMERO=19, IDENTIFICADOR=20, 
		NEWLINE=21, WS=22;
	public static final int
		RULE_programa = 0, RULE_sentencia = 1, RULE_declaracion = 2, RULE_expresion = 3, 
		RULE_funcion = 4, RULE_argumentos = 5, RULE_cuerpoFuncion = 6, RULE_instruccionFuncion = 7, 
		RULE_operacionTexto = 8, RULE_transformacion = 9, RULE_concatenar = 10, 
		RULE_impresion = 11, RULE_retorno = 12, RULE_valor = 13, RULE_cadena = 14, 
		RULE_nombre = 15;
	private static String[] makeRuleNames() {
		return new String[] {
			"programa", "sentencia", "declaracion", "expresion", "funcion", "argumentos", 
			"cuerpoFuncion", "instruccionFuncion", "operacionTexto", "transformacion", 
			"concatenar", "impresion", "retorno", "valor", "cadena", "nombre"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'variable'", null, "'imprimir'", "'devolver'", null, null, "'longitud'", 
			"'invertir'", "'reemplazar'", "'='", "';'", "','", "'('", "')'", "'{'", 
			"'}'", "'+'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "VARIABLE", "FUNCION", "IMPRIMIR", "DEVOLVER", "MAYUSCULAS", "MINUSCULAS", 
			"LONGITUD", "INVERTIR", "REEMPLAZAR", "EQ", "PUNTOCOMA", "COMA", "LPAREN", 
			"RPAREN", "LLAVEIZQ", "LLAVEDER", "SUMA", "TEXTO", "NUMERO", "IDENTIFICADOR", 
			"NEWLINE", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "TextLang.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public TextLangParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramaContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(TextLangParser.EOF, 0); }
		public List<SentenciaContext> sentencia() {
			return getRuleContexts(SentenciaContext.class);
		}
		public SentenciaContext sentencia(int i) {
			return getRuleContext(SentenciaContext.class,i);
		}
		public ProgramaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_programa; }
	}

	public final ProgramaContext programa() throws RecognitionException {
		ProgramaContext _localctx = new ProgramaContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_programa);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(35);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1048590L) != 0)) {
				{
				{
				setState(32);
				sentencia();
				}
				}
				setState(37);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(38);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SentenciaContext extends ParserRuleContext {
		public DeclaracionContext declaracion() {
			return getRuleContext(DeclaracionContext.class,0);
		}
		public FuncionContext funcion() {
			return getRuleContext(FuncionContext.class,0);
		}
		public OperacionTextoContext operacionTexto() {
			return getRuleContext(OperacionTextoContext.class,0);
		}
		public ConcatenarContext concatenar() {
			return getRuleContext(ConcatenarContext.class,0);
		}
		public ImpresionContext impresion() {
			return getRuleContext(ImpresionContext.class,0);
		}
		public SentenciaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sentencia; }
	}

	public final SentenciaContext sentencia() throws RecognitionException {
		SentenciaContext _localctx = new SentenciaContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_sentencia);
		try {
			setState(45);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(40);
				declaracion();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(41);
				funcion();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(42);
				operacionTexto();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(43);
				concatenar();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(44);
				impresion();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeclaracionContext extends ParserRuleContext {
		public DeclaracionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaracion; }
	 
		public DeclaracionContext() { }
		public void copyFrom(DeclaracionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DeclSinValorContext extends DeclaracionContext {
		public TerminalNode VARIABLE() { return getToken(TextLangParser.VARIABLE, 0); }
		public NombreContext nombre() {
			return getRuleContext(NombreContext.class,0);
		}
		public TerminalNode PUNTOCOMA() { return getToken(TextLangParser.PUNTOCOMA, 0); }
		public DeclSinValorContext(DeclaracionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DeclConValorContext extends DeclaracionContext {
		public TerminalNode VARIABLE() { return getToken(TextLangParser.VARIABLE, 0); }
		public NombreContext nombre() {
			return getRuleContext(NombreContext.class,0);
		}
		public TerminalNode EQ() { return getToken(TextLangParser.EQ, 0); }
		public ExpresionContext expresion() {
			return getRuleContext(ExpresionContext.class,0);
		}
		public TerminalNode PUNTOCOMA() { return getToken(TextLangParser.PUNTOCOMA, 0); }
		public DeclConValorContext(DeclaracionContext ctx) { copyFrom(ctx); }
	}

	public final DeclaracionContext declaracion() throws RecognitionException {
		DeclaracionContext _localctx = new DeclaracionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_declaracion);
		try {
			setState(57);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				_localctx = new DeclConValorContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(47);
				match(VARIABLE);
				setState(48);
				nombre();
				setState(49);
				match(EQ);
				setState(50);
				expresion();
				setState(51);
				match(PUNTOCOMA);
				}
				break;
			case 2:
				_localctx = new DeclSinValorContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(53);
				match(VARIABLE);
				setState(54);
				nombre();
				setState(55);
				match(PUNTOCOMA);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpresionContext extends ParserRuleContext {
		public ExpresionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expresion; }
	 
		public ExpresionContext() { }
		public void copyFrom(ExpresionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ExprConcatContext extends ExpresionContext {
		public List<CadenaContext> cadena() {
			return getRuleContexts(CadenaContext.class);
		}
		public CadenaContext cadena(int i) {
			return getRuleContext(CadenaContext.class,i);
		}
		public TerminalNode SUMA() { return getToken(TextLangParser.SUMA, 0); }
		public ExprConcatContext(ExpresionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ExprValorContext extends ExpresionContext {
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public ExprValorContext(ExpresionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ExprTransformContext extends ExpresionContext {
		public TransformacionContext transformacion() {
			return getRuleContext(TransformacionContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(TextLangParser.LPAREN, 0); }
		public CadenaContext cadena() {
			return getRuleContext(CadenaContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(TextLangParser.RPAREN, 0); }
		public ExprTransformContext(ExpresionContext ctx) { copyFrom(ctx); }
	}

	public final ExpresionContext expresion() throws RecognitionException {
		ExpresionContext _localctx = new ExpresionContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_expresion);
		try {
			setState(69);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				_localctx = new ExprTransformContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(59);
				transformacion();
				setState(60);
				match(LPAREN);
				setState(61);
				cadena();
				setState(62);
				match(RPAREN);
				}
				break;
			case 2:
				_localctx = new ExprConcatContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(64);
				cadena();
				setState(65);
				match(SUMA);
				setState(66);
				cadena();
				}
				break;
			case 3:
				_localctx = new ExprValorContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(68);
				valor();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FuncionContext extends ParserRuleContext {
		public FuncionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funcion; }
	 
		public FuncionContext() { }
		public void copyFrom(FuncionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DefFuncionContext extends FuncionContext {
		public TerminalNode FUNCION() { return getToken(TextLangParser.FUNCION, 0); }
		public NombreContext nombre() {
			return getRuleContext(NombreContext.class,0);
		}
		public TerminalNode LLAVEIZQ() { return getToken(TextLangParser.LLAVEIZQ, 0); }
		public CuerpoFuncionContext cuerpoFuncion() {
			return getRuleContext(CuerpoFuncionContext.class,0);
		}
		public TerminalNode LLAVEDER() { return getToken(TextLangParser.LLAVEDER, 0); }
		public TerminalNode LPAREN() { return getToken(TextLangParser.LPAREN, 0); }
		public ArgumentosContext argumentos() {
			return getRuleContext(ArgumentosContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(TextLangParser.RPAREN, 0); }
		public DefFuncionContext(FuncionContext ctx) { copyFrom(ctx); }
	}

	public final FuncionContext funcion() throws RecognitionException {
		FuncionContext _localctx = new FuncionContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_funcion);
		int _la;
		try {
			_localctx = new DefFuncionContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(71);
			match(FUNCION);
			setState(72);
			nombre();
			setState(77);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LPAREN) {
				{
				setState(73);
				match(LPAREN);
				setState(74);
				argumentos();
				setState(75);
				match(RPAREN);
				}
			}

			setState(79);
			match(LLAVEIZQ);
			setState(80);
			cuerpoFuncion();
			setState(81);
			match(LLAVEDER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArgumentosContext extends ParserRuleContext {
		public TerminalNode IDENTIFICADOR() { return getToken(TextLangParser.IDENTIFICADOR, 0); }
		public TerminalNode COMA() { return getToken(TextLangParser.COMA, 0); }
		public ArgumentosContext argumentos() {
			return getRuleContext(ArgumentosContext.class,0);
		}
		public ArgumentosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argumentos; }
	}

	public final ArgumentosContext argumentos() throws RecognitionException {
		ArgumentosContext _localctx = new ArgumentosContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_argumentos);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(83);
			match(IDENTIFICADOR);
			setState(86);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMA) {
				{
				setState(84);
				match(COMA);
				setState(85);
				argumentos();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CuerpoFuncionContext extends ParserRuleContext {
		public List<InstruccionFuncionContext> instruccionFuncion() {
			return getRuleContexts(InstruccionFuncionContext.class);
		}
		public InstruccionFuncionContext instruccionFuncion(int i) {
			return getRuleContext(InstruccionFuncionContext.class,i);
		}
		public CuerpoFuncionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cuerpoFuncion; }
	}

	public final CuerpoFuncionContext cuerpoFuncion() throws RecognitionException {
		CuerpoFuncionContext _localctx = new CuerpoFuncionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_cuerpoFuncion);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(91);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1048600L) != 0)) {
				{
				{
				setState(88);
				instruccionFuncion();
				}
				}
				setState(93);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InstruccionFuncionContext extends ParserRuleContext {
		public OperacionTextoContext operacionTexto() {
			return getRuleContext(OperacionTextoContext.class,0);
		}
		public ConcatenarContext concatenar() {
			return getRuleContext(ConcatenarContext.class,0);
		}
		public ImpresionContext impresion() {
			return getRuleContext(ImpresionContext.class,0);
		}
		public RetornoContext retorno() {
			return getRuleContext(RetornoContext.class,0);
		}
		public InstruccionFuncionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instruccionFuncion; }
	}

	public final InstruccionFuncionContext instruccionFuncion() throws RecognitionException {
		InstruccionFuncionContext _localctx = new InstruccionFuncionContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_instruccionFuncion);
		try {
			setState(98);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(94);
				operacionTexto();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(95);
				concatenar();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(96);
				impresion();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(97);
				retorno();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OperacionTextoContext extends ParserRuleContext {
		public OperacionTextoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operacionTexto; }
	 
		public OperacionTextoContext() { }
		public void copyFrom(OperacionTextoContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class OpTextoContext extends OperacionTextoContext {
		public TerminalNode IDENTIFICADOR() { return getToken(TextLangParser.IDENTIFICADOR, 0); }
		public TerminalNode EQ() { return getToken(TextLangParser.EQ, 0); }
		public TransformacionContext transformacion() {
			return getRuleContext(TransformacionContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(TextLangParser.LPAREN, 0); }
		public CadenaContext cadena() {
			return getRuleContext(CadenaContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(TextLangParser.RPAREN, 0); }
		public TerminalNode PUNTOCOMA() { return getToken(TextLangParser.PUNTOCOMA, 0); }
		public OpTextoContext(OperacionTextoContext ctx) { copyFrom(ctx); }
	}

	public final OperacionTextoContext operacionTexto() throws RecognitionException {
		OperacionTextoContext _localctx = new OperacionTextoContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_operacionTexto);
		try {
			_localctx = new OpTextoContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(100);
			match(IDENTIFICADOR);
			setState(101);
			match(EQ);
			setState(102);
			transformacion();
			setState(103);
			match(LPAREN);
			setState(104);
			cadena();
			setState(105);
			match(RPAREN);
			setState(106);
			match(PUNTOCOMA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TransformacionContext extends ParserRuleContext {
		public TerminalNode MAYUSCULAS() { return getToken(TextLangParser.MAYUSCULAS, 0); }
		public TerminalNode MINUSCULAS() { return getToken(TextLangParser.MINUSCULAS, 0); }
		public TerminalNode LONGITUD() { return getToken(TextLangParser.LONGITUD, 0); }
		public TerminalNode INVERTIR() { return getToken(TextLangParser.INVERTIR, 0); }
		public TerminalNode REEMPLAZAR() { return getToken(TextLangParser.REEMPLAZAR, 0); }
		public TransformacionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_transformacion; }
	}

	public final TransformacionContext transformacion() throws RecognitionException {
		TransformacionContext _localctx = new TransformacionContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_transformacion);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(108);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 992L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConcatenarContext extends ParserRuleContext {
		public ConcatenarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_concatenar; }
	 
		public ConcatenarContext() { }
		public void copyFrom(ConcatenarContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class OpConcatenarContext extends ConcatenarContext {
		public TerminalNode IDENTIFICADOR() { return getToken(TextLangParser.IDENTIFICADOR, 0); }
		public TerminalNode EQ() { return getToken(TextLangParser.EQ, 0); }
		public List<CadenaContext> cadena() {
			return getRuleContexts(CadenaContext.class);
		}
		public CadenaContext cadena(int i) {
			return getRuleContext(CadenaContext.class,i);
		}
		public TerminalNode SUMA() { return getToken(TextLangParser.SUMA, 0); }
		public TerminalNode PUNTOCOMA() { return getToken(TextLangParser.PUNTOCOMA, 0); }
		public OpConcatenarContext(ConcatenarContext ctx) { copyFrom(ctx); }
	}

	public final ConcatenarContext concatenar() throws RecognitionException {
		ConcatenarContext _localctx = new ConcatenarContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_concatenar);
		try {
			_localctx = new OpConcatenarContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(110);
			match(IDENTIFICADOR);
			setState(111);
			match(EQ);
			setState(112);
			cadena();
			setState(113);
			match(SUMA);
			setState(114);
			cadena();
			setState(115);
			match(PUNTOCOMA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ImpresionContext extends ParserRuleContext {
		public ImpresionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_impresion; }
	 
		public ImpresionContext() { }
		public void copyFrom(ImpresionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class OpImprimirContext extends ImpresionContext {
		public TerminalNode IMPRIMIR() { return getToken(TextLangParser.IMPRIMIR, 0); }
		public TerminalNode LPAREN() { return getToken(TextLangParser.LPAREN, 0); }
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(TextLangParser.RPAREN, 0); }
		public TerminalNode PUNTOCOMA() { return getToken(TextLangParser.PUNTOCOMA, 0); }
		public OpImprimirContext(ImpresionContext ctx) { copyFrom(ctx); }
	}

	public final ImpresionContext impresion() throws RecognitionException {
		ImpresionContext _localctx = new ImpresionContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_impresion);
		try {
			_localctx = new OpImprimirContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(117);
			match(IMPRIMIR);
			setState(118);
			match(LPAREN);
			setState(119);
			valor();
			setState(120);
			match(RPAREN);
			setState(121);
			match(PUNTOCOMA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RetornoContext extends ParserRuleContext {
		public RetornoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_retorno; }
	 
		public RetornoContext() { }
		public void copyFrom(RetornoContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class OpRetornoContext extends RetornoContext {
		public TerminalNode DEVOLVER() { return getToken(TextLangParser.DEVOLVER, 0); }
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public TerminalNode PUNTOCOMA() { return getToken(TextLangParser.PUNTOCOMA, 0); }
		public OpRetornoContext(RetornoContext ctx) { copyFrom(ctx); }
	}

	public final RetornoContext retorno() throws RecognitionException {
		RetornoContext _localctx = new RetornoContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_retorno);
		try {
			_localctx = new OpRetornoContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(123);
			match(DEVOLVER);
			setState(124);
			valor();
			setState(125);
			match(PUNTOCOMA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ValorContext extends ParserRuleContext {
		public ValorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valor; }
	 
		public ValorContext() { }
		public void copyFrom(ValorContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ValorVariableContext extends ValorContext {
		public TerminalNode IDENTIFICADOR() { return getToken(TextLangParser.IDENTIFICADOR, 0); }
		public ValorVariableContext(ValorContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ValorNumeroContext extends ValorContext {
		public TerminalNode NUMERO() { return getToken(TextLangParser.NUMERO, 0); }
		public ValorNumeroContext(ValorContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ValorTextoContext extends ValorContext {
		public TerminalNode TEXTO() { return getToken(TextLangParser.TEXTO, 0); }
		public ValorTextoContext(ValorContext ctx) { copyFrom(ctx); }
	}

	public final ValorContext valor() throws RecognitionException {
		ValorContext _localctx = new ValorContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_valor);
		try {
			setState(130);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TEXTO:
				_localctx = new ValorTextoContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(127);
				match(TEXTO);
				}
				break;
			case NUMERO:
				_localctx = new ValorNumeroContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(128);
				match(NUMERO);
				}
				break;
			case IDENTIFICADOR:
				_localctx = new ValorVariableContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(129);
				match(IDENTIFICADOR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CadenaContext extends ParserRuleContext {
		public CadenaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cadena; }
	 
		public CadenaContext() { }
		public void copyFrom(CadenaContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CadenaTextoContext extends CadenaContext {
		public TerminalNode TEXTO() { return getToken(TextLangParser.TEXTO, 0); }
		public CadenaTextoContext(CadenaContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CadenaVariableContext extends CadenaContext {
		public TerminalNode IDENTIFICADOR() { return getToken(TextLangParser.IDENTIFICADOR, 0); }
		public CadenaVariableContext(CadenaContext ctx) { copyFrom(ctx); }
	}

	public final CadenaContext cadena() throws RecognitionException {
		CadenaContext _localctx = new CadenaContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_cadena);
		try {
			setState(134);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TEXTO:
				_localctx = new CadenaTextoContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(132);
				match(TEXTO);
				}
				break;
			case IDENTIFICADOR:
				_localctx = new CadenaVariableContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(133);
				match(IDENTIFICADOR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NombreContext extends ParserRuleContext {
		public TerminalNode IDENTIFICADOR() { return getToken(TextLangParser.IDENTIFICADOR, 0); }
		public NombreContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nombre; }
	}

	public final NombreContext nombre() throws RecognitionException {
		NombreContext _localctx = new NombreContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_nombre);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(136);
			match(IDENTIFICADOR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0016\u008b\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007"+
		"\u000f\u0001\u0000\u0005\u0000\"\b\u0000\n\u0000\f\u0000%\t\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0003\u0001.\b\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0003\u0002:\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0003\u0003F\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0003\u0004N\b\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0003"+
		"\u0005W\b\u0005\u0001\u0006\u0005\u0006Z\b\u0006\n\u0006\f\u0006]\t\u0006"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007c\b\u0007"+
		"\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0003\r\u0083\b\r\u0001"+
		"\u000e\u0001\u000e\u0003\u000e\u0087\b\u000e\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0000\u0000\u0010\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012"+
		"\u0014\u0016\u0018\u001a\u001c\u001e\u0000\u0001\u0001\u0000\u0005\t\u008b"+
		"\u0000#\u0001\u0000\u0000\u0000\u0002-\u0001\u0000\u0000\u0000\u00049"+
		"\u0001\u0000\u0000\u0000\u0006E\u0001\u0000\u0000\u0000\bG\u0001\u0000"+
		"\u0000\u0000\nS\u0001\u0000\u0000\u0000\f[\u0001\u0000\u0000\u0000\u000e"+
		"b\u0001\u0000\u0000\u0000\u0010d\u0001\u0000\u0000\u0000\u0012l\u0001"+
		"\u0000\u0000\u0000\u0014n\u0001\u0000\u0000\u0000\u0016u\u0001\u0000\u0000"+
		"\u0000\u0018{\u0001\u0000\u0000\u0000\u001a\u0082\u0001\u0000\u0000\u0000"+
		"\u001c\u0086\u0001\u0000\u0000\u0000\u001e\u0088\u0001\u0000\u0000\u0000"+
		" \"\u0003\u0002\u0001\u0000! \u0001\u0000\u0000\u0000\"%\u0001\u0000\u0000"+
		"\u0000#!\u0001\u0000\u0000\u0000#$\u0001\u0000\u0000\u0000$&\u0001\u0000"+
		"\u0000\u0000%#\u0001\u0000\u0000\u0000&\'\u0005\u0000\u0000\u0001\'\u0001"+
		"\u0001\u0000\u0000\u0000(.\u0003\u0004\u0002\u0000).\u0003\b\u0004\u0000"+
		"*.\u0003\u0010\b\u0000+.\u0003\u0014\n\u0000,.\u0003\u0016\u000b\u0000"+
		"-(\u0001\u0000\u0000\u0000-)\u0001\u0000\u0000\u0000-*\u0001\u0000\u0000"+
		"\u0000-+\u0001\u0000\u0000\u0000-,\u0001\u0000\u0000\u0000.\u0003\u0001"+
		"\u0000\u0000\u0000/0\u0005\u0001\u0000\u000001\u0003\u001e\u000f\u0000"+
		"12\u0005\n\u0000\u000023\u0003\u0006\u0003\u000034\u0005\u000b\u0000\u0000"+
		"4:\u0001\u0000\u0000\u000056\u0005\u0001\u0000\u000067\u0003\u001e\u000f"+
		"\u000078\u0005\u000b\u0000\u00008:\u0001\u0000\u0000\u00009/\u0001\u0000"+
		"\u0000\u000095\u0001\u0000\u0000\u0000:\u0005\u0001\u0000\u0000\u0000"+
		";<\u0003\u0012\t\u0000<=\u0005\r\u0000\u0000=>\u0003\u001c\u000e\u0000"+
		">?\u0005\u000e\u0000\u0000?F\u0001\u0000\u0000\u0000@A\u0003\u001c\u000e"+
		"\u0000AB\u0005\u0011\u0000\u0000BC\u0003\u001c\u000e\u0000CF\u0001\u0000"+
		"\u0000\u0000DF\u0003\u001a\r\u0000E;\u0001\u0000\u0000\u0000E@\u0001\u0000"+
		"\u0000\u0000ED\u0001\u0000\u0000\u0000F\u0007\u0001\u0000\u0000\u0000"+
		"GH\u0005\u0002\u0000\u0000HM\u0003\u001e\u000f\u0000IJ\u0005\r\u0000\u0000"+
		"JK\u0003\n\u0005\u0000KL\u0005\u000e\u0000\u0000LN\u0001\u0000\u0000\u0000"+
		"MI\u0001\u0000\u0000\u0000MN\u0001\u0000\u0000\u0000NO\u0001\u0000\u0000"+
		"\u0000OP\u0005\u000f\u0000\u0000PQ\u0003\f\u0006\u0000QR\u0005\u0010\u0000"+
		"\u0000R\t\u0001\u0000\u0000\u0000SV\u0005\u0014\u0000\u0000TU\u0005\f"+
		"\u0000\u0000UW\u0003\n\u0005\u0000VT\u0001\u0000\u0000\u0000VW\u0001\u0000"+
		"\u0000\u0000W\u000b\u0001\u0000\u0000\u0000XZ\u0003\u000e\u0007\u0000"+
		"YX\u0001\u0000\u0000\u0000Z]\u0001\u0000\u0000\u0000[Y\u0001\u0000\u0000"+
		"\u0000[\\\u0001\u0000\u0000\u0000\\\r\u0001\u0000\u0000\u0000][\u0001"+
		"\u0000\u0000\u0000^c\u0003\u0010\b\u0000_c\u0003\u0014\n\u0000`c\u0003"+
		"\u0016\u000b\u0000ac\u0003\u0018\f\u0000b^\u0001\u0000\u0000\u0000b_\u0001"+
		"\u0000\u0000\u0000b`\u0001\u0000\u0000\u0000ba\u0001\u0000\u0000\u0000"+
		"c\u000f\u0001\u0000\u0000\u0000de\u0005\u0014\u0000\u0000ef\u0005\n\u0000"+
		"\u0000fg\u0003\u0012\t\u0000gh\u0005\r\u0000\u0000hi\u0003\u001c\u000e"+
		"\u0000ij\u0005\u000e\u0000\u0000jk\u0005\u000b\u0000\u0000k\u0011\u0001"+
		"\u0000\u0000\u0000lm\u0007\u0000\u0000\u0000m\u0013\u0001\u0000\u0000"+
		"\u0000no\u0005\u0014\u0000\u0000op\u0005\n\u0000\u0000pq\u0003\u001c\u000e"+
		"\u0000qr\u0005\u0011\u0000\u0000rs\u0003\u001c\u000e\u0000st\u0005\u000b"+
		"\u0000\u0000t\u0015\u0001\u0000\u0000\u0000uv\u0005\u0003\u0000\u0000"+
		"vw\u0005\r\u0000\u0000wx\u0003\u001a\r\u0000xy\u0005\u000e\u0000\u0000"+
		"yz\u0005\u000b\u0000\u0000z\u0017\u0001\u0000\u0000\u0000{|\u0005\u0004"+
		"\u0000\u0000|}\u0003\u001a\r\u0000}~\u0005\u000b\u0000\u0000~\u0019\u0001"+
		"\u0000\u0000\u0000\u007f\u0083\u0005\u0012\u0000\u0000\u0080\u0083\u0005"+
		"\u0013\u0000\u0000\u0081\u0083\u0005\u0014\u0000\u0000\u0082\u007f\u0001"+
		"\u0000\u0000\u0000\u0082\u0080\u0001\u0000\u0000\u0000\u0082\u0081\u0001"+
		"\u0000\u0000\u0000\u0083\u001b\u0001\u0000\u0000\u0000\u0084\u0087\u0005"+
		"\u0012\u0000\u0000\u0085\u0087\u0005\u0014\u0000\u0000\u0086\u0084\u0001"+
		"\u0000\u0000\u0000\u0086\u0085\u0001\u0000\u0000\u0000\u0087\u001d\u0001"+
		"\u0000\u0000\u0000\u0088\u0089\u0005\u0014\u0000\u0000\u0089\u001f\u0001"+
		"\u0000\u0000\u0000\n#-9EMV[b\u0082\u0086";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}