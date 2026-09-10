import React, { useState, useContext, createContext } from 'react';
import { PageTemplate } from '../../components/PageTemplate';

// 1. Create the Context (Normally this lives in a separate /contexts folder)
interface UserContextType {
    username: string | null;
    login: (name: string) => void;
    logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// 2. Create a deeply nested component that consumes the context
const DeeplyNestedHeader: React.FC = () => {
    const context = useContext(UserContext);
    if (!context) return null;

    return (
        <div style={{ padding: '1rem', background: '#333', color: 'white', borderRadius: '4px' }}>
            <h4>Deeply Nested Header Bar</h4>
            {context.username ? (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Welcome, <strong>{context.username}</strong>!</span>
                    <button onClick={context.logout}>Logout</button>
                </div>
            ) : (
                <span>Please log in.</span>
            )}
        </div>
    );
};

export const UseContextDemo: React.FC = () => {
    // Provider state
    const [username, setUsername] = useState<string | null>(null);

    const contextValue: UserContextType = {
        username,
        login: (name) => setUsername(name),
        logout: () => setUsername(null)
    };

    return (
        <PageTemplate
            title="Hook: useContext"
            principle={
                <p>
                    <code>useContext</code> lets you read and subscribe to context from your component.
                    Context provides a way to pass data through the component tree without having to pass props down manually at every level ("prop drilling").
                </p>
            }
            useCases={
                <ul>
                    <li>Global theming (Light/Dark mode).</li>
                    <li>Current authenticated user state.</li>
                    <li>Localization and language settings.</li>
                </ul>
            }
            interactiveObserve={
                <div>
                    <p>Login here at the parent level. The child component below will instantly receive the data without any props being passed to it.</p>
                    <button onClick={() => contextValue.login('Alice_Frontend_Dev')} disabled={!!username}>
                        Login as Alice
                    </button>
                </div>
            }
            realCaseDemo={
                <UserContext.Provider value={contextValue}>
                    <div style={{ border: '2px dashed #aaa', padding: '20px' }}>
                        <p style={{ color: '#666', marginTop: 0 }}><em>This border represents several layers of nested components...</em></p>
                        <DeeplyNestedHeader />
                    </div>
                </UserContext.Provider>
            }
        />
    );
};
