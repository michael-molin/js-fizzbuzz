var array = [];

for (var i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        array.push('FizzBuzz');
    } else if (i % 3 == 0) {
        array.push('Fizz');
    } else if (i % 5 ==0) {
        array.push('Buzz');
    } else {
        array.push(i);
    }
}

console.log('stampa array');
for (var x = 0 ; x< array.length ; x ++) {
    console.log(array[x]);
}

document.getElementById('lista').innerHTML = array;
