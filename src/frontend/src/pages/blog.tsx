import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import "../styles/globals.css";

interface Post {
  created_at: string;
  image_url: string;
  title: string;
  content: string;
  file_url?: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const menuItems = [
    { href: "/", icon: "icon-home.svg", label: "Home" },
    { href: "/blog", icon: "icon-blog.svg", label: "Blog" },
    { href: "/software", icon: "icon-software.svg", label: "Software" },
    { href: "/custom", icon: "icon-custom.svg", label: "Custom" },
    { href: "/mods", icon: "icon-mods.svg", label: "Mods" },
    { href: "/artists", icon: "icon-artists.svg", label: "Artists" },
    { href: "/faq", icon: "icon-faq.svg", label: "F.A.Q." },
    { href: "/about", icon: "icon-about.svg", label: "About" },
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:50150/blog/get_posts"
        );
        const data = response.data;

        if (data.status === "Success") {
          setPosts(data.data);
        } else {
          setError(data.details);
        }
      } catch (err) {
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="relative flex flex-col h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds/Blog.jpg"
          alt="Blog"
          fill
          priority
          style={{ objectFit: "cover", opacity: 0.7 }}
        />
      </div>

      <header className="flex justify-center items-center p-3 relative z-10 text-3xl">
        <h1 className="text-center">Blog</h1>
      </header>

      <nav className="fixed right-4 top-1/3 flex flex-col items-center bg-black rounded-lg p-4 space-y-2 z-20">
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex items-center w-40 p-3 rounded-lg hover:bg-purple-800 transition-colors duration-200"
          >
            <Image
              src={`/images/icons/${item.icon}`}
              alt={item.label}
              width={32}
              height={32}
              style={{ filter: "invert(1)" }}
            />
            <span className="text-white ml-2">{item.label}</span>
          </a>
        ))}
      </nav>

      <main className="flex-grow flex justify-center items-start relative z-10 overflow-y-auto">
        <div className="posts-container w-full max-w-2xl">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <div className="flex flex-col justify-center items-center min-h-screen w-full">
              <div className="bg-gray-800 rounded-lg p-6">
                <p className="text-red-500">{error}</p>
              </div>
            </div>
          ) : posts.length > 0 ? (
            posts.map((post, index) => (
              <div
                key={index}
                id={`post-${index}`}
                className="post bg-gray-800 p-5 mb-5 rounded-lg"
              >
                <div className="created-at text-gray-400">
                  {post.created_at}
                </div>
                <div>
                  <a
                    href={post.image_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="image rounded-lg"
                      src={post.image_url}
                      alt="image"
                      width={720}
                      height={480}
                    />
                  </a>
                </div>
                <h2 className="title text-2xl mt-2">{post.title}</h2>
                <div className="content text-gray-300">{post.content}</div>
                {post.file_url && (
                  <a
                    href={post.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400"
                  >
                    Download
                  </a>
                )}
              </div>
            ))
          ) : (
            <div className="flex flex-col justify-center items-center min-h-screen w-full">
              <div className="bg-gray-800 rounded-lg p-6">
                <p className="text-white">No posts found</p>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="flex justify-center items-center p-3 relative z-10">
        <p>© Priscilla Custom Effects. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Blog;
