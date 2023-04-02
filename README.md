# Secure_App_Project - NCI Smart Login Blog Application 
**Secure Application Project - Unsecure branch**

**Project Name**
NCI Smart Login Blog Appliciation for secure  programming 

**Table of Contents**

- Installation
- This branch shows the unsecure version of the application based on OWASP Top Ten
---

## Installation
### 1. Download unsecure branch `git checkout unsecure`
### 2. Install file dependencies 
-  `npm install express`
- `npm install nodemon`
### 3. Open your command prompt and `cd to the client folder`
- `npm start`
- This will run the client server and open the Blog application 
- Once the application is running, Open your command prompt and `cd to the server folder`
- `npm start`
- This will allow the backend api connection for the MongoDb Atlas database for the blog post creation 
### 4. The Blog Application will open on local host of your machine
### 5. From here, all of the blog posts can be edited, created or deleted by any user. No log in is required

---
## [This branch shows the unsecure version of the application based on OWASP Top Ten](https://owasp.org/www-project-top-ten/)
-   **Identification and authentication failures** - This application has no version of User roles or login features allowing any one with access to the URL to use the application. This is unsafe and give no safety for users or the owners of the applications
- **Injection** - with no login features or security implementation the application is open to SQL injection attacks
- **Server-side request forgery** - no JWT tokens set to prevent attackers opening the application to an unexpected destination. Also, allowing possible remote sessions. No validation of user tokens and nothing to validate the URL.
- **Insecure design** -  outdated variables and features in the application 
- **Vulnerable and outdated** - mongoose software, react and react-dom dependencies are out of date which could lead to unauthorised access to to the users operating system. 
- **Broken access controls** - this could lead to exposure of senstive data like Authentication and authorization information belonging to users
