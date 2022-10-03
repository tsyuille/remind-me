import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
        <img src='/remind-me-logo.png' alt="Remind Me Logo" className='logo' />
        <Button color={showAdd ? 'red' : 'black'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Remind Me'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header