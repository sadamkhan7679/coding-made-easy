"use client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Inter } from "next/font/google";

import "@src/styles/index.scss";

const inter = Inter({ subsets: ["latin"] });

import { Box } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme, lightTheme } from "@src/theme/mui.theme";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@src/theme/mui.theme/createEmotionCache";
import RootStyleRegistry from "@src/theme/mui.theme/emotion";

const cache = createEmotionCache();

const StylesProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <RootStyleRegistry>
        {/* <CacheProvider value={cache}> */}
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </RootStyleRegistry>
    </Box>
  );
};

export default StylesProvider;
