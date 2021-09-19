// Ixtiyoriy to'rtta input htmlda yaratilsin. Biriga to'rtburchakni width tomoni, 
// ikkinchisiga  height tomoni kiritilsin, uchunchisiga radius va to'rtinchisiga rang berilsin.
// Alohida button bosilganda htmlda shu o'lchamlarga va rangga ega shakl hosil qilinsin.
function showResult(){
    let elementWidth = document.getElementById('width').value;
    let elementHeight = document.getElementById('height').value;
    let elementRadius = document.getElementById('radius').value;
    let elementColor = document.getElementById('color').value;
    const elementResult = document.getElementById('result')
    elementResult.style.width = elementWidth +'px'
    elementResult.style.height = elementHeight + 'px'
    elementResult.style.borderRadius = elementRadius + '%'
    elementResult.style.backgroundColor = elementColor;
}