import Act from './pages/act';
import Leadership from './pages/leadership';
import Members from './pages/members';
import News from './pages/news';
import Home from './pages/NotesListPage';
import Test from './pages/Test';
import FundPage from './pages/FundPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AArticle from './pages/AArticle';
import Article2 from './pages/Article2';
import Article3 from './pages/Article3';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path="/act" element={<Act/>}/>
          <Route path="/leadership" element={<Leadership/>}/>
          <Route path="/members" element={<Members/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/tester" element={<Test/>}/>
          <Route path="/AtkinsScholarFund" element={<FundPage/>}/>
          <Route path="/news/CoFounder-Jane-Street" element={<AArticle/>}/>
          <Route path="/news/Vice-President-AFE" element={<Article2/>}/>
          <Route path="/news/Chatham-Youth-Awards" element={<Article3/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
