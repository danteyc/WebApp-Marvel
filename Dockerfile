FROM node:14-alpine

WORKDIR /app

COPY ["package.json", "/app"]

RUN npm install

# Bundle app source
COPY . /app

EXPOSE 3000

CMD [ "npm", "start" ]