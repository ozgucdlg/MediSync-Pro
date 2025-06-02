# Hospital Management System

A full-stack Hospital Management System built with Angular and Express.js, featuring a modern UI with Tailwind CSS.

## Features

- Modern, responsive user interface using Angular and Tailwind CSS
- RESTful API backend with Express.js
- MongoDB database integration
- User authentication and authorization
- Role-based access control
- Patient management
- Appointment scheduling
- Medical records management
- Staff management

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (v4.4 or higher)
- Angular CLI (v14 or higher)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd hospital-management-system
```

2. Install dependencies:
```bash
npm run install:all
```
This will install dependencies for:
- Root project
- Client (Angular frontend)
- Server (Express backend)

## Running the Application

### Development Mode

To run both frontend and backend concurrently in development mode:

```bash
npm run dev
```

This will start:
- Frontend on `http://localhost:4200`
- Backend on `http://localhost:8080`

### Running Frontend Only

```bash
npm run start:client
```

### Running Backend Only

```bash
npm run start:server
```

## Project Structure

```
hospital-management-system/
├── client/                 # Angular frontend
├── server/                 # Express backend
├── src/                    # Source files
│   ├── app/               # Angular application
│   │   ├── components/    # UI components
│   │   ├── services/      # Angular services
│   │   ├── guards/        # Route guards
│   │   └── interceptors/  # HTTP interceptors
│   └── assets/           # Static assets
├── scripts/               # Utility scripts
└── package.json          # Project configuration
```

## Available Scripts

- `npm run install:all` - Install all dependencies
- `npm run dev` - Start both frontend and backend in development mode
- `npm run start:client` - Start frontend only
- `npm run start:server` - Start backend only
- `npm run build` - Build the frontend application
- `npm run test` - Run frontend tests

## Environment Setup

### Frontend Environment Variables
Create a `.env` file in the client directory with:
```
API_URL=http://localhost:8080
```

### Backend Environment Variables
Create a `.env` file in the server directory with:
```
PORT=8080
MONGODB_URI=mongodb://localhost:27017/hospital-management
JWT_SECRET=your-secret-key
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the development team. 