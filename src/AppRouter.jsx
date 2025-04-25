import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './App.jsx';
import RoadmapPage from './Pages/Home/HomePage';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/roadmaps" element={<RoadmapPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
