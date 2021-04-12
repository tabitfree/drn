import React from 'react';
import {Link} from 'react-router-dom'
import {Container} from 'react-bootstrap'

const NotFound = () => {
  
  return (
    <Container>
      <h1>404 Page not found</h1>
      <p>Maybe you wanted to go to <Link to='/'>Homepage</Link></p>
    </Container>
  )
}

export default NotFound