import * as React from "react";
import { animated } from "react-spring";
import { Link } from "wouter";
import { ResponsivePie } from "@nivo/pie";

const data = [
  {
    id: "Crimes économiques",
    label: "Economique",
    value: 5150,
    color: "hsl(145, 70%, 50%)"
  },
  {
    id: "Crimes sexuels",
    label: "sexu",
    value: 225,
    color: "hsl(160, 50%, 50%)"
  },
  {
    id: "Atteintes à la réputation",
    label: "reput",
    value: 465,
    color: "hsl(166, 70%, 50%)"
  },
  {
    id: "Darknet",
    label: "dark",
    value: 0,
    color: "hsl(73, 70%, 50%)"
  }
];

export default function Leses() {
  return (
    <>
      <h1>Femmes Lésées</h1>
      <p>Nombre de femmes lésées en fonction de la classe de crimes</p>
      <p>Total: 5'822</p>
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
          colors={{ datum: "data.color" }}
        />
        {/*<Myresponsivepie data={data}/> */}
      </div>
      <div>
        <Link href="/LesesTotal">Total</Link>
        <span className="divider"></span>
        <Link href="/LesesH">Hommes</Link>
        <span className="divider"></span>
        <Link href="/LesesF">Femmes</Link>
        <span className="divider"></span>
        <Link href="/LesesPM">Personnes Morales</Link>
      </div>
    </>
  );
}
