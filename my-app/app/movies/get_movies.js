'use server';
import { NextRequest, NextResponse } from "next/server";
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://Customer:1234@cluster1.iaxk6bg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

export default async function GetMovies() {
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
    
    // get movies from db
    const cursor = client.db.movies.find();
    
    // close the connection
    await client.close();
    
    // return cursor obj
    console.log(typeof(cursor));
    return cursor;
  } catch (error) {
    console.log(error);
  }
}

