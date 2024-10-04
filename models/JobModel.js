//mongoose.Schema 是 Mongoose 库中的一个核心概念，用于定义 MongoDB 数据库中的文档结构。Mongoose 是一个流行的 Node.js 库，用于与 MongoDB 数据库进行交互
import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
    {
    company: String,
    position: String,
    jobStatus: {
    type: String,
    enum: ["interview", "declined", "pending"],
    default: "pending",
    },
    jobType: {
    type: String,
    enum: ["full-time", "part-time", "internship"],
    default: "full-time",
    },
    jobLocation: {
    type: String,
    default: "my city",
    },
    },
    { timestamps: true }
);

export default mongoose.model("Job", JobSchema); //第一个参数是模型名称，第二个参数是文档的结构模式