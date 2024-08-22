import Image from "next/image";
import "../styles/globals.css";

export default function About() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-white">
      <header className="flex justify-between bg-purple-800 p-2">
        <div className="menu-container">
          <nav>
            <ul className="flex space-x-2">
              <li>
                <a href="/" className="text-white p-2 hover:text-black">
                  <span className="icon" data-icon="home"></span>Home
                </a>
              </li>
              <li>
                <a href="blog" className="text-white p-2 hover:text-black">
                  <span className="icon" data-icon="blog"></span>Blog
                </a>
              </li>
              <li>
                <a href="custom" className="text-white p-2 hover:text-black">
                  <span className="icon" data-icon="custom"></span>Custom
                </a>
              </li>
              <li>
                <a href="mods" className="text-white p-2 hover:text-black">
                  <span className="icon" data-icon="mods"></span>Mods
                </a>
              </li>
              <li>
                <a href="artists" className="text-white p-2 hover:text-black">
                  <span className="icon" data-icon="artists"></span>Artists
                </a>
              </li>
              <li>
                <a href="faq" className="text-white p-2 hover:text-black">
                  <span className="icon" data-icon="faq"></span>F.A.Q.
                </a>
              </li>
              <li>
                <a href="about" className="text-white p-2 hover:text-black">
                  <span className="icon" data-icon="about"></span>About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow flex justify-center items-center bg-lavender p-5">
        <div className="bg-white p-5 rounded shadow-md text-center">
          <table className="w-full border-collapse mb-0">
            <thead>
              <tr>
                <th className="border p-2">Полное наименование</th>
                <th className="border p-2">ИП Колесов Арсений Дмитриевич</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">ОГРНИП</td>
                <td className="border p-2">324723200015923</td>
              </tr>
              <tr>
                <td className="border p-2">ИНН</td>
                <td className="border p-2">890306202170</td>
              </tr>
              <tr>
                <td className="border p-2">ОКВЭД</td>
                <td className="border p-2">
                  <b>32.20</b> 47.91.2 58.21 58.29 62.01 63.11.1 63.12
                </td>
              </tr>
              <tr>
                <td className="border p-2">Расчётный счёт</td>
                <td className="border p-2">
                  <b>40802810400006021068</b>
                </td>
              </tr>
              <tr>
                <td className="border p-2">БИК банка</td>
                <td className="border p-2">
                  <a
                    href="https://www.tbank.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/static/img/wallets/t-bank.svg"
                      alt="T-Bank"
                      width={50} // Set appropriate width
                      height={50} // Set appropriate height
                      className="w-1/12"
                    />
                  </a>
                  <br />
                  <b>044525974</b>
                </td>
              </tr>
              <tr>
                <td className="border p-2">Корреспондентский счёт</td>
                <td className="border p-2">
                  <b>30101810145250000974</b>
                </td>
              </tr>
              <tr>
                <td className="border p-2">Криптовалютные кошельки</td>
                <td className="border p-2">
                  <div className="wallet-info">
                    <a
                      href="https://ton.org/ru/toncoin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/static/img/wallets/ton.svg"
                        alt="TON"
                        width={50} // Set appropriate width
                        height={50} // Set appropriate height
                        className="w-1/12"
                      />
                    </a>
                    <br />
                    <b>UQB44yodNzTEwrPnkzIAIeRo2D3Q3AHQIdaeW1gUwZVk_qXt</b>
                  </div>
                  <div className="wallet-info">
                    <a
                      href="https://bitcoin.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/static/img/wallets/bitcoin.svg"
                        alt="Bitcoin"
                        width={50} // Set appropriate width
                        height={50} // Set appropriate height
                        className="w-1/12"
                      />
                    </a>
                    <br />
                    <b>17QqMUTyEWnU4aogKuXDTANbuT3iJPo9zx</b>
                  </div>
                  <div className="wallet-info">
                    <a
                      href="https://tether.to"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/static/img/wallets/tether.svg"
                        alt="Tether"
                        width={50} // Set appropriate width
                        height={50} // Set appropriate height
                        className="w-1/12"
                      />
                    </a>
                    (TON/USDT):
                    <br />
                    <b>UQCGAg4z7YMbwkbVm25Gaq8OXDCYkiNQU2xg9k5BILfPG48H</b>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-center space-x-2 mt-4">
            <a
              href="https://t.me/priscilla_ef/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/static/img/sns/tg-logo.svg"
                alt="Telegram"
                width={32} // Set appropriate width
                height={32} // Set appropriate height
                className="w-8"
              />
            </a>
            <a
              href="https://vk.com/priscilla_ef"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/static/img/sns/vk-logo.svg"
                alt="VK"
                width={32} // Set appropriate width
                height={32} // Set appropriate height
                className="w-8"
              />
            </a>
            <a
              href="https://www.instagram.com/masajinobe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/static/img/sns/inst-logo.svg"
                alt="Instagram"
                width={32} // Set appropriate width
                height={32} // Set appropriate height
                className="w-8"
              />
            </a>
            <a
              href="https://twitter.com/priscilla_eF"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/static/img/sns/x-logo.svg"
                alt="Twitter"
                width={32} // Set appropriate width
                height={32} // Set appropriate height
                className="w-8"
              />
            </a>
            <a
              href="https://boosty.to/priscilla-custom-effects"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/static/img/sns/boosty-logo.svg"
                alt="Boosty"
                width={32} // Set appropriate width
                height={32} // Set appropriate height
                className="w-8"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCVJiYZ7oiHdBnkkOoSrse3Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/static/img/sns/yt-logo.svg"
                alt="YouTube"
                width={32} // Set appropriate width
                height={32} // Set appropriate height
                className="w-8"
              />
            </a>
            <a
              href="https://github.com/Priscilla-Custom-Effects"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/img/sns/git-logo.svg"
                alt="Github"
                width={32} // Set appropriate width
                height={32} // Set appropriate height
                className="w-8"
              />
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-purple-800 text-white text-center p-2">
        <p>
          Pedals... or something like this🌌
          <br />
          ・Custom Effects ・Modifications ・Hi-End Musical Accessories ・Resale
        </p>
      </footer>
    </div>
  );
}
