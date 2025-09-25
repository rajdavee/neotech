# Neotaq Website

A comprehensive multi-page website built with React TypeScript, featuring services, industries, solutions, and more.

## Docker Setup

### Prerequisites
- Docker installed on your system
- Docker Compose installed

### Quick Start

1. **Build and run with Docker Compose:**
   ```bash
   docker-compose up --build
   ```

2. **Access the website:**
   - Open your browser and go to: `http://localhost:3429`

3. **Stop the application:**
   ```bash
   docker-compose down
   ```

### Alternative Docker Commands

**Build the Docker image:**
```bash
docker build -t neotaq-website .
```

**Run the container:**
```bash
docker run -p 3429:3429 neotaq-website
```

## Development Setup (Without Docker)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Website Features

- **Multi-page Architecture**: Home, Services, Industries, Solutions, About, Insights, Careers, Contact
- **Dynamic Routing**: Individual pages for services, industries, solutions, and blog posts
- **Responsive Design**: Mobile-first design that works on all devices
- **Professional UI**: Modern design with consistent branding and animations
- **Content Management**: Centralized content structure for easy updates

## Technology Stack

- React 18 with TypeScript
- React Router for navigation
- CSS Modules for styling
- Docker for containerization