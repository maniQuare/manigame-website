
import mongoose from "mongoose";


// use typeScript conection...

type ConnectionObject = {
  isConnected?: number
}

const conection: ConnectionObject = {}


async function dbConfig(): Promise<void> {
  // Sefty check connection DB Already have
  if (conection.isConnected) {
    console.log("Already connected to database")
    return
  }
// New Connection on Database........
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "",{})

    conection.isConnected = db.connections[0].readyState

    console.log("DB Connected Successfuly")
// Handle the error Database connection........
  } catch (error) {
    
    console.log("Database connection failed",error)

    process.exit(1)
  }
}

export default dbConfig;
