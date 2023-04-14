import React from 'react'
// import PropTypes from 'prop-types'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
const ServicesItem = (props) => {
  return (
 
        <li className="services__item">
            {/* <FontAwesomeIcon icon={props.img} /> */}
            <div className="service">
              <img src={props.imgUrl} className='services__img' alt="Service image" />
              <div className="services__heading">
                  {props.heading}
              </div>
              <div className="services__content">
              {/* Choose your doctor from thousands of specialist, general, and trusted hospitals */}
              {props.content}
              </div>

            </div>
        </li>

  )
}

// ServicesItem.propTypes = {
//     heading: PropTypes.string,
//     content: PropTypes.string,
//     img: PropTypes.string
    
// }

export default ServicesItem

