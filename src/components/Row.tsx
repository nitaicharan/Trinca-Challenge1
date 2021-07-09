interface IProps {
    name: string,
    paid: number,
}

export const Row = (props: IProps) => {
    return (
        <div className="detail__row">
            <span className="detail__row--checkbox"></span>
            <span className="detail__row--user">{props.name}</span>
            <span className="detail__row--price">{props.paid}</span>
        </div>
    );
}