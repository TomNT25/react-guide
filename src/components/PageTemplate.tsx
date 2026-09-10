import React from 'react';

interface PageTemplateProps {
    title: string;
    principle: React.ReactNode;
    useCases: React.ReactNode;
    interactiveObserve: React.ReactNode;
    realCaseDemo: React.ReactNode;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({
    title,
    principle,
    useCases,
    interactiveObserve,
    realCaseDemo,
}) => {
    return (
        <div className="page-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>{title}</h1>

            <section className="section-card">
                <h2>1. Principle & Meaning</h2>
                <div className="content">{principle}</div>
            </section>

            <section className="section-card" style={{ marginTop: '2rem' }}>
                <h2>2. Real-life Examples & Use Cases</h2>
                <div className="content">{useCases}</div>
            </section>

            <section className="section-card" style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
                <h2>3. Interactive Observation</h2>
                <p><em>Interact with the component below to see how it operates under the hood.</em></p>
                <div className="content">{interactiveObserve}</div>
            </section>

            <section className="section-card" style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f9f9f9' }}>
                <h2>4. Real Case Demo</h2>
                <div className="content">{realCaseDemo}</div>
            </section>
        </div>
    );
};
