import mongoose from 'mongoose'


async function connect() {
    try{
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log("connect success")
    }catch(error){
        console.log("connect faile")
    }
}

export { connect }  