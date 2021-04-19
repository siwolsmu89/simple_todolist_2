import React, { Component } from 'react';
import './Palette.css';
import './color-chip/ColorChip';
import ColorChip from "./color-chip/ColorChip";

class Palette extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.colors !== nextProps.colors || this.props.selected !== nextProps.selected;
    }

    render() {
        const { colors, onSelect } = this.props;
        const colorChips = colors.map(
            ({id, colorValue, selected}) => (
                <ColorChip
                    id={id}
                    color={colorValue}
                    active={selected}
                    onClick={onSelect}
                    key={id}
                />
            )
        );

        return (
            <div className="palette">
                { colorChips }
            </div>
        );
    }
}

export default Palette;