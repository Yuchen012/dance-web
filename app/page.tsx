"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css"; // 既存のCSSを活かす

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ヒーローセクション */}
      <section className="hero-section">
        <header className="hero-header">
          <Image src="/logo.png" alt="Site Logo" width={150} height={50} />
        </header>

        {/* Swiper ギャラリー */}
        <div className="photo-gallery">
          <Swiper
             modules={[Autoplay, Navigation, Pagination]}
             slidesPerView={1}
             navigation
             pagination={{ clickable: true }}
             autoplay={{ delay: 3000 }}
             loop={true}
             className="gallery-swiper"
           >

            {["gallery1.jpg", "gallery2.jpg", "gallery3.jpg", "gallery4.jpg"].map((img, index) => (
              <SwiperSlide key={index}>
                <div className="gallery-slide">
                  <Image
                    src={`/${img}`}
                    alt={`Gallery Image ${index + 1}`}
                    layout="intrinsic"
                    width={1920}
                    height={800}
                    className="gallery-img"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 最初に見えるコンテンツ */}
      <section className="intro-content">
        <h2>ジャズダンス・ピラティス・モダンバレエ入門！</h2>
        <p>音楽にのって楽しく身体を動かしながら</p>
        <p>体力・筋力・柔軟性・バランス感覚の向上を目指します。</p>
        <p>ピラティスでは美しい姿勢、しっかりした体幹を！</p>
      </section>



      <main className="main-content">
      <section className="content-box content-one">
  <div className="class-fee-wrapper">
    <div className="class-fee-container three-cards-row">
      <div className="price-card unified-card">
        <h3 className="class-title">子どもクラス（４才〜１２才）</h3>
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
        <li>子どもクラス・親子クラスは、ストレッチ・ダンス・バレエ中心となります（ピラティスもあります）</li>
        <li>火・水・金・日曜日にレッスンがあります。レッスン時間などはお問い合わせください。</li>
      </ul>
    </div>
  </div>
</section>





  
  <section className="content-box content-two">
  <h2 className="content-title">アクセス・お問い合わせ</h2>

  {/* 上：お問い合わせ情報 */}
  <div className="contact-info">
    <p><strong>教室名：</strong>Studio Anne</p>
    <p><strong>住所：</strong>〒400-0836 山梨県甲府市小瀬町1352-3</p>
    <p><strong>電話番号：</strong>055-242-8252</p>
    <p><strong>受付時間：</strong>10:00〜18:00</p>
    <p className="contact-note">※レッスン中などで出られない場合がございます。ご了承ください。</p>
    <p className="contact-note">その場合はいただいたお電話番号に折り返しご連絡させていただきます。</p>
  </div>

  {/* 下：Google Map埋め込み */}
  <div className="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.464843123877!2d138.59039691525693!3d35.623355780206565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601be8455b942cfb%3A0xf4d7c8c0e937b5cf!2z44CSNDAwLTA4MzYg5bGx5Y-65bqc5bGx5Y-65biC5rKi55Sw5bKp77yR5LiB55uu77yR4oiS77yR77yR!5e0!3m2!1sja!2sjp!4v1747840709872!5m2!1sja!2sjp"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>


</main>



      {/* フッター */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 Studio Anne</p>
      </footer>
    </div>
  );
} 




