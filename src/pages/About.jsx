import Card from '../components/shared/Card'
import './about.css'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    
    <Card>
        <div className="about">
            <h1>About page</h1>
            <Link to='/'>Back to home page</Link>
        </div>
    </Card>
  )
}
