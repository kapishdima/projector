start: 
	cd ./docker && docker-compose up -d 
down:
	cd ./docker && docker-compose down --volumes
migrate:
	yarn prisma migrate dev --schema ./src/server/schema.prisma