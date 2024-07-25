import { EBook as TEBook } from "../api/eBook/EBook";

export const EBOOK_TITLE_FIELD = "title";

export const EBookTitle = (record: TEBook): string => {
  return record.title?.toString() || String(record.id);
};
