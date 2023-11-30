import './CustomCheckbox.scss';

export default function CustomCheckbox ({id, label}) {
    return(
        <span className='checkbox__wrapper'>
            <input type="checkbox" 
        //onChange={checkedFunc}
        id={id}
        className='checkbox'
       />
       <label
            htmlFor={id}
            className="checkbox__label"
          >
            {label}
            </label>
        </span>
    )
}