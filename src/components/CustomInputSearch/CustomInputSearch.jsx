import './CustomInputSearch.scss';

export default function CustomInputSearch ({label, value, id}) {
    return (
        <label className='search__label' htmlFor={id}>
            {label}
            <input type='search' 
            className='search__input'
            id={id}
            defaultValue={value}
            />
        </label>
    )
}