import data from "../../products";
import Card from "./Card";
//to use aos libary
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function App() {
    useEffect(() => {
        AOS.init();
      }, [])
    const card = data.map((info) => {
        return <Card
            //the unqiue id for the data a unqiue key prop
            key={info.id}
            //{/images/product-1.svg"}
            // it like this info is an object containig all the data in the data.js file
            //we then put info() inside our prop thus when we want to soruce the data 
            //we use prop.info."name of the data"
            //remember info is an object so we use dot notation to source our data from it
            info={info} //this contains all the data we need 


        //we can also use the spread operator to access the object 
        // {...info}
        //if you use this method remove all the .info we used in our card component
        />
    })
    return (
        <section className='card-1' >
            <div className="grid justify-between grid-cols-2 grid-rows-1 gap-5 py-10 mx-2 card-section md:mx-10 md:grid-cols-4 md:grid-rows-1 md:gap-10">
                {card}
            </div>
            

        </section>
    )
}
