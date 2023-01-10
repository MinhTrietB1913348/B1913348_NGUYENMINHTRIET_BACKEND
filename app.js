const express =require("express");
const cors= require("cors");
const contactsRouter=require("./app/routers/contact.route");
const app=express();

const ApiError =require("./app/api-error");

//handle 404 response

app.use((req,res,next)=>{
    //code ở đây sẽ chạy khi không có route được định nghĩa nào
    //Khớp với yêu cầu. Gọi next() để chuyển sang middlware xử lý lỗi
    return next(new ApiError(404, "Resource not found"));
});

app.use((err,req,res,next)=>{
    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Srever Error",
    });
});

app.use(cors());

app.use(express.json());

app.use("/api/contacts",contactsRouter);

app.get("/",(req,res)=>{
    res.json({message: "Welcome to contact book application."});
});

module.exports=app;