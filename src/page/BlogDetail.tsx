import { useEffect, useState } from "react";
import { getPostDetails } from "../api/mock";
import { useParams } from "react-router-dom";
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

const BlogPost = () => {
  interface Post {
    title: string;
    type: string;
    author: string;
    date: string;
    imageUrl: string;
    content: string;
    related: {
      id: number;
      type: string;
      title: string;
      date: string;
      imageUrl: string;
    }[];
  }

  const [post, setPost] = useState<Post>({
    title: "",
    author: "",
    type: "",
    date: "",
    imageUrl: "",
    content: "",
    related: [],
  });

  const { blogId } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await getPostDetails(Number(blogId));
      setPost(postData);
    };
    fetchPost();
  }, []);

  if (!post) return <div>Loading...</div>;

  return (
    <>
      <div className="flex justify-center text-white">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-8 grid grid-cols-2">
            <div>
              <h1 className="text-3xl font-thin mb-2">{post.type}</h1>
              <h2
                className="text-5xl font-semibold mb-4"
                style={{ fontFamily: "Orbitron" }}
              >
                {post.title.toUpperCase()}
              </h2>
            </div>
            <div className="flex justify-end">
              <div className="mt-12">
                <p className="text-sm text-right">{post.date}</p>
                <p className="text-sm text-right">
                  WRITTEN BY {post.author.toUpperCase()}
                </p>
              </div>
            </div>
          </header>

          <div className="flex justify-center mb-8">
            <div
              className="w-3/4 h-[500px] rounded-lg border-4 border-amber-200"
              style={{
                backgroundImage: `url("${post.imageUrl}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        </div>
      </div>

      <div className="bg-[#242140] flex justify-center">
        <div className="container my-40 lg:px-28">
          <p>{post.content}</p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="container mb-20 lg:px-20">
          <footer className="mt-12">
            <h3
              className="text-4xl font-semibold mb-10"
              style={{ fontFamily: "Orbitron" }}
            >
              READ NEXT
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {post.related.map((relatedPost) => (
                <PostCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </footer>
        </div>
      </div>
      <ContactSection />
    </>
  );
};

export default BlogPost;
