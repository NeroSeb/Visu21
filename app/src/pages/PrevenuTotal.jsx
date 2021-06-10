import * as React from "react";
import { animated } from "react-spring";
import { Router, Link } from "wouter";
import { ResponsivePie } from "@nivo/pie";

const data = [
  {
    id: "Cybercriminalité économique",
    label: "Economique",
    value: 2844,
  },
  {
    id: "Cyber-délits sexuels",
    label: "sexu",
    value: 1956,
  },
  {
    id: "Cyber-atteintes à la réputation",
    label: "reput",
    value: 705,
  },
  {
    id: "Darknet",
    label: "dark",
    value: 2,
  },
];

export default function Prevenu() {
  return (
    <>
      <h1>Prévenus</h1>
        <p>Nombre de prévenus total en fonction de la classe de crimes
        </p>
        <p>
          Total: 5'481
        </p>
      <div style={{height: 500, width: 700}}>
        <ResponsivePie
          data={data}
          margin={{ top: 40, right: 190, bottom: 80, left: 190 }}
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
          colors={{ scheme: 'greens' }}
        />
        {/*<Myresponsivepie data={data}/> */}
      </div>
      <div>
      <Link href="/prevenuTotal">Total</Link>
        <span className="divider"></span>
      <Link href="/prevenuH">Hommes</Link>
        <span className="divider"></span>
      <Link href="/prevenuF">Femmes</Link>
        <span className="divider"></span>
        <Link href="/prevenuPM">Personnes Morales</Link>
      </div>
      <p2>
        <br></br>
        <br></br>
        Tirés des statistiques de l'OFS <a href="https://www.bfs.admin.ch/bfs/fr/home/statistiques/criminalite-droit-penal/police/criminalite-numerique.assetdetail.16264090.html">(source)</a> concernant la criminalité numérique
      </p2>
    </>
  );
}
