import React,{useState,useEffect}from 'react'
import './List.css'
import axios from '../../axios'
import { romance } from '../../Urls/urls'
import { POSTER_URL } from '../../Constants/constants'

function List() {

    const [movies,setMovies] = useState([])
        useEffect(() => {
            axios.get(`${romance}`).then(response=>{
            setMovies(response.data.results)
        });
    },[])
    return (
        <div className="myLists">
            <h1>Romance</h1>
            <div className="Lists">
                {
                    movies.map((obj)=>{
                        return(
                            <div className="List">
                                <img src={POSTER_URL + obj.poster_path} alt="Poster" />
                                {/* <span className="overlay">{obj ? obj.name||obj.title : ""}</span> */}
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default List