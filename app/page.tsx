import Image from "next/image";
import "./styles.css";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ヘッダー */}
      <header className="bg-gray-800/80 text-white p-4 text-center flex justify-center items-center">
        <Image src="/logo.png" alt="Site Logo" width={150} height={50} />
      </header>
      
      {/* メインコンテンツ */}
      <main className="main-content">
        <section className="content-box">
          <p className="content-text">Sample Content 1</p>
        </section>
        <section className="content-box">
          <p className="content-text">Sample Content 2</p>
        </section>
        <section className="content-box content-full">
          <p className="content-text">Sample Content 3</p>
        </section>
      </main>
      
      {/* フッター */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 Sample Website</p>
      </footer>
    </div>
  );
}

