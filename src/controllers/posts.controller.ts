import { Request, Response } from "express";
import postsModel from "../models/posts.model";

export const Add = async (req: Request, res: Response) => {
    try {
        const newPost = new postsModel({
            title: req.body.title,
            description: req.body.description,
            isPublished: req.body.isPublished,
        });
        const savedPost = await newPost.save();
        return res.status(200).json({ message: "post saved successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

export const All = async (req: Request, res: Response) => {
    try {
        const allPosts = await postsModel.find({});
        return res.status(200).json({ message: "posts fetched successfully", data: allPosts });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

export const Show = async (req: Request, res: Response) => {
    try {
        const showSpecificPost = await postsModel.findOne({ _id: req.params._id });
        return res.status(200).json({ message: "post fetched successfully", data: showSpecificPost });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

export const Update = async (req: Request, res: Response) => {
    try {
        const upObj = { title: req.body.title, description: req.body.description, isPublished: req.body.isPublished };
        const updateSpecificPost = await postsModel.updateOne({ _id: req.params._id }, { $set: upObj });
        return res.status(200).json({ message: "post updated successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

export const Remove = async (req: Request, res: Response) => {
    try {
        const removePost = await postsModel.deleteOne({ _id: req.params._id });
        return res.status(200).json({ message: "post removed successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};
