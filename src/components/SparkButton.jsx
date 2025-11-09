import React from 'react';

function SparkButton ({onClick, children, variant = "primary"}) {
    return (
        <button onClick={onClick} className={`spark-button ${variant}`}>
            {children}
        </button>
    );
}
export default SparkButton;