import mongoose from 'mongoose'

export async function connect(){
  try {
      mongoose.connect('mongodb+srv://nit474011gwl:userauthNextJS@cluster0.gkezg6l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
      const connection = mongoose.connection;

      connection.on('connected', ()=>{
        console.log("mongoDb Connected succesfully");
      })

      connection.on('error', (err)=>{
        console.log("mongoDb Connection error. Please make sure MongoDB is running." + err);
        process.exit();
      })
  } catch (error) {
    console.log(error);
    
  }
}