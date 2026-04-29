import { useEffect } from "react";
import { Link, NavLink, useNavigate} from "react-router-dom";
import { Home, User, Calendar, LogOut, Camera, Edit2, Bell, Clock } from "lucide-react"; 

export default function AdminProfile() {
    const navigate = useNavigate();

    useEffect(() => {

    }, []);

    return (
        <div className="admin-layout">
            <header className="main-header">
                <div className="header-content">
                    <section className="header-image">
                        <Link to="/admin-home">
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
                            <NavLink to="/admin-home" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                                <Home size={20} />
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin-profile" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                                <User size={20} />
                                <span>Profile</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin-schedule" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
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
                    <div className="profile-grid">
                        <div className="left-column">
                            {/* Admin Info Card */}
                            <div className="info-card">
                                <div className="avatar-circle red-bg">
                                    <Camera size={30} color="white" />
                                </div>
                                <div className="admin-info-text">
                                    <div className="name-header">
                                        <h2 style={{ fontSize: '23px' }}><strong>DJ Apple</strong></h2>
                                        <Edit2 size={18} className="edit-btn" />
                                    </div>
                                    <p className="full-name">Ne-A Bongalbal</p>
                                    <p className="handle">@djapple</p>
                                </div>
                            </div>

                            {/* Assigned Programs Section */}
                            <div className="programs-container">
                                <div className="blue-header">
                                    <h3>Assigned Programs</h3>
                                </div>
                                <div className="program-row">
                                    <div className="prog-details">
                                        <h4 style={{ fontSize: '17px' }}><strong>Energy sa Hapon</strong></h4>
                                        <div className="time-slot">
                                            <Calendar size={15} />
                                            <span style={{ color: '#1a1919' }}>3:00 PM - 5:00 PM</span>
                                        </div>
                                    </div>
                                    <span className="status-badge">Confirmed</span>
                                </div>
                            </div>
                        </div>

                        <div className="right-column">
                            <div className="notif-panel">
                                <div className="notif-header">
                                    <Bell size={20} />
                                    <h3>Notifications</h3>
                                </div>
                                <div className="notif-list">
                                    <div className="notif-card light-grey">
                                        <p>You confirmed your attendance.</p>
                                        <span className="notif-time"><strong>2:00 PM</strong> <span className="unread-dot"></span></span>
                                    </div>
                                    <div className="notif-card light-grey">
                                        <div className="user-icon-row">
                                            <div className="circle-icon blue-bg"></div>
                                            <p>DJ Makisig assigned you to host "Energy s...</p>
                                        </div>
                                        <span className="notif-time">Mar 13</span>
                                    </div>
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