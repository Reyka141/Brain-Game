install: #Перовое клонирование репозитория
	npm ci

brain-games: #Запуск игры
	node bin/brain-games.js

brain-even: #Запуск игры четности чесел
	node bin/brain-even.js
publish: #Публикация пакета
	npm publish --dry-run


lint:	#Проверка линтером
	npx eslint .