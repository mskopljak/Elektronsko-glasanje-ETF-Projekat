import { dbConnection } from "../initMysql";
import { User } from "./User";

class UserDAO{
  async login(korIme: string, sifra: string): Promise<User|null>{
    return new Promise((resolve, reject)=>{
        var sqlQuery = "select * from clan where " + 
        "korIme=? and sifra=?";
        var queryVar = [korIme, sifra];
        dbConnection.query(sqlQuery, queryVar, function(err, rows){
            if(err) return reject(err);
            else resolve(JSON.parse(JSON.stringify(rows))[0])
        })
        
    })
  }

  async candidatesByDistrict(idMatSek: number, idRegCen: number): Promise<User[]| null>{
    return new Promise((resolve, reject)=>{
      var sqlQuery = "select * from clan where " + 
      "idMatSek=? and idRegCen=? and tip=1";
      var queryVar = [idMatSek, idRegCen];
      dbConnection.query(sqlQuery, queryVar, function(err, rows){
        if(err) return reject(err);
        else resolve(JSON.parse(JSON.stringify(rows)))
      })
    })
  }

  async confirmVote(idCla: number): Promise<User| null>{
    return new Promise((resolve, reject)=>{
      var sqlQuery = "update clan set jeKandidovao=1 where idCla=? and tip=1";
      var queryVar = [idCla];
      dbConnection.query(sqlQuery, queryVar, function(err, rows){
        if(err) return reject(err);
        else resolve(JSON.parse(JSON.stringify(rows)))
      })
    })
  }

  async getAllCandidates(): Promise<User[] | null> {
    return new Promise((resolve, reject) => {
      var sqlQuery =
        "select C.idCla, C.imeCla, C.prezimeCla, M.nazivMatSek from clan C " +
        "inner join matSekcija M on C.idMatSek=M.idMatSek ";
      dbConnection.query(sqlQuery, null, function (err, rows) {
        if (err) reject(err);
        else resolve(JSON.parse(JSON.stringify(rows)));
      });
    });
  }

  async getElectedCandidates(): Promise<User[] | null> {
    return new Promise((resolve, reject) => {
      var sqlQuery =
        "select c.idCla, c.imeCla, c.prezimeCla from clan c " +
        "inner join rezultatikandidovanja r on c.idCla = r.idCla " +
        "where r.brojPutaKandidovan>0 ";
      dbConnection.query(sqlQuery, null, function (err, rows) {
        if (err) reject(err);
        else resolve(JSON.parse(JSON.stringify(rows)));
      });
    });
  }

  async isVoteStatus(idCla: number): Promise<User | null> {
    return new Promise((res, rej) => {
      var sqlQuery = "update clan set jeGlasao=1 where idCla=? and tip=1";
      var queryVar = [idCla];
      dbConnection.query(sqlQuery, queryVar, function (err, rows) {
        if (err) return rej(err);
        else res(JSON.parse(JSON.stringify(rows)));
      });
    });
  }

  
}

export const userDAO = new UserDAO();