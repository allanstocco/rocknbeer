import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";


export default function TopTrack() {
  const { str } = useParams()

  const [topTracks, setTopTracks] = useState([])

  const fetchAPI = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${str}&api_key=47e8b99b74bb4160f7a429614b9b544e&format=json`

  useEffect(() => {
    fetch(fetchAPI)
      .then(res => {
        return res.json()
      }).then((data) => {
        setTopTracks(data.toptracks.track)
      });
  }, [fetchAPI]);

  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-5"></div>
          <h1 className="font-weight-light">{str}</h1>
          <h3>Top Tracks Ever!</h3>
          <div className="container mt-4" >
            <div className="row">
              {
                topTracks.map(({
                  name, url
                }) => {
                  return (
                    <div key={name}>
                      <p><b><a href={url}>{name}</a></b></p>
                    </div>
                  )
                })
              }
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
