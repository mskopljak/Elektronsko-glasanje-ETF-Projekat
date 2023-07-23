import { initApi } from "./api/initApi";
import { dbConnection } from "./mysql/initMysql";

initApi();
dbConnection.connect();