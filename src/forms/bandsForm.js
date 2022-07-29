import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function BandsForm(props) {

    const [artist, setArtist] = useState('')

    function handleChange(e) {
        setArtist(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        artist ? props.onSubmit(artist) : props.onSubmit('ledzeppelin')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row g-3 align-items-center justify-content-center">
                    <div className="col-auto">
                        <label className="col-form-label" htmlFor="artist">Change Whole Thing!</label>
                    </div>
                    <div className="col-auto">
                        <input type="text" id="artist" value={artist} onChange={handleChange} className="form-control" placeholder='search relatives or artists' />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-light">Go Relatives</button>
                    </div>
                    <div className="col-auto">
                        <Link to={artist ? `/bands/artist/${artist}` : ''} className="btn btn-light">Go Artist</Link>
                    </div>
                </div>
            </form>
        </>
    )
}
