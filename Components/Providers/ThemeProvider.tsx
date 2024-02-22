import { ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";

type Props = { children: ReactNode };

function CustomThemeProvider(props: Props) {
  const theme = createTheme({
    typography: {
      fontFamily: "ProductSans",
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 16,
            },
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default CustomThemeProvider;
