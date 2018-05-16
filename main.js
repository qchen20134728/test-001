 const fibonacci = require('./lib/fibonacci')
 for(var i=1;i<20;i++){
    console.log(fibonacci(i));
}
 
//润年
function nian(year){
    if(year%4==0 && year%100!=0 || year%400==0){
        return true;
    }else{
        return false;
    }
}

console.log(nian(2001));


//fibonacci
/*function fibonacci(n){
    if(n==0 || n==1){
        return n;
    }
    return fibonacci(n-1)+fibonacci(n-2);
}
for(var i=1;i<20;i++){
    console.log(fibonacci(i));
}*/