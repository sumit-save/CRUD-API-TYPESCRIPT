import { Router, Request, Response } from "express";
import * as postsController from "../controllers/posts.controller";

const router = Router();

// Add a new post
router.post("/posts", async (req: Request, res: Response) => {
    await postsController.Add(req, res);
});

// Show all posts
router.get("/posts", async (req: Request, res: Response) => {
    await postsController.All(req, res);
});

// Show specific post
router.get("/posts/:_id", async (req: Request, res: Response) => {
    await postsController.Show(req, res);
});

// Update specific post
router.put("/posts/:_id", async (req: Request, res: Response) => {
    await postsController.Update(req, res);
});

// Remove specific post
router.delete("/posts/:_id", async (req: Request, res: Response) => {
    await postsController.Remove(req, res);
});

export default router;
