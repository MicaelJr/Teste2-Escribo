const express = require("express");
const AuthController = require("./controllers/AuthController");
const AdminController = require("./controllers/AdminController");

const authenticateMiddleware = require("./middlewares/authenticate");

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use("/auth", AuthController);
app.use("/admin", authenticateMiddleware, AdminController);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
