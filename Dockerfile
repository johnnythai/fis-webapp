# BUILD
FROM node:20 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g typescript
COPY tsconfig.json ./
COPY . .
ARG REACT_APP_API_URL=https://fis.johnnythai.dev
ENV REACT_APP_API_URL=$REACT_APP_API_URL
RUN npm run build 


# RUN
FROM node:20
WORKDIR /app
COPY --from=build /app/build /app/build
RUN npm install -g serve
EXPOSE 3001
CMD ["serve", "-s", "build", "-l", "3001"]
