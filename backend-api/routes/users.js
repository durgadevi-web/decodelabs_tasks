const express = require("express");
const router = express.Router();

// In-memory array
let users = [
    {
        id: 1,
        name: "Karthik",
        email: "karthik@gmail.com",
        age: 22
    },
    {
        id: 2,
        name: "Rahul",
        email: "rahul@gmail.com",
        age: 23
    }
];

// GET All Users
router.get("/", (req, res) => {
    res.status(200).json(users);
});

// GET User By ID
router.get("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json(user);

});

// POST User
router.post("/", (req, res) => {

    const { name, email, age } = req.body;

    // Empty Field Validation
    if (!name || !email || !age) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    // Email Validation
    if (!email.includes("@")) {
        return res.status(400).json({
            message: "Invalid Email"
        });
    }

    // Age Validation
    if (age < 18) {
        return res.status(400).json({
            message: "Age must be 18 or above"
        });
    }

    // Duplicate Email Check
    const emailExists = users.find(user => user.email === email);

    if (emailExists) {
        return res.status(400).json({
            message: "Email already exists"
        });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email,
        age
    };

    users.push(newUser);

    res.status(201).json({
        message: "User Added Successfully",
        user: newUser
    });

});

// PUT User
router.put("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const { name, email, age } = req.body;

    if (name) user.name = name;
    if (email) user.email = email;
    if (age) user.age = age;

    res.status(200).json({
        message: "User Updated Successfully",
        user
    });

});

// DELETE User
router.delete("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    users.splice(index, 1);

    res.status(200).json({
        message: "User Deleted Successfully"
    });

});

module.exports = router;