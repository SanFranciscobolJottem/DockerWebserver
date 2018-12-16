FROM node:alpine

WORKDIR /home/webserver

COPY ./ ./

RUN npm install express
RUN npm install

CMD ["npm","start"]
