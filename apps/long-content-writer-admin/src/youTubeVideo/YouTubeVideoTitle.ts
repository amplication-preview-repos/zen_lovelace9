import { YouTubeVideo as TYouTubeVideo } from "../api/youTubeVideo/YouTubeVideo";

export const YOUTUBEVIDEO_TITLE_FIELD = "title";

export const YouTubeVideoTitle = (record: TYouTubeVideo): string => {
  return record.title?.toString() || String(record.id);
};
