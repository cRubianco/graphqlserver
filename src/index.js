// const express = require('express');
import express from "express";
import { graphqlHTTP } from "express-graphql";

const app = express();
const schema = {};

app.get('/', (req, res) => {
  res.json('Hello world');
});

app.use('/grp', graphqlHTTP({
  graphiql: true,
  schema: schema
}));

app.listen(3000, () => console.log(`Server on port 3000`));
