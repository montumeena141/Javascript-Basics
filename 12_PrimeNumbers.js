//if a number is prime or not
var prime=11;
var isPrime=true;
for (var i = 2; i < Math.sqrt(prime); i++) { //i<prime-1;
    
    if (prime%i==0) {
        isPrime=false;
        //console.log("Number is not prime");
    }
}
if(isPrime==true){
    console.log(prime,"Number is prime");
}