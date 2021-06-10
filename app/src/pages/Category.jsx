import * as React from "react";
import { animated } from "react-spring";
import { Link } from "wouter";
import { ResponsivePie } from "@nivo/pie";

const data = [
  {
    id: "Phishing",
    label: "Phishing",
    value: 642
  },
  {
    id: "Hacking : Pénétrer un système informatique de force",
    label: "Pénétrer un système informatique de force",
    value: 319
  },
  {
    id:
      "Hacking : Accéder dans un système informatique au moyen de codes d'accès externes",
    label:
      "Accéder dans un système informatique au moyen de codes d'accès externes",
    value: 470
  },
  {
    id: "Malware - Ransomware",
    label: "Ransomware",
    value: 222
  },
  {
    id: "Cyber-escroquerie",
    label: "Cyber-escroquerie",
    value: 16395
  },
  {
    id: "Money/package mules",
    label: "Money/package mules",
    value: 1690
  },
  {
    id: "Sextorsion (money)",
    label: "Sextorsion (money)",
    value: 513
  },
  {
    id: "Pornographie interdite",
    label: "Pornographie interdite",
    value: 2338
  },
  {
    id: "Grooming",
    label: "Grooming",
    value: 130
  },
  {
    id: "Sextorsion (sexe)",
    label: "Sextorsion (sexe)",
    value: 109
  },
  {
    id: "Cyber-atteinte à la réputation (business)",
    label: "Cyber-atteinte à la réputation",
    value: 107
  },
  {
    id: "Cyberbullying/Cybermobbing",
    label: "Cyberbullying/Cybermobbing",
    value: 1109
  }
];

export default function Home() {
  return (
    <>
      <h1>Catégories de crimes</h1>
      <p>
        La classe "Cybercriminalité économique" comprend:
        <ul>
          <li>Phishing</li>
          <li>Hacking : Pénétrer un système informatique de force</li>
          <li>
            Hacking : Accéder dans un système informatique au moyen de codes
            d'accès externes
          </li>
          <li>Malware - Ransomware</li>
          <li>Malware - Cheval de Troie e-banking</li>
          <li>Malware - Spyware</li>
          <li>Malware - Rogueware/Scareware</li>
          <li>Malware - Botnet</li>
          <li>DDoS</li>
          <li>
            Cyber-escroquerie (Cette catégorie englobe plusieurs modes
            opératoires de cyber-escoqueries (par ex.: shop en ligne, annonces
            immobilières, romance scam)
          </li>
          <li>Money/package mules</li>
          <li>Sextorsion (money)</li>
          <li>Vol de crypto-monnaies</li>
        </ul>
        La classe "Cyber-délits sexuels" comprend:
        <ul>
          <li>Pornographie interdite</li>
          <li>Grooming</li>
          <li>Sextorsion (sexe)</li>
          <li>Live Streaming</li>
        </ul>
        La classe "Cyber-atteinte à la réputation et pratiques déloyales"
        comprend:
        <ul>
          <li>Cybersquatting</li>
          <li>Cyber-atteinte à la réputation (business)</li>
          <li>Cyberbullying/Cybermobbing</li>
        </ul>
        La classe "Darknet" comprend:
        <ul>
          <li>Commerce illégal sur le Darknet</li>
        </ul>
      </p>
      <div style={{ height: 600, width: 700 }}>
        <ResponsivePie
          data={data}
          margin={{ top: 10, right: 60, bottom: -25, left: 160 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="white"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
          colors={{ scheme: "greens" }}
        />
      </div>
      <p2>
        Tirés des statistiques de l'OFS{" "}
        <a href="https://www.bfs.admin.ch/bfs/fr/home/statistiques/criminalite-droit-penal/police/criminalite-numerique.html">
          (source)
        </a>{" "}
        concernant la criminalité numérique
      </p2>
      <p>
        Afin d'avoir une meilleure visualisation graphique, nous avons retiré
        les catégories avec moins de 100 infractions: Malware - Cheval de Troie
        e-banking (83), Malware - Spyware (65), Malware - Rogueware/Scareware
        (49), Malware - Botnet (18), DDoS (43), Vol de crypto-monnaies (35),
        Live Streaming (35), Cybersquatting (24) et Commerce illégal sur le
        Darknet (2).<br></br>
      </p>
    </>
  );
}
