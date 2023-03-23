import React from 'react'
import reactSvg from '../assets/react.svg'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="px-4 py-5 my-5 text-center">
            <img className="d-block mx-auto mb-4" src={reactSvg} alt="React" width="72" height="57" />
            <h1 className="display-5 fw-bold">Home</h1>
            <div className="col-lg-6 mx-auto">
                <p className="mb-4 fw-bold">This boilerplate include Bootstrap, React Bootstrap, React Router Dom, & React Icons.</p>
                <p className='mb-4 fw-semibold text-bg-warning'>Please click on the About button to check if router is works.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" className="btn btn-primary btn-lg px-4 gap-3"><Link className='text-light text-decoration-none' to='/'>Home</Link></button>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4"><Link className='text-black text-decoration-none' to='/about'>About</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Home