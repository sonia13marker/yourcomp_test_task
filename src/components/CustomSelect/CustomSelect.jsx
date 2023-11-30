import './CustomSelect.scss';
import values from '../../data/select_values.json';

export default function CustomSelect ({ id, placeholder}) {
    console.log(values)
    return (
        <>
        {
            values.map((item, index) => 
                <label key={index}
                className='select__label' htmlFor={id}>
                
                {item.name}
                <select
                className='select__wrapper'
                placeholder={placeholder}
                id={id}>

                
                {
                    item.values.map((val, id) => 
                    
                    <option value={val} key={id}
                     className='select__wrapper__item'>
                        {val}
                     </option>
            )
                }
                </select>
                </label>
  )
        }
</>


        // <label className='select__label' htmlFor={id}>
        //     {label}

        //     {
        //         <select
        //         className='select__wrapper'
        //     placeholder={placeholder}
        //     id={id}
        //         >
        //             {
        //         values.map((item) => 
                
        //                 item.values.map((val, index)=> 
        //                 <option value={val} key={ index}
        //             className='select__wrapper__item'></option>
        //                 )

        //         )
        //             }
        //         </select>
        //     }
        //     {/* <select className='select__wrapper'
        //     placeholder={placeholder}
        //     id={id}>
        //         {values.map((item) => 
        //             item.values.map((val, di) => {
        //             console.log(val);
        //             <option value={val} key={di}
        //             className='select__wrapper__item'></option>})
                
        //         )}

        //     </select> */}
        // </label>
    )
}