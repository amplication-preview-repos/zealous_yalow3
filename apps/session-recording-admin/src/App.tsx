import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SessionList } from "./session/SessionList";
import { SessionCreate } from "./session/SessionCreate";
import { SessionEdit } from "./session/SessionEdit";
import { SessionShow } from "./session/SessionShow";
import { RecordingList } from "./recording/RecordingList";
import { RecordingCreate } from "./recording/RecordingCreate";
import { RecordingEdit } from "./recording/RecordingEdit";
import { RecordingShow } from "./recording/RecordingShow";
import { NetworkActivityList } from "./networkActivity/NetworkActivityList";
import { NetworkActivityCreate } from "./networkActivity/NetworkActivityCreate";
import { NetworkActivityEdit } from "./networkActivity/NetworkActivityEdit";
import { NetworkActivityShow } from "./networkActivity/NetworkActivityShow";
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
        title={"SessionRecording"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Session"
          list={SessionList}
          edit={SessionEdit}
          create={SessionCreate}
          show={SessionShow}
        />
        <Resource
          name="Recording"
          list={RecordingList}
          edit={RecordingEdit}
          create={RecordingCreate}
          show={RecordingShow}
        />
        <Resource
          name="NetworkActivity"
          list={NetworkActivityList}
          edit={NetworkActivityEdit}
          create={NetworkActivityCreate}
          show={NetworkActivityShow}
        />
      </Admin>
    </div>
  );
};

export default App;
