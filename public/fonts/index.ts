import localFont from "next/font/local";

const ttCommons = localFont({
  variable: "--font-ttCommons",
  display: "swap",
  src: [
    {
      path: "./TT-Commons-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./TT-Commons-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./TT-Commons-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./TT-Commons-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export { ttCommons };
