// x:=10;
// x<y;
// print(y);

var sampleProgram=
  [
    "/A",
    ["/E",
      "x",
      ["/C",
        ["<","x","y"],
        ["/C",
          [">","y",100],
          ["+","z","y"]
        ],
      ],
    ],
    10
];


console.log(evaluateandConstrain(sampleProgram));

/**
 * Evaluate and Constrain Free Variables
 */
function evaluateandConstrain(prgm){
  var constraints=[];

  var evaled=evaluate(prgm);
  return satisfyConstraints(evaled,constraints);

  /**
   * Evalaute Program
   */
  function evaluate(prgm){
    if(!Array.isArray(prgm)){//Base Case
      return prgm;
    }
    //Reduce Operations
    var operation=prgm[0];

    if(operation=="/A"){
      if(prgm[1][0]=="/E"){
        return evaluate(substitute(prgm[1][1],prgm[2],prgm[1][2]));
      }
    }else
    if(operation=="/C"){
      constraints.push(prgm[1]);
      return evaluate(prgm[2],[...prgm[1]])
    }else{//Native Ops
      return evaluateNativeOps(prgm)
    }
  }


  /**
   * Evaluate Native Operations
   */
  function evaluateNativeOps(prgm){
    var operation=prgm[0];
    var arg1=prgm[1];
    var arg2=prgm[2];


    if(!isNaN(arg1)&&!isNaN(arg2)){
      return applyOp(operation,arg1,arg2);
    }
    //Needs Further Evaluation
    if(Array.isArray(arg1)){
      arg1=evaluate(arg1);
    }else
    if(Array.isArray(arg2)){
      arg2=evaluate(arg2);
    }else{//Looks like we can't evaluate
      return [operation,arg1,arg2];
    }


    return evaluate([operation,arg1,arg2])



    function applyOp(op,a1,a2){
      switch(op){
        case "+":
          return a1+a2;
        break;
        case "-":
          return a1-a2;
        break;
        case "*":
          return a1*a2;
        break;
        case "/":
          return a1/a2;
        break;
        case "==":
          return a1==a2;
        break;
        case "!=":
          return a1!=a2;
        break;
        case ">":
          return a1>a2;
        break;
        case "<":
          return a1<a2;
        break;
        case ">=":
          return a1>=a2;
        break;
        case "<=":
          return a1<=a2;
        break;
      }
    }
  }

  /**
   * Pick values for variables that satisfy the constraints
   */
  function satisfyConstraints(prgm,constraints){
    var freeVariables={};
    getFreeVariables(prgm)



    //Find valid values for variables
    while(true){
      //Set values of free variables
      for(var key in freeVariables){
        freeVariables[key]=Math.floor(Math.random()*Number.MAX_SAFE_INTEGER)
      }

      var tempConstraints=JSON.parse(JSON.stringify(constraints));
      //Substitute all variables into constraints
      for(var key in freeVariables){
        tempConstraints=tempConstraints.map(x=>substitute(key,freeVariables[key],x));
      }
      //Evaluate Constraints
      tempConstraints=tempConstraints.map(x=>evaluate(x))
      var satisfiedConstraints=tempConstraints.every(x=>x);
      //Satisified Constraints
      if(satisfiedConstraints){
        break;
      }

    }

    //Evaluate with constrained variables
    for(var key in freeVariables){
      prgm=substitute(key,freeVariables[key],prgm);
    }
    console.log(freeVariables)
    return evaluate(prgm);

    /**
     * Get map of free variables
     */
     function getFreeVariables(arr){
       if(!Array.isArray(arr)){//Base Case
         if(isNaN(arr)){
           freeVariables[arr]=0;
         }
         return;
       }
       getFreeVariables(arr[1]);
       getFreeVariables(arr[2]);
     }
  }



  /**
   * Performs Substitution of a variable
   */
  function substitute(variable,value,arr){
    if(!Array.isArray(arr)){//Base Case
      if(variable==arr){
        return value;
      }else{
        return arr;
      }
    }
    return arr.map(x=>substitute(variable,value,x));
  }

}
