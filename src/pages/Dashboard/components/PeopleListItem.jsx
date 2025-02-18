import PropTypes from 'prop-types'
import { Route, Routes, Link } from 'react-router-dom';


PeopleListItem.propTypes = {
  person: PropTypes.object
}


function PeopleListItem(props) {
  const {  person } = props
  // const navigate = useNavigate();

  
  return (
    <li>
      {/* <h3 onClick={() => navigate('....')}> */}
      <h3>
        {/* State passing object person to Link route as from */}
        <Link to={`/view/${person.id.value}`} state={{from: person}}>{`${person.name.first} ${person.name.last}`} </Link>
        {/* <Link to={`/view/${person.login.uuid}`}>{person.wage ? "Edit" : "View Profile"}</Link> */}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      {person.wage && <button className='edit' type='button'>
        <Link to={`/view/${person.id.value}`} state={{from: person}}>Edit</Link>
        </button>}
    </li>
  )
}

export default PeopleListItem
