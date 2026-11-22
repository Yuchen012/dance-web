"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./styles.css";

const TEL = "055-242-8252";

const NAV_LINKS = [
  { href: "#about", label: "スタジオ" },
  { href: "#classes", label: "クラス・料金" },
  { href: "#access", label: "アクセス" },
];

const BENEFITS = ["体力・筋力", "柔軟性", "バランス感覚", "美しい姿勢・体幹"];

const CLASSES = [
  {
    icon: "🩰",
    title: "子どもクラス",
    range: "4才〜12才",
    description:
      "運動習慣は子どもにとって大切です。楽しく動きながら、運動能力向上や良い姿勢を目指します。",
    amount: "6,500",
    unit: "円",
    meta: "月4回・60分",
    tone: "pink",
  },
  {
    icon: "🌷",
    title: "親子クラス",
    range: "幼児・小学生",
    description:
      "50分ですが、ストレッチ・ダンスバレエの基礎・踊りを内容豊富に。お母さんにとっても良い運動になります。",
    amount: "5,000",
    unit: "円",
    meta: "月4回・50分・1人",
    tone: "lav",
  },
  {
    icon: "🌙",
    title: "おとなクラス",
    range: "学生〜シニア",
    description:
      "学生からシニアまでピラティス・ダンス・バレエで美しい姿勢や体力づくりを目指します。",
    amount: "6,500",
    unit: "円〜",
    meta: "月4回・90分",
    tone: "mint",
  },
];

const NOTES = [
  "レッスン料の他に、ひとりにつき入会金 5,000円が必要となります。（※全て税込表示となります）",
  "子どもクラス・親子クラスは、ストレッチ・ダンス・バレエ中心となります（ピラティスもあります）",
  "レッスン時間などはお問い合わせください。",
];

const WEEK = [
  { d: "月", on: false },
  { d: "火", on: true },
  { d: "水", on: true },
  { d: "木", on: false },
  { d: "金", on: true },
  { d: "土", on: false },
  { d: "日", on: true },
];

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.464843123877!2d138.59039691525693!3d35.623355780206565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601be8455b942cfb%3A0xf4d7c8c0e937b5cf!2z44CSNDAwLTA4MzYg5bGx5Y-65bqc5bGx5Y-65biC5rKi55Sw5bKp77yR5LiB55uu77yR4oiS77yR77yR!5e0!3m2!1sja!2sjp!4v1747840709872!5m2!1sja!2sjp";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
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
    <div className="site">
      <div className="blob blob--pink" aria-hidden="true" />
      <div className="blob blob--lav" aria-hidden="true" />
      <div className="blob blob--mint" aria-hidden="true" />

      {/* ===== ナビ ===== */}
      <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <a href="#top" className="nav__logo" aria-label="Studio Anne トップへ">
          <Image src="/logo.png" alt="Studio Anne" width={130} height={30} priority />
        </a>
        <nav className="nav__links" aria-label="メインメニュー">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href={`tel:${TEL}`} className="nav__cta">
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
        </button>
      </header>

      {/* ===== モバイルメニュー ===== */}
      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav className="mobile-menu__inner">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${TEL}`}
            className="mobile-menu__tel"
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
          >
            ☎ {TEL}
          </a>
        </nav>
      </div>

      {/* ===== ヒーロー ===== */}
      <section className="hero" id="top">
        <div className="wrap">
          <p className="script hero__script">Welcome to Studio Anne</p>
          <h1 className="hero__title">
            音楽にのって、
            <br />
            ふんわり楽しく踊ろう。
          </h1>
          <p className="hero__lead">
            ジャズダンス・ピラティス・モダンバレエ。
            <br />
            子どもから大人まで、やさしく通えるスタジオです。
          </p>
          <div className="hero__actions">
            <a href="#classes" className="btn btn--grad">
              クラスと料金を見る
            </a>
            <a href={`tel:${TEL}`} className="btn btn--white">
              ☎ 電話で問い合わせる
            </a>
          </div>
          <div className="hero__imgs">
            {[
              { src: "/gallery3.jpg", alt: "スタジオに飾られたリースと絵" },
              { src: "/gallery4.jpg", alt: "子どもクラスのレッスン風景" },
              { src: "/gallery2.jpg", alt: "バーのある明るいスタジオ" },
            ].map((img, i) => (
              <div key={img.src} className={`hero__img hero__img--${i}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority
                  sizes="(max-width: 800px) 80vw, 32vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section className="section" id="about">
        <div className="wrap">
          <div className="glass about" data-reveal>
            <p className="script">About</p>
            <h2 className="heading">スタジオについて</h2>
            <p className="about__catch">ジャズダンス・ピラティス・モダンバレエ入門！</p>
            <p>
              音楽にのって楽しく身体を動かしながら、体力・筋力・柔軟性・バランス感覚の向上を目指します。
              ピラティスでは美しい姿勢、しっかりした体幹を。
            </p>
            <ul className="pills">
              {BENEFITS.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="about__photo">
              <Image
                src="/gallery1.jpg"
                alt="鏡張りの明るいスタジオ"
                fill
                sizes="(max-width: 800px) 90vw, 720px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Classes ===== */}
      <section className="section" id="classes">
        <div className="wrap">
          <div className="title" data-reveal>
            <p className="script">Classes</p>
            <h2 className="heading">クラス・料金</h2>
          </div>
          <div className="cards">
            {CLASSES.map((c, i) => (
              <article
                key={c.title}
                className={`card card--${c.tone}`}
                data-reveal
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="card__icon" aria-hidden="true">
                  {c.icon}
                </div>
                <h3 className="card__title">{c.title}</h3>
                <span className="card__range">{c.range}</span>
                <p className="card__desc">{c.description}</p>
                <div className="card__price">
                  {c.amount}
                  <small>{c.unit}</small>
                </div>
                <span className="card__meta">{c.meta}</span>
              </article>
            ))}
          </div>

          <div className="week" data-reveal>
            <p className="week__label">レッスン曜日</p>
            <ol className="week__days">
              {WEEK.map((w) => (
                <li key={w.d} className={w.on ? "is-on" : ""}>
                  {w.d}
                </li>
              ))}
            </ol>
          </div>
          <ul className="notes" data-reveal>
            {NOTES.map((n) => (
              <li key={n}>※{n}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== Access ===== */}
      <section className="section" id="access">
        <div className="wrap">
          <div className="title" data-reveal>
            <p className="script">Access</p>
            <h2 className="heading">アクセス・お問い合わせ</h2>
          </div>
          <div className="access">
            <div className="glass" data-reveal>
              <dl className="access__list">
                <dt>教室名</dt>
                <dd>Studio Anne（スタジオ アン）</dd>
                <dt>住所</dt>
                <dd>〒400-0836 山梨県甲府市小瀬町1352-3</dd>
                <dt>電話番号</dt>
                <dd>
                  <a href={`tel:${TEL}`}>{TEL}</a>
                </dd>
                <dt>受付時間</dt>
                <dd>10:00〜18:00</dd>
              </dl>
              <p className="access__note">
                ※レッスン中などで出られない場合がございます。ご了承ください。その場合はいただいたお電話番号に折り返しご連絡させていただきます。
              </p>
            </div>
            <div className="access__map" data-reveal>
              <iframe
                title="Studio Anne の地図"
                src={MAP_SRC}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta">
        <div className="wrap" data-reveal>
          <p className="script cta__script">Let&rsquo;s dance together</p>
          <p>見学・体験のご相談は、お電話でお気軽にどうぞ。</p>
          <a href={`tel:${TEL}`} className="cta__tel">
            ☎ {TEL}
          </a>
          <p className="cta__hours">受付時間 10:00〜18:00</p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <Image src="/logo.png" alt="Studio Anne" width={150} height={35} />
        <nav className="footer__nav" aria-label="フッターメニュー">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <p className="footer__copy">&copy; {new Date().getFullYear()} Studio Anne</p>
      </footer>
    </div>
  );
}
