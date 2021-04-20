import React, { Component } from 'react';

// dumb component
class ColorChip extends Component {
    render () {
        const { id, color, active, onClick} = this.props;
        return (
            <div className={`color ${active ? 'active' : ''}`}
                onClick={(e) => {
                    // propagation 방지
                    e.stopPropagation();
                    onClick(id);}
                }
                style={{ background: color }}>
            </div>
        );
    }
}

export default ColorChip;