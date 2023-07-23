import { dbConnection } from "../initMysql";

class MembersListDAO {
  getList() {
    return new Promise((resolve, reject) => {
      var sqlQuery =
        "select * from clan INNER JOIN matsekcija ON clan.idMatSek = matsekcija.idMatSek join regcentar on matsekcija.idRegCen = regcentar.idRegCen where tip = 1";

      dbConnection.query(sqlQuery, function (err, rows) {
        if (err) return reject(err);
        else resolve(JSON.parse(JSON.stringify(rows)));
      });
    });
  }
  getCandidates() {
    return new Promise((reslove, reject) => {
      var sqlQuery = "select * from clan INNER JOIN matsekcija ON clan.idMatSek = matsekcija.idMatSek join regcentar on matsekcija.idRegCen = regcentar.idRegCen join rezultatikandidovanja on clan.idCla = rezultatikandidovanja.idCla order by clan.idRegCen asc, clan.idMatSek asc,  rezultatikandidovanja.brojPutaKandidovan desc";
      dbConnection.query(sqlQuery, function (err, rows) {
        if (err) return reject(err);
        else reslove(JSON.parse(JSON.stringify(rows)));
      });
    });
  }
  getResults(){
    return new Promise((reslove, reject) => {
      var sqlQuery = "select * from clan INNER JOIN matsekcija ON clan.idMatSek = matsekcija.idMatSek join regcentar on matsekcija.idRegCen = regcentar.idRegCen join rezultatiglasanja on clan.idCla = rezultatiglasanja.idCla order by clan.idRegCen asc, clan.idMatSek asc,  rezultatiglasanja.brojGlasova desc";
      dbConnection.query(sqlQuery, function (err, rows) {
        if (err) return reject(err);
        else reslove(JSON.parse(JSON.stringify(rows)));
      });
    });
  }
}
export const membersListDAO = new MembersListDAO();
