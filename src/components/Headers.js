import '../styles/styles.css'

const Header = ({score, highScore}) => {

    return (
        <div className="header">
            <div className="title-and-score">
                <h1 className="title">Alchemist Memory Game</h1>
                <div className="score-container">
                    <div className="score-tag">HoghScore: {highScore}</div>
                    <div className="score-tag">Score: {score}</div>
                </div>
            </div>
            <div className="instruction">
                    Get points by clicking on an image but don't click on any more than once!
            </div>
        </div>
    )
}

export default Header