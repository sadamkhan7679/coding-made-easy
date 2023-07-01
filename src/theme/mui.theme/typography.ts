import { Typography } from "@mui/material/styles/createTypography";

// typography.scss

// @mixin responsiveFont($fontSize) {
//     font-size: $fontSize;

//     @media (max-width: 320px) {
//       font-size: $fontSize * 0.5;
//     }

//     @media (max-width: 480px) {
//       font-size: $fontSize * 0.6;
//     }

//     @media (min-width: 481px) and (max-width: 768px) {
//       font-size: $fontSize * 0.7;
//     }

//     @media (min-width: 769px) and (max-width: 1024px) {
//       font-size: $fontSize * 0.8;
//     }

//     @media (min-width: 1025px) and (max-width: 1300px) {
//       font-size: $fontSize * 0.9;
//     }
//   }

//   .heading-1 {
//     font-weight: 700;
//     line-height: 1.2;
//     letter-spacing: -0.05em;

//     @include responsiveFont(2.5rem);
//   }

//   .heading-2 {
//     font-weight: 700;
//     line-height: 1.2;
//     letter-spacing: -0.05em;

//     @include responsiveFont(2.25rem);
//   }

//   .heading-3 {
//     font-weight: 700;
//     line-height: 1.2;
//     letter-spacing: -0.05em;

//     @include responsiveFont(2rem);
//   }

//   .heading-4 {
//     font-weight: 700;
//     line-height: 1.2;
//     letter-spacing: -0.05em;

//     @include responsiveFont(1.75rem);
//   }

//   .heading-5 {
//     font-weight: 700;
//     line-height: 1.2;
//     letter-spacing: -0.05em;

//     @include responsiveFont(1.5rem);
//   }

//   .heading-6 {
//     font-weight: 700;
//     line-height: 1.2;
//     letter-spacing: -0.05em;

//     @include responsiveFont(1.25rem);
//   }

//   .paragraph {
//     font-weight: 400;
//     line-height: 1.5;
//     letter-spacing: -0.01em;

//     @include responsiveFont(1rem);
//   }

//   .paragraph-bold {
//     font-weight: 700;
//     line-height: 1.5;
//     letter-spacing: -0.01em;

//     @include responsiveFont(1rem);
//   }

//   .small-text {
//     font-weight: 400;
//     line-height: 1.5;
//     letter-spacing: -0.01em;

//     @include responsiveFont(0.875rem);
//   }

//   .caption {
//     font-weight: 400;
//     line-height: 1.5;
//     letter-spacing: -0.01em;

//     @include responsiveFont(0.75rem);
//   }

//   .label {
//     font-weight: 400;
//     line-height: 1.5;
//     letter-spacing: -0.01em;

//     @include responsiveFont(0.625rem);
//   }

const responsiveFont = (fontSize: number) => {
  return {
    fontSize: `${fontSize}px`,
    "@media (max-width: 320px)": {
      fontSize: `${fontSize * 0.5}px`,
    },
    "@media (max-width: 480px)": {
      fontSize: `${fontSize * 0.6}px`,
    },
    "@media (min-width: 481px) and (max-width: 768px)": {
      fontSize: `${fontSize * 0.7}px`,
    },
    "@media (min-width: 769px) and (max-width: 1024px)": {
      fontSize: `${fontSize * 0.8}px`,
    },
    "@media (min-width: 1025px) and (max-width: 1300px)": {
      fontSize: `${fontSize * 0.9}px`,
    },
  };
};

export const typography: Typography = {
  fontSize: 0,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  htmlFontSize: 0,
  pxToRem: function (px: number): string {
    throw new Error("Function not implemented.");
  },

  fontFamily: ["Roboto", "sans-serif"].join(","),
  h1: {
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.05em",
    ...responsiveFont(2.5),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.05em",
    ...responsiveFont(2.25),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.05em",
    ...responsiveFont(2),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.05em",
    ...responsiveFont(1.75),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.05em",
    ...responsiveFont(1.5),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.05em",
    ...responsiveFont(1.25),
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "-0.01em",
    ...responsiveFont(1),
  },
  subtitle2: {
    fontWeight: 700,
    lineHeight: 1.5,
    letterSpacing: "-0.01em",
    ...responsiveFont(1),
  },
  body1: {
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "-0.01em",
    ...responsiveFont(0.875),
  },
  body2: {
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "-0.01em",
    ...responsiveFont(0.75),
  },
  button: {
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "-0.01em",
    ...responsiveFont(0.625),
  },
  caption: {
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "-0.01em",
    ...responsiveFont(0.625),
  },
  overline: {
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "-0.01em",
    ...responsiveFont(0.625),
  },
};
