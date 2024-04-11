const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
    // getting token from request headers 
    const token = req.headers.authorization?.split(' ')[1];

    // verifying token
    jwt.verify(token, 'your_secret_key', (err, decodedToken) => {
        if (err) {
            return res.status(401).json({ error: 'Unauthorizedd' });
        }
        // attaching user ID to the request for future verification, front end engineer can store it in the localStorage
        req.user = decodedToken;
        next();
    });
};

module.exports = authenticateUser;
