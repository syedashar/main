import "../styles/globals.scss";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import theme from "../src/theme";
import { AdminLayout } from "../layout";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
    const router = useRouter();
  const ignoreLayoutPages = ["/auth/signin", "/auth/signup"];
  const isIgnore = ignoreLayoutPages.includes(router?.pathname);
  return (
    <>
       <Provider store={store}> 
        {isIgnore ? (
          <Component {...pageProps} />
        ) : (
          <AdminLayout>
            <Component {...pageProps} />
          </AdminLayout>
        )}
        </Provider>
    </>
  );
}

export default MyApp;
