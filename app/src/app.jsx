import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";

import "./styles/styles.css";

import PageRouter from "./components/router.jsx";
import useHashLocation from "./hooks/wouter-hash";

import Seo from "./components/seo.jsx";

export default function Home() {
  return (
    <Router hook={useHashLocation}>
      <Seo />
      <main role="main" className="wrapper">
        <div className="content">
          <PageRouter />
        </div>
      </main>

      <footer className="footer">
        <div className="links">
          <Link href="/">Home</Link>
          <span className="divider">|</span>
          <Link href="/Classes">Classes </Link>
          <span className="divider">|</span>
          <Link href="/Category">Catégories </Link>
          <span className="divider">|</span>
          <Link href="/taux">Taux d'élucidation </Link>
          <span className="divider">|</span>
          <Link href="/prevenuTotal">Prévenus</Link>
          <span className="divider">|</span>
          <Link href="/lesesTotal">Lésés</Link>
          <span className="divider">|</span>
          <Link href="/lexique">Lexique</Link>
        </div>
      </footer>
    </Router>
  );
}
