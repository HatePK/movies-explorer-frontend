function FilterCheckbox() {
    

    return (
        <div className="filter-box">
            <input type="checkbox" id="filter-box__input" name="filter" value="true" className="filter-box__input" />
            <label for="filter-box__input" className="filter-box__label">Короткометражки</label>
        </div>
    )
}

export default FilterCheckbox;