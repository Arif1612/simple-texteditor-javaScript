
// text bold
document.getElementById('bold-btn').addEventListener('click', function () {
     document.getElementById('text').style.fontWeight = 'bold';
})

// text italic
document.getElementById('italic-btn').addEventListener('click', function () {
   
    document.getElementById('text').style.fontStyle = 'italic';
})
// text normal
document.getElementById('normal-btn').addEventListener('click', function () {
   
    document.getElementById('text').style.fontStyle = 'normal';
})
// text normal
document.getElementById('center').addEventListener('click', function () {
   
    document.getElementById('text').style.textAlign = 'center';
})

// font size change

document.getElementById('font-btn').addEventListener('click', function () {
   
    document.getElementById('text').style.fontSize = 'xx-large';
})

// color change
document.getElementById('color-btn').addEventListener('click', function () {
  
    let colorField = document.getElementById('select-color').value;
    console.log(colorField);
    document.getElementById('text').style.color = colorField;
})



