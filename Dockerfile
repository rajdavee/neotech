# Use Node.js official image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files including public directory
COPY . .

# Ensure public directory exists with required files
RUN ls -la public/

# Build the application
RUN npm run build

# Install serve to serve static files
RUN npm install -g serve

# Expose port
EXPOSE 3429

# Start the application
CMD ["serve", "-s", "build", "-l", "3429"]