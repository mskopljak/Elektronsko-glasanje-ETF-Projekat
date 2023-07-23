import { dbConnection } from "../initMysql";
import { CandResults } from "./CandResults";
import { Candidate } from "./Candidate";



class CandResultsDAO{
  async addVote(selectedCandidates: Candidate[]): Promise<CandResults[]|null>{
    return new Promise((resolve, reject)=>{
        var sqlQuery = "update rezultatikandidovanja set brojPutaKandidovan=brojPutaKandidovan + 1 where idCla  in (?)";
        var queryVars = selectedCandidates.map(candidate => candidate.idCla);
        dbConnection.query(sqlQuery, [queryVars], function(err, rows){
            if(err) return reject(err);
            else resolve(JSON.parse(JSON.stringify(rows)))
        })
        
    })
  }

  
}

export const candResultsDAO = new CandResultsDAO();

