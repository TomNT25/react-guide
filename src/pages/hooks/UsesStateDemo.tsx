import React, { useState } from 'react';
import { PageTemplate } from '../../components/PageTemplate';

export const UseStateDemo: React.FC = () => {
    // --- States for Section 3: Interactive ---
    const [renderCount, setRenderCount] = useState(0);

    // --- States for Section 4: Real Case ---
    const [form, setForm] = useState({ username: '', isSubmitting: false });

    const handleSimulateSubmit = () => {
        setForm(prev => ({ ...prev, isSubmitting: true }));
        setTimeout(() => {
            setForm(prev => ({ ...prev, isSubmitting: false }));
            alert(`User ${form.username} saved!`);
        }, 1500);
    };

    return (
        <PageTemplate
            title="Hook: useState"
            principle={
                <p>
                    <code>useState</code> is a React Hook that lets you add a state variable to your component.
                    It returns an array with exactly two items: the current state, and a function to update it.
                    Updating the state triggers a re-render of the component.
                </p>
            }
            useCases={
                <ul>
                    <li>Managing form inputs (controlled components).</li>
                    <li>Toggling UI elements (modals, dropdowns, dark mode).</li>
                    <li>Keeping track of counters or pagination data.</li>
                </ul>
            }
            interactiveObserve={
                <div>
                    <p>Component has rendered <strong>{renderCount}</strong> times.</p>
                    <button onClick={() => setRenderCount(prev => prev + 1)}>
                        Trigger Re-render
                    </button>
                    <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '10px' }}>
                        Notice how React updates the DOM precisely where the state changed, without reloading the page.
                    </p>
                </div>
            }
            realCaseDemo={
                <div style={{ display: 'flex', flexDirection: 'column', width: '250px', gap: '10px' }}>
                    <label>Username (Controlled Input):</label>
                    <input
                        type="text"
                        value={form.username}
                        onChange={(e) => setForm(prev => ({ ...prev, username: e.target.value }))}
                        disabled={form.isSubmitting}
                    />
                    <button
                        onClick={handleSimulateSubmit}
                        disabled={!form.username || form.isSubmitting}
                    >
                        {form.isSubmitting ? 'Saving...' : 'Save Profile'}
                    </button>
                </div>
            }
        />
    );
};
