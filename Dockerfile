FROM node:18 AS build

WORKDIR /app
COPY package.json package-lock.json /app

RUN npm install

COPY . /app

RUN npm run build

FROM nginx

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

RUN mkdir fudo-news

COPY --from=build /app/dist ./fudo-news

EXPOSE 80

