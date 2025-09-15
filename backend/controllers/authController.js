const admin = require("firebase-admin")
const axios = require("axios");

const FIREBASE_API_KEY = "AIzaSyCpYheW7poiR7oxzA-h4EY8KYoslQcCViE"; // get from Firebase project settings

// Signin with email + password
const userSignin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const response = await axios.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`,
            {
                email,
                password,
                returnSecureToken: true,
            }
        );

        res.status(200).json({
            message: "userSignin successful",
            idToken: response.data.idToken,
            refreshToken: response.data.refreshToken,
            email: response.data.email,
        });
    } catch (error) {
        console.error("userSignin error:", error.response.data);
        res.status(400).json({
            message: "Invalid credentials",
            error: error.response.data,
        });
    }
};

// Signup with email + password
const userSignup = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userRecord = await admin.auth().createUser({
            email,
            password,
        });

        res.status(201).json({
            message: "User created successfully",
            user: {
                uid: userRecord.uid,
                email: userRecord.email,
            },
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    userSignin,
    userSignup
};