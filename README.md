# Пояснения к проекту Iphoner
Автор: Струков Кирилл
Сделано специально для стажировки LAD
# Описание: 
Интернет магазин техники apple написанный на React.js + Redux TK
Для реализации проекта отрисован дизайн в Фигме [ссылка](https://www.figma.com/file/Z3eALOeSaq0PF40zpR5qbt/%D0%9F%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-%D0%A0%D0%B5%D0%B0%D0%BA%D1%82-%D0%B4%D0%BB%D1%8F-%D1%81%D1%82%D0%B0%D0%B6%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B8-Lad?node-id=0%3A1)
# Чек-лист
1. Стек React (или NextJS) ✅ (React)
2. Функциональные компоненты, React-hooks ✅
3. Модульные стили или styled-components ✅ (Модульные стили)
4. Роутинг React-router-dom или NextJS ✅ (React-router-dom)
5. Redux/ReduxToolKit. Асинхронные экшены Redux-thunk или Redux-saga ✅ (ReduxToolKit - асинхронные экшены реализованы с помощью createAsyncThunk)
6. Работа с API с помощью клиента Axios (можно использовать любое открытое API либо свой вариант) ✅ 

В проекте используется собственный API с данными о телефонах, работает с помощью json-server в связвке с concurrently.
При вызове npm start плагин concurrently запускает стандартную команду команду npm start реакта, а также команду npx json-server iphonerAPI.json --port 3001. Соответственно для работы приложения необходимо 2 порта (3000 и 3001) 

Также используется API фотостока usplash для подбора картинок телефона на странице товара