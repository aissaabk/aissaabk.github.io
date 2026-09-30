export default function Icon({ project }) {
  const letter = project.n.replace(/[^A-Za-z\u0600-\u06FF]/g, "").charAt(0) || "•";
  return (
    <div className="ico" style={{ background: project.c }} aria-hidden="true">
      {letter}
    </div>
  );
}
