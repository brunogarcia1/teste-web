FROM node:18-alpine

WORKDIR /app

COPY .env .env

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN chmod +x .docker/entrypoint.sh

ENTRYPOINT [ "sh", "/app/.docker/entrypoint.sh" ]