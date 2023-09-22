# BUILD
FROM node:20 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g typescript
COPY tsconfig.json ./
COPY . .
RUN npm run build 


# RUN
FROM node:20
WORKDIR /app
COPY --from=build /app/build /app/build
RUN npm install -g serve
ENV PORT=3001
EXPOSE 3001
CMD ["serve", "-s", "build", "-l", "3001"]
