
const fs = require("fs");
const db = require("../db/db.json");
const noteData = JSON.parse(fs.readFileSync('db/db.json', 'utf-8'))

module.exports = (app) => {
app.get("/api/notes",(req,res)=>{
fs.readFile("db/db.json", "utf8", (err, data)=>{
    if(err){
        console.log(err)
    } else {
        res.json(JSON.parse(data))
    }
})
});
app.post("/api/notes", function(req, res){
    if (notesData.length == 0){
        req.body.id = "0";
    } else{
        req.body.id = JSON.stringify(JSON.parse(notesData[notesData.length - 1].id) + 1);
    }
    
    console.log("req.body.id: " + req.body.id);

    notesData.push(req.body);

    writeToDB(notesData);
    console.log(notesData);
    res.json(req.body);
});


app.delete("/api/notes/:id", function(req, res){

    let id = req.params.id.toString();
    console.log(id);
    for (i=0; i < notesData.length; i++){
       
        if (notesData[i].id == id){
            console.log("match");
            res.send(notesData[i]);
            notesData.splice(i,1);
            break;
        }
    }
    writeToDB(notesData);

});
};

