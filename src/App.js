
import { BrowserRouter, Routes,Route } from 'react-router';
import './App.css';
import Login from './component/Admin/Login';
import Dashboard from './component/Dashboard/Dashboard';
import Entrance from './component/Entrance/Entrance';
import Entrancequestion from './component/Entrance/Entrancequestion';
import Home from './component/Home/Home';
import Questionid from './component/Home/Questionid';
import MCQ from './component/MCQ/MCQ';
import MCQquestion from './component/MCQ/MCQquestion';
import MCQView from './component/MCQ/MCQView';
import Question from './component/QuestionPage/Question';
import SubjectquestionView from './component/SubjectquestionView/SubjectquestionView';
import Syllabus from './component/Syllabus/Syllabus';
import { ToastContainer } from 'react-toastify';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/question/:id' element={<Questionid/>} />
      <Route path='/questions/' element={<Question/>} />
      <Route path='/syllabus' element={<Syllabus/>} />
      <Route path='/entrance' element={<Entrance/>} />
      <Route path='/entrancequestion/:year' element={<Entrancequestion/>} />
      <Route path='/subjectquestion/:name' element={<SubjectquestionView/>} />
      <Route path='/MCQ' element={<MCQ/>} />
      <Route path='/MCQquestion/:semester' element={<MCQquestion/>} />
      <Route path='/mcqview/:name' element={<MCQView/>} />
      <Route path='/admin' element={<Login/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
    <ToastContainer position='top-center' autoClose='2000'/>
    
    </BrowserRouter>
  );
}

export default App;
