FROM node
WORKDIR /app
COPY package.json .
# RUN npm -g install npm 
# RUN npm install

RUN if [ "$NODE_ENV" = "production" ]; \
    then npm install --only=production; \
    else npm install; \
    fi

COPY . ./
ENV PORT 4000
EXPOSE $PORT
CMD ["npm","run","dev"]
