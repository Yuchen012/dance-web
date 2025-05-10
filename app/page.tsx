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
        <h2>ジャズダンス・モダンバレエ入門！</h2>
        <p>音楽にのって楽しく身体を動かしながら</p>
        <p>体力・筋力・柔軟性・バランス感覚の向上を目指します。</p>
        <p>ピラティスでは美しい姿勢、しっかりした体幹を！</p>
      </section>



      <main className="main-content">
      <section className="content-box content-one">
  <div className="class-fee-wrapper">
    <div className="class-fee-container three-cards-row">
      <div className="price-card unified-card">
        <h3 className="class-title">小学校クラス</h3>
        <p className="class-description">
          運動習慣は子どもにとって大切です。<br />
          楽しく動きながら、運動能力向上や良い姿勢を目指します。
        </p>
        <div className="class-price">月4回／6,500円（60分）</div>
      </div>

      <div className="price-card unified-card">
        <h3 className="class-title">親子クラス（幼児・小学生）</h3>
        <p className="class-description">
          50分ですが、ストレッチ・ダンスバレエの基礎・踊りを内容豊富に。<br />
          お母さんにとっても良い運動になります。
        </p>
        <div className="class-price">月4回／5,000円（50分・1人）</div>
      </div>

      <div className="price-card unified-card">
        <h3 className="class-title">おとなクラス</h3>
        <p className="class-description">
          学生からシニアまでピラティス・ダンス・バレエで<br />
          美しい姿勢や体力づくりを目指します。
        </p>
        <div className="class-price">月4回／6,500円～（90分）</div>
      </div>
    </div>

    
    <div className="class-notes">
      <ul>
        <li>レッスン料の他に、ひとりにつき入会金 5,000円が必要となります。（※全て税込表示となります）</li>
        <li>小学生・親子クラスは、ストレッチ・ダンス・バレエ中心となります（ピラティスもあります）</li>
        <li>幼児のみのクラスもございますので、お気軽にお問い合わせください。</li>
        <li>火・水・金・日曜日にレッスンがあります。レッスン時間などはお問い合わせください。</li>
      </ul>
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




