import {
  ProseH1,
  ProseH2,
  ProseH3,
  ProseH4,
  ProseP,
  ProseStrong,
  ProseAnchor,
  ProseBlockquote,
  ProseOL,
  ProseUL,
  ProseInlineCode,
  ProsePre,
} from "@components/ui/Typography";
import { readFileSync, readdirSync, statSync } from "fs";
import {
  CompileMDXResult,
  MDXRemoteProps,
  compileMDX,
} from "next-mdx-remote/rsc";
import { join } from "path";
import remarkToc, { Options as RemarkTocOptions } from "remark-toc";
import rehypePrettyCode, {
  Options as RehypePrettyCodeOptions,
} from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { z } from "zod";

// ⚙️ Config settings
const blogDir = "src/blog";
const fileExtension = ".mdx";

// ⚙️ Type definitions
const frontmatterSchema = z.object(
  {
    title: z.string({
      required_error: "Title is required",
    }),
    description: z.string({
      required_error: "Description is required",
    }),
    date: z
      .string({
        required_error: "Date is required",
      })
      .datetime(),
    github: z.string({
      required_error: "Author's GitHub username is required",
    }),
  },
  {
    required_error: "Post not found",
  }
);

type FrontMatter = z.infer<typeof frontmatterSchema>;

const metaSchema = frontmatterSchema.extend({
  id: z.string(),
  slug: z.string(),
  lastUpdated: z.string().datetime(),
});

type PostMeta = z.infer<typeof metaSchema>;

// 🧪 Helper functions
function filenameToId(filename: string): string {
  return filename.toLowerCase().replace(fileExtension, "");
}

function slugify(filename: string, title: string): string {
  const id = filenameToId(filename);
  const slugedTitle = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  // ⬇️ Example from "001.mdx & Hello World" to "001-hello-world"
  return id + "-" + slugedTitle;
}

function getFilename(slug: string): string {
  const filename = metaSchema.shape.id.parse(slug.match(/^[^-]*/)?.[0]);
  return filename + fileExtension;
}

// ⬇️ remark toc Options

const remarkTocOptions: RemarkTocOptions = {
  heading: "In this article",
  maxDepth: 2,
};

// ⬇️ rehypePrettyCode Options

const rehypePrettyCodeOptions: RehypePrettyCodeOptions = {
  theme: "css-variables",
};

// ⬇️ Component mappings

const components = {
  h1: ProseH1,
  h2: ProseH2,
  h3: ProseH3,
  h4: ProseH4,
  p: ProseP,
  strong: ProseStrong,
  a: ProseAnchor,
  blockquote: ProseBlockquote,
  ol: ProseOL,
  ul: ProseUL,
  code: ProseInlineCode,
  pre: ProsePre,
} as MDXRemoteProps["components"];

// 🟢 RSC Available Functions
export async function getPosts(): Promise<PostMeta[]> {
  // ⬇️ Read our designated file directory
  const files = readdirSync(blogDir);
  const posts = await Promise.all(
    files.map(async (filename) => {
      // ⬇️ Get the file's source content
      const source = readFileSync(join(blogDir, filename), "utf-8");
      const { ctime } = statSync(join(blogDir, filename));
      // ⬇️ Compile its frontmatter
      const { frontmatter } = await compileMDX<FrontMatter>({
        source,
        options: { parseFrontmatter: true },
      });
      // ⬇️ Parse its frontmatter
      const { title, description, date, github } =
        frontmatterSchema.parse(frontmatter);
      // ⬇️ Return parsed meta data with an included id and slug
      return metaSchema.parse({
        title,
        description,
        date,
        github,
        id: filenameToId(filename),
        slug: slugify(filename, title),
        lastUpdated: ctime.toISOString(),
      });
    })
  );
  // ⬇️ Coerce to number and sort in descending order
  return posts.sort((a, b) => +b.id - +a.id);
}

export async function getPost(
  slug: string
): Promise<CompileMDXResult<PostMeta>> {
  const filename = getFilename(slug);
  const source = readFileSync(join(blogDir, filename), "utf8");
  const { ctime } = statSync(join(blogDir, filename));
  const { content, frontmatter: inputFrontmatter } =
    await compileMDX<FrontMatter>({
      source,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [[remarkToc, remarkTocOptions]],
          rehypePlugins: [
            rehypeSlug,
            [rehypePrettyCode, rehypePrettyCodeOptions],
          ],
        },
      },
      components,
    });
  // ⬇️ Parse its frontmatter
  const { title, description, date, github } =
    frontmatterSchema.parse(inputFrontmatter);

  const frontmatter = metaSchema.parse({
    title,
    description,
    date,
    github,
    id: filenameToId(filename),
    slug: slugify(filename, title),
    lastUpdated: ctime.toISOString(),
  });
  return { content, frontmatter };
}

export async function compileMarkdown(source: string) {
  return await compileMDX({
    source,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          [rehypePrettyCode, rehypePrettyCodeOptions],
        ],
      },
    },
    components,
  });
}
