const janeiro = 31
const fevereiro = 28 + janeiro
const marco = 31 + fevereiro
const abril = 30 + marco
const maio = 31 + abril
const junho = 30 + maio
const julho = 31 + junho
const agosto = 31 + julho
const setembro = 30 + agosto
const outubro = 31 + setembro
const novembro = 30 + outubro
const dezembro = 31 + novembro

const a = 28
const b = 28+a
const c = 28+b
const d = 28+c
const e = 28+d
const f = 28+e
const g = 28+f
const h = 28+g
const i = 28+h
const k = 28+i
const l = 28+k
const m = 28+l
const n = 28+m

const data = new Date()

const dia = String(data.getDate())

const mes = String(data.getMonth() + 1)

function tratarMes(mesToUse){
   if(mesToUse == 1){
    return `Janeiro`
   }if(mesToUse = 2){
    return `Fevereiro`
   }if(mesToUse = 3){
    return `Março`
   }if(mesToUse = 4){
    return `Abril`
   }if(mesToUse = 5){
    return `Maio`
   }if(mesToUse = 6){
    return `Junho`
   }if(mesToUse = 7){
    return `Julho`
   }if(mesToUse = 8){
    return `Agosto`
   }if(mesToUse = 9){
    return `Setembro`
   }if(mesToUse = 10){
    return `Outubro`
   }if(mesToUse = 11){
    return `Novembro`
   }if(mesToUse = 12){
    return `Dezembro`
   }
}

const mesTratado = tratarMes(mes)

function diaGregDiaAno(day, month){ 
    let diaAno = 0
    if(month == 1){
        diaAno = day
    }if(month == 2){
        diaAno = day + janeiro
    }if(month == 3){
        diaAno = day + fevereiro
    }if(month == 4){
        diaAno = day + marco
    }if(month == 5){
        diaAno = day + abril
    }if(month == 6){
        diaAno = day + maio
    }if(month == 7){
        diaAno = day + junho
    }if(month == 8){
        diaAno = day + julho
    }if(month == 9){
        diaAno = day + agosto
    }if(month == 10){
        diaAno = day + setembro
    }if(month == 11){
        diaAno = day + outubro
    }if(month == 12){
        diaAno = day + novembro
    }return diaAno
}

function diaAnoEmDiaMesDK(dayYear){
    let dayMonth = 0
    if(dayYear <= a){
        dayMonth = dayYear
        return [dayMonth, ' Auroran']
    }if(dayYear > a && dayYear<= b){
        dayMonth = dayYear - a
        return [dayMonth, ' Borean']
    }if(dayYear > b && dayYear<= c){
        dayMonth = dayYear - b
        return [dayMonth, ' Coronian']
    }if(dayYear > c && dayYear<= d){
        dayMonth = dayYear - c
        return [dayMonth, ' Driadan']
    }if(dayYear > d && dayYear<= e){
        dayMonth = dayYear - d
        return [dayMonth, ' Electran']
    }if(dayYear > e && dayYear<= f){
        dayMonth = dayYear - e
        return [dayMonth, ' Faian']
    }if(dayYear > f && dayYear<= g){
        dayMonth = dayYear - f
        return [dayMonth, ' Gaian']
    }if(dayYear > g && dayYear<= h){
        dayMonth = dayYear - g
        return [dayMonth, ' Hermetian']
    }if(dayYear > h && dayYear<= i){
        dayMonth = dayYear - h
        return [dayMonth, ' Irisian']
    }if(dayYear > i && dayYear<= k){
        dayMonth = dayYear - i
        return [dayMonth, ' Kaosian']
    }if(dayYear > k && dayYear<= l){
        dayMonth = dayYear - k
        return [dayMonth, ' Lunan']
    }if(dayYear > l && dayYear<= m){
        dayMonth = dayYear - l
        return [dayMonth, ' Maian']
    }if(dayYear > m && dayYear<= n){
        dayMonth = dayYear - m
        return [dayMonth, ' Nixian']
    }if(dayYear > n){
        return [`Dia Assincrono`,'']
    }
}
let diaAnoGreg = diaGregDiaAno(dia, mes)


let diaDK = diaAnoEmDiaMesDK(diaAnoGreg)[0]
let mesDK = diaAnoEmDiaMesDK(diaAnoGreg)[1]

function diaGreg(){
    document.querySelector(".diaGreg").innerHTML = `${dia} do mes de ${mesTratado}`
    
}

function diaDKa(){
    document.querySelector(".diaDk").innerHTML = diaDK
}
function mesDKa(){
    document.getElementById('mesDK').innerHTML = `${mesDK}`
}

diaGreg()
diaDKa()
mesDKa()

