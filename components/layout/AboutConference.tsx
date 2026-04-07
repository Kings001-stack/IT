"use client"
import Image from "next/image";

export default function AboutConference() {
  return (
    <section className="about-section">
      <div className="about-inner">
        {/* Left Column */}
        <div className="about-left">
          <p className="about-eyebrow">ABOUT THE CONFERENCE</p>

          <h1 className="about-heading">
            Reimagining the Future: Innovation, Sustainability, and Human&#8209;Centric Development.
          </h1>

          <p className="about-body">
            ICETMTSHS 2026 serves as a prestigious global platform for
            researchers, academicians, and industry leaders. We aim to foster a
            collaborative ecosystem where interdisciplinary boundaries are
            crossed to address the pressing challenges of our era.
          </p>

          <div className="about-card">
            <p className="about-card-title">
              Lincoln University College &amp; Lincoln Institute of Higher Education
            </p>
            <p className="about-card-body">
              Through a strategic partnership between Lincoln University College
              Malaysia and the Lincoln Institute of Higher Education Australia,
              this conference bridges the best of Asian and Australian academic
              excellence to provide a truly international discourse.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="about-right">
          <div className="about-image-wrapper">
            <Image
              src="/home-about.png"
              alt="Conference venue — modern boardroom with city skyline"
              fill
              className="about-image"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="about-year-badge">
              <span className="about-year-number">2026</span>
              <span className="about-year-label">THE GLOBAL EDITION</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background-color: #f5f5f3;
          padding: 80px 64px;
          font-family: "Georgia", "Times New Roman", serif;
        }

        .about-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        /* ── Left ── */
        .about-left {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .about-eyebrow {
          font-family: "Arial", sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #8b1a1a;
          text-transform: uppercase;
          margin: 0;
        }

        .about-heading {
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          font-weight: 800;
          line-height: 1.12;
          color: #111010;
          margin: 0;
          font-family: "Arial Black", "Arial", sans-serif;
          letter-spacing: -0.02em;
        }

        .about-body {
          font-size: 15px;
          line-height: 1.7;
          color: #444;
          margin: 0;
          font-family: "Arial", sans-serif;
          font-weight: 400;
          max-width: 520px;
        }

        .about-card {
          background-color: #eeeeec;
          border-radius: 6px;
          padding: 28px 32px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .about-card-title {
          font-size: 14px;
          font-weight: 700;
          color: #8b1a1a;
          margin: 0;
          font-family: "Arial", sans-serif;
        }

        .about-card-body {
          font-size: 13.5px;
          line-height: 1.7;
          color: #555;
          margin: 0;
          font-family: "Arial", sans-serif;
        }

        /* ── Right ── */
        .about-right {
          position: relative;
        }

        .about-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 4.6;
          border-radius: 12px;
          overflow: visible;
        }

        .about-image {
          object-fit: cover;
          border-radius: 12px;
        }

        .about-year-badge {
          position: absolute;
          bottom: -20px;
          left: -20px;
          background-color: #7a1212;
          color: #fff;
          padding: 28px 36px;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          z-index: 10;
          min-width: 200px;
        }

        .about-year-number {
          font-family: "Arial Black", "Arial", sans-serif;
          font-size: 3rem;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .about-year-label {
          font-family: "Arial", sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          opacity: 0.9;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .about-section {
            padding: 56px 32px;
          }

          .about-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .about-right {
            /* give room for the overflowing badge */
            padding-bottom: 32px;
          }

          .about-image-wrapper {
            aspect-ratio: 16 / 10;
          }
        }

        @media (max-width: 520px) {
          .about-section {
            padding: 40px 20px;
          }

          .about-year-badge {
            left: 12px;
            bottom: -12px;
            padding: 20px 24px;
            min-width: 160px;
          }

          .about-year-number {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </section>
  );
}