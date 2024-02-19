export default function Base4({
  text1 = "Pirmas tekstas",
  text2 = "antrasis tekstas",
}) {
  return (
    <>
      <h1>{text1}</h1>
      <div style={{ background: "red", padding: "2rem", color: "white" }}>
        {text2}
      </div>
    </>
  );
}
