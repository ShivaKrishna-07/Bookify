import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

const MyNavbar = () => {

    const navigate = useNavigate();

    return(
        <Navbar sticky='top' bg='dark' variant='dark'>
        <Container>
            <Navbar.Brand style={{cursor: 'pointer'}} onClick={()=> navigate('/')} ><h3 variant='danger'>BookiFy</h3></Navbar.Brand>
            <Nav className='me-auto'>
                <Nav.Link onClick={()=> navigate('/')}>Home</Nav.Link>
                <Nav.Link onClick={()=> navigate('/book/list')}>Add Listing</Nav.Link>
            </Nav>
            <Nav>

                <Nav.Link className='justify-content-end'><Button variant='danger'>Logout</Button></Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    )
}

export default MyNavbar;