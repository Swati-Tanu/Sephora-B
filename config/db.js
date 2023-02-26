const mongoose=require("mongoose");
require("dotenv").config();

const connection=mongoose.connect("mongodb+srv://tanu:tanu@cluster0.swdpmtl.mongodb.net/Sephora?retryWrites=true&w=majority");

module.exports={connection};