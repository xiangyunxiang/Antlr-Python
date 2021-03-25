const antlr4 = require("antlr4");
const PythonLexer = require("./grammar/Python3Lexer.js");
const PythonParser = require("./grammar/Python3Parser.js");
const Visitor = require("./Visitor.js");
const Visitor2 = require("./Visitor2.js");

fs = require("fs");
var input = fs.readFileSync("./input.py", "utf8") + "\n";

const chars = new antlr4.InputStream(input);
const lexer = new PythonLexer(chars);

lexer.strictMode = false; // do not use js strictMode

const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new PythonParser(tokens);

parser.buildParseTrees = true;
var tree = parser.single_input();

var visitor = new Visitor();
console.log("Visitor:");
var result = visitor.visit(tree);
console.log("Final Result:");
console.log(result);

/*
var visitor = new Visitor2();
console.log("Visitor:");
var result = visitor.visit(tree);
console.log("Final Result:");
console.log(result);*/