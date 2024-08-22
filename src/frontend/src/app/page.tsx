import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-12"
      style={{
        backgroundImage: "url('/images/backgrounds/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'JetBrains Mono', Arial",
      }}
    >
      {/* Header */}
      <header className="flex justify-between items-start w-full py-4">
        <div className="absolute top-4 right-4">
          <Image
            src="/images/logo.svg"
            alt="Priscilla FX Logo"
            width={192}
            height={192}
            priority
          />
        </div>
      </header>

      {/* Menu */}
      <nav className="fixed right-4 top-1/3 flex flex-col items-center bg-black rounded-lg p-4 space-y-2">
        <a
          href="blog"
          className="flex items-center w-40 p-3 rounded-lg hover:bg-purple-800"
        >
          <Image
            src="/images/icons/icon-blog.svg"
            alt="Blog"
            width={32}
            height={32}
            style={{ filter: "invert(1)" }}
          />
          <span className="text-xl text-white ml-2">Blog</span>
        </a>
        <a
          href="software"
          className="flex items-center w-40 p-3 rounded-lg hover:bg-purple-800"
        >
          <Image
            src="/images/icons/icon-software.svg"
            alt="Software"
            width={32}
            height={32}
            style={{ filter: "invert(1)" }}
          />
          <span className="text-lg text-white ml-2">Software</span>
        </a>
        <a
          href="custom"
          className="flex items-center w-40 p-3 rounded-lg hover:bg-purple-800"
        >
          <Image
            src="/images/icons/icon-custom.svg"
            alt="Custom"
            width={32}
            height={32}
            style={{ filter: "invert(1)" }}
          />
          <span className="text-xl text-white ml-2">Custom</span>
        </a>
        <a
          href="mods"
          className="flex items-center w-40 p-3 rounded-lg hover:bg-purple-800"
        >
          <Image
            src="/images/icons/icon-mods.svg"
            alt="Mods"
            width={32}
            height={32}
            style={{ filter: "invert(1)" }}
          />
          <span className="text-xl text-white ml-2">Mods</span>
        </a>
        <a
          href="artists"
          className="flex items-center w-40 p-3 rounded-lg hover:bg-purple-800"
        >
          <Image
            src="/images/icons/icon-artists.svg"
            alt="Artists"
            width={32}
            height={32}
            style={{ filter: "invert(1)" }}
          />
          <span className="text-xl text-white ml-2">Artists</span>
        </a>
        <a
          href="faq"
          className="flex items-center w-40 p-3 rounded-lg hover:bg-purple-800"
        >
          <Image
            src="/images/icons/icon-faq.svg"
            alt="F.A.Q."
            width={32}
            height={32}
            style={{ filter: "invert(1)" }}
          />
          <span className="text-xl text-white ml-2">F.A.Q.</span>
        </a>
        <a
          href="about"
          className="flex items-center w-40 p-3 rounded-lg hover:bg-purple-800"
        >
          <Image
            src="/images/icons/icon-about.svg"
            alt="About"
            width={32}
            height={32}
            style={{ filter: "invert(1)" }}
          />
          <span className="text-xl text-white ml-2">About</span>
        </a>
      </nav>

      {/* Footer */}
      <footer className="flex justify-center">
        <a
          href="mailto:priscilla.effects@gmail.com"
          className="text-center text-white text-2xl bg-black rounded-lg p-2"
        >
          Contact us at priscilla.effects@gmail.com
        </a>
      </footer>
    </main>
  );
}
