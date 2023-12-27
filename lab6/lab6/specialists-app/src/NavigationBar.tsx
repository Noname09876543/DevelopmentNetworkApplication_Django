import { NavItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import type { RootState } from './specialists_store/specialists_store';
import { useSelector } from 'react-redux'

function NavigationBar() {
  const userName = localStorage.getItem('username');
  const role = localStorage.getItem('role');
  const authStatus = useSelector((state: RootState) => state.authStatus.value)
  const specialistsNum = useSelector((state: RootState) => state.specialists.value)

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Заявки на услуги специалистов ГУИМЦ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Главная</Nav.Link>
            <Nav.Link href="/specialists/">Специалисты</Nav.Link>
            {/* {userName &&<Nav.Link href="/service_requests/">Мои Заявки</Nav.Link>} */}
            {authStatus &&<Nav.Link href="/service_requests/">{specialistsNum == 0 ?  <span>Мои Заявки</span> : <i><b><span>Мои Заявки (Специалистов в черновике: {specialistsNum})</span></b></i>}</Nav.Link>}
            {authStatus &&<Nav.Link href="/service_requests_table/">Заявки таблицей</Nav.Link>}
            {authStatus && role=="moderator" && <Nav.Link href="/moderator_requests/">Запросы на права модератора</Nav.Link>}
            {!authStatus && <Nav.Link href="/authorization/">Авторизация</Nav.Link>}
            {!authStatus && <Nav.Link href="/registration/">Регистрация</Nav.Link>}
            {authStatus && <Nav.Link href="/logout/">Выход</Nav.Link>}
            <NavItem>{userName ? <span>{userName}</span>: <span></span>}</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;