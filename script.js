let digitalElement = document.querySelector('.digital')
let sElement = document.querySelector('.p_s')
let mElement = document.querySelector('.p_m')
let hElement = document.querySelector('.p_h')

function attDigital(){
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()

    digitalElement.innerHTML = `${fixedZero(hora)}:${fixedZero(min)}:${fixedZero(sec)}`

    let sDeg = ((360 / 60) * sec) - 90
    let mDeg = ((360 / 60) * min) - 90
    let hDeg = ((360 / 12) * hora) - 90

    sElement.style.transform = `rotate(${sDeg}deg)`
    mElement.style.transform = `rotate(${mDeg}deg)`
    hElement.style.transform = `rotate(${hDeg}deg)`
}

function fixedZero(timer){
    
    return timer < 10 ? '0' + timer : timer 
}

setInterval(attDigital, 1000)
attDigital()