import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import NavbarMenu from './NavbarMenu'

const Layout = ({ Children }) => (
    <Container>
        <Head>
            <title>My next App</title>
            <meta name="viewport" content="width=device-width, initial-scale"/>
        </Head>
        <header>
            <NavbarMenu></NavbarMenu>
        </header>
        {/* <main>{Children}</main> */}
    </Container>
)
export default Layout