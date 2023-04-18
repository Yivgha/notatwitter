import { Select } from "./Filter.styled";

const Filter = ({selectedFilter, handleFilterChange}) => {

    return (
        <>
            <div>
                <h2>Filter cards</h2>
                <Select id="filterInput"
                    value={selectedFilter} onChange={handleFilterChange}
                >
                    <option value="">Show all</option>
                    <option value="Follow">Follow</option>
                    <option value="Followed">Followed</option>
                </Select>
            </div>
        </>
    )
};

export default Filter;