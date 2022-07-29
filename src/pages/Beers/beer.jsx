import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

export default function Beer() {
  const { id } = useParams()
  
  const [beer, setBeer] = useState([]);

  const fetchAPI = `https://api.punkapi.com/v2/beers/${id}`

  useEffect(() => {
    fetch(fetchAPI)
      .then(res => {
        return res.json()
      }).then((data) => {
        setBeer([data[0]])
      });
  }, []);

  return (
    <>
      <div className="home">
        <div className="container">
          <div className="row align-items-center my-5">
            <div className="col-lg-5"></div>
            <div className="container mt-4" >
              <div className="row">
                {
                  beer.map(({
                    id, name, description, image_url
                  }) => {
                    return (
                      <div className='beer-page' key={id}>
                        <div className=''>
                          <img className='img-sg-beer' src={image_url} alt=""></img>
                        </div>
                        <aside className=''>
                          <h1 className="font-weight-light">{name}</h1>
                          <p>{description}</p>
                        </aside>
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