# Anyware Software (Fullstack Challenge)

---

## Backend Part

### Description

The backend part consists of web services for retrieving and performing CRUD operations on announcement and quiz data. The code is structured, follows best practices, and implements business rules accurately.

### API Endpoints

#### Announcement Service

- `GET /announcements/get-announcemen`: Retrieve all announcements.
- `GET /announcement/getOne-announcement/{id}`: Retrieve a specific announcement.
- `POST /announcement/create-announcement`: Create a new announcement.
- `PUT /announcement/update-announcement/{id}`: Update an existing announcement.
- `DELETE /announcement/delete-announcement/{id}`: Delete an announcement.

#### Quiz Service

- `GET /quiz/get-all`: Retrieve all quizzes.
- `GET /quiz/getOne-quiz/{id}`: Retrieve a specific quiz.
- `POST /quiz/create-quiz`: Create a new quiz.
- `PUT /quiz/update-quiz/{id}`: Update an existing quiz.
- `DELETE /quiz/delete-quiz/{id}`: Delete a quiz.

### Technologies

- Node.js
- Express.js
- MongoDB

