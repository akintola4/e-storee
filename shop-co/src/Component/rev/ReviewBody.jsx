import reviewData from "../../reviews";
import Review from "./Review";

export default function App() {
    //this for the review data
    const review = reviewData.map(info => {
        return <Review
            //the unqiue id for the data a unqiue key prop
            key={info.id}
            //{/images/product-1.svg"}
            // it like this info is an object containig all the data in the data.js file
            //we then put info() inside our prop thus when we want to soruce the data 
            //we use prop.info."name of the data"
            //remember info is an object so we use dot notation to source our data from it
            reviewInfo={info.review}
            name={info.name}
            rating={info.stats.rating}
        //this contains all the data we need 


        //we can also use the spread operator to access the object 
        // {...info}
        //if you use this method remove all the .info we used in our review component
        />
    })
    return (
        <>
            {review}
        </>
    )
}
