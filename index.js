//1

let cleaner = 40000;
let vocal = 22000;
console.log(cleaner + vocal)

//2
let text = "Владивосток";
let n = 2000;
console.log(text + " " + n)

//3
let messenger = 128;
let pictures = 254;
let vk = 137;
let youtube = 201;
console.log("Всего: " + (messenger + pictures + vk + youtube) + " минут или " + (messenger + pictures + vk + youtube) / 60 + " часов")


//4
let num1 = 2
let num2 = 5
console.log(num1 ** num2)


//5
let message = "Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!"
console.log(message)


//6
const greetings = "Привет,";
const name = "Кот";

console.log(greetings + " " + name)

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

let celsius;
celsius = (fahrenheit - 32) / 1.8;

console.log(`${fahrenheit} градус по Фаренгейту - это ${celsius} градуса по Цельсию.`);


