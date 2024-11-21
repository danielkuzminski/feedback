import './feedbackForm.css'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'

export default function FeedbackForm() {

    const [text, setText] = useState('')
    const [message, setMessage] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)

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
    

  return (
    <Card>
        <form className='form'>
            <h2 className="form__title">Leave your feedback</h2>
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
