import * as React from "react";
import { animated } from "react-spring";
import { Link } from "wouter";
import { ResponsivePie } from "@nivo/pie";

const data = [
  {
    id: "Crimes économiques",
    label: "Economique",
    value: 1772,
    color: "hsl(169, 90%, 40%)"
  },
  {
    id: "Atteintes à la réputation",
    label: "reput",
    value: 64,
    color: "hsl(158, 40%, 50%)"
  },
];

export default function Leses() {
  return (
    <>
      <h1>Personnes Morales Lésées</h1>
      <p>
        Nombre de personnes morales lésées en fonction de la classe de crimes
      </p>
      <p>Total: 1'834</p>
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
