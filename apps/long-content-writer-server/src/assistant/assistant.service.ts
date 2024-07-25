import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssistantServiceBase } from "./base/assistant.service.base";

@Injectable()
export class AssistantService extends AssistantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
