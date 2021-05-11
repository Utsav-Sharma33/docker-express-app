# docker-express-app
Steps:
1. docker build -t node-app-image .
2. docker run -p 4000:3000 -d --name node-app node-app-image
            OR
        # for auto build on Mac/Linux which uses mount-build volume
   docker run -v $(cd):/app -p 4000:3000 -d --name node-app node-app-image 
            OR
        # for auto build on Windows POWERSHELL which uses mount-build volume
   docker run -v ${pwd}:/app -p 4000:3000 -d --name node-app node-app-image 
           OR
        # for auto build on Windows CMD which uses mount-build volume
   docker run -v %cd%:/app:ro -v /app/node_modules -p 4000:3000 -d --name node-app node-app-image
3. docker exec -it node-app bash



* => added nodemon.json file to configure nodemon arguments