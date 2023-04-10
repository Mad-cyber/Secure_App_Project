# Secure_App_Project - NCI Smart Login Blog Application 
**Secure Application Project - Secure branch**

**Project Name -**
NCI Smart Login Blog Appliciation for secure  programming 

**Table of Contents**

- Blog application
- Deployment
---

## Blog Application 
### 1. the secure branch has been deployed and can be accessed on the URL
https://secure-app-project.herokuapp.com/

---
## [This branch shows the secure version of the application based on OWASP and uses the below to deal with the issues discussed in the unsecure branch](https://owasp.org/www-project-top-ten/)
**JWT (JSON Web Token)** is a popular mechanism for authentication and authorization in web applications, and there are several OWASP secure features that can be applied when using JWT in a React app. Here are some of them:
1.	**Secure transmission:** The JWT token should be transmitted over HTTPS to prevent interception and tampering. This ensures that the token is transmitted securely between the server and the client.
2.	**Strong secret key:** The secret key used to sign the JWT token should be strong and kept confidential. This ensures that only the authorized parties can generate and verify the JWT token.
3.	**Token expiration:** The JWT token should have an expiration time to limit the time window for attackers to exploit stolen tokens. This also ensures that the token is not valid indefinitely.
4.	**Token revocation:** It is important to have a mechanism to revoke JWT tokens when they are no longer needed or when a user logs out. This prevents unauthorized access to the application.
5.	**Token validation:** The server-side application should validate the JWT token to ensure that it is not tampered with and that it has not expired. This prevents attackers from using tampered or expired tokens to gain unauthorized access.
6.	**Access control:** JWT can be used to implement role-based access control (RBAC) by including user roles or permissions in the token. This ensures that users only have access to the resources they are authorized to access.
