import React from "react";

class Pad extends React.Component {
    render() {
        const data = this.props.data;
        const onDelete = this.props.onDelete;
        return (
            <div className="pad-window">
                <div className="pad-header">
                    <span className="pad-title">{data.title}</span>
                    <button className="pad-close" onClick={() => onDelete(data)}>&times;</button>
                </div>
                <div className="pad-body">
                    {data.content}
                </div>
            </div>
        );
    }
}
export default Pad;