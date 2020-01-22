FROM node:alpine

USER node
WORKDIR /home/node

COPY package*.json ./
RUN npm install

COPY . .

CMD NODE_ENV=production node app.js