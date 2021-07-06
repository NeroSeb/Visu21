import * as React from "react";
import { animated } from "react-spring";
import { Link } from "wouter";
import { ResponsivePie } from "@nivo/pie";

const data = [
  {
    id: "Cybercriminalité économique",
    label: "Economique",
    value: 886,
    color: "hsl(145, 70%, 50%)"
  },
  {
    id: "Cyber-délits sexuels",
    label: "sexu",
    value: 208,
    color: "hsl(160, 50%, 50%)"
  },
  {
    id: "Cyber-atteintes à la réputation",
    label: "reput",
    value: 239,
    color: "hsl(166, 70%, 50%)"
  },
];
export default function PrevenuF() {
  return (
    <>
      <h1>Prévenus Femmes</h1>
      <p>Nombre de prévenus femmes en fonction de la classe de crimes</p>
      <p>Total: 1'329</p>
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
        <Link href="/prevenuTotal">Total</Link>
        <span className="divider"></span>
        <Link href="/prevenuH">Hommes</Link>
        <span className="divider"></span>
        <Link href="/prevenuF">Femmes</Link>
        <span className="divider"></span>
        <Link href="/prevenuPM">Personnes Morales</Link>
      </div>
    </>
  );
}
