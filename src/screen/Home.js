import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
// import Login from './Login'
// import courses from './courses/courses'
import Courses1 from './courses/Courses1'
import Navbas from '../components/Navbas'
import Footer from '../components/Footer'
// import Card from '../components/Card'
import Main from './Main/Main'
// import './Home.css' 
// import Carousel from '../components/Carousel'

export default function Home() {
    // const [search,setSearch]=useState('');
    // const [foodcategory, setFoodCat] = useState([]);
    // const [food_items, setFooditem] = useState([]);

    // const loadData = async () => {
    //     let response = await fetch("/foodData", {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    //     response = await response.json();

    //     // console.log(response[0],response[1])
    //     setFooditem(response[0])
    //     setFoodCat(response[1]);
    // }
    // useEffect(() => {
    //     loadData()
    // }, [])






    return (
        <div>
            <div><Navbas></Navbas></div>
            {/* <div><Login></Login></div> */}
            <div><Main></Main></div>
            {/* <div><Courses1></Courses1></div> */}
            
            
            
            



            <div><Footer></Footer></div>

        </div>
    )
}
