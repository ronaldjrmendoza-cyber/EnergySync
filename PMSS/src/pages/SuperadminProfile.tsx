import { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Home, User, Tv, Calendar, LogOut, Camera, Edit2, Bell } from "lucide-react"; 

export default function SuperadminProfile() {
    const navigate = useNavigate();

    useEffect(() => {

    }, []);

    return (
        <div className="superadmin-layout">
            <header className="main-header">
                <div className="header-content">
                    <section className="header-image">
                        <Link to="/superadmin-home">
                            <img src="/logo.png" className="logo" alt="Energy FM 106.3 Naga Logo" />
                        </Link>
                    </section>
                    <div className="title"> 
                        <h1>EnergySync</h1>
                    </div>
                </div>
            </header>

            <div className="app-body">
                <nav className="sidebar">
                    <ul className="nav-links">
                        <li>
                            <NavLink to="/superadmin-home" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                                <Home size={20} />
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/superadmin-profile" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                                <User size={20} />
                                <span>Profile</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/superadmin-program" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                                <Tv size={20} />
                                <span>Program</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/superadmin-schedule" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                                <Calendar size={20} />
                                <span>Schedule</span>
                            </NavLink>
                        </li>
                        <li>
                            <button className="nav-item logout" onClick={() => {
                                localStorage.removeItem("auth")
                                navigate("/")
                            }}>
                                <LogOut size={20} />
                                <span>Logout</span>
                            </button>
                        </li>
                    </ul>
                </nav>

                 <main className="main-content">
                    <div className="profile-container-grid">
                        <div className="profile-info-column">
                            <div className="white-card user-identity-card">
                                <div className="profile-avatar-circle">
                                    <Camera size={35} color="white" />
                                </div>
                                <div className="user-text-info">
                                    <div className="name-row">
                                        <h2 style={{ fontSize: '23px' }}><strong>DJ Makisig</strong></h2>
                                        <Edit2 size={22} className="edit-pencil" />
                                    </div>
                                    <p className="full-name">Ruel Viñas</p>
                                    <p className="handle">@djmakisig</p>
                                </div>
                            </div>

                            {/* Assigned Programs */}
                            <div className="programs-section">
                                <div className="blue-section-bar">
                                    <h3>Assigned Programs</h3>
                                </div>
                                <div className="program-item-box">
                                    <div className="program-details">
                                        <h4 style={{ fontSize: '17px' }}><strong>Harambogan sa Radyo</strong></h4>
                                        <div className="time-slot">
                                            <Calendar size={15} />
                                            <span style={{ fontSize: '14px' }}>7:00 AM - 9:00 AM</span>
                                        </div>
                                    </div>
                                    <span className="status-badge">Confirmed</span>
                                </div>
                            </div>
                        </div>

                        {/* Notifications */}
                        <div className="notifications-sidebar-panel">
                            <div className="notif-title-area">
                                <Bell size={22} />
                                <h3>Notifications</h3>
                            </div>
                            <div className="notif-content-list">
                                <div className="notif-row">
                                    <span className="status-dot red-dot"></span>
                                    <p>DJ Apple confirmed her attendance to ho...</p>
                                    <div className="notif-time"><strong>2:00 PM</strong><span className="active-indicator"></span></div>
                                </div>
                                <div className="notif-row">
                                    <span className="status-dot pink-dot"></span>
                                    <p>DJ Barbie is not available to host "Energy sa...</p>
                                    <div className="notif-time">Mar 13</div>
                                </div>
                                <div className="notif-row">
                                    <span className="status-dot green-dot"></span>
                                    <p>Papa Gats confirmed his attendance</p>
                                    <div className="notif-time">Mar 13</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <footer>
                Privacy Policy | Energy FM © 2026
            </footer>
        </div>
    );
}