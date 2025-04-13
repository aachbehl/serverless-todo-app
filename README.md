# Serverless ToDo App 📝

A simple serverless ToDo app built with:
- AWS Lambda
- API Gateway
- PostgreSQL (via AWS RDS)
- Node.js
- Serverless Framework

This app allows you to create, read, update, and delete ToDo items via a REST API.

---

## 🚀 API Endpoints

| Method | Path     | Description        |
|--------|----------|--------------------|
| POST   | /todos   | Create a new todo  |
| GET    | /todos   | Get all todos      |
| PUT    | /todos   | Update a todo      |
| DELETE | /todos   | Delete a todo      |

---

## 🛠 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/aachbehl/serverless-todo-app.git
cd serverless-todo-app
###2. Install dependencies
bash
Copy
Edit
npm install

3. Set up environment variables
Make sure your serverless.yml file contains the correct DB credentials and VPC configuration:

DB_HOST

DB_USER

DB_PASSWORD

DB_NAME

securityGroupIds

subnetIds

###4. Deploy the application
bash
Copy
Edit
serverless deploy
