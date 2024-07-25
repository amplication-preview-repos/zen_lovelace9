import { EBookWhereInput } from "./EBookWhereInput";
import { EBookOrderByInput } from "./EBookOrderByInput";

export type EBookFindManyArgs = {
  where?: EBookWhereInput;
  orderBy?: Array<EBookOrderByInput>;
  skip?: number;
  take?: number;
};
