FROM node:12-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm install -g nodemon

COPY ./dist .

EXPOSE 3000

CMD ["npm", "start"]