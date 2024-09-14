import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import "../styles/globals.css";

interface SoftwareItem {
  id: string;
  name: string;
  description: string;
  icon: string;
}

const Software = () => {
  const [softwareItems, setSoftwareItems] = useState<SoftwareItem[]>([]);
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
    const fetchSoftwareItems = async () => {
      try {
        const response = await axios.get(
          "http://localhost:50150/software/get_software"
        );
        const data = response.data;

        if (data.status === "Success") {
          setSoftwareItems(data.data);
        } else {
          setError(data.details);
        }
      } catch (err) {
        setError("Failed to fetch software");
      } finally {
        setLoading(false);
      }
    };

    fetchSoftwareItems();
  }, []);

  return (
    <div className="relative flex flex-col h-screen overflow-hidden bg-white">
      <header className="flex justify-between bg-purple-800 p-3">
        <nav>
          <ul className="flex space-x-2">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-white p-2 hover:text-black">
                  <Image
                    src={`/images/icons/${item.icon}`}
                    alt={item.label}
                    width={32}
                    height={32}
                    className="inline-block mr-1 filter brightness-0 invert"
                  />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="flex-grow flex justify-center items-start bg-lavender p-5 text-gray-800 overflow-y-auto">
        <div className="software-list w-full max-w-2xl">
          {loading ? (
            <div className="flex flex-col justify-center items-center min-h-screen w-full">
              <div className="bg-gray-800 rounded-lg p-6">
                <p className="text-white">Loading...</p>
              </div>
            </div>
          ) : error ? (
            <div className="flex flex-col justify-center items-center min-h-screen w-full">
              <div className="bg-gray-800 rounded-lg p-6">
                <p className="text-red-500">{error}</p>
              </div>
            </div>
          ) : softwareItems.length > 0 ? (
            <ul>
              {softwareItems.map((software) => (
                <li
                  key={software.id}
                  className="mb-4 p-4 bg-gray-100 rounded-lg"
                >
                  <a
                    href={`/software/${software.id}`}
                    className="flex items-center space-x-4 hover:bg-gray-200 p-2 rounded transition-colors"
                  >
                    <Image
                      src={software.icon}
                      alt={software.name}
                      width={50}
                      height={50}
                      className="rounded"
                    />
                    <div>
                      <h2 className="text-xl">{software.name}</h2>
                      <p className="text-gray-600">{software.description}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col justify-center items-center min-h-screen w-full">
              <div className="bg-gray-800 rounded-lg p-6">
                <p className="text-white">No software items found</p>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-purple-800 text-white text-center p-3">
        <p>
          Pedals... or something like this🌌
          <br />
          ・Custom Effects ・Modifications ・Hi-End Musical Accessories ・Resale
        </p>
      </footer>
    </div>
  );
};

export default Software;
