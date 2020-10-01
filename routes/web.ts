import * as express from "express";
import * as edge from "edge.js";

const routerWeb = express.Router();

// routerWeb.route("/").get((req, res) => {});
routerWeb.get("/", (req, res) => {
  res.render("home", { username: "Paulo" });
});

export default routerWeb;
