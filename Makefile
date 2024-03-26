install: #перовое клонирование репозитория
	npm ci

brain-games: #Запуск игры
	node bin/brain-games.js

publish: #публикация пакета
	npm publish --dry-run