let input=10101;

const ConvertBinary=(binary)=>{

    let i=0;
    let sum=0;
    let nums=binary;
    while(nums){
        sum+=Math.pow(2,i)*(nums%10);
        i++;
        nums=parseInt(nums/10);
    }
    return sum;
}

let output=ConvertBinary(input);
console.log(output);
