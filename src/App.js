import logo from './logo.svg';
import './App.css';
import Quiz from './components/Quiz';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Addquiz from './components/Addquiz';
import ViewQuiz from './components/ViewQuiz';
import EditQuiz from './components/EditQuiz';


function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            
            <BrowserRouter>
              <Routes>
                <Route path="/" exact element={<Quiz />} />
                <Route path="/addquiz" exact element={<Addquiz />} />
                <Route path="/quiz/view/:viewId" exact element={<ViewQuiz/>} />
                <Route path="/quiz/edit/:editId" exact element={<EditQuiz/>} />

              </Routes>
            </BrowserRouter>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
