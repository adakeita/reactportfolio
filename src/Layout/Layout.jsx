import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Layout = () => {
    return (
        <div className='LAYOUT-CONTAINER'>
            <Header />
            <main className='main-content'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;