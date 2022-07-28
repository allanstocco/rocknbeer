import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Beers = () => {

    const [beers, setBeers] = useState([]);

    async function getBeers() {
        const fetchAPI = "https://api.punkapi.com/v2/beers"
        try {
            const response = await fetch(fetchAPI)
            const data = await response.json()
            const beerData = data.map((d) => {
                return d
            })
            setBeers(beerData)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getBeers()
    }, [])

    return (
        <>
            <div className="home">
                <div className="container">
                    <div className="row align-items-center my-5">
                        <div className="col-lg-5"></div>
                        <h1 className="font-weight-light">Beers</h1>
                        <div className="container mt-4" >
                            <div className="row d-flex justify-content-around">
                                {
                                    beers.map(({
                                        id, name, image_url, first_brewed, abv
                                    }) => {
                                        return (
                                            <Link className="col-auto mb-3" to={`${id}`} key={id}>
                                                <div className="card">
                                                    <img src={image_url} alt="" className="card-img-top mt-2" />
                                                    <div className="card-body">
                                                        <h4 className="card-title"><b>{name}</b></h4>
                                                        <p><b>First Brewed: {first_brewed}</b></p>
                                                        <p><b>{abv}%</b></p>
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Beers



