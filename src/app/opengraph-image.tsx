import { ImageResponse } from "next/og";

export const alt = "compareme — your Chinese zodiac";
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #fdf6e6 0%, #f4ead2 60%, #ecdcb8 100%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 150 }}>🐉</div>
        <div
          style={{
            display: "flex",
            background: "linear-gradient(#d6342b, #b3241c)",
            border: "7px solid #e6b23c",
            borderRadius: 20,
            padding: "8px 60px",
            marginTop: 12,
          }}
        >
          <div style={{ display: "flex", fontSize: 112, fontWeight: 800, color: "#ffe9a8", letterSpacing: 2 }}>
            compareme
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            color: "#7d4a10",
            marginTop: 42,
            maxWidth: 940,
            textAlign: "center",
          }}
        >
          Your Chinese zodiac · the legends who share it · your compatibility 💞
        </div>
      </div>
    ),
    { ...size },
  );
}
