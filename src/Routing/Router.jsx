import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;
