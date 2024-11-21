import Header from './components/Header'
import FeedbackItems from './components/FeedbackItems';
import feedbackData from './data/FeedbackData';
import { useState } from 'react';
import Card from './components/shared/Card'

function App() {
  const [feedback, setFeedback] = useState(feedbackData)

  const handleDelete = (id) => {
    if(window.confirm('are you sure you want to delete feedback?')){
      setFeedback(feedback.filter(item => {
        return item.id !== id
      }))

    }
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <FeedbackItems feedback={feedback} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
