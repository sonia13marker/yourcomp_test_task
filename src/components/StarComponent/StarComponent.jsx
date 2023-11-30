import EmptyStar from '../../images/icons/EmptyStar';
import FillStar from '../../images/icons/FillStar';
import half from '../../images/halfstar.svg';

export default function StarComponent ({rating}) {
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);
  
  return (
    <div className="star-rating">
      {[...Array(filledStars)].map((_, index) => (
        <FillStar key={index}/>
      ))}
      {halfStar && <img src={half} alt="" />}
      {[...Array(emptyStars)].map((_, index) => (
        <EmptyStar key={index}/>
      ))}
    </div>)
}