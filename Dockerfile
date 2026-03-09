# Use official Node image
FROM node:25-alpine

# Create app directory inside container
WORKDIR /app

# Copy package.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the application
COPY . .

# Expose the app port (change per project)
EXPOSE 3010

# Start the app
CMD ["node", "server.js"]
