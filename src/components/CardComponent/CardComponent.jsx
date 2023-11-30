import "./CardComponent.scss";
import no_image from "../../images/no_image.png";
import place from "../../images/place_icon.svg";
import parking_icon from "../../images/parking_icon.svg";
import wifi_icon from "../../images/wifi_icon.svg";
import gym_icon from "../../images/gym_icon.svg";
import StarComponent from "../StarComponent/StarComponent";

export default function CardComponent({
  name,
  stars,
  feedback,
  description,
  address,
  image,
  wifi,
  parking,
  gym,
  recommended,
  center,
}) {
  return (
    <div className="card">
      <span className="card__cardWrapper">
        {recommended ? (
          <span className="card__cardWrapper__badge blueBadge">
            Мы рекомендуем
          </span>
        ) : (
          <></>
        )}
        {center ? (
          <span className="card__cardWrapper__badge greenBadge">
            15 минут до центра{" "}
          </span>
        ) : (
          <></>
        )}

        {image ? <img src={image} alt="" /> : <img src={no_image} alt="" />}
      </span>

      <div className="card__infoBlock">
        <h3 className="card__infoBlock__name">{name}</h3>

        <span className="card__infoBlock__feedbackWrapper">
          <span>
            <StarComponent rating={stars}/>
            {stars}
            {` (${feedback} отзывов)`}
          </span>
        </span>

        <p className="card__infoBlock__desc">{description}</p>

        <span className="card__infoBlock__placeWrapper">
          <img src={place} alt="" />
          <p className="card__infoBlock__placeWrapper__address">{address}</p>
        </span>

        <span className="card__infoBlock__convenience">
          {wifi ? (
            <span className="card__infoBlock__convenience__item">
              <img src={wifi_icon} alt="" />
              <p className="card__infoBlock__placeWrapper__text">
                Wi-fi в офисе
              </p>
            </span>
          ) : (
            <></>
          )}

          {parking ? (
            <span className="card__infoBlock__convenience__item">
              <img src={parking_icon} alt="" />
              <p className="card__infoBlock__placeWrapper__text">Парковка</p>
            </span>
          ) : (
            <></>
          )}

          {gym ? (
            <span className="card__infoBlock__convenience__item">
              <img src={gym_icon} alt="" />
              <p className="card__infoBlock__placeWrapper__text">
                Тренажерный зал
              </p>
            </span>
          ) : (
            <></>
          )}
        </span>
      </div>

      <span className="card__actionBlock">
        <button className="card__actionBlock__action">Посмотреть</button>

        <a href="#" className="card__actionBlock__link">
          Перейти на сайт
        </a>
      </span>
    </div>
  );
}
