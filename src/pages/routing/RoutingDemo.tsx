import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { PageTemplate } from '../../components/PageTemplate';

export const RoutingDemo: React.FC = () => {
    // --- States and Hooks for Real Case Demo ---
    const navigate = useNavigate();
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const handleSimulatedLogin = () => {
        setIsLoggingIn(true);
        // Simulate an API call taking 1.5 seconds
        setTimeout(() => {
            setIsLoggingIn(false);
            // Imperative navigation: Redirect the user after an action completes
            navigate('/use-context');
        }, 1500);
    };

    return (
        <PageTemplate
            title="Routing: Link, NavLink, and useNavigate"
            principle={
                <div>
                    <p>
                        In a Single Page Application (SPA), React Router intercepts URL changes to render new components
                        <em> without</em> asking the server for a new HTML document.
                    </p>
                    <ul>
                        <li><code>&lt;Link&gt;</code>: Declarative navigation. It renders an accessible <code>&lt;a&gt;</code> tag but prevents the default browser reload.</li>
                        <li><code>&lt;NavLink&gt;</code>: A special version of Link that knows whether or not it is "active". It allows you to easily apply active styles.</li>
                        <li><code>useNavigate()</code>: A hook that lets you navigate programmatically (imperative navigation) via JavaScript logic rather than user clicks.</li>
                    </ul>
                </div>
            }
            useCases={
                <ul>
                    <li><strong>Link:</strong> Standard text links, linking a card to a detail page, footer links.</li>
                    <li><strong>NavLink:</strong> Main navigation bars, sidebars, active tab indicators.</li>
                    <li><strong>useNavigate:</strong> Redirecting a user after a successful login, a "Go Back" button, or auto-redirecting if a user lacks permissions.</li>
                </ul>
            }
            interactiveObserve={
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                    <div style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
                        <h4>1. The Reload Test (a vs Link)</h4>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <div>
                                <strong>Bad (Full Reload):</strong><br />
                                <a href="/use-state" style={{ color: 'red' }}>Go to useState via &lt;a&gt;</a>
                            </div>
                            <div>
                                <strong>Good (SPA Transition):</strong><br />
                                <Link to="/use-state" style={{ color: 'green' }}>Go to useState via &lt;Link&gt;</Link>
                            </div>
                        </div>
                        <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '10px' }}>
                            <em>Click the red link and watch your browser's tab icon—it spins because the browser reloads the app. The green link feels instantaneous.</em>
                        </p>
                    </div>

                    <div style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
                        <h4>2. NavLink Active State</h4>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            {/* Note: We are on '/routing', so this specific NavLink will trigger isActive = true */}
                            <NavLink
                                to="/routing"
                                style={({ isActive }) => ({
                                    padding: '5px 10px',
                                    background: isActive ? '#61dafb' : '#eee',
                                    color: isActive ? 'black' : '#333',
                                    borderRadius: '4px',
                                    textDecoration: 'none'
                                })}
                            >
                                Routing Page (Active)
                            </NavLink>
                            <NavLink
                                to="/use-state"
                                style={({ isActive }) => ({
                                    padding: '5px 10px',
                                    background: isActive ? '#61dafb' : '#eee',
                                    color: isActive ? 'black' : '#333',
                                    borderRadius: '4px',
                                    textDecoration: 'none'
                                })}
                            >
                                useState Page (Inactive)
                            </NavLink>
                        </div>
                    </div>

                    <div style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
                        <h4>3. Programmatic Navigation (useNavigate)</h4>
                        <button onClick={() => navigate(-1)}>
                            Go Back 1 Page
                        </button>
                        <p style={{ fontSize: '0.85rem', color: '#666' }}>
                            <em>Passing <code>-1</code> to navigate acts exactly like the browser's back button.</em>
                        </p>
                    </div>

                </div>
            }
            realCaseDemo={
                <div style={{ maxWidth: '300px', padding: '20px', border: '2px solid #282c34', borderRadius: '8px' }}>
                    <h3>Login Simulation</h3>
                    <p style={{ fontSize: '0.9rem' }}>
                        Clicking this button simulates a network request. Once the request finishes, the code uses <code>useNavigate</code> to redirect you to the useContext page automatically.
                    </p>
                    <button
                        onClick={handleSimulatedLogin}
                        disabled={isLoggingIn}
                        style={{ width: '100%', padding: '10px', marginTop: '10px', cursor: isLoggingIn ? 'wait' : 'pointer' }}
                    >
                        {isLoggingIn ? 'Authenticating...' : 'Login & Redirect'}
                    </button>
                </div>
            }
        />
    );
};
