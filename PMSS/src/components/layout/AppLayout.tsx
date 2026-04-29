import { Outlet, Link, NavLink, useNavigate } from "react-router-dom"
import { Home, User, Calendar, Tv, LogOut } from "lucide-react"
import { useAuth } from "@/contexts/useAuth"

export default function AppLayout() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  const isAdmin = user?.role === "admin"

  return (
    <div className="admin-layout">
      {/* HEADER (UNCHANGED) */}
      <header className="main-header">
        <div className="header-content">
          <section className="header-image">
            <Link to={isAdmin ? "/admin-home" : "/superadmin-home"}>
              <img src="/logo.png" className="logo" />
            </Link>
          </section>
          <div className="title">
            <h1>EnergySync</h1>
          </div>
        </div>
      </header>

      <div className="app-body">
        {/* SIDEBAR (DYNAMIC LINKS) */}
        <nav className="sidebar">
          <ul className="nav-links">

            {/* HOME */}
            <li>
              <NavLink
                to={isAdmin ? "/admin-home" : "/superadmin-home"}
                className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
              >
                <Home size={20} />
                <span>Home</span>
              </NavLink>
            </li>

            {/* PROFILE */}
            <li>
              <NavLink
                to={isAdmin ? "/admin-profile" : "/superadmin-profile"}
                className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
              >
                <User size={20} />
                <span>Profile</span>
              </NavLink>
            </li>

            {/* PROGRAM (SUPERADMIN ONLY) */}
            {!isAdmin && (
              <li>
                <NavLink
                  to="/superadmin-program"
                  className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
                >
                  <Tv size={20} />
                  <span>Program</span>
                </NavLink>
              </li>
            )}

            {/* SCHEDULE */}
            <li>
              <NavLink
                to={isAdmin ? "/admin-schedule" : "/superadmin-schedule"}
                className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
              >
                <Calendar size={20} />
                <span>Schedule</span>
              </NavLink>
            </li>

            {/* LOGOUT */}
            <li>
              <button
                className="nav-item logout"
                onClick={() => {
                  logout()
                  navigate("/")
                }}
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </li>

          </ul>
        </nav>

        {/* CONTENT */}
        <main className="main-content">
          <Outlet />
        </main>
      </div>

      <footer>
        Privacy Policy | Energy FM © 2026
      </footer>
    </div>
  )
}