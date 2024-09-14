import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/globals.css";

interface Artist {
  id: string;
  full_name: string;
  band: string;
  link: string;
  image_url: string;
}

export default function Artists() {
  const [artists, setArtists] = useState<Artist[]>([]);
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
    const fetchArtists = async () => {
      try {
        const response = await axios.get(
          "http://localhost:50150/artists/get_artists"
        );
        const data = response.data;

        if (data.status === "Success") {
          setArtists(data.data);
        } else {
          setError(data.details);
        }
      } catch (err) {
        setError("Failed to fetch artists");
      } finally {
        setLoading(false);
      }
    };

    fetchArtists();
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-white">
      <header className="flex justify-between bg-purple-800 p-3">
        <nav>
          <ul className="flex space-x-2">
            {menuItems.map((item) => (
              <li key={item.label}>
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
        <div className="info w-full max-w-2xl">
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
          ) : artists.length === 0 ? (
            <div className="flex flex-col justify-center items-center min-h-screen w-full">
              <div className="bg-gray-800 rounded-lg p-6">
                <p className="text-white">No artists found</p>
              </div>
            </div>
          ) : (
            <ul>
              {artists.map((artist) => (
                <li key={artist.id} className="mb-4">
                  <a href={artist.link}>
                    <Image
                      src={artist.image_url}
                      width={250}
                      height={250}
                      alt={artist.full_name}
                      className="rounded"
                    />
                  </a>
                  <p>{artist.full_name}</p>
                  <a
                    className="text-white bg-purple-600 hover:bg-purple-700 transition-colors rounded px-2 py-1"
                    href={artist.link}
                  >
                    {artist.band}
                  </a>
                </li>
              ))}
            </ul>
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
}
