import "./HotelCard.css"

export const HotelCard = ({hotel}) => {

  const { _id, name, image, state, rating, price, address } = hotel;

  return (


    <div key={_id} className="relative card-container d-flex cursor-pointer shadow">
   

        <img className="img" src={image} alt={name} />

        <div className="hotel-details">
          <div className="locandRating d-flex align-center" >
            <span className="location" >{address},{state} </span>
                 <span className="rating d-flex align-center" >
                      <span className="material-icons-outlined">star</span>
                      <span>{rating}</span>
                 </span>
          </div>
         <p className="ptag" >{name}</p>
        <p className="price d-flex align-center ptag">
          <span className="money" >Rs.{price}</span>
          <span>night</span>
        </p>
      </div>

     
        <button className="button btn-wishlist absolute">
       
          <span className="material-icons-outlined">favorite</span>
        </button>

      </div>
   
  )
}
