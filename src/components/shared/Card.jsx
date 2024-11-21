import './card.css'

export default function Card({children, item}) {
  return (
    <div className='card'>
        {children}
    </div>
  )
}
