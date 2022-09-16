import { useEffect, useState } from "react"
import cardData from '../data.json'
import '../styles/styles.css'
import { shuffle } from "../utils"



const Card = ({id, image, name, clicked}) => {

    const handleClick = (event) => {
        clicked(event.currentTarget.getAttribute('data-id'))
    }

    return (
        <div data-id={id} className="card" onClick={handleClick}>
            <img className="avatar" src={`${image}`} alt={name} />
            <p className="avatar-name">{name}</p>
        </div>
    )
} 


const CardGrid = (props) => {
    const [cards, setCards] = useState([]);
    
    useEffect(()=> {
        setCards(shuffle(cardData))
    }, [])

    const clicked = id => {
        id = parseInt(id)
        let selectedCard = cards.find(card => card.id === id);

        if(!selectedCard.clicked){
            selectedCard = {...selectedCard, clicked : true}
            let newCardData = cards.map( card => card.id === selectedCard.id ? selectedCard : card)
            props.updateScore(true);
            setCards(shuffle(newCardData));
        }
        else{
            let newCardData = cards.map( card => {
                    card.clicked = false;
                    return card;
            })

            setCards(shuffle(newCardData));
            props.updateScore(false);
        }
    }

    // console.log(cards)
    return (
        <div className="card-grid">
            {cards.map(card => <Card key={card.id} id={card.id} image={card.image} name={card.name} clicked={clicked}/>)}
        </div>
    )
}


export default CardGrid