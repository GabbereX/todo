# TODO приложение с возможностью перехода с серверного хранилища на локальное.

## Запуск через терминал
- перейти в папку **todo-server**
> cd todo-server
- запустить **index.js**
>node index.js
____
В терминале должен появиться текст:
Сервер TODO запущен. Вы можете использовать его по адресу http://localhost:3000
Нажмите CTRL+C, чтобы остановить сервер
Доступные методы:
GET /api/todos - получить список дел, query параметр owner фильтрует по владельцу
POST /api/todos - создать дело, в теле запроса нужно передать объект { name: string, owner: string, done?: boolean }
GET /api/todos/{id} - получить дело по его ID
PATCH /api/todos/{id} - изменить дело с ID, в теле запроса нужно передать объект { name?: string, owner?: string, done?: boolean }
DELETE /api/todos/{id} - удалить дело по ID

____
## Запустите my.html (например через LiveServer или Serve).

### Возможности:
- Добавлять новые дела
- Удалять дела
- Отмечать дела
- Записывать данные на сервер
- Записывать данные на LocalStorage
- Динамический импорт