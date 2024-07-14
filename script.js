let input1 = '1';
let input2 = '22';

function solution(a, b){
    let output ;
    let shorter , longest;
    let argA = Number(a);
    let argB = Number(b);
    
    if(argA > argB){
        longest = argA;
        shorter = argB;

    }else if(argB > argA){
        longest = argB;
        shorter = argA;
    }
    
    output = shorter + longest + shorter
    return output
}
  
console.log(solution(input1 , input2));