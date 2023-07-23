import { Controller, Get, Path, Route } from "tsoa";
import { regcenDAO } from "../../../mysql/models/RegCenDAO";


@Route("center")
export class RegCenterController extends Controller{
    @Get("get")
    async get(){
        return await regcenDAO.getCenter();
    }

    @Get("regCenName/{idRegCen}")
    async rc(@Path() idRegCen: number){
    return await regcenDAO.regCenName(idRegCen);
  }
}