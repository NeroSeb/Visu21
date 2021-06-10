import * as React from "react";
import { Router, Link } from "wouter";

export default function Home() {
  return (
    <div className="page">
      <h1 className="title">Lexique</h1>
      <h2>Définitions</h2>
      <p>
        <ul>
          <li>
            <b>Commerce illégal sur le Darknet : </b>Achat / Vente de produits
            et services illégaux sur le Darknet <br></br>
            (armes, stupéfiants, médicaments, marchandises volées, etc.).
          </li>
          <br></br>

          <li>
            <b>Cyber-atteinte à la réputation (business) : </b>Le fait de
            publier sur Internet des commentaires <br></br>
            négatifs, par exemple des allégations inexactes, fallacieuses ou
            inutilement blessantes, à l'endroit<br></br>
            des produits ou prestations d'un tiers.
          </li>
          <br></br>

          <li>
            <b>Cyberbullying/Cybermobbing : </b>Le fait de calomnier, d'humilier
            ou de harceler des personnes en <br></br>
            diffusant des textes, des images ou des vidéos diffamatoires à leur
            sujet.
          </li>
          <br></br>

          <li>
            <b>Cybersquatting : </b>Utilisation / Enregistrement de noms de
            domaine faciles à confondre avec<br></br>
            ceux de sites existants. Enregistrement de noms de domaine auxquels
            le titulaire ne peut pas<br></br>
            prétendre, ou qui sont très similaires à des noms d'entreprises,
            d'autorités, de marques ou <br></br>
            de personnes connues
          </li>
          <br></br>

          <li>
            <b>DDoS : </b>Attaque visant à surcharger un système informatique
            pour le rendre indisponible. Les <br></br>
            attaques DDoS (Distributed Denial of Service = déni de service) sont
            menées simultanément par <br></br>
            plusieurs ordinateurs.
          </li>
          <br></br>

          <li>
            <b>Grooming : </b>Le fait d'établir des contacts avec des enfants
            via Internet à des fins sexuelles, <br></br>
            par exemple dans des forums de discussion ou sur les réseaux
            sociaux. Certains malfaiteurs visent <br></br>
            une rencontre dans la vie réelle afin de se livrer à des actes
            sexuels avec la victime
          </li>
          <br></br>

          <li>
            <b>
              Hacking - Accéder dans un système informatique au moyen de codes
              d'accès externes :
            </b>{" "}
            Accéder <br></br>
            indument dans un système informatique au moyen de données d'accès
            externes, dans le but de <br></br>
            soutirer des données personnelles, ou d’en modifier le contenu à des
            fins frauduleuses ou <br></br>
            politico-religieuses (hacktivisme).
          </li>
          <br></br>

          <li>
            <b>Hacking - Pénétrer un système informatique de force : </b>Hacker
            un site web dans le but de voler <br></br>
            les données de la personne enregistrée ou inscrites sur les serveurs
            du site web ou d'en modifier <br></br>
            le contenu pour des raisons politico-religieuses (hacktivisme).
          </li>
          <br></br>

          <li>
            <b>Live Streaming : </b>Le fait de prendre part, via une webcam, à
            des actes d'ordre sexuel <br></br>
            des enfants. Le consommateur / instigateur communique ses souhaits,
            par exemple via un <br></br>
            forum de discussion, puis paie le montant demandé et visionne
            ensuite via une webcam les<br></br>
            abus commis sur des mineurs.
          </li>
          <br></br>

          <li>
            <b>Malware - Botnet :</b> Le terme "botnet" désigne un groupe
            d'ordinateurs qui ont été contaminés <br></br>
            par un ou plusieurs malwares. Un tel réseau d'ordinateurs compromis
            (aussi appelés des "zombies"<br></br>
            ou "bots"), contrôlé par les cybercriminels, peut être activé par
            ces derniers pour exécuter des<br></br>
            actions malveillantes.
          </li>
          <br></br>

          <li>
            <b>Malware - Cheval de Troie e-banking :</b> Un message s'affiche
            sur l'ordinateur (ou un autre <br></br>
            système informatique) qui alarme la victime que son ordinateur est
            infecté et qu'il s'agit <br></br>
            d'installer un programme pour remédier à cette situation.
          </li>
          <br></br>

          <li>
            <b>Malware - Ransomware : </b>Bloquer/Chiffrer un système
            informatique et demander une rançon.<br></br>
            Un Ransomware est un logiciel malveillant qui, une fois activé,
            chiffre les données de <br></br>
            l’ordinateur ou du smartphone de la victime et requiert une somme
            d’argent pour les déverrouiller.<br></br>
            Une autre version infecte et bloque l'ordinateur ou le smartphone
            (parfois aussi seulement le <br></br>
            navigateur). Il envoie alors une notification apparemment officielle
            exigeant de la victime le <br></br>
            paiement d'une amende en monnaie virtuelle, respectivement par le
            biais d’un moyen de paiement<br></br>
            électronique, pour débloquer le système informatique
          </li>
          <br></br>

          <li>
            <b>Malware - Rogueware/Scareware : </b>Un message s'affiche sur
            l'ordinateur (ou un autre système <br></br>
            informatique) qui alarme la victime que son ordinateur est infecté
            et qu'il s'agit d'installer <br></br>
            un programme pour remédier à cette situation.
          </li>
          <br></br>

          <li>
            <b>Malware - Spyware : </b>Infection d'un système informatique
            (ordinateur, smartphone, etc.) <br></br>
            par un logiciel malveillant permettant d’espionner les activités (p.
            ex. sites web consultés)<br></br>
            de l’utilisateur et transmettre les données ainsi obtenues à
            l’auteur via une connexion Internet.
          </li>
          <br></br>

          <li>
            <b>Money/package mules :</b> Le fait de faire transférer de l'argent
            ou des marchandises d'origine <br></br>
            criminelle par des tiers, pour la plupart recrutés sur Internet à
            travers de petites annonces <br></br>
            de travail à temps partiel (personnes qui transfèrent de l'argent
            d'un pays à l'autre : money <br></br>
            mules ; personnes qui acheminent des colis vers une autre
            destination : package mules)
          </li>
          <br></br>

          <li>
            <b>Phishing :</b> Rendre accessibles des données personnelles ou
            confidentielles de manière illicite
          </li>
          <br></br>

          <li>
            <b>Pornographie interdite : </b>Par pornographie interdite ou
            illégale, on entend des représentations <br></br>
            d'actes sexuels impliquant des enfants, des animaux et/ou de la
            violence. Sont interdites aussi <br></br>
            bien la fabrication, la diffusion et la possession de tels
            enregistrements que leur consommation <br></br>
            (interdiction absolue).
          </li>
          <br></br>

          <li>
            <b>Sextorsion (money) : </b>Action consistant à extorquer de
            l'argent à une personne au moyen de <br></br>
            photos de nu ou de vidéos sur lesquelles la victime se masturbe et à
            la menacer de publier la<br></br>
            vidéo sur YouTube ou de l'envoyer par exemple à ses amis sur
            Facebook
          </li>
          <br></br>

          <li>
            <b>Sextorsion (sexe) : </b>Le fait de menacer une personne de
            publier des photos de nu d'elle <br></br>
            afin d'obtenir d'autres images.
          </li>
          <br></br>

          <li>
            <b>Vol de crypto-monnaies : </b>Vol de cryptomonnaies sur une
            plate-forme d'échange ou dans un portefeuille<br></br>
            personnel. Vol d'un portefeuille physique.
          </li>
          <br></br>
        </ul>
      </p>
      <p>
        Les définitions mentionnées dans ce travail sont tirées de différents
        sources provenant de l'Office Fédéral de la Statistique(OFS)
      </p>
    </div>
  );
}
