// однострочный комментарий
/*
многострочный
комментарий
*/

//ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ
var login = "alex";
let user_name = "Алёша";

//Отладка, вывод в консоль
console.log(login, user_name);

console.log(window); 
//здесь хранятся все переменные js
//сюда и попадают все var

login = "fedor";
user_name = "sofia";

//КОНСТАНТЫ
const CODE = 345;

let some_data;
some_data = "something";
some_data = "something new";
console.log(some_data);

//ТИПЫ ДАННЫХ
// 1. Числовые данные
let age = 18;
let zero = 0;
let temp = 36.6;

//2. Строковые данные
let reg_info = "Регистрация прошла успешно";
let auth_info = 'Авторизация прошла успешно';
let greeting = 'Добро пожаловать в "Магазин"';
let greeting2 = "Добро пожаловать в \"Магазин\"";
console.log(greeting);
console.log(greeting2);

//3. Логические тип - boolean
let active = true;
let stopped = false;

//4. Null
let dont_know = null;
console.log(dont_know);


//5. Undefined
let nodefined;
console.log(nodefined);

//Определение типа данных
console.log(typeof active);
console.log(typeof age);
console.log(typeof greeting);

//ОПЕРАТОРЫ
//Арифметические
// + - / * %(взятие остатка от деления)
let height = 45;
height = height * 2;
console.log(height); //90

console.log(3+8); //11 - число
console.log("3"+8); //38 - строка 
console.log(+"3"+8); // 11 т.к. +"3" преобр в число
console.log(+"string"); //NaN - не число
console.log(+true); //1
console.log(34/"2");//17

//Проверка на NaN
console.log(isNaN(45)); //false
console.log(isNaN("string")); //true
console.log(isNaN("23")); //false
console.log(isNaN("23px"));

//Строка в число
age = "13.5 years";
let age1 = parseInt(age); 
console.log(age1); // 13

let age2 = parseFloat(age);
console.log(age2); // 1.5


console.log(34 / 0); //Infinity
console.log(-34 / 0); //-Infinity

//ОСТАТОК ОТ ДЕЛЕНИЯ
console.log(9%2);
console.log(8%2);
console.log(546%10);

//ОПЕРАТОРЫ ПРИСВАИВАНИЯ
let num = 10;
num = num + 10; // 20
num+=10; // 20

//ОПЕРАТОРЫ СРАВНЕНИЯ
height = 140;
width = "140";
num = 500;
login = "awerty";
let login2 = "qsdghg";


console.log(height==width); //true
console.log(height===width); //false
console.log(num>width);
console.log(login2>login);
console.log(login===login2);

//ИНКРЕМЕНТ
num=2;
console.log(++num); //3
console.log(num); //3
num=2;
console.log(num++); //2
console.log(num); //3

//ТЕРНАРНЫЙ ОПЕРАТОР
// result = (условие) ? значение1 : значение2;
width = 450;
height = 300;
result = height>width ? "высота больше" : "высота меньше";
console.log(result);

//ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
(height < width) && (height > 100);
(height < width) || (height > 100);
(!height)