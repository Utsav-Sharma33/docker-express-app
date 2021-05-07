FROM node
WORKDIR /app
COPY package.json .
RUN npm -g install npm 
RUN npm install
COPY . .
ENV PORT=4000
EXPOSE $PORT
CMD ["npm","run","dev"]
