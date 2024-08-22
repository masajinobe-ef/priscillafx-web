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

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.get("http://localhost:50150/artists/get_artists");
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
            {[
              { href: "/", label: "Home", icon: "icon-home.svg" },
              { href: "blog", label: "Blog", icon: "icon-blog.svg" },
              { href: "custom", label: "Custom", icon: "icon-custom.svg" },
              { href: "mods", label: "Mods", icon: "icon-mods.svg" },
              { href: "artists", label: "Artists", icon: "icon-artists.svg" },
              { href: "faq", label: "F.A.Q.", icon: "icon-faq.svg" },
              { href: "about", label: "About", icon: "icon-about.svg" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-white p-2 hover:text-black text-lg"
                >
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

      <main className="flex-grow flex justify-center items-center bg-lavender p-5 text-gray-800">
        <div className="info w-full max-w-2xl">
          {loading ? (
            <p>Loading artists...</p>
          ) : error ? (
            <p>{error}</p>
          ) : artists.length === 0 ? (
            <li>No artists found</li>
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
                    style={{
                      textDecoration: "none",
                      color: "white",
                      backgroundColor: "purple",
                      padding: "5px 10px",
                      borderRadius: "5px",
                    }}
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
        <p className="text-lg">
          Pedals... or something like this🌌
          <br />
          ・Custom Effects ・Modifications ・Hi-End Musical Accessories ・Resale
        </p>
      </footer>
    </div>
  );
}
