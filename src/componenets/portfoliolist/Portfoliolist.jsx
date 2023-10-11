import './portfoliolist.scss'

export default function Portfoliolist({id, title, active, setSelected}) {
  return (
    <div className={active ? 'portfoliolist active' : 'portfoliolist'} onClick={() => setSelected(id)}>
      {title}
    </div>
  )
}
