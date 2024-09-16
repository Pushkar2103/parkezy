import { cloneElement, useEffect, useState } from "react";

function LandingPage() {
  const [timer, setTimer] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTimer(false);
    }, 4000);
  }, []);

  if (timer) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <video
          autoPlay
          muted
          playsInline
          style={{
            height: "50%",
            width: "40%",
            objectFit: "cover",
          }}
        >
          <source src="/Parkezy.mp4" type="video/mp4" />
        </video>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default LandingPage;
