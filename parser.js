const nearley = require("nearley");
const grammar = require("./grammar.js");


// Create a Parser object from our grammar.
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

parser.feed("x:=10;");

console.log(JSON.stringify(reduceNesting(parser.results[0]),null,2));



function reduceNesting(arr){
  if(!Array.isArray(arr)){
    return arr;
  }
  if(arr.length==1&&arr[0].length==1){
    return reduceNesting(arr[0].map(reduceNesting));
  }else{
    return arr.map(reduceNesting);
  }
}
