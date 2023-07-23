import { Controller, Get, Route } from "tsoa";
import { membersListDAO } from "../../../mysql/models/MembersLIstDAO";                                   

@Route("membersList")
export class MemberListController extends Controller {
  @Get("get")
  async get() {
    return await membersListDAO.getList();
  }
  @Get('candidates')
    async getCandidate(){
      return await membersListDAO.getCandidates();
  }
  @Get('results')
  async getResults(){
    return await membersListDAO.getResults(); 
  }
}
