"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // 1枚ずつ表示
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* ヘッダー + フォトギャラリーを含めた最初のセクション */}
      <section className="hero-section">
        {/* ヘッダー */}
        <header className="hero-header">
          <Image src="/logo.png" alt="Site Logo" width={150} height={50} />
        </header>

        {/* フォトギャラリー */}
        <div className="photo-gallery">
          <Slider {...settings}>
            <div className="gallery-slide">
              <Image src="/gallery1.jpg" alt="Gallery Image 1" layout="intrinsic" width={1920} height={800} className="gallery-img"/>
            </div>
            <div className="gallery-slide">
              <Image src="/gallery2.jpg" alt="Gallery Image 2" layout="intrinsic" width={1920} height={800} className="gallery-img"/>
            </div>
            <div className="gallery-slide">
              <Image src="/gallery3.jpg" alt="Gallery Image 3" layout="intrinsic" width={1920} height={800} className="gallery-img"/>
            </div>
            <div className="gallery-slide">
              <Image src="/gallery4.jpg" alt="Gallery Image 4" layout="intrinsic" width={1920} height={800} className="gallery-img"/>
            </div>
          </Slider>
        </div>
      </section>

      {/* 最初に見えるコンテンツ */}
      <section className="intro-content">
        <h2>スタジオの説明</h2>
        <p>ああああああああああああああああああああああああああああああああああああああああああ</p>
        <p>ああああああああああああああああああああああああああああああああああああああああああ</p>
      </section>



      <main className="main-content">
  <section className="content-box content-one">
    <div className="class-fee-container">
      <div className="class-info">
        <h2 className="content-title">クラス</h2>
        <ul className="class-list">
          <li>クラス1</li>
          <li>クラス2</li>
          <li>クラス3</li>
          <li>クラス4</li>
        </ul>
      </div>
      <div className="fee-table">
        <h2 className="content-title">料金表</h2>
        <div className="table-grid">
          <div className="table-cell">パターン1</div>
          <div className="table-cell">パターン2</div>
          <div className="table-cell">パターン3</div>
          <div className="table-cell">パターン4</div>
          <div className="table-cell">料金A</div>
          <div className="table-cell">料金B</div>
          <div className="table-cell">料金C</div>
          <div className="table-cell">料金D</div>
          <div className="table-cell">説明A</div>
          <div className="table-cell">説明B</div>
          <div className="table-cell">説明C</div>
          <div className="table-cell">説明D</div>
        </div>
      </div>
    </div>
  </section>
  
  <section className="content-box content-two">
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




