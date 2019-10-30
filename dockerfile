FROM node:10

RUN npm install -g http-server

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4200

CMD [ "http-server", "dist/tic-c2-a2" ]

