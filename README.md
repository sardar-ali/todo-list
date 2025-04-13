cd frontend

# Install dependencies
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
