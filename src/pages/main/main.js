import React from "react"
import "./main.css"
import { Link } from "react-router-dom"

const Main = (props) => {
  return (
    <div className="bookdisplay">
      {props.books.map(eachBook =>
        <div key={eachBook._id} className="eachbookholder" onClick={(e) => props.bookIdHandle(e)} >
          <Link to={`/book/${eachBook._id}`}>
            <div id={eachBook._id} className="bookdetaillinksection"></div>
          </Link>
          <section id={eachBook._id} onClick={(e) => props.bookIdHandle(e)} style={{ backgroundImage: `url(${eachBook.coverImgURL})` }} className="eachbookimage">
            <small className="bookdelete" id={eachBook._id} onClick={(e) => props.bookIdHandle(e)}>Delete</small>
            <small className="bookedit" id={eachBook._id} onClick={(e) => props.bookIdHandle(e)}>Edit</small>
          </section>
          <section>
            <div className="eachbooktitle">{eachBook.title}</div>
            <div className="eachbookauthor">{eachBook.author.name}</div>
          </section>
        </div>
      )}

    </div>
  )
}

export default Main