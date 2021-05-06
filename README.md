# docker-express-app
Steps:
1. docker build -t "node-app-image" .
2. docker run -p 4000:3000 -d --name node-app node-app-image
