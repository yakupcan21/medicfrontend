import LoginPage from './pages/loginpage/LoginPage.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App () {
  return ( <>
    <Router>
     <Routes>
       <Route path="/" element={<LoginPage />} />
     </Routes>
    </Router>
     </>
     
     )
}

export default App;