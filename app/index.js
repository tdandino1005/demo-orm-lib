import express from "express";
import bookRouter from "./book/routes.js";
import sequelize from "./conn.js";

const app = express();

const PORT = 3001;

// Middleware to parse incoming request bodies (e.g. POST - CREATE)
app.use(express.json());

// app.use("/api/books", bookRouter);

app.use("/api/books", bookRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
