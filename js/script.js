const lengthOfArrayFromUser = +prompt('Введіть довжину масиву:');
const arrayNumbers = [];

if (lengthOfArrayFromUser) {
    for (let countOfIndex = 0; countOfIndex < lengthOfArrayFromUser; countOfIndex++) {
        const elementsOfArrayFromUser = +prompt('Введіть елементи масива:');
        arrayNumbers.push(elementsOfArrayFromUser);
    }
    console.log('Масив до сортування:', arrayNumbers);
    const sortedArrayNumbers = arrayNumbers.toSorted((a, b) => a - b );
    console.log('Масив після сортування:', sortedArrayNumbers);
    sortedArrayNumbers.splice(1, 3);
    console.log('Масив після видалення елементів:', sortedArrayNumbers);
} else {
    console.log('Щось пішло не так!');
}