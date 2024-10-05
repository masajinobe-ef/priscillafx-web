import Image from "next/image";

export default function Home() {
  const navItems = [
    { href: "/", icon: "icon-home.svg", label: "Home" },
    { href: "blog", icon: "icon-blog.svg", label: "Blog" },
    {
      href: "software",
      icon: "icon-software.svg",
      label: "Software",
    },
    { href: "custom", icon: "icon-custom.svg", label: "Custom" },
    { href: "mods", icon: "icon-mods.svg", label: "Mods" },
    {
      href: "artists",
      icon: "icon-artists.svg",
      label: "Artists",
    },
    { href: "faq", icon: "icon-faq.svg", label: "F.A.Q." },
    { href: "about", icon: "icon-about.svg", label: "About" },
  ];
  const backgroundImage = "/images/backgrounds/Home.jpg"

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-12">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="backgroundImage"
          fill
          priority
          style={{ objectFit: "cover", opacity: 1.0 }}
        />
      </div>

      {/* Header */}
      <header className="flex justify-between items-start w-full py-4">
        <div className="absolute top-4 right-4">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={192}
            height={192}
            priority
          />
        </div>
      </header>

      {/* Menu */}
      <nav className="fixed right-4 top-1/3 flex flex-col items-center bg-black rounded-lg p-4 space-y-2">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex items-center w-40 p-3 rounded-lg hover:bg-purple-800"
          >
            <Image
              src={`/images/icons/${item.icon}`}
              alt={item.label}
              width={32}
              height={32}
              style={{ filter: "invert(1)" }}
            />
            <span className="text-white ml-2">{item.label}</span>{" "}
          </a>
        ))}
      </nav>

    </main>
  );
}
