/*
 ! Завдання: Реалізація Функції з Каруванням для Послідовного Додавання Трьох Чисел

 Створіть функцію `curriedAdd`, яка демонструє принцип карування в JavaScript. Функція повинна приймати три числові аргументи, кожен з яких передається послідовно, і повертати суму цих трьох чисел.

 Функція `curriedAdd` повинна працювати наступним чином:
 1. При першому виклику `curriedAdd` приймає перший аргумент `a` і повертає функцію, яка приймає другий аргумент.
 2. При другому виклику ця повернена функція приймає другий аргумент `b` і повертає ще одну функцію, яка приймає третій аргумент.
 3. При третьому виклику остання функція приймає третій аргумент `c` і повертає суму `a + b + c`.

 Очікуваний вивід:
 - При виклику `curriedAdd(1)(2)(3)` повинно повертатися `6`.

 Задача вимагає глибокого розуміння концепцій функцій вищого порядку та замикань в JavaScript.
*/

function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}

console.log(curriedAdd(1)(2)(3))


// Приклад використання
// const addFirst = curriedAdd(1)
// const addSecond = addFirst(2)
// const result = addSecond(3) // Повинно повернути 6
// console.log('Result:', result)

/*
 ? Ось як працює цей код:
 При першому виклику curriedAdd приймає перший аргумент a і повертає функцію, яка приймає другий аргумент.
 При другому виклику ця повернена функція приймає другий аргумент b і повертає ще одну функцію, яка приймає третій аргумент.
 При третьому виклику остання функція приймає третій аргумент c і повертає суму a + b + c.
*/

export { curriedAdd }
