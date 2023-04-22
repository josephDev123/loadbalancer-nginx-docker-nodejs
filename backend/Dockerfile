FROM node:14.17.3-alpine3.14
WORKDIR /src/app
COPY package.json .
RUN npm i
COPY . .
EXPOSE 9000
CMD ["npm", "start"]