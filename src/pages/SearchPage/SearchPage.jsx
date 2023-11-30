import FilterList from "../../components/FilterList/FilterList";
import "./SearchPage.scss";
import search_icon from "../../images/search_icon.svg";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import expand from "../../images/expand_icon.svg";
import no_expand from "../../images/unexpand_icon.svg";
import { useState } from "react";

export default function SearchPage() {
  const [isExpand, setIsExpand] = useState(false);

  const handleExpand = () => {
    setIsExpand(!isExpand);
  };
  return (
    <section className="searchPage">
      <section className="searchPage__wrapper">
        <FilterList />

        <div className="searchPage__wrapper__resultWrapper">
          <span className="searchPage__wrapper__resultWrapper__searchBar">
            <label className="searchPage__wrapper__resultWrapper__searchBar__label">
              <img
                src={search_icon}
                alt="search icon"
                className="searchPage__wrapper__resultWrapper__searchBar__label__image"
              />
              <input
                type="search"
                id="searchPage_search"
                defaultValue="Строительная компания в Москве"
                className="searchPage__wrapper__resultWrapper__searchBar__input"
              />
            </label>
            <p className="searchPage__wrapper__resultWrapper__searchBar__text">
              Найдено <span>31</span> результатов
            </p>
          </span>

          <CustomSelect
            label="Сортировка:"
            placeholder="По популярности"
            id="select_sort"
            customStyle={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "15px",
              color: "black",
            }}
          />

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
              frameborder="0"
              className={
                isExpand
                  ? "searchPage__wrapper__resultWrapper__cardWrapper__map bigMap"
                  : "searchPage__wrapper__resultWrapper__cardWrapper__map"
              }
            ></iframe>
          </div>
        </div>
      </section>
    </section>
  );
}
