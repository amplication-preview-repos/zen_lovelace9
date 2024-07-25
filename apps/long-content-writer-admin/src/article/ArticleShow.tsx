import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ArticleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Title" source="title" />
        <TextField label="Content" source="content" />
        <TextField label="MetaDescription" source="metaDescription" />
        <TextField label="MetaTitle" source="metaTitle" />
        <TextField label="MetaSlug" source="metaSlug" />
        <TextField label="Status" source="status" />
      </SimpleShowLayout>
    </Show>
  );
};
