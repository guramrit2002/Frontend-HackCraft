import React, { useState } from "react";
import FilterDropDown from "./FilterDropDown";

const Sidebar = () => {
    const [filters, setFilters] = useState([
        {
            id: 1,
            title: "Title",
            type: "checkbox",
            options: ["option1", "option2"],
        },
        {
            id: 2,
            title: "Title",
            type: "checkbox",
            options: ["option1", "option2"],
        },
        {
            id: 3,
            title: "Title",
            type: "checkbox",
            options: ["option1", "option2"],
        }
    ]);

    return (
        <section className="sidebar">
            <div className="filters">
                {filters.map((filter) => (
                    <FilterDropDown 
                        key={filter.id} 
                        title={filter.title} 
                        values={filter.options} 
                        type={filter.type}
                    />
                ))}
            </div>
        </section>
    );
};

export default Sidebar;
