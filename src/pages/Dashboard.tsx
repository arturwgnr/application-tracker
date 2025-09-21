import { Outlet, Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Job Applications</h2>
      <p className="dashboard-subtitle">Everything in one place</p>

      {/* Navegação */}
      <nav className="dashboard-nav">
        <Link to="applications" className="nav-link">Applications</Link>
        <Link to="stats" className="nav-link">Stats</Link>
      </nav>

      {/* Renderiza rota filha */}
      <Outlet />
    </div>
  );
}
