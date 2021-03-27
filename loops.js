console.log('Loops');
let i = 0;
// all even number 0 to 100
while(i <= 100){
    if (i%2 == 0){
        console.log(`${i} is even`);
    }
    i++;
}
// every 3rd back from 100 - you could read the spec as this...
i = 100;
j = 0;
while (i >= 0){
    j++;
    if (j == 3){
        console.log(`Every 3rd back from 100 first interpretation: ${i}`);
        j = 0;
    }
    i--;
}
// every 3rd back from 100 - or you could read the spec as this...
i = 100;
while (i >= 0){
    console.log(`Every 3rd back from 100 second interpretation: ${i}`);
    i-=3;
}
// for loop every other number from 1 to 100
for (i = 1; i <= 100; i+=2){
    console.log(i);
}

// for loop 0 to 100 3 - Hello / 5 - World / 3 and 5 Hello World
for (i = 1; i <= 100; i++){
    let messageText = '';
    // is it divisible by 3?
    if (i%3 == 0){
        messageText = messageText + "Hello";
    }
    // is it divisible by 5
    if (i%5 == 0){
        messageText = messageText + "World";
    }
    // is it neither set to number
    if (messageText == ''){
        messageText = i;
    }
    console.log(messageText);
}
// for in
let carList = ['Mini','Toyota','Ford','Chevy','Mini'];
for (i in carList){
    console.log(`For in: Car ${i} is a ${carList[i]}`);
}
// for of - interesting that indexOf returns first value in array
for (car of carList){
    console.log(`For of: Car first ${carList.indexOf(car)} last ${carList.lastIndexOf(car)} is a ${car}`);
}