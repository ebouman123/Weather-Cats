# Project Template: React, Redux, Redux-Saga, Node.js, Express, PostgreSQL

This repository serves as a starter template for full-stack applications using the following technologies:

- **Frontend:** React, Redux, Redux-Saga, Axios
- **Backend:** Node.js, Express, PostgreSQL

The template provides basic setup for the server, Redux state management, and a clean folder structure to help you kickstart your project efficiently.

---

## Features

### Frontend

- **React**: Configured with React Router for routing.
- **Redux**: State management setup with Redux Toolkit.
- **Redux-Saga**: Middleware for handling side effects.
- **Axios**: Configured for making API requests.

### Backend

- **Express**: Basic Express server with a sample router.
- **PostgreSQL**: Database integration with the `pg` library.
- **dotenv**: For managing environment variables.

### Additional

- Clean folder structure to keep the project organized.

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- PostgreSQL database

### Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**

   - Install dependencies:
     ```bash
     npm i
     ```

3. **Set Up Environment Variables**

   - Create a `.env` file in the `server` directory with the following:
     ```env
     DATABASE_URL=your_postgresql_connection_string
     ```

4. **Run the Application**

   ```bash
   # Start the server
   npm run server

   # Start the client
   npm run client
   ```

5. **Access the Application**
   - The frontend will run at [http://localhost:3000](http://localhost:3000).
   - The backend will run at [http://localhost:5001](http://localhost:5001).

---

## License

This template is open-source and available for use in your projects.
