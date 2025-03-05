import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async() => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log('URL NOT FOUND');
    if(isConnected) return console.log('CONNECTED');

    try{
        await mongoose.connect(process.env.MONGODB_URL);
        isConnected = true;
        console.log("CONNECTED");
    } catch (error){
        console.log('URL NOT FOUND')
    }



}