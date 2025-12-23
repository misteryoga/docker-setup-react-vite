 # Use a Node.js base image
FROM node:24-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port Vite's development server runs on
EXPOSE 51731

# Command to start the development server
CMD ["npm", "run", "dev"]