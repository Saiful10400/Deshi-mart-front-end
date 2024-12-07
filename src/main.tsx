import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Redux/Store.ts";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes.tsx";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import theme from "./Them.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
      
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <RouterProvider router={routes} />
    </ThemeProvider>
    

  </Provider>
);
