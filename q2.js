let obj =[ {
    Id: 45,
    Name: 'ram'
    },{
    Id: 4,
    Name: 'raju'
    },{
    Id: 90,
    Name: 'kumar'
}]

console.log(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));
// After Sort the elements by Id

obj.sort((a,b)=>(a.Id > b.Id) ?1:-1)
console.log(obj);
