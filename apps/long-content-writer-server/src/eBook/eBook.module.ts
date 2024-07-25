import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EBookModuleBase } from "./base/eBook.module.base";
import { EBookService } from "./eBook.service";
import { EBookController } from "./eBook.controller";
import { EBookResolver } from "./eBook.resolver";

@Module({
  imports: [EBookModuleBase, forwardRef(() => AuthModule)],
  controllers: [EBookController],
  providers: [EBookService, EBookResolver],
  exports: [EBookService],
})
export class EBookModule {}
