import * as React from "react";
import { animated } from "react-spring";
import { Link } from "wouter";
import { ResponsiveBar } from "@nivo/bar";

const data = [
  {
    menace: "Phishing",
    Elucidation: 9.3,
    ElucidationColor: "hsl(500, 70%, 50%)"
  },
  {
    menace: "Hacking : Pénétrer un système informatique de force",
    Elucidation: 14.4,
    ElucidationColor: "hsl(74, 70%, 50%)"
  },
  {
    menace: "Hacking : Accès avec codes d'accès externes",
    Elucidation: 21.5,
    ElucidationColor: "hsl(245, 70%, 50%)"
  },
  {
    menace: "Malware : Ransomware",
    Elucidation: 1.8,
    ElucidationColor: "hsl(328, 70%, 50%)"
  },
  {
    menace: "Cyber-escroquerie",
    Elucidation: 37.6,
    ElucidationColor: "hsl(12, 70%, 50%)"
  },
  {
    menace: "Money/package mules",
    Elucidation: 54.6,
    ElucidationColor: "hsl(335, 70%, 50%)"
  },
  {
    menace: "Sextorsion (Money)",
    Elucidation: 6.8,
    ElucidationColor: "hsl(325, 70%, 50%)"
  },
  {
    menace: "Pornographie interdite",
    Elucidation: 96.8,
    ElucidationColor: "hsl(335, 70%, 50%)"
  },
  {
    menace: "Grooming",
    Elucidation: 80,
    ElucidationColor: "hsl(335, 70%, 50%)"
  },
  {
    menace: "Sextorsion (sexe)",
    Elucidation: 49.5,
    ElucidationColor: "hsl(335, 70%, 50%)"
  },
  {
    menace: "Cyber-atteinte à la réputation",
    Elucidation: 55.1,
    ElucidationColor: "hsl(335, 70%, 50%)"
  },
  {
    menace: "Cyberbullying/mobbing",
    Elucidation: 76.7,
    ElucidationColor: "hsl(335, 70%, 50%)"
  }
];

const theme = {
  axis: {
    fontSize: "20px",
    tickColor: "#ffff00",
    ticks: {
      line: {
        stroke: "#555555"
      },
      text: {
        fill: "#ffffff"
      }
    },
    legend: {
      text: {
        fill: "#aaaaaa"
      }
    }
  },
  grid: {
    line: {
      stroke: "#555555"
    }
  }
};
export default function Taux() {
  return (
    <>
      <h1>Taux d'élucidation</h1>
      <p>Pourcentage d'élucidation en fonction de la classe de crimes</p>
      <div style={{ height: 600, width: 700 }}>
        <ResponsiveBar
          data={data}
          keys={["Elucidation"]}
          indexBy="menace"
          margin={{ top: 60, right: 80, bottom: 100, left: 50 }}
          padding={0.4}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "greens" }}
          colorBy="index"
          theme={theme}
          borderWidth={2}
          borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 15,
            tickPadding: 5,
            tickRotation: 15
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Pourcentage",
            legendPosition: "middle",
            legendOffset: -40,
            legendColor: "#3af900"
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 100,
              itemDirection: "left-to-right",
              itemOpacity: 0,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </div>
      <p2>
        <br></br>
        <br></br>
        Tirés des statistiques de l'OFS{" "}
        <a href="https://www.bfs.admin.ch/bfs/fr/home/statistiques/criminalite-droit-penal/police/criminalite-numerique.html">
          (source)
        </a>{" "}
        concernant la criminalité numérique
      </p2>
    </>
  );
}
