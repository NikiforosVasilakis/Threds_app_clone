import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    username: {type: String, required: true},
    image: {type: String},
    bio: {type: String},
    
    threds: [
        {
            type:mongoose.Schema.ObjectId, 
            ref: 'Thread',
        }
    ],
 
    onboarded:{
        type: Boolean,
        default: false,
    },
    communities:[
        {
            type:mongoose.Schema.ObjectId, 
            ref: 'Community',
        }
    ]
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;