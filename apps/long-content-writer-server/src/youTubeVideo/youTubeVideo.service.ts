import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { YouTubeVideoServiceBase } from "./base/youTubeVideo.service.base";

@Injectable()
export class YouTubeVideoService extends YouTubeVideoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
