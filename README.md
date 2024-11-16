Blog Website
This is a simple blog website where users can read programming-related blogs, like posts, leave comments, and more. It also includes user authentication so only authorized users can access certain parts of the site.

Key Features
User Authentication: Allows users to sign up, log in, and access their personal dashboard.
Blog Reading: Users can read various blogs related to programming.
Comments and Likes: Users can leave comments and like posts.
Role-Based Access: Admin users can manage blogs and users, while regular users can only read and interact with posts.
How to Install and Run the Project
Backend (API)
Clone the Repository:
First, copy the project to your computer by running the following command:

bash
Copy code
git clone https://github.com/excuation/mern-blog
Install Backend Dependencies:
Go to the API folder (backend) and install the necessary packages:

bash
Copy code
cd api
npm install
Start the Backend Server:
After the packages are installed, run the server:

bash
Copy code
nodemon index.js
Frontend (Client)
Go to the Frontend Folder:
Navigate to the client (frontend) folder:

bash
Copy code
cd client
Install Frontend Dependencies:
Install all the required dependencies:

bash
Copy code
npm install
Start the Frontend Server:
To start the frontend, run:

bash
Copy code
npm run dev
Now, the app should be running on your local machine! The backend will usually be running on http://localhost:5000, and the frontend will be on http://localhost:3000.

How It Works
Users:
Users can browse blogs, comment on posts, and like them.
Users must be logged in to comment, like posts, or manage content.
Admins:
Admins can create, update, or delete blogs, as well as manage users.
Authentication:
Users need to log in before they can comment, like, or manage content.
Admins and users have different levels of access to certain features.
Technologies Used
Frontend: React.js for building the user interface. We use libraries like Flowbite-React for UI components and Axios for making API requests.
Backend: Node.js with Express.js. It uses JWT (JSON Web Tokens) for user authentication and Cookie Parser to handle cookies.
Database: MongoDB to store blog posts and user data.
State Management: Redux for managing global state across the app.
Authentication Process
JWT (JSON Web Tokens):
After users log in, a token is generated and sent back to the frontend. This token is stored in a secure cookie and is sent with every request to authenticate users.
Cookie Parser:
The backend uses a "cookie parser" to read the token from the cookies and verify that the user is authorized to perform certain actions.
Why Not Use Local Storage?
Local storage is not as secure as cookies for storing sensitive data like authentication tokens. Cookies are more secure because:

They are not directly accessible via JavaScript, reducing the risk of attacks like XSS (Cross-Site Scripting).
Cookies can be configured with Secure and HttpOnly flags for enhanced security.
Setup Instructions
Clone the repository:

bash
Copy code
git clone https://github.com/excuation/mern-blog
Navigate to the backend and frontend directories and install dependencies as mentioned above.

Start the backend and frontend servers.

Visit the app in your browser, typically:

Backend (API): http://localhost:5000
Frontend (Client): http://localhost:3000
API Documentation
Base URL: /api
Routes:
Authentication:

POST /auth/signup: Sign up a new user.
POST /auth/login: Log in and receive a JWT token.
Blogs:

GET /blogs: Get all blog posts.
POST /blogs: Create a new blog (admin only).
PUT /blogs/:id: Update a blog (admin only).
DELETE /blogs/:id: Delete a blog (admin only).
Comments:

POST /blogs/:id/comments: Add a comment to a blog post.
GET /blogs/:id/comments: Get all comments for a specific blog post.
Likes:

POST /blogs/:id/like: Like a blog post.
POST /blogs/:id/unlike: Unlike a blog post.
Screenshots / Demo Video![image](https://github.com/user-attachments/assets/8bf2d888-d1db-4a10-90f3-39d9b90f2f2e),
youtube video )https://youtu.be/ZTw62XHQBKU)





Future Improvements
Add email verification during signup.
Implement password reset functionality.
Add a rich text editor for creating blog posts.
Search functionality for finding blog posts by title or keywords.
Implement real-time comments using WebSockets.
Improve accessibility for better user experience.
Add notifications for new comments, likes, etc.
Code Quality
Consistent coding style throughout the project.
Proper error handling for API requests and responses.
Loading states displayed while waiting for data from the API.
Input validation on forms (e.g., email validation, password strength).
Responsive design to ensure the app works well on all devices.
Clean Commit History
We maintain a clean and descriptive commit history with the following best practices:

Atomic commits for individual changes.
Meaningful commit messages that describe the changes clearly.
Branching model where features and bug fixes are worked on separate branches.
