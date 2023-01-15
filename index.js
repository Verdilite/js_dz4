// Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);
const totalCount = 3;
const  resultslist = [];
for(i=0;i < totalCount; i++){
    el = prompt(`Введите текст ${i+1}`);
    resultslist.push(el);
    if (resultslist.includes(null)|| el ==''){
        resultslist.splice(i);
        i-=1;
    }
}
    resultslist.sort(() => Math.random() - 0.5);
    resultAsSting = resultslist.join(", ")
console.log(resultAsSting );
alert(resultAsSting  + ' продалжаем теперь с числом');



// Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.
do {
    userNumbers = prompt('Введите 5 чисел без пробелов!')
} while(userNumbers === null || userNumbers.length !==5 || (!/^[0-9]+$/.test(userNumbers)));
massivNum = userNumbers.split('')
console.log(massivNum.join(" "))

