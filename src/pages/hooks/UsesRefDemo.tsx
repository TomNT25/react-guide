import React, { useState, useRef } from 'react';
import { PageTemplate } from '../../components/PageTemplate';

export const UseRefDemo: React.FC = () => {
    // --- States/Refs for Interactive Section ---
    const [renderState, setRenderState] = useState(0);
    const renderCountRef = useRef(0);

    const handleMutateRef = () => {
        renderCountRef.current += 1;
        console.log("Ref value is now:", renderCountRef.current);
        // Notice we do NOT call a state setter, so the UI won't update yet!
    };

    // --- States/Refs for Real Case Demo ---
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        // Directly manipulating the DOM element
        inputRef.current?.focus();
        inputRef.current?.style.setProperty('border', '2px solid #61dafb');
    };

    return (
        <PageTemplate
            title="Hook: useRef"
            principle={
                <p>
                    <code>useRef</code> is a React Hook that lets you reference a value that’s not needed for rendering.
                    Unlike state, changing a ref <strong>does not trigger a re-render</strong>. It is also commonly used
                    to gain direct access to a DOM element.
                </p>
            }
            useCases={
                <ul>
                    <li>Direct DOM manipulation (focusing an input, scrolling to a section).</li>
                    <li>Storing mutable values that shouldn't trigger re-renders (like <code>setInterval</code> IDs).</li>
                    <li>Tracking previous state values.</li>
                </ul>
            }
            interactiveObserve={
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <div>
                        <p>Ref Value: <strong>{renderCountRef.current}</strong></p>
                        <button onClick={handleMutateRef}>Increment Ref (No Render)</button>
                    </div>
                    <div>
                        <p>State Value: <strong>{renderState}</strong></p>
                        <button onClick={() => setRenderState(prev => prev + 1)}>Increment State (Causes Render)</button>
                    </div>
                    <p style={{ fontSize: '0.85rem', maxWidth: '300px' }}>
                        <em>Click "Increment Ref" a few times. Notice the number doesn't change on screen. Then click "Increment State". The component re-renders, and the updated ref value suddenly appears!</em>
                    </p>
                </div>
            }
            realCaseDemo={
                <div style={{ display: 'flex', gap: '10px' }}>
                    <input ref={inputRef} type="text" placeholder="I am a passive input" style={{ padding: '5px' }} />
                    <button onClick={handleFocus}>Focus the Input Programmatically</button>
                </div>
            }
        />
    );
};
