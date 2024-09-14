import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function SoftwareDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [software, setSoftware] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchSoftware = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/api/software/${id}`
          );
          setSoftware(response.data);
        } catch (error) {
          setError("Failed to load software details.");
        } finally {
          setLoading(false);
        }
      };

      fetchSoftware();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!software) return <p>No software found</p>;

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-white">
      <header className="bg-purple-800 text-white text-center p-3">
        <h1 className="text-3xl">{software.name}</h1>
      </header>

      <main className="flex-grow flex justify-center items-start bg-lavender p-5 text-gray-800 overflow-y-auto">
        <div className="software-details w-full max-w-2xl">
          <Image
            src={software.icon}
            alt={software.name}
            width={100}
            height={100}
            className="rounded mb-5"
          />
          <h2 className="text-2xl mb-3">{software.name}</h2>
          <p className="text-gray-600 mb-5">{software.description}</p>
          <p className="text-gray-800">{software.details}</p>
        </div>
      </main>

      <footer className="bg-purple-800 text-white text-center p-3">
        <p>Custom Effects ・Modifications ・Hi-End Musical Accessories</p>
      </footer>
    </div>
  );
}
