import './CardsList.scss';
import { v4 } from "uuid";
import CardComponent from '../CardComponent/CardComponent';

export default function CardsList ({cards}) {
    let customId = v4();
     console.log(cards);
    return(
        <div className='imagesList'>
            {
                cards.map((card) => 
                <CardComponent {...card} key={Math.random(customId)}/>
                )
            }

        </div>
    )
}