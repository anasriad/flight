import rateLimit from "express-rate-limit";

const Limiter = rateLimit({
    windowMs: 60 * 60 * 100,
    max: 5,
    message: "Too many request from your side, try again 1 hour later."
})

export default Limiter