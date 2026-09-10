import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar: React.FC = () => {
    const getNavStyle = ({ isActive }: { isActive: boolean }) => ({
        color: isActive ? '#61dafb' : 'white',
        textDecoration: 'none',
        fontWeight: isActive ? 'bold' : 'normal'
    });

    return (
        <nav style={{ padding: '1rem', background: '#282c34', color: 'white', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <NavLink to="/use-state" style={getNavStyle}>useState</NavLink>
            <NavLink to="/use-effect" style={getNavStyle}>useEffect</NavLink>
            <NavLink to="/use-ref" style={getNavStyle}>useRef</NavLink>
            <NavLink to="/use-reducer" style={getNavStyle}>useReducer</NavLink>
            <NavLink to="/use-context" style={getNavStyle}>useContext</NavLink>
            <NavLink to="/routing" style={getNavStyle}>Routing</NavLink>

            <a
                href="https://react.dev/reference/react"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#aaa', marginLeft: 'auto' }}
            >
                React Docs
            </a>
        </nav>
    );
};
