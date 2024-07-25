import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { YouTubeVideoService } from "./youTubeVideo.service";
import { YouTubeVideoControllerBase } from "./base/youTubeVideo.controller.base";

@swagger.ApiTags("youTubeVideos")
@common.Controller("youTubeVideos")
export class YouTubeVideoController extends YouTubeVideoControllerBase {
  constructor(
    protected readonly service: YouTubeVideoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
