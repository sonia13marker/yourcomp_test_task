import { useState } from "react";
import expand from "../../images/expand_icon.svg";
import no_expand from "../../images/unexpand_icon.svg";

export default function MapComponent () {

    const [isExpand, setIsExpand] = useState(false);

    const handleExpand = () => {
      setIsExpand(!isExpand);
    };
    return (
        <div className="searchPage__wrapper__resultWrapper__cardWrapper">
        <div className="expandBadge" onClick={handleExpand}>
          {isExpand ? (
            <>
              <img src={no_expand} alt="Свернуть карту" />
              <p className="expandBadge__p">Свернуть карту</p>
            </>
          ) : (
            <>
              <img src={expand} alt="Расширить карту" />
              <p className="expandBadge__p">Расширить карту</p>
            </>
          )}
        </div>
        <iframe
          title="Карта компаний"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A6b49546ae2f96a24a482358df2e5f069cc8f908a6d9a63a964705c08d7edadb9&amp;source=constructor"
          frameBorder="0"
          className={
            isExpand
              ? "searchPage__wrapper__resultWrapper__cardWrapper__map bigMap"
              : "searchPage__wrapper__resultWrapper__cardWrapper__map"
          }
        ></iframe>
      </div>
    )
}