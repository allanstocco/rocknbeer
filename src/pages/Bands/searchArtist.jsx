import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function SearchArtist() {

    const { str } = useParams()

    const [artist, setSearchArtist] = useState([]);

    const fetchAPI = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${str}&api_key=47e8b99b74bb4160f7a429614b9b544e&format=json`

    useEffect(() => {
        fetch(fetchAPI)
            .then(res => {
                return res.json()
            }).then((data) => {
                const artistsData = data.results.artistmatches.artist.map((d) => {
                    return d
                })
                setSearchArtist(artistsData)
            });
    }, []);

    return (
        <>
            <div className="home">
                <div className="container">
                    <div className="row align-items-center my-5">
                        <h1 className="font-weight-light text-center">Bands</h1>
                        <div className="container mt-4" >
                            <div className="row d-flex justify-content-around">
                                {
                                    artist.map(({
                                        name, url
                                    }) => {
                                        return (
                                            <div className="col-auto mb-3" key={name}>
                                                <div className="card" >
                                                    <div className="card-body">
                                                        <h4 className="card-title rock"><b>{name}</b></h4>
                                                        <p><b><a href={url}>Check it out!</a></b></p>
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
