***** Note ****

I faced some proxy issues during the installation of dependencies, so I used some custom components as a workaround.

info There appears to be trouble with your network connection. Retrying...
info There appears to be trouble with your network connection. Retrying...
info There appears to be trouble with your network connection. Retrying...
info There appears to be trouble with your network connection. Retrying...
error AggregateError [ETIMEDOUT]: 
    at internalConnectMultiple (node:net:1139:18)
    at internalConnectMultiple (node:net:1215:5)
    at Timeout.internalConnectMultipleTimeout (node:net:1739:5)
    at listOnTimeout (node:internal/timers:596:11)
    at process.processTimers (node:internal/timers:529:7)
info Visit https://yarnpkg.com/en/docs/cli/add for documentation about this command.






# 📝 Todo List App

A full-stack Todo List application built with **React (frontend)** and **NestJS + Prisma + MySQL (backend)**.

---

## 🚀 Getting Started

### 🧰 Clone the Repository

# bash
git clone https://github.com/sardar-ali/todo-list.git
cd todo-list


cd frontend

# **Install dependencies**
npm install
# or
yarn

# Rename .env file
mv .env.example .env

# Run the development server
yarn dev


cd backend

# Install dependencies
npm install
# or
yarn

# Start MySQL with Docker
docker-compose up -d

# Access MySQL shell
docker exec -it mysql_db mysql -u root -p
# Enter password: rootpassword

# Apply Prisma migrations
npx prisma migrate dev --name init

# Start backend server
yarn start:dev

**browse **
http://localhost:3000/

![image](https://github.com/user-attachments/assets/b9591c16-5bda-46ef-bf3f-2c0c30f3f4ce)
![image](https://github.com/user-attachments/assets/37fbbfe0-4afd-40d9-bdb4-2ffbc577b7e4)

