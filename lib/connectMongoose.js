"use strict";

import mongoose from "mongoose";
// import { set, connection, connect } from 'mongoose';

mongoose.set("strictQuery", false);

// Events to handle errors
mongoose.connection.on("error", (err) => {
  console.log("MongoDB connection error", err);
  process.exit(1);
});

// Event that shows message when the connection is stablished
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB at", mongoose.connection.name);
});

// Connection to the database
mongoose.connect(process.env.MONGO_URI);

module.exports = mongoose.connection;
