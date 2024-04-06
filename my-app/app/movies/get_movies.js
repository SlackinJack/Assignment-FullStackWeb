'use server';
import { NextRequest, NextResponse } from "next/server";
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://Customer:1234@cluster1.iaxk6bg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

export default async function get_movies(req, res) {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  try {
    // Connect the client to the server	(optional starting in v4.7)
    client.connect();
    // Send a ping to confirm a successful connection
    client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const cursor = client.db("movieDatabase").collection("titles").find();
    client.close();
    return cursor;
  } catch (error) {
    console.log(error);
  }
}

