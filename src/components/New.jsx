import React from 'react'
import Card from 'react-bootstrap/Card'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"
import "../css/new.css"
export const New = () => {
  return (
    <div className='new'>
        <Card className='new-card' style={{ width: '18rem' }}>
            <Card.Img className='new-card__img' variant="top" src="./image/new.png" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Card.Link href="/news">Read More <FontAwesomeIcon className='arrow-icon' icon={faArrowRight}/></Card.Link>
            </Card.Body>
        </Card>
    </div>
  )
}
