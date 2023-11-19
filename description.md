# Step1 - Middleware
npm init

npm i express, morgan, dotenv, cookie-parser, express-session<br>
npm i -D nodemon

# Step2 - Routing, nunjucks, bcrypt
npm i nunjucks<br>
npm i bcrypt

# Directory Structure
WebSubject2<br>
├── public<br>
│    ├── account<br>
│    │    ├── create.html<br>
│    │    ├── delete.html<br>
│    │    ├── index.html<br>
│    │    ├── read.html<br>
│    │    └── update.html<br>
│    ├── info<br>
│    │    ├── create.html<br>
│    │    ├── delete.html<br>
│    │    ├── index.html<br>
│    │    ├── read.html<br>
│    │    └── update.html<br>
│    └── index.html<br>
├── routes<br>
│   ├── account.js<br>
│   ├── index.js<br>
│   └── info.js<br>
├── app.js<br>
└── package.json<br>