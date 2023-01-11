import '../styles/globals.scss'
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import theme from "../src/theme";
import { AdminLayout } from "../layout";

function MyApp({ Component, pageProps }) {
  return (
    <AdminLayout>
      <Component {...pageProps} />
    </AdminLayout>
  );
}

export default MyApp
