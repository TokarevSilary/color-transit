
function onChange(evt, color, setColor){
    const colorRegex = /^#[0-9a-fA-F]{6}$/;
    setColor(evt.target.value)
    if (evt.target.value.length != 7) return;
    if(colorRegex.test(evt.target.value)){

    }
    
}

export default onChange;