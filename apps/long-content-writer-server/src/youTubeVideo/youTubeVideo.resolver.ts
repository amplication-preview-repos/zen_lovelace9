import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { YouTubeVideoResolverBase } from "./base/youTubeVideo.resolver.base";
import { YouTubeVideo } from "./base/YouTubeVideo";
import { YouTubeVideoService } from "./youTubeVideo.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => YouTubeVideo)
export class YouTubeVideoResolver extends YouTubeVideoResolverBase {
  constructor(
    protected readonly service: YouTubeVideoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
