# Nest Vue Primer

This is a fullstack monorepo project built with:

- **Backend**: [NestJS](https://nestjs.com/)
- **Frontend**: [Vue.js](https://vuejs.org/)
- **Shared ORM Library**: TypeORM Entities and Database Connection, shared between backend and potentially other services.

---

## 📂 Project Structure

```
project/
├── backend/                # NestJS backend
├── frontend/               # Vue.js frontend
└── shared-orm-library/     # Shared TypeORM entities and connection logic
```

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/harshkr101/nest-vue-primer.git
cd nest-vue-primer
```

---

### 2. Install Dependencies

> Run this in the root of each package

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

#### Shared ORM Library

```bash
cd ../shared-orm-library
npm install
```

---

### 3. Run Migration and Link Shared ORM Library Locally

```bash
cd shared-orm-library
```

- Run this to create env file from example.env
```bash 
 mv .env.example .env
```
- Make sure your `.env` file is properly configured with DB credentials and other necessary settings.

- Run the migrations by running 
```bash
npm run migration:run
```
- Link the shared orm library with backend

This allows the backend to use the shared ORM package during local development.

```bash
# In shared-orm-library
npm link

# In backend
cd ../backend
npm link shared-orm-library
```

---

## 🚀 Running the Project

### Backend (NestJS)

```bash
cd backend
```

- Run this to create env file from example.env
```bash 
 mv .env.example .env
```
- Make sure your `.env` file is properly configured with DB credentials and other necessary settings.

- Run the server in development mode by running 
```bash
npm run start:dev
```

### Seed the Database

You can run the seed script to populate initial data:

```bash
cd backend
npm run seed
```

> Ensure your DB is running and connected before running the seed script.

---


### Frontend (Vue.js)

```bash
cd frontend
npm run serve
```
- Visit http://localhost:8080 to view the web app

## 💪 Scripts Summary

| Script           | Location    | Purpose                       |
|------------------|-------------|-------------------------------|
| `npm run migration:run` | `shared-orm-library/`   | Runs migrations on db     |
| `npm run start:dev` | `backend/`   | Starts NestJS in dev mode     |
| `npm run serve`     | `frontend/`  | Starts Vue dev server         |
| `npm run seed`      | `backend/`   | Seeds the database            |

---


## 📦 Tech Stack

- **NestJS** — Backend framework
- **TypeORM** — ORM for PostgreSQL (or your DB)
- **Vue.js** — Frontend UI
- **ts-node** — Run TypeScript scripts directly

---

## 📄 License

MIT

