const fs=require('fs');
const filename="sample.txt";
const data =`
Employee Name:'Sarun'
Employee Id:01
`;
fs.writeFile(filename,data,function(err)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("file created");
    }
    fs.readFile(filename,(err,data)=>{
        if(err)
        {
            console.logg(err);
        }
        else{
            console .log(data);
        }
    });
    console.log(data);
});