import * as React from "react";
import { Router, Link } from "wouter";

export default function Home() {
  return (
    <div className="page">
      <h1 className="title">Criminalité numérique suisse en 2020</h1>
      <p>
        Bienvenue sur la page de visualisation de données des
        3MousquetairesProd, nous sommes 3 jeunes étudiants passionnés de
        cybercriminalité et nous souhaitons à travers ce site, vous exposer les
        statistiques suisses concernant la criminalité numérique en 2020.
      </p>
      <p>
        Nous allons décomposer notre travail à travers différentes
        visualisations qui exposeront des statistiques liées à la criminalité
        numérique.
      </p>
      <p>
        La première catégorie de données exposées comprend des données exposant
        les différentes classes de crimes, les différentes catégories parmis ces
        classes et finalement leur taux d'élucidation.
      </p>
      <p>
        <ul>
          <li>
            <Link href="/Classes">Classes de crimes </Link>
          </li>
          <li>
            <Link href="/Category">Catégories de crimes </Link>
          </li>
          <li>
            <Link href="/Taux">Taux d'élucidation </Link>
          </li>
        </ul>
      </p>
      <p>
        Dans la deuxième catégorie nous observerons des données concernant les
        prévenus ainsi que les lésés liées à ces infractions numériques.
      </p>
      <p>
        <ul>
          <li>
            <Link href="/PrevenuTotal">Prévenus </Link>
          </li>
          <li>
            <Link href="/LesesTotal">Lésés </Link>
          </li>
        </ul>
      </p>
      <p>
        La catégorie "Lexique" contient toutes les définitions nécessaires pour
        comprendre le projet dans son ensemble.
      </p>
      <p>
        <ul>
          <li>
            <Link href="/lexique">Lexique </Link>
          </li>
        </ul>
      </p>
    </div>
  );
}
