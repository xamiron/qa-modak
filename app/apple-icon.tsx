import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0d0e12 0%, #070709 60%, #050507 100%)",
          color: "#10b981",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 30% 20%, rgba(16,185,129,0.35), transparent 55%)",
          }}
        />
        <div
          style={{
            width: 130,
            height: 130,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 32,
            background:
              "linear-gradient(135deg, rgba(16,185,129,0.25), rgba(34,211,238,0.15))",
            border: "2px solid rgba(16,185,129,0.5)",
            boxShadow: "0 0 50px rgba(16,185,129,0.4)",
          }}
        >
          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              letterSpacing: -4,
              color: "#a7f3d0",
              display: "flex",
            }}
          >
            SM
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
