FROM node

WORKDIR /src

COPY . . 

EXPOSE 2000

CMD node index.js