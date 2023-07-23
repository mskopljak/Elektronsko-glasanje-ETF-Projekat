import { dbConnection } from "../initMysql";
import { District } from "./District";

class DIstrictDAO{
    showDIstrict(){
        return new Promise((reslove, reject) => {
            var sqlQuery = "select * from matsekcija  ";
            dbConnection.query(sqlQuery, function (err, rows) {
              if (err) return reject(err);
              else reslove(JSON.parse(JSON.stringify(rows)));
            });
          });
    }

    getDistrict(){
      return new Promise((reslove, reject) => {
        var sqlQuery = "select * from matsekcija  ";
        dbConnection.query(sqlQuery, function (err, rows) {
          if (err) return reject(err);
          else reslove(JSON.parse(JSON.stringify(rows)));
        });
      });
    }

    async districtName(idMatSek: number): Promise<District|null>{
      return new Promise((resolve, reject)=>{
          var sqlQuery = "select * from clan JOIN matsekcija ON clan.idMatSek=matsekcija.idMatSek where " + 
          "clan.idMatSek=?";
          var queryVar = [idMatSek];
          dbConnection.query(sqlQuery, queryVar, function(err, rows){
              if(err) return reject(err);
              else resolve(JSON.parse(JSON.stringify(rows))[0])
          })
          
      })
    }
}

export const districtDAO = new DIstrictDAO();


