import FilterList from "../../components/FilterList/FilterList";
import "./SearchPage.scss";
import search_icon from "../../images/search_icon.svg";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import CardsList from "../../components/CardsList/CardsList";
import cards from "../../data/company.json";
import MapComponent from "../../components/MapComponent/MapComponent";
import BackToTopBtn from "../../components/BackToTopBtn/BackToTopBtn";

export default function SearchPage() {
  return (
    <section className="searchPage">
      <section className="searchPage__wrapper">
        <FilterList />

        <BackToTopBtn />

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

          <MapComponent />

          <div className="searchPage__wrapper__resultWrapper__cardsContainer">
            <CardsList cards={cards} />
          </div>
        </div>
      </section>
    </section>
  );
}
