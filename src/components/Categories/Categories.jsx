import axios from "axios";
import { useEffect, useState } from "react";
import "./Categories.css"
import { useCategory } from "../../Context";


export const Categories = () => {

  const [categories, setCategories] = useState([]);
  const [numberOfCategoryToShow, setNumberOfCategoryToShow] = useState(0);

  const {hotelCategory, setHotelCategory } = useCategory();

  const handleShowMoreRightClick = () => {

    setNumberOfCategoryToShow(prev => prev + 11)
  }

  const handleShowMoreLeftClick = () => {
    setNumberOfCategoryToShow(prev => prev - 11);
  }

  const handleCategoryClick = (category) => {

    setHotelCategory(category)
    console.log(category);

  }
  // console.log("hotelCategory :", hotelCategory);

  useEffect(() => {
    (async () => {
      try {

        const { data } = await axios.get(
          " https://travel-app-backend-0d3j.onrender.com/api/category"
        );
        const categoryData = data.data;
        // console.log(categoryData);
        const categoriesToShow = categoryData.slice
          (numberOfCategoryToShow + 11 > categoryData.length ? categoryData.length - 11 : numberOfCategoryToShow,
            numberOfCategoryToShow > categoryData.length 
            ? categoryData.length 
            : numberOfCategoryToShow + 11
          )

        setCategories(categoriesToShow);


      } catch (error) {
        console.log(error)
      }
    })()
  }, [numberOfCategoryToShow])


  return (
    <section className="category d-flex aling-center gap pointer" >
      {numberOfCategoryToShow >= 11 && (
        <button
          className="btn-category btn-left"
          onClick={handleShowMoreLeftClick}  >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>

      )
      }

      {categories && categories.map(({ _id, category }) =>
        <span 
         className= {`${ category === hotelCategory ? "border-bottom" : "" }` }
         key={_id} 
         onClick={()=> handleCategoryClick(category)} >{category}</span>)}
      {
        numberOfCategoryToShow - 11 < categories.length && (

          <button
            className="btn-category btn-right"
            onClick={handleShowMoreRightClick}>
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        )
      }

    </section>
  )
}