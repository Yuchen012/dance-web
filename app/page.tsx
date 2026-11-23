"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./styles.css";

const TEL = "055-242-8252";
const HOURS = "10:00〜17:00";
const ADDRESS = "〒400-0836 山梨県甲府市小瀬町1352-3";

const NAV_LINKS = [
  { href: "#about", label: "スタジオ" },
  { href: "#programs", label: "プログラム" },
  { href: "#schedule", label: "スケジュール" },
  { href: "#price", label: "料金" },
  { href: "#access", label: "アクセス" },
];

const PILLARS = [
  { char: "整", text: "身体を整えること", tone: "lav" },
  { char: "楽", text: "楽しく動くこと", tone: "pink" },
  { char: "知", text: "自分の体を知ること", tone: "peach" },
];

const FEATURES = [
  "ピラティス・ダンス・バレエを一度に楽しむことが出来ます（選べます）",
  "4歳から70代まで、幅広い世代が楽しくレッスンしています",
  "グループレッスン・パーソナルと自分に合ったものを選べます",
  "アットホームな雰囲気なので、気軽にご相談ください",
];

const PROGRAMS = [
  {
    en: "Pilates",
    title: "ピラティス",
    img: "/class-pilates.jpg",
    alt: "マットの上でピラティスをする大人クラスの様子",
    desc: "姿勢や身体の使い方を意識し、しなやかで動きやすい身体へ。誰でもできるように簡単な動きから始めます。",
    tone: "mint",
  },
  {
    en: "Dance",
    title: "ダンス（ジャズダンス）",
    img: "/class-dance.jpg",
    alt: "鏡の前で腕を上げて踊るダンスクラスの様子",
    desc: "リズムに乗って身体を動かす楽しさを、子どもからシニアまで。",
    tone: "pink",
  },
  {
    en: "Ballet",
    title: "バレエ（モダンバレエ）",
    img: "/class-ballet.jpg",
    alt: "バーにつかまってバレエの基礎を練習する様子",
    desc: "美しい姿勢としなやかな動きを誰にでもできるように、基本から教えます。",
    tone: "lav",
  },
  {
    en: "Parent & Child",
    title: "親子クラス",
    img: "/class-oyako.jpg",
    alt: "親子で一緒にダンスをするレッスンの様子",
    desc: "ストレッチ・ダンス・バレエを親子で楽しく。子どもたちの送り迎えで大変なお母様方、その時間を子どもと一緒に運動しませんか？ 30代以降は筋肉量が減少し始め、体力低下・体型変化などが現れる方もいて、大切な時期です。",
    note: "※年中児から小学生までとさせていただきます。",
    tone: "peach",
  },
];

const PERSONAL = {
  img: "/class-personal.jpg",
  alt: "講師がマンツーマンで身体の使い方を指導する様子",
};

type Lesson = { time: string; name: string; personal?: boolean };

const SCHEDULE: { day: string; tone: string; lessons: Lesson[] }[] = [
  {
    day: "火曜日",
    tone: "mint",
    lessons: [
      { time: "13:00〜15:00", name: "パーソナル予約時間", personal: true },
      { time: "17:00〜18:00", name: "幼児・小学生（親子）" },
      { time: "18:30〜20:00", name: "ピラティス・ダンス" },
      { time: "20:00〜20:30", name: "バレエ" },
    ],
  },
  {
    day: "水曜日",
    tone: "lav",
    lessons: [
      { time: "9:00〜12:00", name: "パーソナル予約時間", personal: true },
      { time: "14:00〜15:30", name: "ピラティス・ダンス" },
      { time: "15:30〜16:00", name: "バレエ" },
    ],
  },
  {
    day: "金曜日",
    tone: "peach",
    lessons: [
      { time: "9:00〜12:00", name: "パーソナル予約時間", personal: true },
      { time: "14:00〜15:30", name: "ピラティス・ダンス" },
      { time: "15:30〜16:00", name: "バレエ" },
    ],
  },
  {
    day: "日曜日",
    tone: "pink",
    lessons: [
      { time: "13:00〜14:00", name: "幼児・小学生（親子）" },
      { time: "14:30〜16:00", name: "ピラティス・ダンス" },
      { time: "16:00〜16:30", name: "バレエ" },
    ],
  },
];

const PRICES: { label: string; amount: string; sub?: string }[] = [
  { label: "週1回（月4回分）", amount: "7,000円" },
  { label: "週2回（月8回分）", amount: "9,000円" },
  { label: "バレエ（30分／月4回分）を加えると", amount: "+2,000円" },
  { label: "幼児・小学生（60分／月4回分）", amount: "6,000円", sub: "親子割引あります" },
  { label: "パーソナル（60分／1回分）", amount: "6,000円" },
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
            何歳になっても
            <br />
            自分らしく動ける身体を
          </h1>
          <p className="hero__lead">
            ピラティス・ダンス・バレエを通して、
            <br />
            幼児からシニアまで、すべての世代の健康を身体づくりから応援します。
          </p>
          <div className="hero__actions">
            <a href="#programs" className="btn btn--grad">
              プログラムを見る
            </a>
            <a href={`tel:${TEL}`} className="btn btn--white">
              ☎ 見学・体験のお問い合わせ
            </a>
          </div>
          <div className="hero__imgs">
            {[
              { src: "/class-pilates.jpg", alt: "ピラティスのレッスン風景" },
              { src: "/class-oyako.jpg", alt: "親子クラスのレッスン風景" },
              { src: "/class-ballet.jpg", alt: "バレエのレッスン風景" },
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

      {/* ===== キャンペーン ===== */}
      <section className="campaign-wrap">
        <div className="wrap">
          <div className="campaign" data-reveal>
            <p className="campaign__lead">チラシをお持ちの方は</p>
            <p className="campaign__main">
              <strong>体験無料</strong>
              <small>（パーソナル以外）</small>
              <span className="campaign__dot">・</span>
              <strong>入会料半額</strong>
            </p>
            <p className="campaign__limit">有効期限：2027年12月末まで</p>
          </div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section className="section" id="about">
        <div className="wrap">
          <div className="glass about" data-reveal>
            <p className="script">About</p>
            <h2 className="heading">幼児からシニアまで、健康と動く喜びを</h2>
            <p className="about__text">
              子どもたちには、健やかに成長する身体を。
              <br />
              若い世代には、未来につながる身体づくりを。
              <br />
              シニア世代には、いつまでも自分らしく動ける喜びを。
            </p>
            <ul className="pillars">
              {PILLARS.map((p) => (
                <li key={p.char} className={`pillar pillar--${p.tone}`}>
                  <span className="pillar__char">{p.char}</span>
                  <span className="pillar__text">{p.text}</span>
                </li>
              ))}
            </ul>
            <ul className="features">
              {FEATURES.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="about__photo">
              <Image
                src="/class-dance.jpg"
                alt="鏡張りの明るいスタジオで踊る様子"
                fill
                sizes="(max-width: 800px) 90vw, 720px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Programs ===== */}
      <section className="section" id="programs">
        <div className="wrap">
          <div className="title" data-reveal>
            <p className="script">Programs</p>
            <h2 className="heading">プログラム</h2>
          </div>

          <div className="lesson-intro glass" data-reveal>
            <h3 className="lesson-intro__title">ピラティスと踊り</h3>
            <p>
              通常のレッスン（90分）ではピラティスと簡単なダンスをします。ストレッチと筋トレ、有酸素運動で体力・筋力・柔軟性のアップをめざします。ピラティスで体幹が安定するとバランス良く踊れるようになります。
            </p>
            <p className="lesson-intro__note">※ピラティスだけ（60分）でもOKです。</p>
          </div>

          <div className="programs">
            {PROGRAMS.map((p, i) => (
              <article
                key={p.title}
                className={`program program--${p.tone}`}
                data-reveal
                style={{ transitionDelay: `${(i % 2) * 0.1}s` }}
              >
                <div className="program__photo">
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 800px) 90vw, 520px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="program__body">
                  <p className="program__en">{p.en}</p>
                  <h3 className="program__title">{p.title}</h3>
                  <p className="program__desc">{p.desc}</p>
                  {p.note && <p className="program__note">{p.note}</p>}
                </div>
              </article>
            ))}
          </div>

          <article className="personal" data-reveal>
            <div className="personal__photo">
              <Image
                src={PERSONAL.img}
                alt={PERSONAL.alt}
                fill
                sizes="(max-width: 800px) 90vw, 420px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="personal__body">
              <span className="badge">New</span>
              <p className="program__en">Personal &amp; Small Group</p>
              <h3 className="program__title">パーソナル・少人数グループ（SRS・ピラティス）</h3>
              <p>
                新たに学んだSRSの知識を生かした、一人ひとりや少人数制のレッスンです。インナーマッスルを使って体幹を安定させ、手足を動かす——正しい身体の使い方を学ぶ運動を行います。
              </p>
              <p className="program__note">※パーソナルは要予約となります。</p>
            </div>
          </article>

          <div className="instructor glass" data-reveal>
            <p className="instructor__label">Studio Anne の講師</p>
            <ul className="instructor__list">
              <li>マットピラティスインストラクター資格保有</li>
              <li>SRS（Spine Reconditioning Specialist）脊柱機能改善士</li>
              <li>腰痛運動療法指導士</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Schedule ===== */}
      <section className="section" id="schedule">
        <div className="wrap">
          <div className="title" data-reveal>
            <p className="script">Schedule</p>
            <h2 className="heading">レッスンスケジュール</h2>
          </div>
          <div className="schedule">
            {SCHEDULE.map((s, i) => (
              <div
                key={s.day}
                className={`day day--${s.tone}`}
                data-reveal
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <h3 className="day__name">{s.day}</h3>
                <ul className="day__list">
                  {s.lessons.map((l) => (
                    <li key={l.time} className={l.personal ? "is-personal" : ""}>
                      <span className="day__time">{l.time}</span>
                      <span className="day__lesson">{l.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="schedule__note" data-reveal>
            ※レッスンスケジュールは変更になる場合がございます。パーソナルの場合は要予約となります。
          </p>
        </div>
      </section>

      {/* ===== Price ===== */}
      <section className="section" id="price">
        <div className="wrap">
          <div className="title" data-reveal>
            <p className="script">Price</p>
            <h2 className="heading">レッスン料</h2>
          </div>
          <div className="price glass" data-reveal>
            <dl className="price__row price__row--entry">
              <dt>入会料</dt>
              <dd>5,000円</dd>
            </dl>
            <div className="price__head">
              <span className="price__tag">月謝制</span>
              <span className="price__cond">ピラティス・ダンス（90分）の場合</span>
            </div>
            {PRICES.map((p) => (
              <dl key={p.label} className="price__row">
                <dt>
                  {p.label}
                  {p.sub && <small>{p.sub}</small>}
                </dt>
                <dd>{p.amount}</dd>
              </dl>
            ))}
            <div className="price__foot">
              <p>★都合の悪い時は振替できます</p>
              <p>※全て税込料金です</p>
            </div>
          </div>
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
                <dd>{ADDRESS}</dd>
                <dt>目印</dt>
                <dd>
                  小瀬スポーツ公園通り沿い、小瀬スポーツ公園のすぐ近くです。入口の「Studio Anne」の緑の看板が目印です。
                </dd>
                <dt>電話番号</dt>
                <dd>
                  <a href={`tel:${TEL}`}>{TEL}</a>
                </dd>
                <dt>受付時間</dt>
                <dd>{HOURS}</dd>
              </dl>
              <p className="access__note">
                ※レッスン中などご対応ができない時間帯もございますことをご了承ください。その場合は頂いたお電話番号に折り返しご連絡させていただきます。
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
          <p className="script cta__script">Let&rsquo;s move together</p>
          <p>見学・体験レッスン・各コース等のお問い合わせは、お電話でお気軽にどうぞ。</p>
          <a href={`tel:${TEL}`} className="cta__tel">
            ☎ {TEL}
          </a>
          <p className="cta__hours">受付時間 {HOURS}</p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <Image src="/logo.png" alt="Studio Anne" width={150} height={35} />
        <p className="footer__addr">{ADDRESS}</p>
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
