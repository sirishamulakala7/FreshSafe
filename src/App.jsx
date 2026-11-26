import React, { useState } from "react";

const safetyTips = [
  {
    number: "01",
    title: "Rinse under running water",
    text: "Wash fruits and vegetables before preparing or eating them, even if you plan to peel them.",
    icon: "💧",
  },
  {
    number: "02",
    title: "Skip the soap",
    text: "Clean water is enough for produce. Soap and household cleaners are not made to be eaten.",
    icon: "🫧",
  },
  {
    number: "03",
    title: "Keep things separate",
    text: "Use clean hands, boards, and utensils to help prevent cross-contamination in your kitchen.",
    icon: "🥬",
  },
];

const surveyResults = [
  { label: "Wash produce before eating", value: 78, color: "green" },
  { label: "Look for signs of freshness", value: 64, color: "gold" },
  { label: "Know how produce was grown", value: 42, color: "sage" },
];

const produceGuides = [
  {
    name: "Apple",
    icon: "🍎",
    wash: "Rinse under clean running water and rub the whole surface with your hands.",
    preparation: "Remove the stem and any bruised spots with a clean knife.",
    peeling: "Peeling is optional. The skin is edible; peel it if you prefer.",
    storage: "Keep apples refrigerated to help them stay fresh longer.",
  },
  {
    name: "Banana",
    icon: "🍌",
    wash: "Rinse the unpeeled banana under clean running water before cutting or peeling it.",
    preparation: "Use clean hands and a clean knife, especially if slicing it.",
    peeling: "Peeling is useful for eating; the peel is generally not eaten.",
    storage: "Store at room temperature until ripe. Refrigerate ripe bananas to slow further ripening; the peel may darken.",
  },
  {
    name: "Grapes",
    icon: "🍇",
    wash: "Rinse grapes under clean running water just before eating.",
    preparation: "Remove damaged grapes and drain or pat the rest dry with a clean towel.",
    peeling: "Peeling is optional and usually unnecessary.",
    storage: "Refrigerate unwashed grapes in a ventilated container and wash them before serving.",
  },
  {
    name: "Mango",
    icon: "🥭",
    wash: "Rinse and gently rub the whole mango under clean running water before cutting.",
    preparation: "Use a clean knife and cutting board. Cut around the large pit.",
    peeling: "Peeling is useful because the skin is usually not eaten.",
    storage: "Ripen at room temperature, then refrigerate when ripe. Keep cut mango covered in the refrigerator.",
  },
  {
    name: "Tomato",
    icon: "🍅",
    wash: "Rinse under clean running water and gently rub the surface before slicing.",
    preparation: "Remove the stem with a clean knife and use a clean cutting board.",
    peeling: "Peeling is optional; the skin is edible.",
    storage: "Store whole ripe tomatoes at room temperature for best flavor, away from direct sunlight. Refrigerate cut tomatoes.",
  },
  {
    name: "Spinach",
    icon: "🥬",
    wash: "Rinse leaves thoroughly under clean running water, separating them so water reaches all surfaces.",
    preparation: "Remove wilted leaves and dry with a clean towel or salad spinner.",
    peeling: "Peeling does not apply; eat the leaves whole or chopped.",
    storage: "Refrigerate dry leaves in a clean container or bag. Wash just before use.",
  },
  {
    name: "Cabbage",
    icon: "🥬",
    wash: "Rinse the outside under clean running water. Remove outer leaves, then rinse again before cutting.",
    preparation: "Use a clean knife and board to cut or shred it.",
    peeling: "Peeling does not apply. Removing outer leaves is useful if they are damaged or dirty.",
    storage: "Refrigerate whole cabbage. Keep cut cabbage covered in the refrigerator.",
  },
  {
    name: "Carrot",
    icon: "🥕",
    wash: "Scrub the carrot under clean running water, especially if it is visibly dirty.",
    preparation: "Trim the ends with a clean knife. Scrub with a clean produce brush if needed.",
    peeling: "Peeling is optional; scrubbing well is usually enough.",
    storage: "Refrigerate in a clean bag or container. Keep away from excess moisture.",
  },
];

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`section-heading${centered ? " centered" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [selectedProduce, setSelectedProduce] = useState(null);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="FreshSafe home">
          <span className="brand-mark" aria-hidden="true">✳</span>
          <span>fresh<span className="brand-light">safe</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#guide">Food Safety Guide</a>
          <a href="#consume-safely">How to Consume Safely</a>
          <a href="#farmers">Farmer Corner</a>
          <a href="#survey">Survey Results</a>
        </nav>
        <a className="nav-cta" href="#guide">Explore the guide <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <span className="hero-label"><span className="status-dot" /> A little knowledge goes a long way</span>
            <h1>Good food starts with <span>knowing better.</span></h1>
            <p className="hero-description">
              Understand how chemicals are used on fruits and vegetables, and discover simple ways to make informed choices for your health.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#guide">Explore food safety <span aria-hidden="true">→</span></a>
              <a className="text-link" href="#about">Why FreshSafe? <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-note">
              <div className="avatar-stack" aria-hidden="true">
                <span>🍎</span><span>🥕</span><span>🥦</span>
              </div>
              <span>Small steps. Fresher confidence.</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="A colorful selection of fresh fruits and vegetables">
            <img
              className="hero-image"
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85"
              alt="Colorful fresh vegetables arranged at a market"
            />
            <div className="image-sticker"><span>✿</span><strong>Fresh facts<br />for everyday life</strong></div>
            <div className="floating-label"><span>✓</span> Better informed, every day</div>
          </div>
          <div className="hero-bottom">
            <span>YOUR GUIDE TO SMARTER PRODUCE CHOICES</span>
            <a href="#guide">SCROLL TO DISCOVER <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section className="intro-section" id="about">
          <div className="intro-leaf" aria-hidden="true">✳</div>
          <p>
            <span className="eyebrow">FRESHSAFE, MADE SIMPLE</span>
            <span className="intro-statement">Fresh food is part of a healthy life. Understanding how it’s grown and handled helps us make <em>choices with confidence.</em></span>
          </p>
          <span className="intro-aside">Curiosity is a<br />good place to start. ↗</span>
        </section>

        <section className="guide-section section-pad" id="guide">
          <SectionHeading
            eyebrow="A FRESH START"
            title="A few good habits go a long way."
            description="Practical, everyday steps for handling fresh produce with care."
            centered
          />
          <div className="tip-grid">
            {safetyTips.map((tip) => (
              <article className="tip-card" key={tip.number}>
                <div className="tip-card-top"><span className="tip-number">{tip.number}</span><span className="tip-icon">{tip.icon}</span></div>
                <h3>{tip.title}</h3>
                <p>{tip.text}</p>
                <a className="card-link" href="#consume-safely">Learn more <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
          <p className="source-note">Good to know: Follow local food-safety guidance for specific advice on washing and storing produce.</p>
        </section>

        <section className="consume-section section-pad" id="consume-safely">
          <SectionHeading
            eyebrow="FRESH PRODUCE, MADE SIMPLE"
            title="How to Consume Safely"
            description="Choose a fruit or vegetable for practical washing, preparation, peeling, and storage tips."
            centered
          />
          <div className="produce-grid" aria-label="Choose produce for safety tips">
            {produceGuides.map((produce) => (
              <button
                className={`produce-card${selectedProduce?.name === produce.name ? " selected" : ""}`}
                type="button"
                key={produce.name}
                onClick={() => setSelectedProduce(produce)}
                aria-pressed={selectedProduce?.name === produce.name}
              >
                <span className="produce-icon" aria-hidden="true">{produce.icon}</span>
                <span className="produce-name">{produce.name}</span>
                <span className="produce-card-hint">View safety tips <span aria-hidden="true">↗</span></span>
              </button>
            ))}
          </div>
          {selectedProduce && (
            <article className="produce-detail" aria-live="polite" aria-labelledby="produce-detail-title">
              <div className="produce-detail-heading">
                <span className="produce-detail-icon" aria-hidden="true">{selectedProduce.icon}</span>
                <div>
                  <span className="eyebrow">YOUR QUICK GUIDE</span>
                  <h3 id="produce-detail-title">{selectedProduce.name}</h3>
                </div>
              </div>
              <dl className="produce-detail-list">
                <div><dt>How to wash it safely</dt><dd>{selectedProduce.wash}</dd></div>
                <div><dt>Preparation tips</dt><dd>{selectedProduce.preparation}</dd></div>
                <div><dt>Peeling</dt><dd>{selectedProduce.peeling}</dd></div>
                <div><dt>Storage tips</dt><dd>{selectedProduce.storage}</dd></div>
              </dl>
              <p className="produce-detail-note">Use clean running water for produce. Do not wash fruits or vegetables with soap, detergent, or bleach.</p>
            </article>
          )}
        </section>

        <section className="farmer-section section-pad" id="farmers">
          <div className="farmer-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85"
              alt="Green farmland stretching toward the horizon"
              loading="lazy"
            />
            <span className="image-caption">GROWING WELL, TOGETHER</span>
          </div>
          <div className="farmer-copy">
            <span className="eyebrow">THE FARMER CORNER</span>
            <h2>Growing food is a careful balance.</h2>
            <p>Farmers work to protect crops and produce healthy harvests. Learn about responsible crop care, thoughtful handling, and the people behind the food on your table.</p>
            <a className="button button-outline" href="#survey">Explore the community <span aria-hidden="true">→</span></a>
            <div className="farmer-fact"><span className="fact-mark">✳</span><span><strong>Good conversations grow good food.</strong><br />Ask questions. Share what you learn.</span></div>
          </div>
        </section>

        <section className="survey-section section-pad" id="survey">
          <div className="survey-top">
            <SectionHeading
              eyebrow="WHAT OUR COMMUNITY SAYS"
              title="Curious minds make safer choices."
              description="A snapshot of what people say they do when choosing and preparing fresh produce."
            />
            <div className="survey-badge"><span>✳</span><strong>Community<br />snapshot</strong></div>
          </div>
          <div className="survey-content">
            <div className="survey-bars">
              {surveyResults.map((item) => (
                <div className="survey-row" key={item.label}>
                  <div className="survey-label"><span>{item.label}</span><strong>{item.value}%</strong></div>
                  <div className="bar-track"><div className={`bar-fill ${item.color}`} style={{ width: `${item.value}%` }} /></div>
                </div>
              ))}
              <p className="source-note">Illustrative sample results for this student project. Replace with responses from your own survey.</p>
            </div>
            <aside className="survey-quote">
              <span className="quote-mark">“</span>
              <blockquote>Knowing a little more about my food makes me feel a lot more confident.</blockquote>
              <span className="quote-caption">A FreshSafe community member</span>
              <div className="quote-produce" aria-hidden="true">🍋 🍊 🍐</div>
            </aside>
          </div>
        </section>

        <section className="closing-banner">
          <span className="eyebrow">ONE LAST THOUGHT</span>
          <h2>Know your food.<br /><em>Feel good about it.</em></h2>
          <a className="button button-light" href="#home">Back to the top <span aria-hidden="true">↑</span></a>
          <span className="closing-flower" aria-hidden="true">✳</span>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark" aria-hidden="true">✳</span><span>fresh<span className="brand-light">safe</span></span></a>
        <span>Know Your Food. Protect Your Health.</span>
        <span className="footer-credit">A student project made with care <span aria-hidden="true">♡</span></span>
      </footer>
    </>
  );
}

export default App;
