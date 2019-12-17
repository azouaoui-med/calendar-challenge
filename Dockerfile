FROM node:12

WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn run build
EXPOSE 8080
CMD [ "npm","run", "serve" ]