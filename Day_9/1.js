let a;
a=10;
a=String(10)
document.write(a," ",typeof a)
let b=new String (Date())
console.log(b,typeof b);
let array=String((898060))
console.log(array.length,typeof array);

document.write("<br/>",Number("321.2"))
document.write("<br/>",Number(" "))
document.write("<br/>",Number(""))
document.write("<br/>",Number("RENIS"))
let ne=55.3;
document.write("<br>",ne.toExponential())
document.write("<br>",ne.toExponential(2))
document.write("<br>",ne.toExponential(3))

let namfix=3083.65
document.write("<br>",namfix.toFixed())
document.write("<br>",namfix.toFixed(2))
document.write("<br>",namfix.toFixed(1))

let nc=2532.35
document.write("<br>",nc.toPrecision())
document.write("<br",nc.toPrecision(1))
document.write("<br>",nc.toPrecision(3))


document.write("<br/><br/>")

document.write("<br/>",Number.MAX_VALUE)
document.write("<br/>",Number.MIN_VALUE)
document.write("<br/>",Number.NEGATIVE_INFINITY)
document.write("<br/>",Number.POSITIVE_INFINITY)

document.write("<br/><br/>")

document.write("<br/>",parseInt("-985"))
document.write("<br/>",parseInt("+99"))
document.write("<br/>",parseInt("998 91 5"))
document.write("<br/>",parseInt("RENIS"))

document.write("<br/><br/>")

document.write("<br/>",parseFloat("-985.5866"))
document.write("<br/>",parseFloat("+99.55"))
document.write("<br/>",parseFloat("988.5 96 5"))
document.write("<br/>",parseFloat("RENIS"))

document.write("<br/><br/>")

document.write("<br/>",new Date())
document.write("<br/>",new Date("5892-6-5"))
document.write("<br/>",new Date(5,8,9))
document.write("<br/>",new Date("june 5,2023 12:59:06"))