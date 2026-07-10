import '../styles/pageheader.css';

export default function PageHeader({ kicker, title, sub }) {
  return (
    <header className="pagehead">
      <div className="container pagehead__inner">
        <p className="eyebrow eyebrow--on-dark">{kicker}</p>
        <h1 className="pagehead__title">{title}</h1>
        {sub && <p className="pagehead__sub">{sub}</p>}
      </div>
    </header>
  );
}
