import { ImageResponse } from "next/og";
import { siteConfig } from "./seo";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(135deg, #050507 0%, #0a0c10 50%, #070a09 100%)",
          color: "#e4e4e7",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          padding: "72px 80px",
        }}
      >
        {/* Background glows */}
        <div
          style={{
            position: "absolute",
            top: -160,
            left: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(16,185,129,0.35), transparent 70%)",
            filter: "blur(20px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            right: -160,
            width: 600,
            height: 600,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(34,211,238,0.25), transparent 70%)",
            filter: "blur(20px)",
          }}
        />

        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.6,
            maskImage: "linear-gradient(to bottom, black 50%, transparent)",
          }}
        />

        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 14,
              background:
                "linear-gradient(135deg, rgba(16,185,129,0.3), rgba(34,211,238,0.15))",
              border: "1px solid rgba(16,185,129,0.5)",
              color: "#a7f3d0",
              fontSize: 26,
              fontWeight: 800,
              letterSpacing: -1,
            }}
          >
            SM
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 18px",
              borderRadius: 999,
              border: "1px solid #1f2229",
              background: "rgba(13,14,18,0.6)",
              fontSize: 18,
              color: "#d4d4d8",
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "#10b981",
                boxShadow: "0 0 10px #10b981",
              }}
            />
            Available for new opportunities
          </div>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 60,
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#34d399",
              marginBottom: 24,
              display: "flex",
            }}
          >
            Software QA Engineer · Security Tester
          </div>

          <div
            style={{
              fontSize: 104,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 1.05,
              color: "#fafafa",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ display: "flex" }}>Sabuj Kumar</span>
            <span
              style={{
                display: "flex",
                background:
                  "linear-gradient(90deg, #34d399, #6ee7b7, #22d3ee)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Modak.
            </span>
          </div>

          <div
            style={{
              marginTop: 32,
              fontSize: 26,
              color: "#a1a1aa",
              maxWidth: 940,
              lineHeight: 1.4,
              display: "flex",
            }}
          >
            Dhaka-based QA engineer — functional, API, security testing &
            Selenium automation across fintech, e-commerce, and EV mobility.
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            left: 80,
            right: 80,
            bottom: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            {["Selenium", "Postman", "JMeter", "BurpSuite", "OWASP"].map(
              (s) => (
                <div
                  key={s}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 999,
                    border: "1px solid #1f2229",
                    background: "rgba(13,14,18,0.7)",
                    color: "#d4d4d8",
                    fontSize: 18,
                    display: "flex",
                  }}
                >
                  {s}
                </div>
              )
            )}
          </div>

          <div
            style={{
              fontFamily: "monospace",
              fontSize: 16,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#71717a",
              display: "flex",
            }}
          >
            sabuj.qa
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
