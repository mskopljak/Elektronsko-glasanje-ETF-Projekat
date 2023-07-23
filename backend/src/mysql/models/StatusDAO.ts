import { dbConnection } from "../initMysql";
import { Status } from "./Status";

class StatusDAO {
  getStatus() {
    return new Promise((resolve, reject) => {
      var sqlQuery = "select * from statusizbora where Id=1 ";
      //var sqlQuery = "update statusizbora where Id=1 ";
      dbConnection.query(sqlQuery, function (err, rows) {
        if (err) return reject(err);
        else resolve(JSON.parse(JSON.stringify(rows))[0]);
      });
    });
  }

  setStatus(statusIzbora: Status) {
    var sqlQuery = "update statusIzbora set statusIzbora=? where Id=1";
    var queryVar = [statusIzbora.statusIzbora];

    dbConnection.query(sqlQuery, queryVar, function (err, rows) {});
  }
}
export const statusDAO = new StatusDAO();
