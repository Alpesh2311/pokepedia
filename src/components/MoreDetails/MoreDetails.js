import React from "react";
import "./MoreDetails.css";
import { FaXmark } from "react-icons/fa6";
import { useDetails } from "../../MoreDetailsContext";

function MoreDetails({ closeMoreDetails }) {
  const { detailsData, isDetailsVisible, hideDetails } = useDetails();

  function handleClose() {
    closeMoreDetails(false);
    hideDetails();
  }

  function titleCase(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  if (!isDetailsVisible || !detailsData) return null;
  return (
    <div className="more-details">
      <img src={detailsData.sprites.front_default} alt="" />
      <p className="poke-name">{titleCase(detailsData.name)}</p>
      <div className="details">
        <div className="types">
          <h3>Types</h3>
          <div className="item-types">{detailsData.types ? detailsData.types.map((item) => <p key={item.slot}>{titleCase(item.type.name)}</p>) : null}</div>
        </div>
        <div className="abilities">
          <h3>Abilities</h3>
          <div className="item-abilities">{detailsData.abilities ? detailsData.abilities.map((item, index) => <p key={index}>{titleCase(item.ability.name)}</p>) : null}</div>
        </div>
        <div className="stats">
          <h3>Stats</h3>
          <div className="item-stats">
            {detailsData.stats
              ? detailsData.stats.map((item, index) => (
                  <p key={index}>
                    <span>{titleCase(item.stat.name)}</span> : {item.base_stat}
                  </p>
                ))
              : null}
          </div>
        </div>
      </div>
      <FaXmark className="close" onClick={handleClose} size={25} />
    </div>
  );
}

export default MoreDetails;
