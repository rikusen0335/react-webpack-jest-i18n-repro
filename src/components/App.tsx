import * as React from "react";
import "./../assets/scss/App.scss";

import reactLogo from "./../assets/img/react_logo.svg";
import { useTranslation } from "react-i18next";
import { init } from "../lib/language";

const App = () => {
  const { t } = useTranslation("translation");
  return (
    <div className="app">
      <h1>{t("user.account")}</h1>
      <p>Foo to the barz</p>
      <img src={reactLogo} height="480" />
    </div>
  );
};

export default App;
