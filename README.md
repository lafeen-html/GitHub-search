<h1>Техническое задание</h1>

Написать блок с поиском репозиториев github по подстроке.

Документация по работе с API здесь:
https://docs.github.com/en/rest/search?apiVersion=2022-11-28- поле ввода (для подстроки поиска).

- если символов недостаточно, то сообщение об ошибке.
- форма срабатывает по кнопке или по enter,
- список с результатами (достаточно выводить только первые 10 найденных репозиториев),

Внешний вид:
- выводить название и еще пару полей,
- название по совместительству должно быть ссылкой на соответвующий git репозиторий,
- ссылка должна открываться в новой вкладке браузера,
- требований по классности внешнего вида нет - просто аккуратно.

Дополнительно:
- изначально пустой список,
- если по запросу ничего не найдено, то вместо списка сообщение "Ничего не найдено".
