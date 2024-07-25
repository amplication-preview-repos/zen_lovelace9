import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const YouTubeVideoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="URL" source="url" />
        <TextInput label="MainKeyword" source="mainKeyword" />
        <TextInput label="Content" multiline source="content" />
      </SimpleForm>
    </Create>
  );
};
