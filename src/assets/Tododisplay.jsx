import React from 'react'

function Tododisplay(props) {
  return (
    <div>
        <li className='d-flex fs-3 justify-content-evenly p-3 list-unstyled'>
            <p className='text-primary'>{props.item}</p>
            <i className="fa-solid fa-trash text-danger"
            onClick={()=>props.deletetask(props.i)}></i>
        </li>
    </div>
  )
}

export default Tododisplay
