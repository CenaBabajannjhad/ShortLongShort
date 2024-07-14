let input1 = '1';
let input2 = '2';

function solution(a, b){

    let output ;
    let shorter , longest;
    let argA = Number(a);
    let argB = Number(b);
    
    if(argA > argB){
        longest = argA.toString();
        shorter = argB.toString();

    }else if(argB > argA){
        longest = argB.toString();
        shorter = argA.toString();

    }
    
    output = shorter + longest + shorter
    return output
}
  
console.log(solution(input1 , input2));
