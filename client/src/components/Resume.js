import React from "react";

const Resume = () => {
  return (
    <div className="resume">
      <h1>Formation</h1>

      <div className="cv">
        <img src="/images/barre.svg" alt="barre" className="barre" />
        <div className="notes">
          <div className="infor f1">
            <h2>Formation full-stack js ( Aout -Decembre 2021)</h2>
            <h3>Gomycode :hackerspace Gabes</h3>
            <p>Créer des sites web et site vitrine sur WordPress</p>
            <p>Réaliser des pages web avec HTML et CSS</p>
            <p>
              Etablir une stratégie de marketing digitale et faire une fiche
              publicitaire sur Facebook d'un produit.
            </p>
            <p>Elaborer un monoboard personnel.</p>
          </div>
          <div className="infor f2">
            <h2>Bootcamp get into tech ( Juin -juillet 2021)</h2>

            <h3>Inco-academy et Minassa</h3>
            <p>Créer des sites web et site vitrine sur WordPress</p>
            <p>Réaliser des pages web avec HTML et CSS</p>
            <p>
              Etablir une stratégie de marketing digitale et faire une fiche
              publicitaire sur Facebook d'un produit.
            </p>
            <p>Elaborer un monoboard personnel.</p>
          </div>
          <div className="infor f3">
            <h2>
              Diplome d'ingenieur national en hydaulique et amenagement
              -specialité CES (2012)
            </h2>

            <h3>
              Ecole Supérieure des Ingénieurs de l'Equipement Rural, Medjz Elbab
              (Tunisie)
            </h3>
          </div>
          <div className="infor f4">
            <h2>Baccaleaureat sientifique: science experimentale (2007) </h2>

            <h3> Lycée Pilote Gabes (Tunisie) </h3>
          </div>
        </div>
      </div>

      <div className="download">
        <button>Download CV</button>
      </div>
    </div>
  );
};

export default Resume;
