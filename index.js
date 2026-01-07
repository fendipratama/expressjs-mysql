"use strict";

const express = require("express");
const app = express();
const port = 3000;

const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "app_user",
    password: "app_pass",
    database: "app_db",
  },
});
    
// Example route to test database connection
app.get("/users", async (req, res) => {
  try {
    const users = await knex.select("*").from("users");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});