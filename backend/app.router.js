import { Router } from 'express';

const router = Router();

router.route("/").get((req, res) => {
    res.status(200).send("Welcome to the home");
})
router.route("/login").get((req, res) => {
    res.send("Please login");
})

export default router;