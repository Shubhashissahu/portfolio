import { useEffect, useState } from "react";

const CompileLoader = () => {
  const messages = [
    "Initializing portfolio…",
    "Loading components…",
    "Compiling projects…",
    "Almost ready…",
  ];

  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev >= messages.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 650);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: `
          radial-gradient(
            circle at top right,
            #1e3a8a 0%,
            #0b1c3d 40%,
            #020617 100%
          )
        `,
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Inter, system-ui, sans-serif",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      {/* Soft glow */}
      <div
        style={{
          position: "absolute",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "rgba(59,130,246,0.15)",
          filter: "blur(120px)",
          top: "-120px",
          right: "-120px",
        }}
      />

      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          marginBottom: "0.75rem",
        }}
      >
        Welcome
      </h1>

      <p
        style={{
          opacity: 0.85,
          marginBottom: "2rem",
          fontSize: "1.05rem",
        }}
      >
        {messages[step]}
      </p>

      {/* Progress bar */}
      <div
        style={{
          width: "260px",
          height: "6px",
          backgroundColor: "rgba(255,255,255,0.25)",
          borderRadius: "999px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${((step + 1) / messages.length) * 100}%`,
            background:
              "linear-gradient(90deg, #60a5fa, #38bdf8)",
            transition: "width 0.5s ease",
          }}
        />
      </div>
    </div>
  );
};

export default CompileLoader;
