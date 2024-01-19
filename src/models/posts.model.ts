import mongoose, { Schema, Document } from "mongoose";

interface Tposts extends Document {
    title: string;
    description: string;
    isPublished: boolean;
};

const postsSchema = new Schema<Tposts>({
    title: { type: String },
    description: { type: String },
    isPublished: { type: Boolean },
}, { timestamps: true });

export default mongoose.model<Tposts>("posts", postsSchema);
