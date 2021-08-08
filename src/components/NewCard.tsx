import '../styles/components/card.scss'
import bbq from '../assets/images/icon_bbq.svg'

export const NewCard = () => {
    return (
        <section className="card card__new">
            <div className="card__new--icon">
                <img src={bbq} alt="" />
            </div>
            <span className="card__new--text">Add barbecue</span>
        </section>
    );
}