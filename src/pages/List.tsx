import { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { NewCard } from '../components/NewCard';
import { Barbecue } from '../interfaces/Barbecue';
import { fetchList } from '../services/BarbecueService';
import '../styles/pages/list.scss';

export const List = () => {
    const [list, setList] = useState<Barbecue[]>([])

    useEffect(() => {
        fetchList().then(setList);
    }, []);

    return (
        <main className="list">
            {list?.map(i => (
                <div key={i.id} className="list-card">
                    <Card {...i} />
                </div>
            ))}
            <div className="list-card">
                <NewCard />
            </div>
        </main>
    );
}