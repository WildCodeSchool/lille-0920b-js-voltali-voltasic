import React from "react";
import "./Aboutus.css";

const AboutUs = () => {
  return (
    <div className="content-main">
      <h1>Qui somme nous ?</h1>
      <div className="container-col">
        <div className="first-col">
          <p>
            Avec Voltasic, retrouvez la musique adaptée à chaque moment, sur
            mobile, ordinateur, tablette et plus encore.
          </p>
          <p>
            Voltasic compte des millions de titres. Pour une soirée, une séance
            de sport ou un moment de détente, la musique qu'il vous faut est à
            portée de main.
          </p>
          <p>
            Recherchez les titres de votre choix ou laissez Voltasic choisir
            pour vous. Vous pouvez aussi découvrir les playlists de vos amis,
            d'artistes et de célébrités. Sinon, lancez une station de radio et
            détendez-vous.
          </p>
          <p>
            Mettez votre vie en musique avec Voltasic. Abonnez-vous ou écoutez
            gratuitement.
          </p>
          <h2>Support client</h2>
          <p>En développement...</p>
        </div>

        <div className="second-col">
          <h2>Siège de Voltasic</h2>
          <ul>
            <li>
              <strong>Voltasic AB</strong>
            </li>
            <li>4 Avenue des Saules</li>
            <li>Bâtiment Le Doge</li>
            <li>59000, Lille</li>
            <li>France</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
