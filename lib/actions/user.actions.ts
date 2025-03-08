"use server"

import { relative } from "path";
import User from "../models/user.model"
import { connectToDB } from "../mongoose"
import { revalidatePath } from "next/cache";

export async function UpdateUser
    (userId: string, 
    username:string, 
    image: string, 
    bio: string, 
    path:string): Promise<void>{

    connectToDB();

    try{

        await User.findOneAndUpdate(
            {id: userId},
            {
                username: username.toLowerCase(),
                image: image,  
                bio: bio,
                path:path,
                onboard: true
            },
            {upsert: true},    
        );
        if(path === 'profile/path'){
            revalidatePath(path);
        } 
    }catch(error){
        throw new Error(`Failed to create $(error.message)`)
    } 
}

