let fs = require('fs');

// fs.writeFile('myText.txt','This is about the node js.', function(){
//     console.log("Task Done")
// })

// fs.appendFile('myText.txt','This is about the node js.', function(){
//          console.log("Task Done")
//      })


fs.readFile('myText.txt','utf-8',function(err,data){
    if(err) throw err;
    console.log(data)
    
})
