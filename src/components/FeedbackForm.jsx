import './feedbackForm.css'
import Card from './shared/Card'
import Rating from '../components/Rating'
import { useState } from 'react'
import Button from './shared/Button'
import { v4 as uuidv4 } from 'uuid'

export default function FeedbackForm({handleAdd}) {

    const [text, setText] = useState('')
    const [message, setMessage] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)
    const [rating, setRating] = useState(5)

    const handleText = (e) => {
        if(text === ''){
            setIsDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length < 10) {
            setMessage('must be at least 10 characters')
            setIsDisabled(true)
        } else {
            setMessage(null)
            setIsDisabled(false)
        }

        setText(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const newFeedback = {
            text,
            score: rating,
            id: uuidv4()
        }

        handleAdd(newFeedback)

        setText('')
    }
    

  return (
    <Card>
        <form 
            className='form'
            onSubmit={handleSubmit}   
        >
            <h2 className="form__title">Leave your feedback</h2>
            <Rating select={(rating) => {
                setRating(rating);
            }}/>
            <div className="form__inputs">
                <input 
                    onChange={handleText}
                    className='feedback__input' 
                    type="text" 
                    placeholder='your feedback' 
                    value={text}
                    />
                <Button type="submit" isDisabled={isDisabled}>submit</Button>
                
            </div>
            {message && <div className='message' value={message}>{message}</div>}
        </form>
    </Card>
  )
}
