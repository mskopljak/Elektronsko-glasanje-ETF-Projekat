import { Controller, Get, Path, Route } from "tsoa";
import { districtDAO } from "../../../mysql/models/DistrictDAO";

@Route("district")
export class DistrictController extends Controller{
    @Get("get")
    async get(){
        return await districtDAO.showDIstrict();
    }
    @Get("getDistrict")
    async getDistrict(){
        return await districtDAO.getDistrict();
    }
    @Get("districtName/{idMatSek}")
    async ms(@Path() idMatSek: number){
      return await districtDAO.districtName(idMatSek);
    }
}