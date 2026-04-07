"use client"
import {
  Briefcase,
  Microscope,
  Users,
  HeartPulse,
  Leaf,
} from "lucide-react";

const tracks = [
  {
    icon: Briefcase,
    title: "Management",
    description:
      "Exploring next-generation leadership, digital economies, and sustainable business models in a post-globalization world.",
  },
  {
    icon: Microscope,
    title: "Technology",
    description:
      "Advancements in AI, blockchain, and green technologies driving industrial revolution 5.0 and digital transformation.",
  },
  {
    icon: Users,
    title: "Social Sciences",
    description:
      "Understanding social dynamics, policy impact, and the human element in an increasingly automated society.",
  },
  {
    icon: HeartPulse,
    title: "Health Sciences",
    description:
      "Innovations in clinical research, community health, and the integration of precision medicine for global wellness.",
  },
  {
    icon: Leaf,
    title: "T&CM",
    description:
      "T&CM include Traditional Indian Medicine, Homeopathy, Chinese Medicine, Malay Medicine, Islamic Medical Practice, Osteopathy, and Chiropractic",
  },
];

export default function ThematicTracks() {
  return (
    <section className="tracks-section">
      <div className="tracks-inner">
        {/* Header Row */}
        <div className="tracks-header">
          <div className="tracks-header-left">
            <p className="tracks-eyebrow">CORE FOCUS</p>
            <h2 className="tracks-heading">Thematic Tracks</h2>
          </div>
          <p className="tracks-subtitle">
            Interdisciplinary excellence across five primary domains.
          </p>
        </div>

        {/* Divider */}
        <div className="tracks-divider" />

        {/* Top Row — 3 cards */}
        <div className="tracks-grid tracks-grid-3">
          {tracks.slice(0, 3).map((track) => (
            <TrackCard key={track.title} {...track} />
          ))}
        </div>

        {/* Divider */}
        <div className="tracks-divider" />

        {/* Bottom Row — 2 cards */}
        <div className="tracks-grid tracks-grid-2">
          {tracks.slice(3).map((track) => (
            <TrackCard key={track.title} {...track} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .tracks-section {
          background-color: #ffffff;
          padding: 80px 64px;
          font-family: "Arial", sans-serif;
        }

        .tracks-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* ── Header ── */
        .tracks-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 48px;
        }

        .tracks-header-left {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .tracks-eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #8b1a1a;
          text-transform: uppercase;
          margin: 0;
        }

        .tracks-heading {
          font-size: clamp(2rem, 3vw, 2.6rem);
          font-weight: 800;
          color: #0f0f0f;
          margin: 0;
          font-family: "Arial Black", "Arial", sans-serif;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .tracks-subtitle {
          font-size: 15px;
          color: #888;
          margin: 0;
          text-align: right;
          max-width: 340px;
          line-height: 1.5;
        }

        /* ── Divider ── */
        .tracks-divider {
          height: 1px;
          background-color: #e8e8e8;
          margin-bottom: 56px;
        }

        /* ── Grids ── */
        .tracks-grid {
          display: grid;
          gap: 48px 48px;
          margin-bottom: 56px;
        }

        .tracks-grid:last-child {
          margin-bottom: 0;
        }

        .tracks-grid-3 {
          grid-template-columns: repeat(3, 1fr);
        }

        .tracks-grid-2 {
          grid-template-columns: repeat(3, 1fr);
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .tracks-grid-3,
          .tracks-grid-2 {
            grid-template-columns: repeat(2, 1fr);
          }

          .tracks-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .tracks-subtitle {
            text-align: left;
          }
        }

        @media (max-width: 580px) {
          .tracks-section {
            padding: 48px 24px;
          }

          .tracks-grid-3,
          .tracks-grid-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

/* ── Individual Card ── */
function TrackCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="track-card">
      <div className="track-icon-wrap">
        <Icon size={32} strokeWidth={1.6} />
      </div>
      <h3 className="track-title">{title}</h3>
      <p className="track-desc">{description}</p>

      <style jsx>{`
        .track-card {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .track-icon-wrap {
          color: #8b1a1a;
          display: flex;
          align-items: center;
        }

        .track-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: #0f0f0f;
          margin: 0;
          font-family: "Arial Black", "Arial", sans-serif;
          letter-spacing: -0.01em;
        }

        .track-desc {
          font-size: 14.5px;
          line-height: 1.7;
          color: #555;
          margin: 0;
          font-family: "Arial", sans-serif;
        }
      `}</style>
    </div>
  );
}