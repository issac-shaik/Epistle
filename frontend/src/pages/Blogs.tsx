import { BlogCard } from "../components/BlogCard";
import { Avatar } from "./Avatar";

export const Blogs = ({ avatarUrl }: string) => {
  return (
    <div>
      <BlogCard
        avatarUrl={avatarUrl}
        authorName={"Issac"}
        title={"Getting started with Apache Kafka"}
        content={
          " around 300-400 wpm Speed Reader: Some people who practice speed reading can reach speeds of 500-700 wpm or more These figures provide a general guideline and can vary from person to person."
        }
        publishedDate={"13th Oct 2023"}
      />
    </div>
  );
};
