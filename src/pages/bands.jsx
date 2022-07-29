import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

export default function Bands() {
    const [bands, setBands] = useState([]);

    async function getBands() {
        const api_url = 'https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=LedZeppelin&api_key=47e8b99b74bb4160f7a429614b9b544e&format=json'
        try {
            const response = await fetch(api_url)
            const data = await response.json()
            const bandsData = data.similarartists.artist.sort((a, b) => a.name > b.name ? 1 : -1).map((d) => {
                return d
            })
            setBands(bandsData)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getBands()
    }, [])

    return (
        <>
            <div className="home">
                <div className="container">
                    <div className="row align-items-center my-5">
                        <h1 className="font-weight-light">Bands - Rock'n Roll</h1>
                        <div className="container mt-4" >
                            <div className="row d-flex justify-content-around">
                                {
                                    bands.map(({
                                        name, url
                                    }) => {
                                        return (
                                            <div className="col-auto mb-3" key={name}>
                                                <div className="card" >
                                                    <div className="card-body">
                                                        <h4 className="card-title rock"><b>{name}</b></h4>
                                                        <p><b><a href={url}>Check it out!</a></b></p>
                                                        <p><b><Link to={name.replace('/', ' ')}> Check Top Tracks!</Link></b></p>
                                                    </div>
                                                </div>
                                            </div>
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


