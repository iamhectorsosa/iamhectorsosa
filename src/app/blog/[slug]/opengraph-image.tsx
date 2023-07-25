import { getPost } from "@lib/mdx";
import { ImageResponse } from "next/server";
import fs from "fs";
import path from "path";

const basePath = "hectorsosa.me/";
const param = "blog";

export const runtime = "nodejs";

export const alt = "Blog";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { frontmatter } = await getPost(slug);

  const title = frontmatter.title;

  const groteskRegular = fs.promises.readFile(
    path.join("./src/app/SchibstedGrotesk-Regular.ttf")
  );
  const groteskSemibold = fs.promises.readFile(
    path.join("./src/app/SchibstedGrotesk-Semibold.ttf")
  );

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
            height: size.height / 1.75,
            top: "-50%",
            left: "60%",
            opacity: "0.25",
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.29'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        <h1
          style={{
            fontSize: 90,
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
          data: await groteskRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Grotesk",
          data: await groteskSemibold,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
