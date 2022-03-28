import React from "react";

const Counter = (props) => {
    const {value} = props;

    const formatValue = () => {
        return value === 0 ? "empty" : value;
    };

    const getBadgeClasses = () => {
        let classes = "badge m-2 col-sm ";
        classes += value === 0 ? "bg-warning" : "bg-primary";
        return classes;
    };

    return (
        <div className='container mt-4'>
            <div className='row'>
                <span className='col-sm'>{props.name}</span>
                <span className={getBadgeClasses()}>{formatValue()}</span>
                <button
                    className='btn btn-primary btn-sm m-2 col-sm'
                    onClick={() => props.onIncrement(props.id)}
                >
                    +
                </button>
                <button
                    className='btn btn-primary btn-sm m-2 col-sm'
                    onClick={() => props.onDecrement(props.id)}
                >
                    -
                </button>
                <button
                    className="btn btn-danger btn-sm m-2 col-sm"
                    onClick={() => props.onDelete(props.id)}
                >
                    Delete
                </button>
            </div>

        </div>
    );
};

export default Counter;
