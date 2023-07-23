import { dbConnection } from "../initMysql";
import { RegCen } from "./RegCen";

class RegCenDAO {
  async regCenName(idRegCen: number): Promise<RegCen | null> {
    return new Promise((resolve, reject) => {
      var sqlQuery =
        "select * from clan JOIN regcentar ON clan.idRegCen=regcentar.idRegCen where " +
        "clan.idRegCen=?";
      var queryVar = [idRegCen];
      dbConnection.query(sqlQuery, queryVar, function (err, rows) {
        if (err) return reject(err);
        else resolve(JSON.parse(JSON.stringify(rows))[0]);
      });
    });
  }
  getCenter() {
    return new Promise((reslove, reject) => {
      var sqlQuery = "select * from regcentar";
      dbConnection.query(sqlQuery, function (err, rows) {
        if (err) return reject(err);
        else reslove(JSON.parse(JSON.stringify(rows)));
      });
    });
  }
}

export const regcenDAO = new RegCenDAO();
