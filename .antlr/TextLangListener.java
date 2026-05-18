// Generated from c:/Users/HP/Documents/UNIVERSIDAD/CURSADO/2. SEGUNDO AÑO/1. PRIMER SEMESTRE/Sintaxis y Semántica de los Lenguajes/ANALIZADOR/53391/25914_11/TextLang.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link TextLangParser}.
 */
public interface TextLangListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link TextLangParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(TextLangParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link TextLangParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(TextLangParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link TextLangParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void enterSentencia(TextLangParser.SentenciaContext ctx);
	/**
	 * Exit a parse tree produced by {@link TextLangParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void exitSentencia(TextLangParser.SentenciaContext ctx);
	/**
	 * Enter a parse tree produced by the {@code declConValor}
	 * labeled alternative in {@link TextLangParser#declaracion}.
	 * @param ctx the parse tree
	 */
	void enterDeclConValor(TextLangParser.DeclConValorContext ctx);
	/**
	 * Exit a parse tree produced by the {@code declConValor}
	 * labeled alternative in {@link TextLangParser#declaracion}.
	 * @param ctx the parse tree
	 */
	void exitDeclConValor(TextLangParser.DeclConValorContext ctx);
	/**
	 * Enter a parse tree produced by the {@code declSinValor}
	 * labeled alternative in {@link TextLangParser#declaracion}.
	 * @param ctx the parse tree
	 */
	void enterDeclSinValor(TextLangParser.DeclSinValorContext ctx);
	/**
	 * Exit a parse tree produced by the {@code declSinValor}
	 * labeled alternative in {@link TextLangParser#declaracion}.
	 * @param ctx the parse tree
	 */
	void exitDeclSinValor(TextLangParser.DeclSinValorContext ctx);
	/**
	 * Enter a parse tree produced by the {@code exprTransform}
	 * labeled alternative in {@link TextLangParser#expresion}.
	 * @param ctx the parse tree
	 */
	void enterExprTransform(TextLangParser.ExprTransformContext ctx);
	/**
	 * Exit a parse tree produced by the {@code exprTransform}
	 * labeled alternative in {@link TextLangParser#expresion}.
	 * @param ctx the parse tree
	 */
	void exitExprTransform(TextLangParser.ExprTransformContext ctx);
	/**
	 * Enter a parse tree produced by the {@code exprConcat}
	 * labeled alternative in {@link TextLangParser#expresion}.
	 * @param ctx the parse tree
	 */
	void enterExprConcat(TextLangParser.ExprConcatContext ctx);
	/**
	 * Exit a parse tree produced by the {@code exprConcat}
	 * labeled alternative in {@link TextLangParser#expresion}.
	 * @param ctx the parse tree
	 */
	void exitExprConcat(TextLangParser.ExprConcatContext ctx);
	/**
	 * Enter a parse tree produced by the {@code exprValor}
	 * labeled alternative in {@link TextLangParser#expresion}.
	 * @param ctx the parse tree
	 */
	void enterExprValor(TextLangParser.ExprValorContext ctx);
	/**
	 * Exit a parse tree produced by the {@code exprValor}
	 * labeled alternative in {@link TextLangParser#expresion}.
	 * @param ctx the parse tree
	 */
	void exitExprValor(TextLangParser.ExprValorContext ctx);
	/**
	 * Enter a parse tree produced by the {@code defFuncion}
	 * labeled alternative in {@link TextLangParser#funcion}.
	 * @param ctx the parse tree
	 */
	void enterDefFuncion(TextLangParser.DefFuncionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code defFuncion}
	 * labeled alternative in {@link TextLangParser#funcion}.
	 * @param ctx the parse tree
	 */
	void exitDefFuncion(TextLangParser.DefFuncionContext ctx);
	/**
	 * Enter a parse tree produced by {@link TextLangParser#argumentos}.
	 * @param ctx the parse tree
	 */
	void enterArgumentos(TextLangParser.ArgumentosContext ctx);
	/**
	 * Exit a parse tree produced by {@link TextLangParser#argumentos}.
	 * @param ctx the parse tree
	 */
	void exitArgumentos(TextLangParser.ArgumentosContext ctx);
	/**
	 * Enter a parse tree produced by {@link TextLangParser#cuerpoFuncion}.
	 * @param ctx the parse tree
	 */
	void enterCuerpoFuncion(TextLangParser.CuerpoFuncionContext ctx);
	/**
	 * Exit a parse tree produced by {@link TextLangParser#cuerpoFuncion}.
	 * @param ctx the parse tree
	 */
	void exitCuerpoFuncion(TextLangParser.CuerpoFuncionContext ctx);
	/**
	 * Enter a parse tree produced by {@link TextLangParser#instruccionFuncion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccionFuncion(TextLangParser.InstruccionFuncionContext ctx);
	/**
	 * Exit a parse tree produced by {@link TextLangParser#instruccionFuncion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccionFuncion(TextLangParser.InstruccionFuncionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code opTexto}
	 * labeled alternative in {@link TextLangParser#operacionTexto}.
	 * @param ctx the parse tree
	 */
	void enterOpTexto(TextLangParser.OpTextoContext ctx);
	/**
	 * Exit a parse tree produced by the {@code opTexto}
	 * labeled alternative in {@link TextLangParser#operacionTexto}.
	 * @param ctx the parse tree
	 */
	void exitOpTexto(TextLangParser.OpTextoContext ctx);
	/**
	 * Enter a parse tree produced by {@link TextLangParser#transformacion}.
	 * @param ctx the parse tree
	 */
	void enterTransformacion(TextLangParser.TransformacionContext ctx);
	/**
	 * Exit a parse tree produced by {@link TextLangParser#transformacion}.
	 * @param ctx the parse tree
	 */
	void exitTransformacion(TextLangParser.TransformacionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code opConcatenar}
	 * labeled alternative in {@link TextLangParser#concatenar}.
	 * @param ctx the parse tree
	 */
	void enterOpConcatenar(TextLangParser.OpConcatenarContext ctx);
	/**
	 * Exit a parse tree produced by the {@code opConcatenar}
	 * labeled alternative in {@link TextLangParser#concatenar}.
	 * @param ctx the parse tree
	 */
	void exitOpConcatenar(TextLangParser.OpConcatenarContext ctx);
	/**
	 * Enter a parse tree produced by the {@code opImprimir}
	 * labeled alternative in {@link TextLangParser#impresion}.
	 * @param ctx the parse tree
	 */
	void enterOpImprimir(TextLangParser.OpImprimirContext ctx);
	/**
	 * Exit a parse tree produced by the {@code opImprimir}
	 * labeled alternative in {@link TextLangParser#impresion}.
	 * @param ctx the parse tree
	 */
	void exitOpImprimir(TextLangParser.OpImprimirContext ctx);
	/**
	 * Enter a parse tree produced by the {@code opRetorno}
	 * labeled alternative in {@link TextLangParser#retorno}.
	 * @param ctx the parse tree
	 */
	void enterOpRetorno(TextLangParser.OpRetornoContext ctx);
	/**
	 * Exit a parse tree produced by the {@code opRetorno}
	 * labeled alternative in {@link TextLangParser#retorno}.
	 * @param ctx the parse tree
	 */
	void exitOpRetorno(TextLangParser.OpRetornoContext ctx);
	/**
	 * Enter a parse tree produced by the {@code valorTexto}
	 * labeled alternative in {@link TextLangParser#valor}.
	 * @param ctx the parse tree
	 */
	void enterValorTexto(TextLangParser.ValorTextoContext ctx);
	/**
	 * Exit a parse tree produced by the {@code valorTexto}
	 * labeled alternative in {@link TextLangParser#valor}.
	 * @param ctx the parse tree
	 */
	void exitValorTexto(TextLangParser.ValorTextoContext ctx);
	/**
	 * Enter a parse tree produced by the {@code valorNumero}
	 * labeled alternative in {@link TextLangParser#valor}.
	 * @param ctx the parse tree
	 */
	void enterValorNumero(TextLangParser.ValorNumeroContext ctx);
	/**
	 * Exit a parse tree produced by the {@code valorNumero}
	 * labeled alternative in {@link TextLangParser#valor}.
	 * @param ctx the parse tree
	 */
	void exitValorNumero(TextLangParser.ValorNumeroContext ctx);
	/**
	 * Enter a parse tree produced by the {@code valorVariable}
	 * labeled alternative in {@link TextLangParser#valor}.
	 * @param ctx the parse tree
	 */
	void enterValorVariable(TextLangParser.ValorVariableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code valorVariable}
	 * labeled alternative in {@link TextLangParser#valor}.
	 * @param ctx the parse tree
	 */
	void exitValorVariable(TextLangParser.ValorVariableContext ctx);
	/**
	 * Enter a parse tree produced by the {@code cadenaTexto}
	 * labeled alternative in {@link TextLangParser#cadena}.
	 * @param ctx the parse tree
	 */
	void enterCadenaTexto(TextLangParser.CadenaTextoContext ctx);
	/**
	 * Exit a parse tree produced by the {@code cadenaTexto}
	 * labeled alternative in {@link TextLangParser#cadena}.
	 * @param ctx the parse tree
	 */
	void exitCadenaTexto(TextLangParser.CadenaTextoContext ctx);
	/**
	 * Enter a parse tree produced by the {@code cadenaVariable}
	 * labeled alternative in {@link TextLangParser#cadena}.
	 * @param ctx the parse tree
	 */
	void enterCadenaVariable(TextLangParser.CadenaVariableContext ctx);
	/**
	 * Exit a parse tree produced by the {@code cadenaVariable}
	 * labeled alternative in {@link TextLangParser#cadena}.
	 * @param ctx the parse tree
	 */
	void exitCadenaVariable(TextLangParser.CadenaVariableContext ctx);
	/**
	 * Enter a parse tree produced by {@link TextLangParser#nombre}.
	 * @param ctx the parse tree
	 */
	void enterNombre(TextLangParser.NombreContext ctx);
	/**
	 * Exit a parse tree produced by {@link TextLangParser#nombre}.
	 * @param ctx the parse tree
	 */
	void exitNombre(TextLangParser.NombreContext ctx);
}