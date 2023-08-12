import express, { Request, Response } from "express";
import AppRouter from "./router";
import { config } from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
config();
class App {
  private app = express();
  constructor() {
    this.plugins();
    this.routes();
  }
  routes() {
    this.app.get("/", (req: Request, res: Response) => {
      res.status(200).send({
        statusCode: 200,
        statusMessage: "Ok",
        data: {
          api_version: "1.0.0",
        },
      });
    });
    this.app.use(AppRouter);
  }
  plugins() {
    this.app.use(cors({ origin: "*" }));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }
  async main() {
    this.app.listen(process.env.PORT, () => {
      console.log(`server is running at port ${process.env.PORT}`);
    });
  }
}

const app = new App();
app.main();
