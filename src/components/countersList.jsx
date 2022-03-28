import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        {id: 10, value: 0, name: "Ненужная вещь"},
        {id: 11, value: 4, name: "Ложка"},
        {id: 12, value: 0, name: "Вилка"},
        {id: 13, value: 0, name: "Тарелка"},
        {id: 14, value: 0, name: "Набор минималиста"},
    ];

    const [counters, setCounters] = useState(initialState);

    const handleDelete = (id) => {
        const newCounters = counters.filter(c => c.id !== id);
        setCounters(newCounters);
    };

    const handleReset = () => {
        setCounters(initialState);
    };

    const handleIncrement = (countersId) => {
        setCounters(counters.map(count => {
            if (count.id === countersId) {
                return {...count, value: count.value + 1}
            } else {
                return count;
            }
        }))
    };

    const handleDecrement = (countersId) => {
        setCounters(counters.map(count => {
            if (count.id === countersId) {
                return {...count, value: count.value - 1}
            } else {
                return count;
            }
        }))
    };

    return <>
        {counters.map(count => (
            <Counter
                key={count.id}
                onDelete={handleDelete}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                {...count}
            />
        ))}

        <button
            className="btn btn-primary btn-sm m-2"
            onClick={handleReset}
        >
            Сброс
        </button>
    </>;
}

export default CountersList;