FROM node:alpine

ENV NODE_ENV production

WORKDIR /usr/src/app
COPY . .

RUN npm install

RUN npm run build

EXPOSE 2000

CMD ["npm", "start"]
