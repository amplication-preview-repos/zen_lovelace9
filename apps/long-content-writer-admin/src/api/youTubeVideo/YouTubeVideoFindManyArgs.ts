import { YouTubeVideoWhereInput } from "./YouTubeVideoWhereInput";
import { YouTubeVideoOrderByInput } from "./YouTubeVideoOrderByInput";

export type YouTubeVideoFindManyArgs = {
  where?: YouTubeVideoWhereInput;
  orderBy?: Array<YouTubeVideoOrderByInput>;
  skip?: number;
  take?: number;
};
