import PropTypes from 'prop-types'

export function Button ({ type, text, id,category, handleClick }) {
  const handleClickButton = () => {
    handleClick()
  }

  return (
    <button
      type={type}
      id={id}
      category= {category}
      className={`button ${type}-button`}
      onClick={handleClickButton}
    >{text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}