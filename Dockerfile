FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY  . .

RUN npm run build

FROM node:20-alpine 

RUN npm install -g serve

WORKDIR /app

COPY --from=build /app/build ./build

EXPOSE 5173

CMD ["serve", "-s", "build", "-l", "5173"] 