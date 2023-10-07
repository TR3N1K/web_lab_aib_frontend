var klassSoStudentami = [
    {FIO: 'Петров А.А.', Ocenka: 5},
    {FIO: 'Иванов Б.Б.', Ocenka: 3.4},
    {FIO: 'Сидоров Г.Г.', Ocenka: 9},
    {FIO: 'Немолодой Д.Д', Ocenka: 2},
    {FIO: 'Молодой Е.Е', Ocenka: 3.4}
];
var s = 0;
var kolichectvo = 0;
var ploxieStudenti = [];
for (i = 0; i < klassSoStudentami.length; i++)
{
    if (klassSoStudentami[i].Ocenka > 5) {
        console.log('Это значение учитываться не будет\nоно не соответствует допустимым значениям');
    }
    if (klassSoStudentami[i].Ocenka < 0) {
        console.log('Это значение учитываться не будет\nоно не соответствует допустимым значениям');
    }
    if (klassSoStudentami[i].Ocenka >= 5 && klassSoStudentami[i].Ocenka <= 0) continue;
    if (klassSoStudentami[i].Ocenka < 4 ) {
        ploxieStudenti.push(klassSoStudentami[i])
    }
    s =+ klassSoStudentami[i].Ocenka;
    kolichectvo =+ 1;
}
s /= kolichectvo;
console.log('Средняя оценка: ' + s);
console.log('Плохие студенты: ');
if(ploxieStudenti.length === 0 ) {
    console.log('Таких нет');
}
ploxieStudenti.forEach((znachenie) => console.log('Фио: ' + znachenie.FIO + '; Оценка: ' + znachenie.Ocenka));