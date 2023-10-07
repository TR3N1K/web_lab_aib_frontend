var d = prompt('Введите кол-во человек ', undefined);
if (!isNaN(parseFloat(d))) {
    d = parseFloat(d);
} else {
    d = 0;
}
while (d === 0){
    d = prompt('Введите кол-во человек ', undefined);
    if (!isNaN(parseFloat(d))) {
        parseFloat(d);
    } else {
        d = 0;
    }
}
var k = prompt('Введите зарплату на человека ', undefined);
if (!isNaN(parseFloat(k))) {
    parseFloat(k);
} else {
    k = 0;
}
while (d === 0) {
    k = prompt('Введите зарплату на человека ', undefined);
    if (!isNaN(parseFloat(k))) {
        parseFloat(k);
    } else {
        k = 0;
    }
}
alert('Затраты на ЗП: ' + d * k);