'use server';
import { NextRequest, NextResponse } from "next/server";
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://Customer:1234@cluster1.iaxk6bg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

export default async function WriteMovies(arrayIn) {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  try {
    // connect to db
    await client.connect();
    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
    // write movies to db
    const cursor = client.db.movies.insertMany(arrayIn);
    
    // close the connection
    await client.close();
  } catch (error) {
    console.log(error);
  }
}

