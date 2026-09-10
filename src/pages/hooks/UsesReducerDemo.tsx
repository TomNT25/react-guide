import React, { useReducer } from 'react';
import { PageTemplate } from '../../components/PageTemplate';

// 1. Define State and Actions types
interface CartState { items: number; total: number; }
type CartAction =
    | { type: 'ADD_ITEM'; price: number }
    | { type: 'REMOVE_ITEM'; price: number }
    | { type: 'CLEAR' };

// 2. Define the reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_ITEM':
            return { items: state.items + 1, total: state.total + action.price };
        case 'REMOVE_ITEM':
            if (state.items === 0) return state;
            return { items: state.items - 1, total: state.total - action.price };
        case 'CLEAR':
            return { items: 0, total: 0 };
        default:
            return state;
    }
};

export const UseReducerDemo: React.FC = () => {
    // 3. Initialize the hook
    const [state, dispatch] = useReducer(cartReducer, { items: 0, total: 0 });

    return (
        <PageTemplate
            title="Hook: useReducer"
            principle={
                <p>
                    <code>useReducer</code> is an alternative to <code>useState</code>. It accepts a reducer function
                    <code>(state, action) =&gt; newState</code> and returns the current state paired with a <code>dispatch</code> method.
                    It centralizes complex state logic.
                </p>
            }
            useCases={
                <ul>
                    <li>Managing state objects with multiple sub-values (like complex forms).</li>
                    <li>When the next state strongly depends on the previous state.</li>
                    <li>Moving state logic out of the component and into a pure function for easier testing.</li>
                </ul>
            }
            interactiveObserve={
                <div>
                    <p>Instead of multiple <code>useState</code> setters, we dispatch specific actions describing <em>what</em> happened:</p>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button onClick={() => dispatch({ type: 'ADD_ITEM', price: 10 })}>Dispatch ADD_ITEM ($10)</button>
                        <button onClick={() => dispatch({ type: 'REMOVE_ITEM', price: 10 })}>Dispatch REMOVE_ITEM ($10)</button>
                        <button onClick={() => dispatch({ type: 'CLEAR' })}>Dispatch CLEAR</button>
                    </div>
                </div>
            }
            realCaseDemo={
                <div style={{ padding: '1rem', border: '2px solid #ccc', borderRadius: '8px', maxWidth: '300px' }}>
                    <h3>🛒 Shopping Cart</h3>
                    <hr />
                    <p>Items in cart: <strong>{state.items}</strong></p>
                    <p>Total Cost: <strong>${state.total.toFixed(2)}</strong></p>
                </div>
            }
        />
    );
};
