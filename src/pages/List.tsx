import { Card } from '../components/Card';
import '../styles/pages/list.scss';

export const List = () => {
    return (
        <main className="list">
            <div className="list-card">
                <Card />
            </div>
            <div className="list-card">
                <Card />
            </div>
            <div className="list-card">
                <Card />
            </div>
            <div className="list-card">
                <Card />
            </div>
            <div className="list-card">
                <Card />
            </div>
            <div className="list-card">
                <Card />
            </div>
        </main>
    );
}