const axios = require("axios");

const FIREBASE_API_KEY = "AIzaSyCpYheW7poiR7oxzA-h4EY8KYoslQcCViE"; // get from Firebase project settings

// Login with email + password
exports.login = async (req, res) => {
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
            message: "Login successful",
            idToken: response.data.idToken,
            refreshToken: response.data.refreshToken,
            email: response.data.email,
        });
    } catch (error) {
        console.error("Login error:", error.response.data);
        res.status(400).json({
            message: "Invalid credentials",
            error: error.response.data,
        });
    }
};
