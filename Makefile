install: #Перовое клонирование репозитория
	npm ci

brain-games: #Запуск игры
	node bin/brain-games.js

publish: #Публикация пакета
	npm publish --dry-run

lint:	#Проверка линтером
	npx eslint .