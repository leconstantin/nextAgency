import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog",
};
export default function Blog() {
  return <main>Blog posts</main>;
}
