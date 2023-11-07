let f = new Array('apple', 'strawberry', 'blueberry', 'raspberry', 'lemon');
for (i = 0; i < 5; i++) {
    console.log(f[i]);
}
for (i = 0; i < 5; i++) {
    if (f[i] === 'apple') {
        console.log('apple green');
    }
    else if (f[0] === 'strawberry') {
        console.log('strawberry red');
    }
    else if (f[0] === 'blueberry') {
        console.log('blueberry blue');
    }
    else if (f[0] === 'raspberry') {
        console.log('raspberry light red');
    }
    else if (f[0] === 'lemon') {
        console.log('lemon yellow');
    }
}