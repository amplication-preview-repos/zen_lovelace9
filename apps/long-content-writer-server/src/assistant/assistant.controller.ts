import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AssistantService } from "./assistant.service";
import { AssistantControllerBase } from "./base/assistant.controller.base";

@swagger.ApiTags("assistants")
@common.Controller("assistants")
export class AssistantController extends AssistantControllerBase {
  constructor(
    protected readonly service: AssistantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
