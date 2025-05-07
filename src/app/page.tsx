"use client"; // Mark this file as a client component

import React from "react";
import Link from "next/link";

// Topics for each section
const sections = [
    {
        title: "Automation",
        topics: [
            { name: "Playwright", slug: "playwright" },
            { name: "in progress", slug: "in-progress-1" },
            { name: "in progress", slug: "in-progress-2" },
        ],
    },
    {
        title: "Code",
        topics: [
            { name: "JavaScript", slug: "javascript" },
            { name: "Python", slug: "python" },
            { name: "in progress", slug: "in-progress-3" },
        ],
    },
    {
        title: "Tips",
        topics: [
            { name: "in progress", slug: "in-progress-4" },
            { name: "in progress", slug: "in-progress-5" },
            { name: "in progress", slug: "in-progress-6" },
        ],
    },
    {
        title: "CI/CD",
        topics: [
            { name: "in progress", slug: "in-progress-7" },
            { name: "in progress", slug: "in-progress-8" },
            { name: "in progress", slug: "in-progress-9" },
        ],
    },
];

const LandingPage: React.FC = () => {
    return (
        <main className="landing-container">
            <header className="hero">
                <h1 className="hero-title">Welcome to Documentalo</h1>
                <p className="hero-subtitle">
                    This is my personal documentation web page where I share all the knowledge I&apos;ve learned.
                </p>
            </header>
            {sections.map((section) => (
                <section key={section.title} className="topics-section">
                    <h2 className="section-title">{section.title}</h2>
                    <ul className="topics-grid">
                        {section.topics.map((topic, index) => (
                            <li key={`${topic.slug}-${index}`} className="topic-card">
                                <Link
                                    href={{
                                        pathname: `/playwright`,
                                        query: { title: topic.name, slug: topic.slug },
                                    }}
                                    className="topic-link"
                                >
                                    <div className="topic-content">
                                        <h3 className="topic-name">{topic.name}</h3>
                                        <p className="topic-description">
                                            Learn more about {topic.name}.
                                        </p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </main>
    );
};

export default LandingPage;
