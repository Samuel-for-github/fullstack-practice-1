import {app} from "./app.js";
require('dotenv').config({
    path: "./env"
})


app.listen(process.env.PORT || 3001, ()=>{
    console.log("Server started on port " + process.env.PORT || 3001);
});