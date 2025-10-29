import express from 'express';
import mongoose from 'mongoose';


const connectionone ="mongodb+srv://anupa1:1234@cluster0.bcgvj9t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app =express();
app.listen(4000,newFunction)
app.use(express.json());


function newFunction(){
    console.log("server is running on port 5000")
}
    
mongoose.connect(connectionone).then(
    ()=>console.log("connected to db")
).catch(
    ()=>console.log("error in db connection")
)

app.get("/",
    (req,resp)=>{
        console.log("hello from server");
        console.log(req.body);
        resp.json(
            {"massage":"hello from server"}
        )

    }
)
app.post("/",
    (req,resp)=>{
        console.log(req,body)
        console.log(resp);
    }
)