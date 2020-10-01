import * as express from "express";
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
import * as compression from "compression";
import * as edge from "edge.js";
import * as path from "path";
import { config, engine } from "express-edge";

import Cors from "../config/cors";
import Database from "../config/database";

import RouterApi from "../routes/api";
import RouterWeb from "../routes/web";

import AuthMiddleware from "../app/middlewares/auth";

class Boostrap {
  public app: express.Application;
  public cors: Cors;
  private _database: Database;

  constructor() {
    dotenv.config();
    this.cors = new Cors();
    this.app = express();
    this._database = new Database();
    this._database.createConnection();
    this.edge();
    this.middler();
    this.routes();
  }

  middler() {
    this.app.use(this.cors.init());

    // this.app.use(AuthMiddleware.handle);

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(compression());
  }

  edge() {
    // Configure Edge if need to
    config({ cache: process.env.NODE_ENV === "production" });

    // Automatically sets view engine and adds dot notation to app.render
    this.app.use(engine);
    this.app.set("views", `./resources/views`);
  }

  routes() {
    this.app.use("/", RouterWeb);
    this.app.use("/api", RouterApi);
  }
}

export default new Boostrap();
