"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./styles.css";

const NAV_LINKS = [
  { href: "#about", label: "About", jp: "スタジオについて" },
  { href: "#classes", label: "Classes", jp: "クラス・料金" },
  { href: "#access", label: "Access", jp: "アクセス" },
];

const GALLERY = ["gallery1.jpg", "gallery2.jpg", "gallery3.jpg", "gallery4.jpg"];

const CLASSES = [
  {
    no: "01",
    title: "子どもクラス",
    range: "4才〜12才",
    description:
      "運動習慣は子どもにとって大切です。楽しく動きながら、運動能力向上や良い姿勢を目指します。",
    price: "月4回 / 6,500円",
    span: "60分",
  },
  {
    no: "02",
    title: "親子クラス",
    range: "幼児・小学生",
    description:
      "50分ですが、ストレッチ・ダンスバレエの基礎・踊りを内容豊富に。お母さんにとっても良い運動になります。",
    price: "月4回 / 5,000円",
    span: "50分・1人",
  },
  {
    no: "03",
    title: "おとなクラス",
    range: "学生〜シニア",
    description:
      "学生からシニアまでピラティス・ダンス・バレエで美しい姿勢や体力づくりを目指します。",
    price: "月4回 / 6,500円〜",
    span: "90分",
  },
];

const NOTES = [
  "レッスン料の他に、ひとりにつき入会金 5,000円が必要となります。（※全て税込表示となります）",
  "子どもクラス・親子クラスは、ストレッチ・ダンス・バレエ中心となります（ピラティスもあります）",
  "火・水・金・日曜日にレッスンがあります。レッスン時間などはお問い合わせください。",
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const revealRef = useRef<HTMLDivElement>(null);

  // ナビの背景切り替え
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // スクロールリビール
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  // メニュー開閉時のスクロールロック
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="site" ref={revealRef}>
      {/* ===== ナビ ===== */}
      <header className={`nav ${scrolled ? "nav--solid" : ""}`}>
        <a href="#top" className="nav__logo" aria-label="Studio Anne">
          <Image src="/logo.png" alt="Studio Anne" width={140} height={46} priority />
        </a>

        <nav className="nav__links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav__link">
              <span className="nav__link-en">{link.label}</span>
              <span className="nav__link-jp">{link.jp}</span>
            </a>
          ))}
          <a href="tel:055-242-8252" className="nav__cta">
            お問い合わせ
          </a>
        </nav>

        <button
          className={`hamburger ${menuOpen ? "is-open" : ""}`}
          aria-label="メニュー"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* ===== モバイルメニュー ===== */}
      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <nav className="mobile-menu__inner">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-menu__link"
              style={{ transitionDelay: `${0.08 * i + 0.1}s` }}
              onClick={() => setMenuOpen(false)}
            >
              <span className="mobile-menu__no">0{i + 1}</span>
              <span className="mobile-menu__label">{link.label}</span>
              <span className="mobile-menu__jp">{link.jp}</span>
            </a>
          ))}
          <a
            href="tel:055-242-8252"
            className="mobile-menu__cta"
            onClick={() => setMenuOpen(false)}
          >
            055-242-8252 に電話する
          </a>
        </nav>
      </div>

      {/* ===== ヒーロー ===== */}
      <section className="hero" id="top">
        <div className="hero__bg">
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            slidesPerView={1}
            loop
            speed={1400}
            autoplay={{ delay: 4200, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="hero__swiper"
          >
            {GALLERY.map((img, index) => (
              <SwiperSlide key={img}>
                <div className="hero__slide">
                  <Image
                    src={`/${img}`}
                    alt={`Studio Anne ${index + 1}`}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="hero__overlay" />
        </div>

        <div className="hero__content">
          <p className="hero__eyebrow">DANCE · PILATES · BALLET</p>
          <h1 className="hero__title">
            <span className="hero__title-line">音楽にのって、</span>
            <span className="hero__title-line hero__title-accent">
              身体を解き放つ。
            </span>
          </h1>
          <p className="hero__lead">
            山梨県甲府市のダンススタジオ Studio Anne。
            <br />
            ジャズダンス・ピラティス・モダンバレエで、しなやかな身体づくりを。
          </p>
          <div className="hero__actions">
            <a href="#classes" className="btn btn--primary">
              クラスを見る
            </a>
            <a href="#access" className="btn btn--ghost">
              アクセス
            </a>
          </div>
        </div>

        <a href="#about" className="hero__scroll" aria-label="下へスクロール">
          <span>SCROLL</span>
          <span className="hero__scroll-line" />
        </a>
      </section>

      {/* ===== About ===== */}
      <section className="about" id="about">
        <div className="about__inner">
          <p className="section-label" data-reveal>
            <span>01</span> About
          </p>
          <h2 className="about__heading" data-reveal>
            ジャズダンス・ピラティス・
            <br />
            モダンバレエ入門。
          </h2>
          <div className="about__body" data-reveal>
            <p>
              音楽にのって楽しく身体を動かしながら、体力・筋力・柔軟性・バランス感覚の向上を目指します。
            </p>
            <p>
              ピラティスでは美しい姿勢、しっかりした体幹を。子どもから大人まで、それぞれのペースで楽しめるレッスンをご用意しています。
            </p>
          </div>

          <div className="about__tags" data-reveal>
            {["JAZZ DANCE", "PILATES", "MODERN BALLET", "STRETCH"].map((t) => (
              <span key={t} className="about__tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Classes ===== */}
      <section className="classes" id="classes">
        <div className="classes__head">
          <p className="section-label section-label--light" data-reveal>
            <span>02</span> Classes &amp; Fee
          </p>
          <h2 className="classes__heading" data-reveal>
            クラス・料金
          </h2>
        </div>

        <div className="classes__grid">
          {CLASSES.map((c, i) => (
            <article
              className="class-card"
              data-reveal
              style={{ transitionDelay: `${i * 0.1}s` }}
              key={c.no}
            >
              <span className="class-card__no">{c.no}</span>
              <h3 className="class-card__title">{c.title}</h3>
              <span className="class-card__range">{c.range}</span>
              <p className="class-card__desc">{c.description}</p>
              <div className="class-card__price">
                <strong>{c.price}</strong>
                <span>{c.span}</span>
              </div>
            </article>
          ))}
        </div>

        <ul className="classes__notes" data-reveal>
          {NOTES.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </section>

      {/* ===== Access ===== */}
      <section className="access" id="access">
        <div className="access__info" data-reveal>
          <p className="section-label" data-reveal>
            <span>03</span> Access
          </p>
          <h2 className="access__heading">アクセス・お問い合わせ</h2>

          <dl className="access__list">
            <div>
              <dt>教室名</dt>
              <dd>Studio Anne</dd>
            </div>
            <div>
              <dt>住所</dt>
              <dd>〒400-0836 山梨県甲府市小瀬町1352-3</dd>
            </div>
            <div>
              <dt>電話番号</dt>
              <dd>
                <a href="tel:055-242-8252">055-242-8252</a>
              </dd>
            </div>
            <div>
              <dt>受付時間</dt>
              <dd>10:00〜18:00</dd>
            </div>
          </dl>

          <p className="access__note">
            ※レッスン中などで出られない場合がございます。ご了承ください。その場合はいただいたお電話番号に折り返しご連絡させていただきます。
          </p>
        </div>

        <div className="access__map" data-reveal>
          <iframe
            title="Studio Anne の地図"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.464843123877!2d138.59039691525693!3d35.623355780206565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601be8455b942cfb%3A0xf4d7c8c0e937b5cf!2z44CSNDAwLTA4MzYg5bGx5Y-65bqc5bGx5Y-65biC5rKi55Sw5bKp77yR5LiB55uu77yR4oiS77yR77yR!5e0!3m2!1sja!2sjp!4v1747840709872!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <div className="footer__brand">
          <span className="footer__name">Studio Anne</span>
          <span className="footer__tag">DANCE · PILATES · BALLET</span>
        </div>
        <p className="footer__copy">&copy; {new Date().getFullYear()} Studio Anne</p>
      </footer>
    </div>
  );
}
