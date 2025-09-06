import { NavLink, Outlet } from "react-router";

export default function Profile() {
  return (
    <div className="card">
      <div className="card-header">Mój Profil</div>
      <div className="card-body">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink to="" end className="nav-link">Profil</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="hotele" className="nav-link">Hotele</NavLink>
          </li>
        </ul>

        <div className="mt-3">
          <Outlet />
        </div>
      </div>
    </div>
  )
}