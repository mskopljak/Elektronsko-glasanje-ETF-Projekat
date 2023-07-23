import { Body, Controller, Get, Path, Post, Put, Route } from "tsoa";
import { Voting } from "../../../mysql/models/Voting";
import { voteDAO } from "../../../mysql/models/VotingDAO";

@Route("voting")
export class VotingController extends Controller {
  @Put("vote")
  // async addVote(@Body() vote: Voting) {
  //   return await voteDAO.addVote(vote);
  // }

  async addVote(@Body() vote: Voting[]) {
    let promis=vote.map((singleVote)=>{
      return voteDAO.addVote(singleVote);
    })
    await Promise.all(promis);
    
  }
}