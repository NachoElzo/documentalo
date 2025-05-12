"use client"; // Mark this file as a client component

import React from "react";
import Link from "next/link";

// Topics for each section
const sections = [
    {
        title: "Tools & Environments",
        topics: [
            { name: "NVM", link: "/nvm" },
            { name: "in progress", link: "/brew" },
            { name: "in progress", link: "/path" },
        ],
    },
    {
        title: "Automation",
        topics: [
            { name: "Playwright", link: "/playwright" },
            { name: "In Progress", link: "#" },
            { name: "In Progress", link: "#" },
        ],
    },
    {
        title: "Code",
        topics: [
            { name: "In Progress", link: "#" },
            { name: "In Progress", link: "#" },
            { name: "In Progress", link: "#" },
        ],
    },
    {
        title: "Tips",
        topics: [
            { name: "In Progress", link: "#" },
            { name: "In Progress", link: "#" },
            { name: "In Progress", link: "#" },
        ],
    },
    {
        title: "CI/CD",
        topics: [
            { name: "In Progress", link: "#" },
            { name: "In Progress", link: "#" },
            { name: "In Progress", link: "#" },
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
                            <li key={index} className="topic-card">
                                <Link href={topic.link} className="topic-link">
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
