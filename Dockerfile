FROM node:wheezy

ADD ./ /app
VOLUME /app
WORKDIR /app

EXPOSE 3000

RUN npm install
RUN chmod +x /app/scripts/entrypoint.sh

CMD node .
