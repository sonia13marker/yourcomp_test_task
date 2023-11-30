import FilterList from '../../components/FilterList/FilterList';
import './SearchPage.scss';
import search_icon from '../../images/search_icon.svg';

export default function SearchPage () {
    return(
        <section className='searchPage'>

            <section className='searchPage__wrapper'>
                <FilterList />

                <div className='searchPage__wrapper__resultWrapper'>

                    <span className='searchPage__wrapper__resultWrapper__searchBar'>
                        <label className='searchPage__wrapper__resultWrapper__searchBar__label'>
                            <img src={search_icon} alt="search icon"
                            className='searchPage__wrapper__resultWrapper__searchBar__label__image'
                            />
                            <input type='search' id="searchPage_search" defaultValue="Строительная компания в Москве" 
                            className='searchPage__wrapper__resultWrapper__searchBar__input'
                            />
                        </label>
                        <p className='searchPage__wrapper__resultWrapper__searchBar__text'>
                        Найдено <span>31</span> результатов
                        </p>
                        
                    </span>

                </div>
            </section>


        </section>
    )
}