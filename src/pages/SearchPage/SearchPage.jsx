import FilterList from '../../components/FilterList/FilterList';
import Header from '../../components/Header/Header';
import './SearchPage.scss';

export default function SearchPage () {
    return(
        <>
            <Header />

            <section className='searchWrapper'>
                <FilterList />
            </section>


        </>
    )
}