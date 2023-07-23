import { Body, Controller, Get, Path, Post, Put, Route } from "tsoa";
import { User } from "../../../mysql/models/User";
import { userDAO } from "../../../mysql/models/UserDAO";
//import { voteDAO } from "../../../mysql/models/VotingDAO";

@Route("users")
export class UserController extends Controller {
  @Post("login")
  async login(@Body() user: User) {
    return await userDAO.login(user.korIme, user.sifra);
  }

  @Post("candidatesByDistrict")
  async candidatesByDistrict(@Body() user: User){
    return await userDAO.candidatesByDistrict(user.idMatSek, user.idRegCen);
  }

  @Post("confirmVote")
  async confirmVote(@Body() user: User){
    return await userDAO.confirmVote(user.idCla);
  }


  // @Get("allCandidates")
  // async getAllCandidates(){
  //   return await userDAO.getAllCandidates();
  // }

  @Get("electedCandidates")
  async getElectedCandidates() {
    return await userDAO.getElectedCandidates();
  }

  @Put("isVoteStatus")
  async isVoteStatus(@Body() user: User) {
    return await userDAO.isVoteStatus(user.idCla);
  }
}
