import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
  // changement de l'orientation du signe pour affiche dans l'ordre décroissant
    new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
  );
  const nextCard = () => {
    
    // Ajout condition pour gérer l'erreur console (byDateDesc.lenght : undefined)
    if (byDateDesc) {
    setTimeout(
      // ajout de -1 car il n'y a que 3 images (0 1 2)
      () => setIndex(index < byDateDesc.length - 1 ? index + 1 : 0),
      5000
    );}
  };
  useEffect(() => {
    nextCard();
  });
  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        // modif de la place de la key
        <div key={event.title}>
          <div
            className={`SlideCard SlideCard--${index === idx ? "display" : "hide"
              }`}>
            {/* Ajout d'un alt unique */}
            <img src={event.cover} alt={event.title} />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {/* Modification des param et de la key (key reste fixe, pas de key unique, erreur console) */}
              {byDateDesc.map((bulletPoint, radioIdx) => (
                <input
                  key={`radio-${bulletPoint.title}`}
                  type="radio"
                  name="radio-button"
                  // index à la place de idx pour associer l'index au radioIdx
                  checked={index === radioIdx}
                  // ajout readOnly pour gérer erreur console : checked without onChange
                  readOnly
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;