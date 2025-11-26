import moongoose from "mongoose"

const catogarySchema = new moongoose.Schema({
    name: { type: string,
        required: true,
        unique: true,
        lowercase: true,
    },
}, { timestamps: true })  

 export default Catogary = moongoose.model("Catogary", catogarySchema)  