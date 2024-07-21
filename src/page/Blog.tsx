import React, { useEffect, useState } from "react";
import { getPosts } from "../api/mock";
import ContactSection from "../component/ContactSection";

interface Post {
  id: number;
  type: string;
  title: string;
  date: string;
  imageUrl: string;
}

const PostCard: React.FC<{ post: Post }> = ({ post }) => (
  <a href={`/blog/${post.id}`}>
    <div className="bg-[#242140] rounded-xl border-4 border-pink-200">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="text-xs mb-3 rounded-md border border-white px-6 py-2">
            {post.type}
          </div>
          <div className="text-xs text-white mb-2">{post.date}</div>
        </div>
        <h3
          className="text-white text-lg font-semibold mb-2"
          style={{ fontFamily: "Orbitron" }}
        >
          {post.title}
        </h3>
      </div>
      <div
        className="h-48 w-full"
        style={{
          background: `url("${post.imageUrl}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  </a>
);

const FeaturedPost: React.FC<{ post: Post }> = ({ post }) => (
  <a href={`/blog/${post.id}`}>
    <div className="bg-[#242140] round border-cyan-200 border-4">
      <div className="p-6">
        <div className="flex justify-between items-center">
          <div className="text-sm mb-3 rounded-md border border-white px-6 py-2">
            {post.type}
          </div>
          <div className="text-xs text-gray-400 mb-4">{post.date}</div>
        </div>
        <h2
          className="text-white text-3xl font-bold mb-4"
          style={{ fontFamily: "Orbitron" }}
        >
          {post.title}
        </h2>
        <div className="flex justify-end">
          <div
            className="h-64 w-11/12"
            style={{
              background: `url("${post.imageUrl}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
    </div>
  </a>
);

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    };
    fetchPosts();
  }, []);

  const featuredPosts = posts.filter((post) => post.type === "FEATURED POST");
  const blogPosts = posts.filter((post) => post.type === "BLOG");

  return (
    <>
      <div className="flex justify-center  bg-[#242140]">
        <div className="container p-8">
          <div className="max-w-6xl mx-auto">
            <h1
              className="text-white text-4xl text-center font-bold mb-28 mt-20"
              style={{ fontFamily: "Orbitron" }}
            >
              THE ATC BLOG
            </h1>

            <div className="grid grid-cols-2 gap-16 mb-12">
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <div className="grid grid-cols-3 gap-10 container px-20">
          {blogPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
      <ContactSection />
    </>
  );
};

export default Blog;
