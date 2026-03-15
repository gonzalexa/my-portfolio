export default function ProjectCard({ title, description, image, style }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "60px",
        maxWidth: "1100px",
        margin: "0 auto",
        width: "100%",
        ...style,
      }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          style={{
            width: "50%",
            height: "auto",
            borderRadius: "12px",
            objectFit: "cover",
          }}
        />
      )}

      <div
        style={{
          width: "40%",
        }}
      >
        <h3
          style={{
            fontSize: "22px",
            marginBottom: "15px",
            fontWeight: "500",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            color: "#555",
            lineHeight: "1.6",
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

