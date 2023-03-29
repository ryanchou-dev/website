import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
const dir = path.join(process.cwd(), "posts");

export function getPosts() {
  const names = fs.readdirSync(dir);
  let tags = [];

  const post_data = names.map((filename) => {
    const slug = filename.replace(/\.md$/, "");

    const pth = path.join(dir, filename);
    const data = fs.readFileSync(pth, "utf-8");

    const md = matter(data);
    tags = tags.concat(md.data.tags);

    return {
      slug,
      ...md.data,
    };
  });

  tags = [...new Set(tags)];

  return [
    tags,
    post_data.sort(({ date: a }, { date: b }) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    }),
  ];
}

export function getSlugs() {
  const names = fs.readdirSync(dir);

  return names.map((filename) => {
    return {
      params: {
        slug: filename.replace(/\.md$/, ""),
      },
    };
  });
}

export function getTags() {
  const names = fs.readdirSync(dir);
  let tags = [];

  names.map((filename) => {
    const pth = path.join(dir, filename);
    const data = fs.readFileSync(pth, "utf-8");

    const md = matter(data);
    console.log(md.data.tags);
    tags = tags.concat(md.data.tags);
  });
  tags = [...new Set(tags)];
  return tags.map((tag) => {
    return {
      params: {
        slug: tag,
      },
    };
  });
}

export async function getData(slug) {
  const pth = path.join(dir, `${slug}.md`);
  const data = fs.readFileSync(pth, "utf-8");

  const matterRes = matter(data);
  const content = await remark().use(remarkHtml).process(matterRes.content);

  const contentHTML = content.toString();
  return {
    slug,
    contentHTML,
    ...matterRes.data,
  };
}
