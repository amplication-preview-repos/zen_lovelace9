import { Assistant as TAssistant } from "../api/assistant/Assistant";

export const ASSISTANT_TITLE_FIELD = "name";

export const AssistantTitle = (record: TAssistant): string => {
  return record.name?.toString() || String(record.id);
};
