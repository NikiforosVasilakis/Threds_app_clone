import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async() => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGOBD_URL) return console.log('URL NOT FOUND');
   
    if(isConnected){
        console.log('CONNECTED');
        return;
    } 

    try{
        await mongoose.connect(process.env.MONGOBD_URL);
        isConnected = true;
        console.log("CONNECTED");
    } catch (error){
        console.log('URL NOT FOUND')
    }

}