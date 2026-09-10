import React, { useState, useEffect } from 'react';
import { PageTemplate } from '../../components/PageTemplate';

export const UseEffectDemo: React.FC = () => {
    // --- States for Interactive Section ---
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        // Cleanup function runs when component unmounts or before re-running the effect
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty dependency array = runs once on mount

    // --- States for Real Case Demo ---
    const [data, setData] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const fetchData = () => {
        setLoading(true);
        setData(null);
        setTimeout(() => {
            setData("Data successfully fetched from mock API!");
            setLoading(false);
        }, 1500);
    };

    return (
        <PageTemplate
            title="Hook: useEffect"
            principle={
                <p>
                    <code>useEffect</code> lets you synchronize a component with an external system.
                    It handles "side effects" like fetching data, directly updating the DOM, or setting up subscriptions.
                    The dependency array controls exactly <em>when</em> the effect runs.
                </p>
            }
            useCases={
                <ul>
                    <li>Fetching data from an API when a page loads.</li>
                    <li>Listening to global browser events (e.g., window resize, scroll).</li>
                    <li>Setting up and tearing down <code>setInterval</code> or <code>setTimeout</code>.</li>
                </ul>
            }
            interactiveObserve={
                <div>
                    <p>Resize your browser window and watch this value update automatically via an event listener setup in <code>useEffect</code>:</p>
                    <h3>Current Width: {windowWidth}px</h3>
                </div>
            }
            realCaseDemo={
                <div>
                    <button onClick={fetchData} disabled={loading}>
                        {loading ? 'Fetching...' : 'Fetch Data'}
                    </button>
                    <div style={{ marginTop: '10px', minHeight: '30px' }}>
                        {loading && <em>Loading...</em>}
                        {data && <strong style={{ color: 'green' }}>{data}</strong>}
                    </div>
                </div>
            }
        />
    );
};
