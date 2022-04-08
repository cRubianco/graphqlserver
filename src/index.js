import { express } from "express";
import { graphqlHTTP } from "express-graphql";
import { CONSTANTS, SCHEMA } from "./constants/schema";

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  })
})

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema: SCHEMA,
}));

app.listen(3000, () => console.log(`Server on port 3000`));
