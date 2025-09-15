const admin = require("../config/firebase");

// Verify Firebase ID Token
const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Expect: Bearer <token>

    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {
        const decoded = await admin.auth().verifyIdToken(token);
        req.user = decoded;
        next();
    } catch (error) {
        console.error("Token verification error:", error);
        res.status(401).json({ message: "Invalid or expired token" });
    }
};

module.exports = authMiddleware;
