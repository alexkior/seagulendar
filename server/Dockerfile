# Use the official Node.js image as a base
FROM node:19.8.1-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm i

# Copy the rest of the application code
COPY . .

RUN npx prisma generate
# Build the NestJS application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the NestJS application
CMD ["npm", "run", "start:prod"]
