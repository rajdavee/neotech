# Use Node.js official image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY src/ ./src/
COPY public/ ./public/
COPY tsconfig.json ./

# Build the application
RUN npm run build

# Install serve to serve static files
RUN npm install -g serve

# Expose port
EXPOSE 3429

# Start the application
CMD ["serve", "-s", "build", "-l", "3429"]