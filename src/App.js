import Act from './pages/act';
import About from './pages/about';
import Leadership from './pages/leadership';
import Members from './pages/members';
import News from './pages/news';
import Home from './pages/NotesListPage';
import Programs from './pages/programs';
import Test from './pages/Test';
import FundPage from './pages/FundPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AArticle from './pages/AArticle';
import Newnav from './components/Newnav';

function App() {
  return (
      <>
      <h1>Hello there Me Antonio</h1>
      <BrowserRouter>
      <Newnav/>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path="/act" element={<Act/>}/>
          <Route path="/leadership" element={<Leadership/>}/>
          <Route path="/members" element={<Members/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/tester" element={<Test/>}/>
          <Route path="/AtkinsScholarFund" element={<FundPage/>}/>
          <Route path="/testarticle" element={<AArticle/>}/>
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
