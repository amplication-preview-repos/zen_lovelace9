import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { YouTubeVideoModuleBase } from "./base/youTubeVideo.module.base";
import { YouTubeVideoService } from "./youTubeVideo.service";
import { YouTubeVideoController } from "./youTubeVideo.controller";
import { YouTubeVideoResolver } from "./youTubeVideo.resolver";

@Module({
  imports: [YouTubeVideoModuleBase, forwardRef(() => AuthModule)],
  controllers: [YouTubeVideoController],
  providers: [YouTubeVideoService, YouTubeVideoResolver],
  exports: [YouTubeVideoService],
})
export class YouTubeVideoModule {}
