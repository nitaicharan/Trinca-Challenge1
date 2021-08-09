import money from '../assets/images/icon_money.svg';
import people from '../assets/images/icon_people.svg';
import { Row } from '../components/Row';
import '../styles/pages/detail.scss';

export const Detail = () => {
    return (
        <main className="detail">
            <div className="detail-titles">
                <div className="detail__title">
                    <h1 className="detail__title--date">01/12</h1>
                    <span className="detail__title--description">Description</span>
                </div>
                <div className="detail__amount">
                    <span className="detail__amount--number">
                        {/* FIXME aline icon to text */}
                        <img src={people} alt="" className="detail__amount--icon" /> 15
                    </span>
                    <span className="detail__amount--number">
                        {/* FIXME aline icon to text */}
                        <img src={money} alt="" className="detail__amount--icon" /> $56
                    </span>
                </div>
            </div>

            <Row />
            <Row />
            <Row />
            <Row />
        </main>
    );
}