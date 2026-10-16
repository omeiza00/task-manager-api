<p>
# Task Manager API

A RESTful Task Manager API built with NestJS, TypeScript, PostgreSQL, and TypeORM. This project allows users to manage tasks, filter them by status and priority, and sort the results.

## Features

- Create, retrieve, update, and delete tasks
- Filter tasks by status and priority
- Combine multiple filters in one request
- Sort tasks by priority or creation date
- Validate incoming data using DTOs and `class-validator`
- Store task data in PostgreSQL using TypeORM
- Configure database settings using environment variables
- Handle invalid sort values with appropriate errors

## Tech Stack

- **Backend:** NestJS, TypeScript
- **Database:** PostgreSQL
- **ORM:** TypeORM
- **Validation:** class-validator, class-transformer
- **Configuration:** @nestjs/config

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- PostgreSQL

### Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
cd task-manager-api
npm install
```

Replace `YOUR_REPOSITORY_URL` with your actual GitHub repository URL.

### Environment Configuration

Create a `.env` file in the project root and configure your database connection:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_DATABASE=taskDB
```

Replace the example credentials with your own PostgreSQL settings. Make sure `.env` is listed in `.gitignore` and is not committed to GitHub.

Create the `taskDB` database in PostgreSQL before starting the application.

### Run the Application

```bash
# Development
npm run start:dev

# Production
npm run start:prod
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/tasks` | Create a task |
| GET | `/tasks` | Retrieve tasks |
| GET | `/tasks/:id` | Retrieve a task by ID |
| PATCH | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

## Filtering and Sorting Examples

Retrieve all tasks:

```http
GET /tasks
```

Filter by status:

```http
GET /tasks?status=pending
```

Filter by priority:

```http
GET /tasks?priority=high
```

Combine filters:

```http
GET /tasks?status=pending&priority=high
```

Sort by priority:

```http
GET /tasks?sort=priority
```

Sort by creation date, newest first:

```http
GET /tasks?sort=createdAt
```

Supported status values: `pending`, `in-progress`, `completed`.

Supported priority values: `low`, `medium`, `high`.

## What I Learned

Building this project helped me practise REST API development with NestJS, database integration with PostgreSQL and TypeORM, request validation, conditional filtering, sorting, and environment-based configuration.

## Author

**Idris Abdulhamid Omeiza**
</p>