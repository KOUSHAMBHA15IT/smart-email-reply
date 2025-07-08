# Smart Email Reply

Smart Email Reply is a full-stack AI-powered application that helps you generate professional email replies quickly and easily. It features a modern React frontend and a Spring Boot backend that integrates with the Gemini API for AI-generated responses.

## Features

- ✨ Beautiful, animated UI with Tailwind CSS and Framer Motion
- ⚡ Fast, responsive React frontend (Vite-powered)
- 🤖 AI-generated email replies (Gemini API integration)
- 🎨 Customizable tone for generated emails
- 📋 Copy-to-clipboard functionality
- 🌐 CORS-enabled backend for easy local development

## Project Structure

```
smart-email-reply/
  email-reply/      # Spring Boot backend (Java)
  frontend/         # React frontend (JavaScript)
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Java 21+
- Maven

### 1. Setup the Backend

1. Go to the backend directory:

   ```sh
   cd email-reply
   ```

2. Configure your Gemini API credentials in `src/main/resources/application.properties`:

   ```
   gemini.api.url=YOUR_GEMINI_API_URL
   gemini.api.key=YOUR_GEMINI_API_KEY
   ```

3. Build and run the backend:

   ```sh
   ./mvnw spring-boot:run
   ```

   The backend will start on the default port (usually `8080`).

### 2. Setup the Frontend

1. Go to the frontend directory:

   ```sh
   cd ../frontend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file and set the backend URL (example):

   ```
   VITE_SERVER_APP_URL=http://localhost:8080/api/email
   ```

4. Start the frontend:

   ```sh
   npm run dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173) (default Vite port).

## Usage

1. Enter the email content you want to reply to.
2. Optionally, specify the tone (e.g., "formal", "friendly").
3. Click **Generate** to receive an AI-generated reply.
4. Copy the generated email with one click.

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Framer Motion, Styled Components
- **Backend:** Spring Boot,