import  { ReactNode } from "react";
import QueryProvider from "./QueryProvider";
import CustomThemeProvider from "./ThemeProvider";

type Props = { children: ReactNode };

function AppProvider(props: Props) {
  return (
    <>
      <CustomThemeProvider>
        <QueryProvider>{props.children}</QueryProvider>
      </CustomThemeProvider>
    </>
  );
}

export default AppProvider;
