import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
  console.log(props.lo);
  
  return (
      <div className="card">
        <div className="top">
          <img src={props.lo} alt={props.comp}/>
          <button>Save <Bookmark size={17} strokeWidth={0.5} /></button>
        </div>
        <div className="center">
          <h3>{props.comp} <span>{props.post} </span></h3>
          <h2>{props.tit} </h2>
          <div className="tags">
            <h4>{props.t1}</h4>
            <h4>{props.t2}</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.sal} </h3>
            <p>{props.loc} </p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card
