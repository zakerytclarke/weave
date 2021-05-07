prgm -> statement:*

statement -> ifStatement {% (ls) => ls[0] %} | lineStatement {% (ls) => ls[0] %}


ifStatement -> "if" whiteSpace "(" whiteSpace expression ")" body {% (ls) => ["if",ls[4][0],ls[6]] %}


body -> "{" whiteSpace lineStatement:* "}" whiteSpace {% (ls) => ls[2] %}

lineStatement -> variableAssignment whiteSpace ";" whiteSpace {% (ls) => ls[0] %} | typeAssignment whiteSpace ";" whiteSpace {% (ls) => ls[0] %} | "return" whiteSpace expression whiteSpace ";" whiteSpace {% (ls) => ["return",ls[2][0]] %} | "ensure" whiteSpace expression whiteSpace ";" whiteSpace {% (ls) => ["ensure",ls[2][0]] %} | ifStatement {% (ls) => ls[0] %}


typeAssignment -> expression whiteSpace "::=" whiteSpace expression {% (ls) => [["::=",ls[0][0],ls[4][0]]] %}


variableAssignment -> expression whiteSpace ":=" whiteSpace expression {% (ls) => [[":=",ls[0][0],ls[4][0]]] %}



expression -> greaterThan {% (ls) => ls[0]%}

greaterThan -> lessThan whiteSpace ">" whiteSpace greaterThan {% (ls) => [[">",ls[0][0],ls[4][0]]] %} | lessThan {% (ls) => ls[0]%}
lessThan -> greaterThanEqual whiteSpace "<" whiteSpace lessThan {% (ls) => [["<",ls[0][0],ls[4][0]]] %} | greaterThanEqual {% (ls) => ls[0]%}
greaterThanEqual -> lessThanEqual whiteSpace ">=" whiteSpace greaterThanEqual {% (ls) => [[">=",ls[0][0],ls[4][0]]] %} | lessThanEqual {% (ls) => ls[0]%}
lessThanEqual -> equals whiteSpace "<=" whiteSpace notEquals {% (ls) => [["<=",ls[0][0],ls[4][0]]] %} | notEquals {% (ls) => ls[0]%}
notEquals -> equals whiteSpace "!=" whiteSpace notEquals {% (ls) => [["!=",ls[0][0],ls[4][0]]] %} | equals {% (ls) => ls[0]%}
equals -> addition whiteSpace "==" whiteSpace equals {% (ls) => [["==",ls[0][0],ls[4][0]]] %} | addition {% (ls) => ls[0]%}

addition -> subtraction whiteSpace "+" whiteSpace addition {% (ls) => [["+",ls[0][0],ls[4][0]]] %} | subtraction {% (ls) => ls[0]%}
subtraction -> multiplication whiteSpace "-" whiteSpace subtraction {% (ls) => [["-",ls[0][0],ls[4][0]]] %} | multiplication {% (ls) => ls[0]%}
multiplication -> division whiteSpace "*" whiteSpace multiplication {% (ls) => [["*",ls[0][0],ls[4][0]]] %} | division {% (ls) => ls[0]%}
division -> exponentiation whiteSpace "/" whiteSpace division {% (ls) => [["/",ls[0][0],ls[4][0]]] %} | exponentiation {% (ls) => ls[0]%}
exponentiation -> parens whiteSpace "^" whiteSpace exponentiation {% (ls) => [["^",ls[0][0],ls[4][0]]] %} | parens {% (ls) => ls[0]%}
parens -> "(" whiteSpace functionCall whiteSpace ")" {% (ls) => ls[1]%} | functionCall

functionCall -> variable whiteSpace "(" whiteSpace expression whiteSpace ")" {% (ls) => [ls[0],ls[4]]%} | const {% (ls) => ls[0]%}


const -> number {% (ls) => ls[0]%} | stringLiteral {% (ls) => ls[0]%}| variable{% (ls) => ls[0]%}




variable -> (([a-z] | [A-Z] | [0-9]):*) {% (ls) => ls.map(x=>x.map(y=>y.join("")).join("")).join("") %}

stringLiteral -> "\"" string "\"" {% (ls) => ls[1] %} | "'" string "'" {% (ls) => ls[1] %}

string -> ([a-z] | [A-Z] | [0-9]):* {% (ls) => ls.map(x=>x.join("")).join("") %}


number -> [0-9]:* "." [0-9]:* {% (ls) => ls[0].join("")+"."+ls[2].join("") %}
		| [0-9]:* {% (ls) => ls.map(x=>x.join("")).join("") %}


whiteSpace -> (" "|"\n"):*
