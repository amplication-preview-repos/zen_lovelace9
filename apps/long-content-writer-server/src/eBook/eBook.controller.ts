import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EBookService } from "./eBook.service";
import { EBookControllerBase } from "./base/eBook.controller.base";

@swagger.ApiTags("eBooks")
@common.Controller("eBooks")
export class EBookController extends EBookControllerBase {
  constructor(
    protected readonly service: EBookService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
