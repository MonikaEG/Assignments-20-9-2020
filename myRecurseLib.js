//JS.Recursion.0 Find fakultetstal / factorials
var x = Number(prompt('Skriv et tal for at finde et fakultetstal.'));


function fact(x) { 

  if (x === 0) {
    return 1;
 }
  return x * fact(x-1);
}

console.log(fact(x));
document.write('Fakultetstallet er: <br>')
document.write(fact(x));

//JS.Recursion.1 Find Fibonacci-tal
var n = Number(prompt('Beregn Fibonacci-tallene af nummeret, du indtaster.'));

var fibo = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibo(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

console.log(fibo(n));
document.write('<br><br> Fibonacci-tallene er: <br>')
document.write(fibo(n));

//JS.Recursion.2 beregn eksempelvis 2^7
var r = 2
var e = 7

function pow(r,e) { //r er base tallet, e er det opløftede tal.
    return Math.pow(r,e);
}
console.log(Math.pow(r,e));
document.write('<br><br> Resultat af JS.Recursion.2: <br>')
document.write(Math.pow(r,e));