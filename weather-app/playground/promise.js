var asyncAdd = (a, b) =>{
return new Promise( (resolve,reject) => {
setTimeout( () =>{

if(typeof a === 'number' && typeof b === 'number'){
    resolve(a+ b);
}else {
    reject('arguments must be number');
}
},2000);
});
};

asyncAdd( 10, 9).then((res) => {
console.log('result', res);
},(errorMessage) => {
    console.log(errorMessage);
});
/* 
var somePromise = new Promise( (resolve, reject) =>{
setTimeout( () => {
resolve('its worked');

//reject('unable to fulfill promise')
//you cant do resolve and reject in the same time.
},2500);
   
});
somePromise.then((message) =>{
 console.log('success:', message);
}, (errorMessage) =>{
    console.log('Error:', errorMessage);
}); */