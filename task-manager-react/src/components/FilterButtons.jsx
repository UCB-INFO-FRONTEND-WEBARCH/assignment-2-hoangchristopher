import React from "react"

function FilterButtons( { currentFilter, changeFilter } ) {
    const filters = ["all", "active", "completed"];

    return (
        <>
            <div className="filter-buttons">
                {filters.map(choice => (
                    <button
                        key={choice}
                        className={currentFilter === choice ? "active" : ""}
                        onClick={() => changeFilter(choice)}
                    >
                        {choice.charAt(0).toUpperCase() + choice.slice(1)}
                    </button>
                ))}
            </div>
        </>
    );
}

export default FilterButtons;