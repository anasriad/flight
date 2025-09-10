import jwt from 'jsonwebtoken'

const SECRET = process.env.SECRET_KEY!

export const generateToken = (userId: string) => {
    return jwt.sign({ id: userId }, SECRET, { expiresIn: "30m" });
};

export const generateRefreshToken = (userId: string) => {
    return jwt.sign({ id: userId }, SECRET, { expiresIn: "7d" });
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, SECRET) as { id: string };
};