import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ArticleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Articles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Title" source="title" />
        <TextField label="Content" source="content" />
        <TextField label="MetaDescription" source="metaDescription" />
        <TextField label="MetaTitle" source="metaTitle" />
        <TextField label="MetaSlug" source="metaSlug" />
        <TextField label="Status" source="status" />
      </Datagrid>
    </List>
  );
};
