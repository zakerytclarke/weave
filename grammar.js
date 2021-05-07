// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "prgm$ebnf$1", "symbols": []},
    {"name": "prgm$ebnf$1", "symbols": ["prgm$ebnf$1", "statement"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "prgm", "symbols": ["prgm$ebnf$1"]},
    {"name": "statement", "symbols": ["ifStatement"], "postprocess": (ls) => ls[0]},
    {"name": "statement", "symbols": ["lineStatement"], "postprocess": (ls) => ls[0]},
    {"name": "ifStatement$string$1", "symbols": [{"literal":"i"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ifStatement", "symbols": ["ifStatement$string$1", "whiteSpace", {"literal":"("}, "whiteSpace", "expression", {"literal":")"}, "body"], "postprocess": (ls) => ["if",ls[4][0],ls[6]]},
    {"name": "body$ebnf$1", "symbols": []},
    {"name": "body$ebnf$1", "symbols": ["body$ebnf$1", "lineStatement"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "body", "symbols": [{"literal":"{"}, "whiteSpace", "body$ebnf$1", {"literal":"}"}, "whiteSpace"], "postprocess": (ls) => ls[2]},
    {"name": "lineStatement", "symbols": ["variableAssignment", "whiteSpace", {"literal":";"}, "whiteSpace"], "postprocess": (ls) => ls[0]},
    {"name": "lineStatement", "symbols": ["typeAssignment", "whiteSpace", {"literal":";"}, "whiteSpace"], "postprocess": (ls) => ls[0]},
    {"name": "lineStatement$string$1", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "lineStatement", "symbols": ["lineStatement$string$1", "whiteSpace", "expression", "whiteSpace", {"literal":";"}, "whiteSpace"], "postprocess": (ls) => ["return",ls[2][0]]},
    {"name": "lineStatement$string$2", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"s"}, {"literal":"u"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "lineStatement", "symbols": ["lineStatement$string$2", "whiteSpace", "expression", "whiteSpace", {"literal":";"}, "whiteSpace"], "postprocess": (ls) => ["ensure",ls[2][0]]},
    {"name": "lineStatement", "symbols": ["ifStatement"], "postprocess": (ls) => ls[0]},
    {"name": "typeAssignment$string$1", "symbols": [{"literal":":"}, {"literal":":"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "typeAssignment", "symbols": ["expression", "whiteSpace", "typeAssignment$string$1", "whiteSpace", "expression"], "postprocess": (ls) => [["::=",ls[0][0],ls[4][0]]]},
    {"name": "variableAssignment$string$1", "symbols": [{"literal":":"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "variableAssignment", "symbols": ["expression", "whiteSpace", "variableAssignment$string$1", "whiteSpace", "expression"], "postprocess": (ls) => [[":=",ls[0][0],ls[4][0]]]},
    {"name": "expression", "symbols": ["greaterThan"], "postprocess": (ls) => ls[0]},
    {"name": "greaterThan", "symbols": ["lessThan", "whiteSpace", {"literal":">"}, "whiteSpace", "greaterThan"], "postprocess": (ls) => [[">",ls[0][0],ls[4][0]]]},
    {"name": "greaterThan", "symbols": ["lessThan"], "postprocess": (ls) => ls[0]},
    {"name": "lessThan", "symbols": ["greaterThanEqual", "whiteSpace", {"literal":"<"}, "whiteSpace", "lessThan"], "postprocess": (ls) => [["<",ls[0][0],ls[4][0]]]},
    {"name": "lessThan", "symbols": ["greaterThanEqual"], "postprocess": (ls) => ls[0]},
    {"name": "greaterThanEqual$string$1", "symbols": [{"literal":">"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "greaterThanEqual", "symbols": ["lessThanEqual", "whiteSpace", "greaterThanEqual$string$1", "whiteSpace", "greaterThanEqual"], "postprocess": (ls) => [[">=",ls[0][0],ls[4][0]]]},
    {"name": "greaterThanEqual", "symbols": ["lessThanEqual"], "postprocess": (ls) => ls[0]},
    {"name": "lessThanEqual$string$1", "symbols": [{"literal":"<"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "lessThanEqual", "symbols": ["equals", "whiteSpace", "lessThanEqual$string$1", "whiteSpace", "notEquals"], "postprocess": (ls) => [["<=",ls[0][0],ls[4][0]]]},
    {"name": "lessThanEqual", "symbols": ["notEquals"], "postprocess": (ls) => ls[0]},
    {"name": "notEquals$string$1", "symbols": [{"literal":"!"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "notEquals", "symbols": ["equals", "whiteSpace", "notEquals$string$1", "whiteSpace", "notEquals"], "postprocess": (ls) => [["!=",ls[0][0],ls[4][0]]]},
    {"name": "notEquals", "symbols": ["equals"], "postprocess": (ls) => ls[0]},
    {"name": "equals$string$1", "symbols": [{"literal":"="}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "equals", "symbols": ["addition", "whiteSpace", "equals$string$1", "whiteSpace", "equals"], "postprocess": (ls) => [["==",ls[0][0],ls[4][0]]]},
    {"name": "equals", "symbols": ["addition"], "postprocess": (ls) => ls[0]},
    {"name": "addition", "symbols": ["subtraction", "whiteSpace", {"literal":"+"}, "whiteSpace", "addition"], "postprocess": (ls) => [["+",ls[0][0],ls[4][0]]]},
    {"name": "addition", "symbols": ["subtraction"], "postprocess": (ls) => ls[0]},
    {"name": "subtraction", "symbols": ["multiplication", "whiteSpace", {"literal":"-"}, "whiteSpace", "subtraction"], "postprocess": (ls) => [["-",ls[0][0],ls[4][0]]]},
    {"name": "subtraction", "symbols": ["multiplication"], "postprocess": (ls) => ls[0]},
    {"name": "multiplication", "symbols": ["division", "whiteSpace", {"literal":"*"}, "whiteSpace", "multiplication"], "postprocess": (ls) => [["*",ls[0][0],ls[4][0]]]},
    {"name": "multiplication", "symbols": ["division"], "postprocess": (ls) => ls[0]},
    {"name": "division", "symbols": ["exponentiation", "whiteSpace", {"literal":"/"}, "whiteSpace", "division"], "postprocess": (ls) => [["/",ls[0][0],ls[4][0]]]},
    {"name": "division", "symbols": ["exponentiation"], "postprocess": (ls) => ls[0]},
    {"name": "exponentiation", "symbols": ["parens", "whiteSpace", {"literal":"^"}, "whiteSpace", "exponentiation"], "postprocess": (ls) => [["^",ls[0][0],ls[4][0]]]},
    {"name": "exponentiation", "symbols": ["parens"], "postprocess": (ls) => ls[0]},
    {"name": "parens", "symbols": [{"literal":"("}, "whiteSpace", "functionCall", "whiteSpace", {"literal":")"}], "postprocess": (ls) => ls[1]},
    {"name": "parens", "symbols": ["functionCall"]},
    {"name": "functionCall", "symbols": ["variable", "whiteSpace", {"literal":"("}, "whiteSpace", "expression", "whiteSpace", {"literal":")"}], "postprocess": (ls) => [ls[0],ls[4]]},
    {"name": "functionCall", "symbols": ["const"], "postprocess": (ls) => ls[0]},
    {"name": "const", "symbols": ["number"], "postprocess": (ls) => ls[0]},
    {"name": "const", "symbols": ["stringLiteral"], "postprocess": (ls) => ls[0]},
    {"name": "const", "symbols": ["variable"], "postprocess": (ls) => ls[0]},
    {"name": "variable$subexpression$1$ebnf$1", "symbols": []},
    {"name": "variable$subexpression$1$ebnf$1$subexpression$1", "symbols": [/[a-z]/]},
    {"name": "variable$subexpression$1$ebnf$1$subexpression$1", "symbols": [/[A-Z]/]},
    {"name": "variable$subexpression$1$ebnf$1$subexpression$1", "symbols": [/[0-9]/]},
    {"name": "variable$subexpression$1$ebnf$1", "symbols": ["variable$subexpression$1$ebnf$1", "variable$subexpression$1$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "variable$subexpression$1", "symbols": ["variable$subexpression$1$ebnf$1"]},
    {"name": "variable", "symbols": ["variable$subexpression$1"], "postprocess": (ls) => ls.map(x=>x.map(y=>y.join("")).join("")).join("")},
    {"name": "stringLiteral", "symbols": [{"literal":"\""}, "string", {"literal":"\""}], "postprocess": (ls) => ls[1]},
    {"name": "stringLiteral", "symbols": [{"literal":"'"}, "string", {"literal":"'"}], "postprocess": (ls) => ls[1]},
    {"name": "string$ebnf$1", "symbols": []},
    {"name": "string$ebnf$1$subexpression$1", "symbols": [/[a-z]/]},
    {"name": "string$ebnf$1$subexpression$1", "symbols": [/[A-Z]/]},
    {"name": "string$ebnf$1$subexpression$1", "symbols": [/[0-9]/]},
    {"name": "string$ebnf$1", "symbols": ["string$ebnf$1", "string$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "string", "symbols": ["string$ebnf$1"], "postprocess": (ls) => ls.map(x=>x.join("")).join("")},
    {"name": "number$ebnf$1", "symbols": []},
    {"name": "number$ebnf$1", "symbols": ["number$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "number$ebnf$2", "symbols": []},
    {"name": "number$ebnf$2", "symbols": ["number$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "number", "symbols": ["number$ebnf$1", {"literal":"."}, "number$ebnf$2"], "postprocess": (ls) => ls[0].join("")+"."+ls[2].join("")},
    {"name": "number$ebnf$3", "symbols": []},
    {"name": "number$ebnf$3", "symbols": ["number$ebnf$3", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "number", "symbols": ["number$ebnf$3"], "postprocess": (ls) => ls.map(x=>x.join("")).join("")},
    {"name": "whiteSpace$ebnf$1", "symbols": []},
    {"name": "whiteSpace$ebnf$1$subexpression$1", "symbols": [{"literal":" "}]},
    {"name": "whiteSpace$ebnf$1$subexpression$1", "symbols": [{"literal":"\n"}]},
    {"name": "whiteSpace$ebnf$1", "symbols": ["whiteSpace$ebnf$1", "whiteSpace$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "whiteSpace", "symbols": ["whiteSpace$ebnf$1"]}
]
  , ParserStart: "prgm"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
