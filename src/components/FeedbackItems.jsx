import "./feedbackItems.css"
import Card from './shared/Card'
import edit from '../assets/edit.png'
import del from '../assets/del.png'


export default function FeedbackItem({ feedback, handleDelete }) {

  if(!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>
  }

	return (
		<>
			{feedback.map(item => (
        <Card key={item.id}>
          <div className="score">{item.score}</div>
          <div className="text">{item.text}</div>
          <div className="action">
            <img src={edit} alt="" className="action__icon" />
            <img onClick={() => handleDelete(item.id)} src={del} alt="" className="action__icon" />
          </div>
        </Card>
			))}
		</>
	)
}
