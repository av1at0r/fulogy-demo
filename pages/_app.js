import { CssBaseline, ThemeProvider } from "@material-ui/core";
import "fontsource-open-sans";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../src/store";
import theme from "../src/styles/theme";


function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Component {...pageProps} />
        </CssBaseline>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
