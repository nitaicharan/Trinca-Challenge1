import '../styles/components/card.scss'
import money from '../assets/images/icon_money.svg'
import people from '../assets/images/icon_people.svg'

export const Card = () => {
    return (
        <section className="card">
            <div className="card__text">
                <h2 className="card__title">01/12</h2>
                <p className="card__description">Description</p>
            </div>

            <div className="card__number">
                <div className="card__amount">
                    <span className="card__amount--result">
                        <img src={people} alt="" className="card__amount--icon" /> 15
                    </span>
                </div>

                <div className="card__amount">
                    <span className="card__amount--result">
                        <img src={money} alt="" className="card__amount--icon" /> $56
                    </span>
                </div>
            </div>
        </section>
    );
}