import { ImageResponse } from "next/server";

const basePath = "hectorsosa.me/";

const title = "Hector Sosa";
const param = "";

export const runtime = "edge";

export const alt = "Hector Sosa";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const groteskRegular = await fetch(
    new URL("./assets/fonts/SchibstedGrotesk-Regular.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const groteskSemibold = await fetch(
    new URL("./assets/fonts/SchibstedGrotesk-Semibold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          fontWeight: 600,
          background: "rgb(250, 250, 250)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 120,
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: size.width / 2,
            height: size.height / 1.5,
            top: "-50%",
            left: "60%",
            opacity: "0.25",
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.29'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        <h1
          style={{
            fontSize: 128,
            lineHeight: 1,
            letterSpacing: "-6px",
            color: "rgb(23, 23, 23)",
            margin: "6px",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: 40,
            lineHeight: 1,
            letterSpacing: "-1.5px",
            color: "rgb(64, 64, 64)",
            margin: 0,
          }}
        >
          {basePath + param}
        </p>
      </div>
    ),
    {
      ...size,
      debug: false,
      fonts: [
        {
          name: "Grotesk",
          data: groteskRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Grotesk",
          data: groteskSemibold,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}