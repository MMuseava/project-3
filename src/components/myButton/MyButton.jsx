import React from 'react'
import PropTypes from 'prop-types';
import "./myButton.style.css";




const MyButton = ({onClickHandler, text, variant="square"}) => {
  return (
      <div >
          <button className={variant} onClick={onClickHandler}>
              {text}
          </button>

    </div>
  )
}
MyButton.propTypes = {
    variant: PropTypes.oneOf(["square", "rounded"]),
    text: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func.isRequired
}
export default MyButton