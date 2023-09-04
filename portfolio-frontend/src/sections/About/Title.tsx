import React from "react";
import "./Title.css";

const Title: React.FC = () => {
    return (
        <div className="title">
            <div className="title-name">
                William Reckziegel
            </div>
            <div className="title-contact">
                Los Angeles, CA | 1 (207) 423-7861 | reckziegel.william@gmail.com
            </div>
        </div>
    );
}

export default Title;