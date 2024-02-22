import { ReactNode } from "react";
import QueryProvider from "./QueryProvider";
import CustomThemeProvider from "./ThemeProvider";
import AuthProvider from "./AuthProvider";

type Props = { children: ReactNode };

function AppProvider(props: Props) {
  return (
    <>
      <AuthProvider>
        <CustomThemeProvider>
          <QueryProvider>{props.children}</QueryProvider>
        </CustomThemeProvider>
      </AuthProvider>
    </>
  );
}

export default AppProvider;
