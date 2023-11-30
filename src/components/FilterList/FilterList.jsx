import './FilterList.scss';
import filter_icon from '../../images/filter_icon.svg';
import CustomInputSearch from '../CustomInputSearch/CustomInputSearch';

export default function FilterList () {
    return (
        <section className='filterWrapper'>
            <span className='filterWrapper__title'>
            Фильтры
            <img src='filter_icon' alt=""/>
            </span>

            <div className='filterWrapper__container'>
                <CustomInputSearch 
                label="Город" value="Москва" id="search_input"
                />

<CustomInputSearch 
                label="Сфера деятельности" value="Строительство" id="search_input_activity"
                />
            </div>
        </section>
    )
}