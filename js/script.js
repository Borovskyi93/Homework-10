const lengthOfArrayFromUser = +prompt('Введіть довжину масиву:');

if (lengthOfArrayFromUser) {
    const elementsOfArrayFromUser = prompt('Введіть елементи масива через пробіл:');
    const arrayNumbers = elementsOfArrayFromUser.split(' ');
    let isNanInElArray = arrayNumbers.every(element => isFinite(element));

    if (lengthOfArrayFromUser === arrayNumbers.length && isNanInElArray) {
        console.log('Масив до сортування:', arrayNumbers);
        const sortedArrayNumbers = arrayNumbers.toSorted((a, b) => a - b );
        console.log('Масив після сортування:', sortedArrayNumbers);
        sortedArrayNumbers.splice(1, 3);
        console.log('Масив після видалення елементів:', sortedArrayNumbers);

    } else if (lengthOfArrayFromUser < arrayNumbers.length || lengthOfArrayFromUser > arrayNumbers.length) {
        console.log('Невідповідність довжини масива та кількості елементів!');
    } else {
        console.log('У масиві є NaN');
    }
} else {
    console.log('Щось пішло не так!');
}

