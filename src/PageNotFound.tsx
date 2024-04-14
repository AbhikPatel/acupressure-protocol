import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  
    const navigate = useNavigate();
  
    return (
    <div className="h-100 flex-column d-flex justify-content-center align-items-center">
        <h4 className='mb-3'> Oops 404! Page not found </h4>
        <button className='btn btn-outline-primary' type='button' onClick={() => navigate('/')}> Return to home </button>
    </div>
  )
}

export default PageNotFound