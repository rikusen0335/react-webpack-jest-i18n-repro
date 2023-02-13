import * as React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/components/App";
import { init } from "../src/lib/language";
import i18next from "i18next";

// describe("App", () => {
//   test("should render", () => {
//     render(<App />);
//     expect(screen.getByText("Hello World!")).toBeTruthy();
//   });
// });

test("init", () => {
  init();
  expect(i18next.t("user.account")).toBe("Account");
});
