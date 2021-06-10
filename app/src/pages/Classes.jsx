import * as React from "react";
import { animated } from "react-spring";
import { Link } from "wouter";
import { ResponsivePie } from "@nivo/pie";

const data = [
  {
    id: "Cybercriminalité économique",
    label: "Economique",
    value: 20544
  },
  {
    id: "Cyber-délits sexuels",
    label: "sexu",
    value: 2612
  },
  {
    id: "Cyber-atteintes à la réputation",
    label: "reput",
    value: 1240
  },
  {
    id: "Darknet",
    label: "dark",
    value: 2
  }
];

export default function Classes() {
  return (
    <>
      <h1>Classes de crimes</h1>
      <p>
        Les classes de crimes comportent:
        <ul>
          <li>Cybercriminalité économique</li>
          <li>Cyber-délits sexuels</li>
          <li>Cyber-atteintes à la réputation</li>
          <li>Crimes commis sur le Darknet</li>
        </ul>
      </p>
      <div style={{ height: 500, width: 700 }}>
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
          colors={{ scheme: "greens" }}
        />
        {/*<Myresponsivepie data={data}/> */}
      </div>
      <p2>
        Tirés des statistiques de l'OFS{" "}
        <a href="https://www.bfs.admin.ch/bfs/fr/home/statistiques/criminalite-droit-penal/police/criminalite-numerique.html">
          (source)
        </a>{" "}
        concernant la criminalité numérique
      </p2>
    </>
  );
}
