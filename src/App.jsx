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

const complaintStorageKey = "freshsafe-complaints";

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
  const [reportState, setReportState] = useState(() => {
    try {
      const savedComplaints = window.localStorage.getItem(complaintStorageKey);
      const complaints = savedComplaints ? JSON.parse(savedComplaints) : [];
      const validComplaints = Array.isArray(complaints) && complaints.every(
        (complaint) =>
          complaint &&
          typeof complaint.id === "string" &&
          typeof complaint.type === "string" &&
          typeof complaint.details === "string" &&
          typeof complaint.createdAt === "string",
      );

      if (!validComplaints) {
        throw new Error("Saved complaints have an invalid format.");
      }

      return { complaints, notice: "", noticeType: "" };
    } catch (error) {
      console.error("Could not load saved complaints.", error);
      return {
        complaints: [],
        notice: "Saved complaints could not be loaded from this browser.",
        noticeType: "error",
      };
    }
  });

  function handleReportSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const complaint = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      type: formData.get("issue-type"),
      details: formData.get("issue-details"),
      createdAt: new Date().toISOString(),
    };
    const complaints = [...reportState.complaints, complaint];

    try {
      window.localStorage.setItem(complaintStorageKey, JSON.stringify(complaints));
      setReportState({
        complaints,
        notice: "Your complaint was saved in this browser.",
        noticeType: "success",
      });
      form.reset();
    } catch (error) {
      console.error("Could not save complaint.", error);
      setReportState((current) => ({
        ...current,
        notice: "Your complaint could not be saved. Please try again.",
        noticeType: "error",
      }));
    }
  }

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
          <a href="#report">Report an Issue</a>
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
                <a className="card-link" href="#report">Learn more <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
          <p className="source-note">Good to know: Follow local food-safety guidance for specific advice on washing and storing produce.</p>
        </section>

        <section className="report-section section-pad" id="report">
          <div className="report-copy">
            <span className="eyebrow">YOUR VOICE MATTERS</span>
            <h2>Noticed something<br />that doesn’t feel right?</h2>
            <p>Share a concern about the fruits or vegetables you’ve purchased. Your feedback helps bring attention to food-safety questions in your community.</p>
            <div className="report-assurance"><span aria-hidden="true">♡</span> Saved in this browser only. Your report isn’t sent anywhere.</div>
          </div>
          <div className="report-panel">
            <form className="report-form" onSubmit={handleReportSubmit}>
              <label htmlFor="issue-type">What would you like to report?</label>
              <select id="issue-type" name="issue-type" required defaultValue="">
                <option value="" disabled>Choose a topic</option>
                <option>Produce quality concern</option>
                <option>Unclear product information</option>
                <option>Something else</option>
              </select>
              <label htmlFor="issue-details">A few details</label>
              <textarea id="issue-details" name="issue-details" rows="4" placeholder="Tell us what you noticed..." required />
              <button className="button button-primary form-submit" type="submit">Submit a report <span aria-hidden="true">→</span></button>
              {reportState.notice && (
                <p
                  className={`form-message ${reportState.noticeType}`}
                  role={reportState.noticeType === "error" ? "alert" : "status"}
                >
                  {reportState.notice}
                </p>
              )}
            </form>
            <section className="complaint-list" aria-labelledby="complaint-list-title">
              <div className="complaint-list-heading">
                <h3 id="complaint-list-title">Submitted complaints</h3>
                <span>{reportState.complaints.length}</span>
              </div>
              {reportState.complaints.length === 0 ? (
                <p className="empty-complaints">No complaints submitted yet.</p>
              ) : (
                <div className="complaint-items">
                  {reportState.complaints.map((complaint) => (
                    <article className="complaint-item" key={complaint.id}>
                      <div className="complaint-meta">
                        <strong>{complaint.type}</strong>
                        <time dateTime={complaint.createdAt}>
                          {new Date(complaint.createdAt).toLocaleString()}
                        </time>
                      </div>
                      <p>{complaint.details}</p>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </div>
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
