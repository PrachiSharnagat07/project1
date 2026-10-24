function sum (a){
    let s = 0;
    for(let i = 0; i < a.length; i++){
        s = s + a[i];
    }
    return s;
}
console.log(sum ([10,20,30]));

function evean (a){
for(let i = 0; i < a.length; i++){
    if (a[i] % 2 == 0){
        console.log(a[i])      
    }
}
}
evean([1,2,3,4,5,6,]);

function max (a){
    let m = a [0];
    for(let i = 0; i < a.length; i++){
        if(a[i] > m){
            m = a[i];
        }
    }
    return m;
}
console.log(max ([10,20,25]));

function min(a){
    let m = a [0];
    for(let i = 0; i < a.length; i++){
        if(a[i] < m){
            m = a[i];
        }
    }
    return m;
} console.log(min ([10,20,25]));

let names  = ["ram", "shyam", "mohan",]
function reverseArray(arr){
    let result = [];
    for(let i = arr.length - 1; i >= 0; i-- ){
        result.push(arr[i]);
    }
    return result;     
    
}
console.log(reverseArray(names));

function search(a , n){
    for(let i = 0; i < a.length; i++){
        if(a[i] == n){
            return "found";
    }
    return "not found";
}
}
console.log(search([10,15,20,],20));




