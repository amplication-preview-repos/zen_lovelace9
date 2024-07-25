import { AssistantWhereInput } from "./AssistantWhereInput";
import { AssistantOrderByInput } from "./AssistantOrderByInput";

export type AssistantFindManyArgs = {
  where?: AssistantWhereInput;
  orderBy?: Array<AssistantOrderByInput>;
  skip?: number;
  take?: number;
};
