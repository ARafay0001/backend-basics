import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true,
        lowercase: true,
    },
}, { timestamps: true })

export default User = mongoose.model("User", userSchema)