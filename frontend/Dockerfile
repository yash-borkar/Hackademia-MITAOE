# Use an official Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose Vite's default port
EXPOSE 5173

# Start the development server
CMD ["npm", "run", "dev", "--", "--host"]
