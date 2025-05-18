"use client"; // Mark this file as a client component

import React, { Suspense } from "react";
import Link from "next/link";

const Content: React.FC = () => {
    return (
        <main className="container">
            <header className="header">
                <h1 className="title">Playwright</h1>
                <p className="description">
                    Playwright is an open-source automation framework for end-to-end testing of web applications. 
                    It supports multiple browsers (Chromium, Firefox, and WebKit) and allows testing across different platforms. 
                    With Playwright, you can simulate user interactions, capture screenshots, and ensure app functionality.
                </p>
            </header>
            <section className="content">
                <h2 className="section-title">Installation</h2>
                <p>
                    Play Wright Documentation
                    <Link href="https://playwright.dev/">
                        <button className="button">GO</button>
                    </Link>
                </p>
                <h3>Pre-requirements</h3>
                <ul className="list">
                    <li>
                        Install latest node or nvm:
                        <Link href="/nvm">
                            <button className="button">GO</button>
                        </Link>
                    </li>
                    <li>
                        Install Visual Studio Code:
                        <Link href="https://code.visualstudio.com/">
                            <button className="button">GO</button>
                        </Link>
                    </li>
                    <li>
                        Install Visual Studio Code extension from Microsoft.
                    </li>
                    <li>Install visual studio code extension</li>
                </ul>

                
                <h2 className="section-title">Execution scripts</h2>
                <ul className="list">
                    <li>
                         Run all tests in UI mode:
                        <div className="code-block">
                            <code>npx playwright test --ui</code>
                        </div>
                    </li>
                      <li>
                        Run all tests in debug mode:
                        <div className="code-block">
                            <code>npx playwright test --debug</code>
                        </div>
                    </li>
                    <li>
                        Execute all your tests headless:
                        <div className="code-block">
                            <code>npx playwright test</code>
                        </div>
                    </li>
                    <li>
                        Execute all tests showing headed mode:
                        <div className="code-block">
                            <code>npx playwright test --headed</code>
                        </div>
                    </li>
                    <li>
                        Run all tests selecting browser
                        <div className="code-block">
                            <code>npx playwright test --project=chromium</code>
                            <br />
                             <code>npx playwright test --project=firefox</code>
                        </div>
                    </li>
                    <li>
                        Auto-generate tests with Codegen:
                        <div className="code-block">
                            <code>npx playwright codegen</code>
                        </div>
                    </li>
                    <li>
                        execute showing the report:
                        <div className="code-block">
                            <code>npx playwright show-report</code>
                        </div>
                    </li>
                    <li>
                        Run a specific test headless:
                        <div className="code-block">
                            <code>npx playwright test &quot;testName.spec.ts&quot; --project=chromium</code>
                        </div>
                    </li>
                    <li>
                        Run with a tag:
                        <div className="code-block">
                            <code>npx playwright test --headed --grep @smoke --project=chromium</code>
                        </div>
                    </li>
                    <li>
                        Run every tag that does not contain @smoke:
                        <div className="code-block">
                            <code>npx playwright test tests-examples/ --grep-invert @smoke --project=firefox</code>
                        </div>
                    </li>
                    <li>
                        Run and open the trace option in the report (to see the trace option, open the Playwright report first):
                        <div className="code-block">
                            <code>npx playwright test --trace on</code>
                        </div>
                    </li>
                </ul>
                <h2 className="section-title">Handy tricks</h2>
                <ul className="list">
                    <li>
                        Reduce test flakiness caused by UI interactions before API responses are ready.
                        <div className="code-block">
                            <code>
                                {`await Promise.all([
                                    page.waitForResponse(resp => resp.url().includes('api/endpoint') && resp.status() === 200),
                                    pom.goToHome()
                                ]);`}
                            </code>
                        </div>
                    </li>
                </ul>
            </section>
        </main>
    );
};

const Page: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Content />
        </Suspense>
    );
};

export default Page;