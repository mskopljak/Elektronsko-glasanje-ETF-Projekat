import { Body, Controller, Get, Path, Post, Route } from "tsoa";
import { statusDAO } from "../../../mysql/models/StatusDAO";
import { Status } from "../../../mysql/models/Status";

@Route("status")
export class StatusController extends Controller {
  @Get("get")
  async get() {
    return await statusDAO.getStatus();
  }

  @Post("set")
  async set(@Body() statusIzbora: Status) {
    return statusDAO.setStatus(statusIzbora);
  }
}