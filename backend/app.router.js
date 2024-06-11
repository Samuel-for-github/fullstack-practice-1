import { Router } from 'express';
import {api} from "./constant.js";
const router = Router();

router.route("/").get((req, res) => {
    res.status(200).send("Welcome to the home");
})
router.route("/login").get((req, res) => {
    res.send("Please login");
})
router.route("/api").get((req, res) => {
    res.json(api);
})

export default router;