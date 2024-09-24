function Animation() {
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
}

export default Animation;