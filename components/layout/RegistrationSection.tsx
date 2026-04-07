"use client";

import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import { Mail, Smartphone, MapPin } from "lucide-react";

const domesticFees = [
  { category: "Delegates (Presenters and Participants)", price: "MYR 750" },
  { category: "Research Scholar (Including PhD Scholars)", price: "MYR 600" },
  { category: "Student (Masters and Bachelor Level)", price: "MYR 500" },
];

const internationalFees = [
  { category: "Delegates (Presenters and Participants)", price: "USD 200" },
  { category: "Research Scholar (Including PhD Scholars)", price: "USD 150" },
  { category: "Student (Masters and Bachelor Level)", price: "USD 100" },
];

export default function RegistrationSection() {
  return (
    <div className="registration-wrapper">
      {/* ── Registration Fees ── */}
      <section className="fees-section">
        <div className="section-label">PARTICIPATION</div>
        <h2 className="section-title">Registration Fees</h2>

        <div className="cards-grid">
          {/* Domestic Card */}
          <div className="fee-card">
            <div className="card-header">
              <h3 className="card-heading">Domestic</h3>
              <span className="card-sub">MALAYSIA PARTICIPANTS</span>
            </div>
            <ul className="fee-list">
              {domesticFees.map((item) => (
                <li key={item.category} className="fee-row">
                  <span className="fee-category">{item.category}</span>
                  <span className="fee-price">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* International Card */}
          <div className="fee-card">
            <div className="card-header">
              <h3 className="card-heading">International</h3>
              <span className="card-sub">OVERSEAS PARTICIPANTS</span>
            </div>
            <ul className="fee-list">
              {internationalFees.map((item) => (
                <li key={item.category} className="fee-row">
                  <span className="fee-category">{item.category}</span>
                  <span className="fee-price">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Publication Information */}
        <div className="publication-info">
          <p className="publication-text">
            The extended versions of the selected papers presented at the conference will be published (if accepted after review)
          </p>
        </div>

        {/* Fee Waiver Information */}
        <div className="waiver-info">
          <p className="waiver-title">25% waiver on the registration fee for Lower-Middle Income Economies:</p>
          <p className="waiver-note">International participants kindly add $10(USD) as a transaction fee</p>
        </div>
      </section>

      {/* ── Venue & Contact ── */}
      <section className="contact-section">
        <div className="contact-inner">
          {/* Left: Text */}
          <div className="contact-text">
            <div className="section-label crimson">VENUE &amp; CONTACT</div>
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-description">
              Summit Hotel Subang USJ, Malaysia. Join us in the heart of
              Selangor&apos;s academic and industrial hub.
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon-wrap">
                  <Mail size={18} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="contact-item-label">EMAIL INQUIRY</p>
                  <a
                    href="mailto:icetmtshs@lincoln.edu.my"
                    className="contact-item-value"
                  >
                    icetmtshs@lincoln.edu.my
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrap">
                  <Smartphone size={18} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="contact-item-label">CONFERENCE SECRETARIAT</p>
                  <p className="contact-item-value">
                    +60 123 456 789 / +60 987 654 321
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map placeholder */}
          <div className="map-wrap">
            <div
              className="map-bg"
              aria-label="Map showing Summit Hotel Subang USJ"
            >
              <div className="map-grid" />
              <div className="map-pin-card">
                <MapPin size={28} className="map-pin-icon" strokeWidth={1.8} />
                <p className="map-hotel">Summit Hotel Subang USJ</p>
                <p className="map-city">SUBANG JAYA, MALAYSIA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* ── Base ── */
        .registration-wrapper {
          font-family: "Plus Jakarta Sans", sans-serif;
          background: #f9f9f7;
          color: #1a1a1a;
        }

        /* ── Section Label ── */
        .section-label {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #8c1010;
          text-transform: uppercase;
          margin-bottom: 0.6rem;
        }

        /* ── Fees Section ── */
        .fees-section {
          padding: 80px 5% 90px;
          text-align: center;
          background: #f5f5f2;
        }

        .section-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #111;
          margin: 0 0 3rem;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 28px;
          max-width: 1100px;
          margin: 0 auto;
          text-align: left;
        }

        .fee-card {
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.07);
          background: #fff;
          border: 1px solid #e8e8e4;
        }

        .card-header {
          background: #7b0d0d;
          padding: 26px 30px 22px;
          color: #fff;
        }

        .card-heading {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 1.45rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          margin: 0 0 4px;
          color: #fff;
        }

        .card-sub {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
        }

        .fee-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .fee-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 30px;
          border-bottom: 1px solid #f0efeb;
          transition: background 0.15s ease;
        }

        .fee-row:last-child {
          border-bottom: none;
        }

        .fee-row:hover {
          background: #fdf5f5;
        }

        .fee-category {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 0.9rem;
          font-weight: 400;
          color: #444;
        }

        .fee-price {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 1.15rem;
          font-weight: 800;
          color: #7b0d0d;
          letter-spacing: -0.01em;
          white-space: nowrap;
        }

        /* ── Publication & Waiver Info ── */
        .publication-info {
          margin-top: 2.5rem;
          padding: 1.5rem;
          background: #fff;
          border-radius: 8px;
          border-left: 4px solid #7b0d0d;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .publication-text {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          color: #444;
          line-height: 1.6;
          margin: 0;
        }

        .waiver-info {
          margin-top: 1.5rem;
          padding: 1.5rem;
          background: #f9f9f9;
          border-radius: 8px;
          border: 1px solid #e8e8e4;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .waiver-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: #7b0d0d;
          margin: 0 0 0.5rem;
        }

        .waiver-note {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 0.85rem;
          font-weight: 400;
          color: #666;
          margin: 0;
          font-style: italic;
        }

        /* ── Contact Section ── */
        .contact-section {
          padding: 90px 5%;
          background: #fff;
        }

        .contact-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .contact-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #111;
          margin: 0 0 1rem;
          line-height: 1.1;
        }

        .contact-description {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 0.95rem;
          font-weight: 400;
          color: #666;
          line-height: 1.7;
          margin: 0 0 2.5rem;
          max-width: 400px;
        }

        .contact-items {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .contact-icon-wrap {
          width: 42px;
          height: 42px;
          border: 1.5px solid #e0e0dc;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7b0d0d;
          flex-shrink: 0;
          background: #fdf8f8;
        }

        .contact-item-label {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: #999;
          text-transform: uppercase;
          margin: 0 0 4px;
        }

        .contact-item-value {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: #111;
          text-decoration: none;
          display: block;
          transition: color 0.15s;
        }

        a.contact-item-value:hover {
          color: #7b0d0d;
        }

        /* ── Map ── */
        .map-wrap {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          aspect-ratio: 4 / 3;
        }

        .map-bg {
          width: 100%;
          height: 100%;
          background: #cfd8d8;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .map-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.25) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.25) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
        }

        .map-pin-card {
          position: relative;
          z-index: 2;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(4px);
          border-radius: 12px;
          padding: 20px 28px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
          min-width: 200px;
        }

        .map-pin-icon {
          color: #7b0d0d;
          margin-bottom: 8px;
        }

        .map-hotel {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: #111;
          margin: 0 0 4px;
          letter-spacing: -0.01em;
        }

        .map-city {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          color: #888;
          text-transform: uppercase;
          margin: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .contact-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .map-wrap {
            aspect-ratio: 16 / 9;
          }

          .contact-description {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}