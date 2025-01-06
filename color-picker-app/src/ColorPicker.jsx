import React, {useState} from 'react'
function ColorPicker(){
    
    const [colori, SetColor] = useState("#FFFFFF")
    const [style, setStyle] = useState('black')
    function colorChange(event){
        SetColor(event.target.value)
        styleChange(event)
    }
    function styleChange(event){
        if(colori[1] == 'f' || colori[1] == 'd' || colori[1] == 'e'){
            setStyle('black')
        }
        else{
            setStyle('white')
        }
    }
    return(<div className='color-picker-container'>
        <h1>Color Picker App</h1>
        <h3>Developed by Dovlet Gurbanov</h3>
        <div style={{background: colori, color: style}} className='color-display'>
            <p>Selected Color: {colori.toUpperCase()}</p>
        </div>
            <label htmlFor="">Select a color</label>
            <input type="color" value={colori} onChange={colorChange} id='color-input'/>
    </div>)
}
export default ColorPicker