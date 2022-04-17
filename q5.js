//Convert miles Meter to Kilometers;

function convertMilesToKM(arr){
    return arr.map(mile);
    function mile(a){
        return a*1.609;
    }
    
}
function totalDistance(acc,cur){
    return acc+cur;
}
const km=convertMilesToKM([1,2,3,4]);
console.log(km);
let totaldistanceKM=km.reduce(totalDistance);

console.log(totaldistanceKM);
