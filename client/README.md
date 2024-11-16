Blog Website
This is a simple blog website where users can read programming-related blogs, like posts, leave comments, and more. It also has user authentication so only authorized users can access certain parts of the site.

Key Features
User Authentication: Allows users to sign up, log in, and access their personal dashboard.
Blog Reading: Users can read various blogs related to programming.
Comments and Likes: Users can leave comments and like posts.
Role-Based Access: Admin users can manage blogs and users, while regular users can only read and interact with posts.
How to Install and Run the Project
Backend (API)
Clone the Repository: First, copy the project to your computer by running:

bash
Copy code
git clone https://github.com/excuation/mern-blog
Install Backend Dependencies: Go to the API folder (backend) and install the necessary packages:

bash
Copy code
cd api
npm install
Start the Backend Server: After the packages are installed, run the server:

bash
Copy code
nodemon index.js
Frontend (Client)
Go to the Frontend Folder: Navigate to the client (frontend) folder:

bash
Copy code
cd client
Install Frontend Dependencies: Install all the required dependencies:

bash
Copy code
npm install
Start the Frontend Server: To start the frontend, run:

bash
Copy code
npm run dev
Now, the app should be running on your local machine!

How It Works
Users: Users can browse blogs, comment on posts, and like them.
Admins: Admins can create, update, or delete blogs, as well as manage users.
Authentication: Users need to log in before they can comment, like, or manage content. Admins and users have different levels of access.
Technologies Used
Frontend: The frontend is built using React for the user interface. We use libraries like Flowbite-React for UI components and Axios for making API requests.
Backend: The backend is built with Node.js and Express. It uses JWT (JSON Web Tokens) for user authentication and Cookie Parser to handle cookies.
Database: We use MongoDB to store blog posts and user data.
State Management: Redux is used to manage the state across the app.
Authentication Process
JWT (JSON Web Tokens): After users log in, a token is generated and sent back to the frontend. This token is stored in a cookie (so it's more secure) and is sent with every request to authenticate users.
Cookie Parser: The backend uses a "cookie parser" to read the token from the cookies and verify that the user is authorized to perform certain actions.
Why Not Use Local Storage?
Local storage is not as secure as cookies for storing sensitive data like authentication tokens. Cookies are more secure because they are not directly accessible through JavaScript, reducing the risk of attacks like XSS (Cross-Site Scripting).