import React, { useState } from "react";

function Square({ width, height, color, borderRadius }) {
    return (
        <div
        style={{
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: color,
            margin: "20px",
            borderRadius: `${borderRadius.topLeft}px ${borderRadius.topRight}px ${borderRadius.bottomRight}px ${borderRadius.bottomLeft}px`
        }}
        ></div>
    );
    }

    export default function SquareCreator() {
    const [width, setWidth] = useState(10);
    const [height, setHeight] = useState(10);
    const [color, setColor] = useState("#000000");
    const [isSaved, setIsSaved] = useState(false);
    const [savedSquares, setSavedSquares] = useState([]);
    const [currentSquare, setCurrentSquare] = useState(null);
    const [borderRadius, setBorderRadius] = useState({
        topLeft: 0,
        topRight: 0,
        bottomRight: 0,
        bottomLeft: 0
    });

    const handleCreateClick = () => {
        setIsSaved(false);
        setCurrentSquare(<Square width={width} height={height} color={color} borderRadius={borderRadius} />);
    };

    const handleSaveClick = () => {
        setIsSaved(true);
        setSavedSquares([...savedSquares, { width, height, color, borderRadius }]);
    };

    const handleWidthChange = (e) => {
        setWidth(parseInt(e.target.value));
        setCurrentSquare(<Square width={parseInt(e.target.value)} height={height} color={color} borderRadius={borderRadius} />);
    };

    const handleHeightChange = (e) => {
        setHeight(parseInt(e.target.value));
        setCurrentSquare(<Square width={width} height={parseInt(e.target.value)} color={color} borderRadius={borderRadius} />);
    };

    const handleColorChange = (e) => {
        setColor(e.target.value);
        setCurrentSquare(<Square width={width} height={height} color={e.target.value} borderRadius={borderRadius} />);
    };

    const handleBorderRadiusChange = (e, corner) => {
        setBorderRadius(prevState => ({
        ...prevState,
        [corner]: parseInt(e.target.value)
        }));
        setCurrentSquare(<Square width={width} height={height} color={color} borderRadius={borderRadius} />);
    };

    return (
        <div className="Form5">
        <div>
            <label htmlFor="width">Width:</label>
            <input
            id="width"
            type="range"
            min="1"
            max="500"
            value={width}
            onChange={handleWidthChange}
            />
            <label htmlFor="height">Height:</label>
            <input
            id="height"
            type="range"
            min="1"
            max="500"
            value={height}
            onChange={handleHeightChange}
            />
            <label htmlFor="color">Color:</label>
            <input
            id="color"
            type="color"
            value={color}
            onChange={handleColorChange}
            />
        </div>
        <div className="border-radius">
            <div className="top-left">
                <label htmlFor="borderRadiusTL">Border-radius TL:</label>
                <input
                id="borderRadiusTL"
                type="range"
                min="0"
                max="500"
                value={borderRadius.topLeft}
                onChange={(e) => handleBorderRadiusChange(e, 'topLeft')}
                />
            </div>
            <div className="top-right">
                <label htmlFor="borderRadiusTR">Border-radius TR:</label>
                <input
                id="borderRadiusTR"
                type="range"
                min="0"
                max="500"
                value={borderRadius.topRight}
                onChange={(e) => handleBorderRadiusChange(e, 'topRight')}
                />
            </div>
            <div className="bottom-right">
                <label htmlFor="borderRadiusBR">Border-radius BR:</label>
                <input
                id="borderRadiusBR"
                type="range"
                min="0"
                max="500"
                value={borderRadius.bottomRight}
                onChange={(e) => handleBorderRadiusChange(e, 'bottomRight')}
                />
            </div>
            <div bottom-left>
                <label htmlFor="borderRadiusBL">Border-radius BL:</label>
                <input
                id="borderRadiusBL"
                type="range"
                min="0"
                max="500"
                value={borderRadius.bottomLeft}
                onChange={(e) => handleBorderRadiusChange(e, 'bottomLeft')}
                />
            </div>
        </div>
        <div>
            <button onClick={handleCreateClick}>Sukurti</button>
            <button onClick={handleSaveClick}>Išsaugoti</button>
        </div>
        <div className="form-created">
            <h2>Sukurtos formos</h2>
            {currentSquare}
        </div>
        <div className="form-saved">
            <h2>Išsaugotos formos</h2>
            {savedSquares.map((square, index) => (
            <Square
                key={index}
                width={square.width}
                height={square.height}
                color={square.color}
                borderRadius={square.borderRadius}
            />
            ))}
        </div>
        </div>
    );
}
