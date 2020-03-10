//weather app

console.log('starting app');

setTimeout( () => {

console.log('Inside of callback');

} ,2000);

setTimeout( () => {
console.log('this is second timeout');

} ,0);

console.log('finishing app');
