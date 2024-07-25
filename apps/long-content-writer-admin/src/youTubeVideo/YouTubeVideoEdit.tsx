import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const YouTubeVideoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="URL" source="url" />
        <TextInput label="MainKeyword" source="mainKeyword" />
        <TextInput label="Content" multiline source="content" />
      </SimpleForm>
    </Edit>
  );
};
