const game1 = document.querySelector('.play__game_item_1');

game1.addEventListener('click', function() {
    alert('Игра "Анаграмма". Поехали!')
    const wordOne = prompt('Напиши первое слово: ');
    const wordTwo = prompt('Напиши второе слово: ')
    const sortWord = (text) => text.toLowerCase().split("").sort().join("");
    if (sortWord(wordOne) === sortWord(wordTwo)) {
      alert('Поздравляю! Это анаграмма')
    } else {
      alert('Это не анаграмма')
    }
});



function game2() {
    alert('Игра “Камень, ножницы, бумага”. Поехали!')
    const userNumber = Number(prompt('Введи число - камень = 0, ножницы = 1, бумага = 2'));
    const getRandomInt = (max) => Math.floor(Math.random() * max);
    let randomNumber = getRandomInt(3);
    if (userNumber === randomNumber) {
        alert('Ничья');
    }
    if (userNumber === 0 && randomNumber === 1 || userNumber === 1 && randomNumber === 2 || userNumber === 2 && randomNumber === 0) {
        alert('Поздравляю! Ты победил!!!');
    } else {
        alert('Ой-ой! Ты проиграл')
    }
};

function game3() {
    alert('Игра “Новогодняя загадка”. У тебя есть 3 попытки. Поехали!');
    
    let question = 'Вoкруг нее на Новый год \nВодят дети хоровод?';
    let answer = ['елка', 'она зимой и летом одним цветом', 'у нее иголки зелены и колки', 'Игра закончена'];
    
    for (let i = 0; i < 3; i++) {
        let userAnswer = prompt(question);
        if (answer[0] !== userAnswer) {
            alert(`Подсказка: ${answer[i+1]}`);
        } else {
            return alert('Поздравляю! Ты угадал!');
        }
    }
}