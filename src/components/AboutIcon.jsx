import './aboutIcon.css'
import question from '../assets/question.png'
import { Link } from 'react-router-dom'

export default function AboutIcon() {
  return (
    <div className='question'>
        <Link to='/about' className='about-link'>
            <img className='question-mark' src={question} alt="question mark" />
        </Link>
    </div>
  )
}
