import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AssistantModuleBase } from "./base/assistant.module.base";
import { AssistantService } from "./assistant.service";
import { AssistantController } from "./assistant.controller";
import { AssistantResolver } from "./assistant.resolver";

@Module({
  imports: [AssistantModuleBase, forwardRef(() => AuthModule)],
  controllers: [AssistantController],
  providers: [AssistantService, AssistantResolver],
  exports: [AssistantService],
})
export class AssistantModule {}
