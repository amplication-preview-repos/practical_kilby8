import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BiaList } from "./bia/BiaList";
import { BiaCreate } from "./bia/BiaCreate";
import { BiaEdit } from "./bia/BiaEdit";
import { BiaShow } from "./bia/BiaShow";
import { DocumentList } from "./document/DocumentList";
import { DocumentCreate } from "./document/DocumentCreate";
import { DocumentEdit } from "./document/DocumentEdit";
import { DocumentShow } from "./document/DocumentShow";
import { RaList } from "./ra/RaList";
import { RaCreate } from "./ra/RaCreate";
import { RaEdit } from "./ra/RaEdit";
import { RaShow } from "./ra/RaShow";
import { GapAssessmentList } from "./gapAssessment/GapAssessmentList";
import { GapAssessmentCreate } from "./gapAssessment/GapAssessmentCreate";
import { GapAssessmentEdit } from "./gapAssessment/GapAssessmentEdit";
import { GapAssessmentShow } from "./gapAssessment/GapAssessmentShow";
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
        title={"RAeY Application"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Bia"
          list={BiaList}
          edit={BiaEdit}
          create={BiaCreate}
          show={BiaShow}
        />
        <Resource
          name="Document"
          list={DocumentList}
          edit={DocumentEdit}
          create={DocumentCreate}
          show={DocumentShow}
        />
        <Resource
          name="Ra"
          list={RaList}
          edit={RaEdit}
          create={RaCreate}
          show={RaShow}
        />
        <Resource
          name="GapAssessment"
          list={GapAssessmentList}
          edit={GapAssessmentEdit}
          create={GapAssessmentCreate}
          show={GapAssessmentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
