import Header from './components/Header'
import FeedbackItems from './components/FeedbackItems';
import feedbackData from './data/FeedbackData';
import { useState } from 'react';
import Stats from './components/Stats';
import FeedbackForm from './components/FeedbackForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About'
import AboutIcon from './components/AboutIcon';

function App() {
  const [feedback, setFeedback] = useState(feedbackData)

  const handleDelete = (id) => {
    if(window.confirm('are you sure you want to delete feedback?')){
      setFeedback(feedback.filter(item => {
        return item.id !== id
      }))

    }
  }

  const handleAdd = (newFeedback) => {
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <div className="App">
      <BrowserRouter>
      
        <Header />
          <div className="container">
        <Routes>
          <Route path='/' element={
            <>
              <FeedbackForm handleAdd = {handleAdd} />
              <Stats feedback={feedback} />
              <FeedbackItems feedback={feedback} handleDelete={handleDelete} />           
            </>
          }></Route>

          <Route path='/about' element={<About />} />


        </Routes>
        <AboutIcon />
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
