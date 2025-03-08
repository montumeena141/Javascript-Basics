//Truthy and falsy values :- 
//falsy - 0, false, "",

// **Truthy** - All values except falsy, e.g., `true`, `"hello"`, `42`, `[]`, `{}`.  

// **Falsy** - Values that evaluate to `false`: `false`, `0`, `""`, `null`, `undefined`, `NaN`.

if (0) {
    console.log("This will NOT execute");
} else {
    console.log("Falsy value detected!");
}


if ("Hello") {
    console.log("Truthy value detected!");
}



let a=5;
let b=6;
var name="";
if(b>a){
    console.log(1);
    console.log("AccioJob");
}