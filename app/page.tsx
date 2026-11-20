"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./styles.css";

const TEL = "055-242-8252";

const NAV_LINKS = [
  { href: "#about", label: "About", jp: "スタジオについて" },
  { href: "#classes", label: "Classes", jp: "クラス・料金" },
  { href: "#access", label: "Access", jp: "アクセス" },
];

const HERO_IMAGES = ["gallery4.jpg", "gallery2.jpg", "gallery1.jpg", "gallery3.jpg"];

const DISCIPLINES = ["Jazz Dance", "Pilates", "Modern Ballet", "Stretch"];

const BENEFITS = [
  { en: "Strength", jp: "体力・筋力" },
  { en: "Flexibility", jp: "柔軟性" },
  { en: "Balance", jp: "バランス感覚" },
  { en: "Posture", jp: "美しい姿勢・体幹" },
];

const CLASSES = [
  {
    no: "01",
    en: "Kids",
    title: "子どもクラス",
    range: "4才〜12才",
    description:
      "運動習慣は子どもにとって大切です。楽しく動きながら、運動能力向上や良い姿勢を目指します。",
    freq: "月4回",
    amount: "6,500",
    unit: "円",
    span: "60分",
    tone: "rose",
  },
  {
    no: "02",
    en: "Parent & Child",
    title: "親子クラス",
    range: "幼児・小学生",
    description:
      "50分ですが、ストレッチ・ダンスバレエの基礎・踊りを内容豊富に。お母さんにとっても良い運動になります。",
    freq: "月4回",
    amount: "5,000",
    unit: "円",
    span: "50分・1人",
    tone: "sand",
  },
  {
    no: "03",
    en: "Adults",
    title: "おとなクラス",
    range: "学生〜シニア",
    description:
      "学生からシニアまでピラティス・ダンス・バレエで美しい姿勢や体力づくりを目指します。",
    freq: "月4回",
    amount: "6,500",
    unit: "円〜",
    span: "90分",
    tone: "sage",
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

/** ロゴのクローバーをモチーフにした小さなマーク */
function Clover({ className = "" }: { className?: string }) {
  const heart = "M0,-1 C-7,-13 -20,-3 0,13 C20,-3 7,-13 0,-1Z";
  return (
    <svg viewBox="-40 -40 80 80" className={className} aria-hidden="true">
      {[0, 120, 240].map((r) => (
        <path
          key={r}
          d={heart}
          transform={`rotate(${r}) translate(0,-15)`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [slide, setSlide] = useState(0);

  // ナビ背景 + パララックス
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let ticking = false;
    const update = () => {
      ticking = false;
      setScrolled(window.scrollY > 30);
      if (reduce) return;
      const vh = window.innerHeight;
      items.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const speed = parseFloat(el.dataset.parallax || "0.1");
        const offset = (rect.top + rect.height / 2 - vh / 2) * -speed;
        el.style.setProperty("--py", `${offset.toFixed(1)}px`);
      });
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
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

  // ヒーロー画像のクロスフェード
  useEffect(() => {
    const id = window.setInterval(
      () => setSlide((s) => (s + 1) % HERO_IMAGES.length),
      5200
    );
    return () => window.clearInterval(id);
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
      {/* ===== ナビ ===== */}
      <header className={`nav ${scrolled ? "nav--solid" : ""}`}>
        <a href="#top" className="nav__logo" aria-label="Studio Anne トップへ">
          <Image src="/logo.png" alt="Studio Anne" width={150} height={35} priority />
        </a>

        <nav className="nav__links" aria-label="メインメニュー">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav__link">
              <span className="nav__link-en">{link.label}</span>
              <span className="nav__link-jp">{link.jp}</span>
            </a>
          ))}
          <a href={`tel:${TEL}`} className="nav__cta">
            <span className="nav__cta-dot" />
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
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-menu__link"
              style={{ transitionDelay: `${0.07 * i + 0.12}s` }}
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
            >
              <span className="mobile-menu__no">0{i + 1}</span>
              <span className="mobile-menu__label">{link.label}</span>
              <span className="mobile-menu__jp">{link.jp}</span>
            </a>
          ))}
          <a
            href={`tel:${TEL}`}
            className="mobile-menu__cta"
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
          >
            <small>TEL</small> {TEL}
          </a>
        </nav>
      </div>

      {/* ===== ヒーロー ===== */}
      <section className="hero" id="top">
        <div className="hero__blob hero__blob--a" aria-hidden="true" />
        <div className="hero__blob hero__blob--b" aria-hidden="true" />

        <div className="hero__text">
          <p className="eyebrow hero__eyebrow">
            <Clover className="eyebrow__clover" />
            Dance Studio in Kofu, Yamanashi
          </p>
          <h1 className="hero__title">
            <span className="hero__line">
              <span>Move</span>
            </span>
            <span className="hero__line">
              <span>
                <em>with</em> the
              </span>
            </span>
            <span className="hero__line">
              <span>music.</span>
            </span>
          </h1>
          <p className="hero__lead">
            ジャズダンス・ピラティス・モダンバレエ。
            <br />
            子どもから大人まで、しなやかな身体づくりを。
          </p>
          <div className="hero__actions">
            <a href="#classes" className="btn btn--dark">
              クラスと料金を見る
              <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
            <a href={`tel:${TEL}`} className="btn btn--line">
              電話で問い合わせる
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <p className="hero__vertical" aria-hidden="true">
            音楽にのって、身体を解き放つ。
          </p>
          <div className="hero__arch">
            {HERO_IMAGES.map((img, i) => (
              <div
                key={img}
                className={`hero__img ${i === slide ? "is-active" : ""}`}
                aria-hidden={i !== slide}
              >
                <Image
                  src={`/${img}`}
                  alt="Studio Anne のスタジオの様子"
                  fill
                  priority={i === 0}
                  sizes="(max-width: 900px) 90vw, 45vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
          <div className="hero__dots" role="tablist" aria-label="スライド切り替え">
            {HERO_IMAGES.map((img, i) => (
              <button
                key={img}
                role="tab"
                aria-selected={i === slide}
                aria-label={`${i + 1}枚目`}
                className={i === slide ? "is-active" : ""}
                onClick={() => setSlide(i)}
              />
            ))}
          </div>
          <div className="badge" aria-hidden="true">
            <svg viewBox="0 0 200 200" className="badge__ring">
              <defs>
                <path
                  id="badge-circle"
                  d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0"
                />
              </defs>
              <text>
                <textPath href="#badge-circle">
                  STUDIO ANNE · DANCE · PILATES · BALLET ·
                </textPath>
              </text>
            </svg>
            <Clover className="badge__clover" />
          </div>
        </div>

        <a href="#about" className="hero__scroll" aria-label="下へスクロール">
          <span>Scroll</span>
          <i />
        </a>
      </section>

      {/* ===== マーキー ===== */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map((k) => (
            <div className="marquee__group" key={k}>
              {DISCIPLINES.concat(DISCIPLINES).map((d, i) => (
                <span key={`${k}-${i}`}>
                  {d}
                  <Clover className="marquee__clover" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ===== About ===== */}
      <section className="about" id="about">
        <div className="about__media">
          <div className="about__photo about__photo--main" data-parallax="0.06" data-reveal>
            <Image
              src="/gallery1.jpg"
              alt="鏡張りの明るいスタジオ"
              fill
              sizes="(max-width: 900px) 90vw, 40vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="about__photo about__photo--sub" data-parallax="-0.08" data-reveal>
            <Image
              src="/gallery3.jpg"
              alt="スタジオに飾られたリースと絵"
              fill
              sizes="(max-width: 900px) 40vw, 18vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <p className="about__caption">Bright, mirrored studio in Kofu</p>
        </div>

        <div className="about__body">
          <p className="eyebrow" data-reveal>
            <span className="eyebrow__no">01</span> About the studio
          </p>
          <h2 className="heading" data-reveal>
            ジャズダンス・ピラティス・
            <br />
            モダンバレエ入門。
          </h2>
          <div className="about__text" data-reveal>
            <p>
              音楽にのって楽しく身体を動かしながら、体力・筋力・柔軟性・バランス感覚の向上を目指します。
            </p>
            <p>
              ピラティスでは美しい姿勢、しっかりした体幹を。子どもから大人まで、それぞれのペースで楽しめるレッスンをご用意しています。
            </p>
          </div>

          <ul className="benefits" data-reveal>
            {BENEFITS.map((b, i) => (
              <li key={b.en}>
                <span className="benefits__no">0{i + 1}</span>
                <span className="benefits__en">{b.en}</span>
                <span className="benefits__jp">{b.jp}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== Classes ===== */}
      <section className="classes" id="classes">
        <div className="classes__head">
          <p className="eyebrow" data-reveal>
            <span className="eyebrow__no">02</span> Classes &amp; Fee
          </p>
          <h2 className="heading" data-reveal>
            クラス・料金
          </h2>
          <p className="classes__intro" data-reveal>
            年齢や目的にあわせて選べる3つのクラス。
            <br />
            はじめての方も、どうぞお気軽に。
          </p>
        </div>

        <div className="classes__grid">
          {CLASSES.map((c, i) => (
            <article
              className={`class-card class-card--${c.tone}`}
              data-reveal
              style={{ transitionDelay: `${i * 0.12}s` }}
              key={c.no}
            >
              <div className="class-card__arch">
                <span className="class-card__no">{c.no}</span>
                <span className="class-card__en">{c.en}</span>
              </div>
              <div className="class-card__body">
                <h3 className="class-card__title">{c.title}</h3>
                <span className="class-card__range">{c.range}</span>
                <p className="class-card__desc">{c.description}</p>
                <div className="class-card__price">
                  <span className="class-card__freq">{c.freq}</span>
                  <span className="class-card__amount">
                    {c.amount}
                    <small>{c.unit}</small>
                  </span>
                  <span className="class-card__span">{c.span}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="classes__info" data-reveal>
          <div className="week">
            <p className="week__label">
              <span>Lesson days</span>レッスン曜日
            </p>
            <ol className="week__days">
              {WEEK.map((w) => (
                <li key={w.d} className={w.on ? "is-on" : ""}>
                  {w.d}
                </li>
              ))}
            </ol>
          </div>
          <ul className="notes">
            {NOTES.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== Access ===== */}
      <section className="access" id="access">
        <div className="access__info">
          <p className="eyebrow eyebrow--light" data-reveal>
            <span className="eyebrow__no">03</span> Access
          </p>
          <h2 className="heading heading--light" data-reveal>
            アクセス・お問い合わせ
          </h2>

          <dl className="access__list" data-reveal>
            <div>
              <dt>教室名</dt>
              <dd>Studio Anne（スタジオ アン）</dd>
            </div>
            <div>
              <dt>住所</dt>
              <dd>〒400-0836 山梨県甲府市小瀬町1352-3</dd>
            </div>
            <div>
              <dt>電話番号</dt>
              <dd>
                <a href={`tel:${TEL}`}>{TEL}</a>
              </dd>
            </div>
            <div>
              <dt>受付時間</dt>
              <dd>10:00〜18:00</dd>
            </div>
          </dl>

          <p className="access__note" data-reveal>
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

      {/* ===== CTA ===== */}
      <section className="cta">
        <Clover className="cta__clover" />
        <p className="cta__en" data-reveal>
          Let&rsquo;s <em>dance</em> together.
        </p>
        <p className="cta__jp" data-reveal>
          ご質問・ご相談は、お電話でお気軽にどうぞ。
        </p>
        <a href={`tel:${TEL}`} className="cta__tel" data-reveal>
          <small>TEL</small>
          {TEL}
        </a>
        <p className="cta__hours" data-reveal>受付時間 10:00〜18:00</p>
      </section>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <Image
          src="/logo.png"
          alt="Studio Anne"
          width={170}
          height={40}
          className="footer__logo"
        />
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
