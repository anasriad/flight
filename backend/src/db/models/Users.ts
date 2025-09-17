import mongoose from "mongoose";


export const Users = mongoose.model('Users',

    new mongoose.Schema(

        {

            email: { type: String, required: true, unique: true },
            password: { type: String },
            provider: { type: String, default: "google" },
            providerId: { type: String },
            picture:{type:String, required:false},
            firstName:{ type: String, required: true },
            lastName:{ type: String, required: true },

        },

        {
            timestamps: true
        }

    )

)