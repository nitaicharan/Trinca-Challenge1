import { Link } from 'react-router-dom';
import money from '../assets/images/icon_money.svg';
import people from '../assets/images/icon_people.svg';
import { Barbecue } from '../interfaces/Barbecue';
import '../styles/components/card.scss';

interface IProps extends Barbecue {
}

export const Card = (props: IProps) => {
    return (
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/list/${props.id}`}>
            <section className="card">
                <div className="card__text">
                    <h2 className="card__title">{props.create_at}</h2>
                    <p className="card__description">{props.description}</p>
                </div>

                <div className="card__number">
                    <div className="card__amount">
                        <span className="card__amount--result">
                            <img src={people} alt="" className="card__amount--icon" /> {props.users?.length ?? 0}
                        </span>
                    </div>

                    <div className="card__amount">
                        <span className="card__amount--result">
                            <img src={money} alt="" className="card__amount--icon" /> $ {props.price}
                        </span>
                    </div>
                </div>
            </section>
        </Link>
    );
}