import React, { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

const FilterDropDown = ({ title, values ,type}) => {
    const [select, setSelect] = useState(false);

    return (
        <div className="dropdown">
            <h3 
                className="dropdown-title" 
                onClick={() => setSelect(!select)}
            >
                {title} {select ? <FaChevronCircleUp /> : <FaChevronCircleDown />}
            </h3>
            {select && (
                <div className="select-values">
                    {values.map((val) => (
                        <div className="select-value" key={val}>
                        {type == 'checkbox'?
                            <>
                            <input type="checkbox" />
                            <label>{val}</label>
                            </>
                            :
                            type == "text" ?
                            <input type="text" placeholder={val.placeholder} value = {val.value} />:<section></section>

                        }
                            
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FilterDropDown;
