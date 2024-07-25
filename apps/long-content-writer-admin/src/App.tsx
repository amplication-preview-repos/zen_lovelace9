import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BookList } from "./book/BookList";
import { BookCreate } from "./book/BookCreate";
import { BookEdit } from "./book/BookEdit";
import { BookShow } from "./book/BookShow";
import { EBookList } from "./eBook/EBookList";
import { EBookCreate } from "./eBook/EBookCreate";
import { EBookEdit } from "./eBook/EBookEdit";
import { EBookShow } from "./eBook/EBookShow";
import { YouTubeVideoList } from "./youTubeVideo/YouTubeVideoList";
import { YouTubeVideoCreate } from "./youTubeVideo/YouTubeVideoCreate";
import { YouTubeVideoEdit } from "./youTubeVideo/YouTubeVideoEdit";
import { YouTubeVideoShow } from "./youTubeVideo/YouTubeVideoShow";
import { ArticleList } from "./article/ArticleList";
import { ArticleCreate } from "./article/ArticleCreate";
import { ArticleEdit } from "./article/ArticleEdit";
import { ArticleShow } from "./article/ArticleShow";
import { AssistantList } from "./assistant/AssistantList";
import { AssistantCreate } from "./assistant/AssistantCreate";
import { AssistantEdit } from "./assistant/AssistantEdit";
import { AssistantShow } from "./assistant/AssistantShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"LongContentWriter"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Book"
          list={BookList}
          edit={BookEdit}
          create={BookCreate}
          show={BookShow}
        />
        <Resource
          name="EBook"
          list={EBookList}
          edit={EBookEdit}
          create={EBookCreate}
          show={EBookShow}
        />
        <Resource
          name="YouTubeVideo"
          list={YouTubeVideoList}
          edit={YouTubeVideoEdit}
          create={YouTubeVideoCreate}
          show={YouTubeVideoShow}
        />
        <Resource
          name="Article"
          list={ArticleList}
          edit={ArticleEdit}
          create={ArticleCreate}
          show={ArticleShow}
        />
        <Resource
          name="Assistant"
          list={AssistantList}
          edit={AssistantEdit}
          create={AssistantCreate}
          show={AssistantShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
