
FROM node:lts-alpine As deploy
WORKDIR /home/node/app
RUN npm set progress=false
COPY . .
EXPOSE 8080
CMD ["node", "server"]
