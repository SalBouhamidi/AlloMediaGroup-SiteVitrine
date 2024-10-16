# Allo Media Group site vitrin: 

1. Introduction
## Project Overview
This project is the frontend part of the "Livraison AlloMedia" application, built using React and integrated with a Node.js backend. It focuses on user registration, authentication (JWT),and password management. The frontend communicates with the backend via REST API calls and offers a user-friendly interface for managing the authentication flow.

## Purpose and Goals
The goal of this project is to build a secure and responsive frontend for user management using React. It supports JWT-based authentication, allows users to register, log in and reset their passwords.

## Target Audience
This project is for developers interested in React-based applications with a focus on user authentication . It is also useful for businesses looking for a frontend solution to manage their  authentication.

## 2. Getting Started

## Prerequisites
To run this project, make sure you have:

Node.js 

## Installation Instructions

git clone https://github.com/SalBouhamidi/AlloMediaGroup-SiteVitrine.git

npm install

npm run dev

## Quick Start Guide

** To register a new user: Navigate to the registration page and fill out the form. Ensure that all fields are correctly filled with client-side validation.
** To log in: Navigate to the login page, enter your credentials, and click "Login". The JWT will be stored in the browser for session management.
** To reset a password: Use the "Forgot Password" link, enter your email, and follow the instructions sent via email.
** To log out: Click the "Logout" button, which will clear the stored JWT and end the session.

## 3. Project Structure

AlloMediaGroup-SiteVitrine/
├── cypress/                  # Test my Project
├── src/                      # Source code folder
│   ├── assets/               #The css and images
│   ├── pages/                # Individual pages for registration, login, forget password,      
│                             # reset Password, otp, otp.
│   ├── router/index          # API interaction logic with the backend
│   └── App.js                # Main app component
│
├── public/                   # Static assets
├── .dockerignore/            # to ignore node_modules
├── cypress.config.js/        # cypress configuration
├── Dockerfile                # Docker configuration file for the frontend
├── docker-compose.yml        # Docker Compose file for orchestration
├── package.json              # Project dependencies and scripts
└── README.md                 # Documentation


## 4. Features

## User Registration:
Allows new users to sign up with client-side validation.
Sends a POST request to the backend API to create the user.
Displays backend error messages (e.g., email already exists).

## JWT Authentication:
Secure Register functionality with JWT storage in the browser.
Session persistence via local storage .

## Password Reset:
Users can reset their password via a reset link sent to their email using otp.
Handles both frontend form submission and backend API requests.

## Logout:
Securely logs users out by clearing the JWT token from storage.



## 5. Packages Used
react: Core React library for building user interfaces.
react-router-dom: For navigation and route management in the app.
axios: For making API requests to the backend.
react-hook-form: For managing forms with ease .
yup: For schema-based form validation.
tw-elements-react: UI components styled using TailwindCSS.
@hookform/resolvers: To integrate Yup validation with React Hook Form.
sonner: For notification popups in the app.
vite: A fast build tool and dev server.

## 6. Dockerization
The project includes Docker configuration files to containerize both the frSteps to Dockerize:
## Steps to Dockerize:

1- Build the Docker image for the frontend:
docker build -t docker-react-image:latest .
2- Run the Docker container:
docker run -p 5180:5173 allomediagroup-docker-frontend-1
3- To orchestrate both the frontend and backend, use Docker Compose:
docker-compose up

The application will be accessible at http://localhost:5173/login in your browser.

## 7. Running Tests:
To run frontend tests, use the following command:

npx cypress Open

## 8. Jira:

https://salima-bouhamidi.atlassian.net/jira/software/projects/AMB/boards/2?atlOrigin=eyJpIjoiZjlkZmIwYzJhNzU0NDc5MjgzMDQwNzZiYmMzZmZmZGMiLCJwIjoiaiJ9


## docker compose repository:
https://github.com/SalBouhamidi/AlloMediaGroup-Docker.git 











