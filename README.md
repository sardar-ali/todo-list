git clone https://github.com/sardar-ali/todo-list.git
cd todo-list

Frontend setup
  cd frontend 
  npm install or yarn 
  change .example.env to .env
  
  yarn dev 
  browse http://localhost:3000/

Backend setup
  cd backend
  npm install or yarn 
  docker-compose up -d 
  docker exec -it mysql_db mysql -u root -p
  enter password: rootpassword
  npx prisma migrate dev --name init
  yarn start:dev
