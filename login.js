const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const bcrypt = require("bcrypt");

const app = express();
const encoder = bodyParser.urlencoded({ extended: true });

// Create a connection to the database
const connection = mysql.createConnection({
    host: "Laptop-KA6CH3NR",
    user: "root",
    password: "1111",
    database: "bike"
});

// Connect to the database
connection.connect(function (error) {
    if (error) {
        console.error("Error connecting to the database:", error);
        return;
    }
    console.log("Connected to the database successfully!");
});

// Middleware to parse URL-encoded bodies
app.use(encoder);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname)));

// Handle root URL by redirecting to login page
app.get("/", function (req, res) {
    res.redirect("/login");
});

// Serve the login page
app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, 'login.html')); // Use __dirname to construct absolute path
});

// Handle login form submission
app.post("/login", function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    console.log("Login form submission received:", { email, password });

    connection.query("SELECT * FROM users WHERE email = ?", [email], function (error, results, fields) {
        if (error) {
            console.error("Query error:", error);
            res.status(500).send("Internal Server Error");
            return;
        }
        if (results.length > 0) {
            const user = results[0];
            bcrypt.compare(password, user.password, function (err, result) {
                if (result) {
                    console.log("Login successful, sending message to close popup");
                    res.send("<script>window.opener.postMessage('loginSuccess', '*'); window.close();</script>");
                } else {
                    console.log("Login failed, redirecting to /login");
                    res.redirect("/login.html");
                }
            });
        } else {
            console.log("Login failed, redirecting to /login");
            res.redirect("/login.html");
        }
    });
});

// Serve the signup page
app.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname, 'signup.html')); // Use __dirname to construct absolute path
});

// Handle signup form submission
app.post("/signup", function (req, res) {
    const { email, username, password } = req.body;

    console.log("Signup form submission received:", { email, username, password });

    bcrypt.hash(password, 10, function (err, hashedPassword) {
        if (err) {
            console.error("Error hashing password:", err);
            res.status(500).send("Internal Server Error");
            return;
        }
        connection.query("INSERT INTO users (email, username, password) VALUES (?, ?, ?)", [email, username, hashedPassword], function (error, results, fields) {
            if (error) {
                console.error("Signup error:", error);
                res.status(500).send("Internal Server Error");
                return;
            }
            console.log("User signed up successfully!");
            // Redirect to login page after signup
            res.redirect("/login.html");
        });
    });
});

// Serve the home page after login
app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html')); // Use __dirname to construct absolute path
});

// Set the app to listen on port 4000
app.listen(4000, function () {
    console.log("Server is running on port 4000");
});
