let a = '34';
let b = '13';

function solution(a, b){
    let paramOne = Number(a);
    let paramTwo = Number(b);
    
    if(!paramOne || !paramTwo){
        let strOutput = forString()
        return strOutput

    }else if(paramOne || paramOne){
        let numberOutput = forNumbers()
        return numberOutput
    }
    
}

function forNumbers(a , b){

    if(a > b){
       let paramOne = a.toString() 
       let paramTwo = b.toString() 
       
       return paramTwo + paramOne + paramTwo

    }else if(b > a){
        return paramOne + paramTwo + paramOne        
    }
}


function forString(a , b){

    let lenParamOne = a.length;
    let lenParamTwo = b.length;

    if(lenParamOne > lenParamTwo){
        return b + a + b
    }else {
        return a + b + a
    }
}



console.log(solution(a , b))













































// let output ;
// let shorter , longest;
// let argA = Number(a);
// let argB = Number(b);

// if(argA === NaN){
//     console.log('error')

// }else if(argA > argB){
//     longest = argA.toString();
//     shorter = argB.toString();

// }else if(argB > argA){
//     longest = argB.toString();
//     shorter = argA.toString();
// }

// output = shorter + longest + shorter
// return output