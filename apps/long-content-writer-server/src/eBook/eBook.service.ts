import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EBookServiceBase } from "./base/eBook.service.base";

@Injectable()
export class EBookService extends EBookServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
