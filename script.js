'use strict'

//№1

var minute = 10;
if (minute >= 0 && minute <= 14) {console.log('в первую четверть');}
if (minute >= 15 && minute <= 30) {console.log('во вторую четверть');}
if (minute >= 31 && minute <= 45) {console.log('в третью четверть');}
if (minute >= 46 && minute <= 59) {console.log('в четвертую четверть');}

// №2

var lang = 'ru';
if (lang == 'ru') {var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];}
if (lang == 'en') {arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];}
console.log(arr);

// №3

var num = prompt('Введите число', 0);
 
if (num == 0) {
  alert( "Число " + num + " ноль" );
} else if (num > 0 && num < 10) {
  alert( "Число " + num + " однозначное положительное" );
} else if (num >= 10 && num < 100) {
  alert( "Число " + num + " двухзначное положительное" );
} else if (num >= 100) {
  alert( "Число " + num + " положительное трехзначное и более" );
} else if (num < 0 && num > -10) {
  alert( "Число " + num + " однозначное отрицательное" );
} else if (num <= -10 && num > -100) {
  alert( "Число " + num + " двухзначное отрицательное" );
} else {
  alert( "Число " + num + " отрицательное трехзначное и более" );
}

// №4

let red = "Нет", yellow = "Нет";
if (red == "Да") 
{console.log("При красном сигнале стоим - дорогу переходить нельзя!");
} else if(yellow == "Да")
{console.log("При жёлтом сигнале нужно приготовиться, но дорогу пока переходить нельзя!");
} else 
{console.log("Зелёный сигнал - переходим дорогу.");}

// №5

let i5 = 1;
while(i5 <= 12){console.log(i5);
i5++;}

// №6

let i_6 = 5;
while(i_6 <= 13){console.log(i_6);
i_6++;}

// №7

for (var i_7 = 0; i_7 <= 16; i_7++) {
	if(i_7 % 2 == 0) {
		console.log(i_7);
	}
  }

// №8

let result_8=0;
let arr_8=[2,5,8,3,6];
for(let i_8=0; i_8<arr_8.length; i_8++){
	result_8=result_8+arr_8[i_8];
}
console.log(result_8);