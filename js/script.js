const lengthOfArrayFromUser = +prompt('Введіть довжину масиву:');

if (lengthOfArrayFromUser) {
    const elementsOfArrayFromUser = prompt('Введіть елементи масива через пробіл:');
    const arrayNumbers = elementsOfArrayFromUser.split(' ');
    console.log('Масив до сортування:', arrayNumbers);

    if (lengthOfArrayFromUser === arrayNumbers.length) {
        for (let indexArray = 0; indexArray < arrayNumbers.length; indexArray++) {
            if (isNaN(arrayNumbers[indexArray])) {
                console.log('Неправильні дані');
            } 
        }

        const sortedArrayNumbers = arrayNumbers.toSorted((a, b) => a - b );
        console.log('Масив після сортування:', sortedArrayNumbers);
        sortedArrayNumbers.splice(1, 3);
        console.log('Масив після видалення елементів:', sortedArrayNumbers);

    } else if (lengthOfArrayFromUser < arrayNumbers.length || lengthOfArrayFromUser > arrayNumbers.length) {
        console.log('Невідповідність довжини масива та кількості елементів!');
    } 
} else {
    console.log('Щось пішло не так!');
}

