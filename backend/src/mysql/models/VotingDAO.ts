import { dbConnection } from "../initMysql";
import { Voting } from "./Voting";
import { User } from "./User";

class VotingDAO {
  async addVote(vote: Voting) {
    return new Promise((resolve, reject) => {
      var sqlQuery =
        "update rezultatiglasanja set brojGlasova = brojGlasova + ? " + "where idCla=? ";
      var queryVar = [vote.brojGlasova, vote.idCla];
      dbConnection.query(sqlQuery, queryVar, function (err, rows) {
        console.log(queryVar);
        if (err) reject(err);
        else {
          resolve(JSON.parse(JSON.stringify(rows)));
          console.log(rows);
        }
      });
    });
  }

}

export const voteDAO = new VotingDAO();
