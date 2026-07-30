const express=require('express');
const mongoose=require('mongoose');
const app=express();
app.use(express.urlencoded({extended:true}));
mongoose.connect("mongodb://127.0.0.1:27017/Employeedb")
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.log("Error connecting to MongoDB",err);
});
const EmployeeSchema=new mongoose.Schema({
    empid:Number,
    name:String,
    department:String
});
const Employee=mongoose.model("Employee",EmployeeSchema);
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});
app.post("/add",async(req,res)=>{
    try{
    await Employee.create({
        empid:req.body.empid,
        name:req.body.name,
        department:req.body.department
    });
     res.redirect("/view");
    
}catch (err) {
    console.error(err);
    res.status(500).send("Error adding employee");
}
});

app.get("/view",async(req,res)=>{
    const employees=await Employee.find();
    let result=`
    <table>
    <tr>
    <th>Employee ID</th>
    <th>Name</th>
    <th>Department</th>
    </tr>`;
    employees.forEach((employee)=>{
        result+=`
        <tr>
        <td>${employee.empid}</td>
        <td>${employee.name}</td>
        <td>${employee.department}</td>
        <td><a href="/delete/${employee._id}">Delete</a></td>
        </tr>`;
    });
    result+=`</table>`;
    res.send(result);
});
app.get("/delete/:id",async(req,res)=>{
    try{
        await Employee.findByIdAndDelete(req.params.id);
        res.redirect("/view");
    }catch(err){
        console.error(err);
    
    }
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});