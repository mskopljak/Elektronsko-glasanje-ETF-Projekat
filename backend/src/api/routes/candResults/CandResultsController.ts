import { Body, Controller, Post, Route } from "tsoa";
import { candResultsDAO } from "../../../mysql/models/CandResultsDAO";
import { Candidate } from "../../../mysql/models/Candidate";



@Route("results")

export class CandResultsController extends Controller{
  @Post("addVote")
  async addVote(@Body() selectedCandidates: Candidate[]): Promise<any>{
    return await candResultsDAO.addVote(selectedCandidates);
  }

}
