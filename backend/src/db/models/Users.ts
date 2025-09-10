import mongoose from "mongoose";


export const Users = mongoose.model('Users',

    new mongoose.Schema(

        {

            name: { type: String, required: true },
            email: { type: String, required: true, unique: true },
            password: { type: String },
            provider: { type: String, default: "google" },
            providerId: { type: String },

        },

        {
            timestamps: true
        }

    )

)