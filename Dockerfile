FROM node:latest

WORKDIR /usr/src/app

RUN npm install

COPY . .

RUN npm build

EXPOSE 5000

CMD [ "node", "start:prod" ]