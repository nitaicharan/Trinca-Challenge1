import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import money from '../assets/images/icon_money.svg';
import people from '../assets/images/icon_people.svg';
import { Row } from '../components/Row';
import { Barbecue } from '../interfaces/Barbecue';
import { fetchDetail } from '../services/BarbecueService';
import '../styles/pages/detail.scss';

export const Detail = () => {
    const [detail, setDetail] = useState<Barbecue>();
    let { id } = useParams<{ id: string }>();

    useEffect(() => {
        fetchDetail(id).then(setDetail);
    }, [id]);

    return (
        <main className="detail">
            <div className="detail-titles">
                <div className="detail__title">
                    <h1 className="detail__title--date">{detail?.create_at}</h1>
                    <span className="detail__title--description">{detail?.description}</span>
                </div>
                <div className="detail__amount">
                    <span className="detail__amount--number">
                        {/* FIXME aline icon to text */}
                        <img src={people} alt="" className="detail__amount--icon" /> {detail?.users.length ?? 0}
                    </span>
                    <span className="detail__amount--number">
                        {/* FIXME aline icon to text */}
                        {/* FIXME add currency mask to price */}
                        <img src={money} alt="" className="detail__amount--icon" />  {detail?.price}
                    </span>
                </div>
            </div>
            {detail?.users?.map(i => <Row key={i.id} {...i} />)}
        </main>
    );
}