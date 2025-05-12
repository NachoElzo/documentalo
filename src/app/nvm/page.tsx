"use client"; // Mark this file as a client component

import React, { Suspense } from "react";

const Content: React.FC = () => {
    return (
        <main className="container">
            <header className="header">
                <h1 className="title">Node Version Manager (NVM)</h1>
                <p className="description">
                    NVM works by managing multiple versions of Node.js on your system without interfering with each other.<br />
                    In essence, it gives you full control over your Node.js environment, especially useful when working on different projects or contributing to open-source.
                </p>
            </header>
            <section className="content">
                <h2 className="section-title">Installation</h2>
                <p>
                    NVM Documentation
                    <a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noopener noreferrer">
                        <button className="button">GO</button>
                    </a>
                </p>
                <p>To install NVM, run the following command in your terminal:</p>
                <div className="code-block">
                    <code>
                        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
                    </code>
                </div>
                <p>
                    If you encounter the error <strong>zsh: command not found: nvm</strong>, type the following in your terminal:
                </p>
                <div className="code-block">
                    <code>source ~/.nvm/nvm.sh</code>
                </div>
                <p>After that, open and close your terminal to ensure the changes take effect.</p>

                <h2 className="section-title">NVM Commands Examples</h2>
                <ul className="list">
                    <li>
                        Check versions available for installation:
                        <div className="code-block">
                            <code>nvm ls-remote</code>
                        </div>
                    </li>
                    <li>
                        Install the latest version of Node.js:
                        <div className="code-block">
                            <code>nvm install node</code>
                        </div>
                    </li>
                    <li>
                        Install a specific Node.js version:
                        <div className="code-block">
                            <code>{`nvm install "`}{'"'}{`version"`}{'"'}</code>
                        </div>
                    </li>
                    <li>
                        Use a specific Node.js version:
                        <div className="code-block">
                            <code>{`nvm use "`}{'"'}{`version"`}{'"'}</code>
                        </div>
                    </li>
                    <li>
                        List installed Node.js versions:
                        <div className="code-block">
                            <code>nvm list</code>
                        </div>
                    </li>
                    <li>
                        Set a default Node.js version:
                        <div className="code-block">
                            <code>{`nvm alias default "`}{'"'}{`version"`}{'"'}</code>
                        </div>
                    </li>
                    <li>
                        Check the active Node.js version:
                        <div className="code-block">
                            <code>node -v</code>
                        </div>
                    </li>
                    <li>
                        Uninstall a Node.js version:
                        <div className="code-block">
                            <code>{`nvm uninstall "`}{'"'}{`version"`}{'"'}</code>
                        </div>
                    </li>
                </ul>

                <h2 className="section-title">Delete Node.js Versions</h2>
                <p>To delete Node.js versions from your Mac system manually</p>
                <ul className="list">
                    <li>Navigate to your Mac user folder.</li>
                    <li>Press <strong>Cmd + Shift + .</strong> to toggle hidden files visibility</li>
                    <li>Locate the <code>.nvm</code> folder and delete it</li>
                </ul>
                   <p>To delete Node.js versions from your Mac by terminal</p>
                 <ul className="list">
                    <li>Open mac terminal</li>
                    <li>Delete the NVM installation directory:
                           <div className="code-block">
                            <code>rm -rf ~/.nvm</code>
                        </div>
                    </li>
                    <li>
                        Remove lines from your shell configuration file
                        <div className="code-block">
                            <code>
                                export NVM_DIR=&quot;$HOME/.nvm&quot;<br />
                                [ -s &quot;$NVM_DIR/nvm.sh&quot; ] &amp;&amp; \. &quot;$NVM_DIR/nvm.sh&quot;
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