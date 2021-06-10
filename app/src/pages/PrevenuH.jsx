import * as React from "react";
import { animated } from "react-spring";
import { Link } from "wouter";
import { ResponsivePie } from "@nivo/pie";

const data = [
  {
    id: "Cybercriminalité économique",
    label: "Economique",
    value: 1737,
    color: "hsl(120, 30%, 40%)"
  },
  {
    id: "Cyber-délits sexuels",
    label: "sexu",
    value: 1748,
    color: "hsl(120, 50%, 50%)"
  },
  {
    id: "Cyber-atteintes à la réputation &",
    label: "reput",
    value: 465,
    color: "hsl(100, 60%, 50%)"
  },
  {
    id: "Darknet",
    label: "dark",
    value: 2,
    color: "hsl(73, 70%, 50%)"
  }
];
export default function PrevenuH() {
  return (
    <>
      <h1>Prévenus Hommes</h1>
      <p>Nombre de prévenus hommes en fonction de la classe de crimes</p>
      <p>Total: 3'932</p>
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
