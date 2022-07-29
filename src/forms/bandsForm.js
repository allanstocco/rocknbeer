import React, { useState } from 'react'

export default function BandsForm(props) {

    const [artist, setArtist] = useState('')

    function handleChange(e) {
        setArtist(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(artist)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label className="col-form-label" htmlFor="artist">Change Whole Thing!</label>
                    </div>
                    <div className="col-auto">
                        <input type="text" id="artist" value={artist} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary">Go</button>
                    </div>
                </div>
            </form>
        </>
    )
}
