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
  <div className="price-card-grid">
    <div className="price-card">
      <div className="card-section pattern">パターン1</div>
      <div className="card-section price">料金A</div>
      <div className="card-section description">説明A</div>
    </div>
    <div className="price-card">
      <div className="card-section pattern">パターン2</div>
      <div className="card-section price">料金B</div>
      <div className="card-section description">説明B</div>
    </div>
    <div className="price-card">
      <div className="card-section pattern">パターン3</div>
      <div className="card-section price">料金C</div>
      <div className="card-section description">説明C</div>
    </div>
    <div className="price-card">
      <div className="card-section pattern">パターン4</div>
      <div className="card-section price">料金D</div>
      <div className="card-section description">説明D</div>
    </div>
  </div>
</div>


    </div>
  </section>
  
  <section className="content-box content-two">
  <h2 className="content-title">アクセス</h2>
  <div className="map-container">
  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.7401218362027!2d139.69950331525848!3d35.524482780234885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185f01f04cf2e3%3A0xc1163c3a0a1d2fa4!2z44CSMjEwLTAwMjIg56We5aWI5bed55yM5bed5bSO5Y2X5Z2C!5e0!3m2!1sja!2sjp!4v1682032234478!5m2!1sja!2sjp"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

  </div>
</section>

</main>



      {/* フッター */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 Sample Website</p>
      </footer>
    </div>
  );
}




