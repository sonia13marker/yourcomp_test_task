import "./FilterList.scss";
import filter_icon from "../../images/filter_icon.svg";
import CustomInputSearch from "../CustomInputSearch/CustomInputSearch";
import CustomSelect from "../CustomSelect/CustomSelect";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";

export default function FilterList() {
  let convenience = ["Парковка", "Wi-fi в офисе", "Тренажерный зал"];
  let stuff = ["10", "20", "30", "50+"];
  return (
    <section className="filterWrapper">
      <span className="filterWrapper__title">
        Фильтры
        <img src={filter_icon} alt="" />
      </span>

      <div className="filterWrapper__container">
        <CustomInputSearch label="Город" value="Москва" id="search_input" />

        <CustomInputSearch
          label="Сфера деятельности"
          value="Строительство"
          id="search_input_activity"
        />

        <CustomSelect
          id="select_convenience"
          placeholder="Парковка"
          values={convenience}
          label="Удобства"
        />

        <span className="filterWrapper__container__check">
          <p className="filterWrapper__container__check__title">
            График работы
          </p>
          <span className="filterWrapper__container__check__wrapper">
            <CustomCheckbox id="gr1_checkbox" label="Полный день" />
            <CustomCheckbox id="gr2_checkbox" label="Неполный день" />
            <CustomCheckbox id="gr3_checkbox" label="Сменный" />
            <CustomCheckbox id="gr4_checkbox" label="Работа из дома" />
          </span>
        </span>

        <CustomSelect
          id="select_stuff"
          placeholder="Кол-во сотрудников"
          values={stuff}
          label="Кол-во сотрудников"
        />

        <span className="filterWrapper__container__check">
          <p className="filterWrapper__container__check__title">Оценки</p>
          <span className="filterWrapper__container__check__wrapper">
            <CustomCheckbox id="gr11_checkbox" label="С оценками" />
            <CustomCheckbox id="gr12_checkbox" label="Без оценок" />
          </span>
        </span>

        <span className="filterWrapper__container__check">
          <p className="filterWrapper__container__check__title">Фото</p>
          <span className="filterWrapper__container__check__wrapper">
            <CustomCheckbox id="gr21_checkbox" label="С фото" />
            <CustomCheckbox id="gr12_checkbox" label="Без фото" />
          </span>
        </span>
      </div>
    </section>
  );
}
