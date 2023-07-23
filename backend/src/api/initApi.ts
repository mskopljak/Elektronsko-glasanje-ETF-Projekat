import express, { json, urlencoded } from "express";
import { RegisterRoutes as registerTsoaRoutes } from "./tsoa/generated/routes";
import cors from "cors";
import { port } from "./port";

export function initApi() {
  const app = express();

  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(cors())

  registerTsoaRoutes(app);

  //const port = port;

  app.listen(port, () => {
    console.log(`Aplikacija slusa na http://localhost:${port}`);
  });
}
