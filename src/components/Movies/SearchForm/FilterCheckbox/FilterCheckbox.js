import React, { useRef } from "react";

function FilterCheckbox({changeCbx}) {
    const checkboxInput = useRef();
    const soldCheckbox = () => {
        changeCbx()
    };

    return (
        <div className="filter-box">
            <input ref={checkboxInput} type="checkbox" id="filter-box__input" name="filter" onChange={soldCheckbox} className="filter-box__input" />
            <label htmlFor="filter-box__input" className="filter-box__label">Короткометражки</label>
        </div>
    )
}

export default FilterCheckbox;