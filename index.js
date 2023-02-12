//1
console.log(40000 + 22000)

//2
console.log("Владивосток" + " " + 2000)

//3
console.log(2.13 + 4.23 + 2.28 + 3.35)


//4
console.log(2 ** 5)


//5
console.log("Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!")


//6
const greetings = "Привет";
const name = "Кот";

console.log(greetings + "," + " " + name)

//7

let time;
console.log(time) //undefined

time = 34;
console.log(time) //34

console.log('Старт поездки. Осталось минут: ' + time)

time = 34 - 15;
console.log('Немного сторис в соцсетях. Осталось минут: ' + time)

time = 19 - 10;
console.log('Немного не новостей, но событий. Осталось минут: ' + time)

time = 0;
console.log('Вы приехали. Добро пожаловать в Москву')

//8

let fahrenheit;
fahrenheit = 451;

let celcius;
celcius = (fahrenheit - 32) / 1.8;

console.log(fahrenheit + " " + `градус по Фаренгейту — это` + " " + celcius + " " + `градуса по Цельсию.`)