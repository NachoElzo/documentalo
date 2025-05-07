"use client"; // Mark this file as a client component

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const BlueprintContent: React.FC = () => {
    const searchParams = useSearchParams();
    const title = searchParams.get("title");
    const slug = searchParams.get("slug");

    return (
        <main className="blueprint-container">
            <header className="blueprint-header">
                <h1 className="blueprint-title">{title || "Loading..."}</h1>
                <p className="blueprint-subtitle">
                    This page contains documentation and details about <strong>{title || "..."}</strong>.
                </p>
            </header>
            <section className="blueprint-content">
                <h2 className="section-title">Details</h2>
                <p className="blueprint-description">
                    Here you can add detailed information about <strong>{title || "..."}</strong> (slug: {slug || "..."})
                </p>
                <h2 className="section-title">Code Example</h2>
                <pre className="code-block">
                    <code>
                        {`// Add your code example here for ${title || "this topic"}`}
                    </code>
                </pre>
            </section>
        </main>
    );
};

const BlueprintPage: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BlueprintContent />
        </Suspense>
    );
};

export default BlueprintPage;