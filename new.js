const { log } = require("console");


let enneagram = ["1w9" , "1w2" , "2w1" , "2w3" , "3w2" , "3w4" , "4w3" , "4w5" ,
"5w4" , "5w6" , "6w5" , "6w7" , "7w6" , "7w8" , "8w7" , "8w9" , "9w8" , "9w1"];

let big5 = ["RCOAI" , "RCOAN" , "RLOAN" , "RLOAI" , "RLUAI" , "RLUAN" , "RCUAN" , 
"RCUAI" , "RCOEI" , "RCOEN" , "RLOEN" , "RLOEI" , "RLUEI" , "RLUEN" , "RCUEN" , 
"RCUEI" , "SCOAI" , "SCOAN" , "SLOAN" , "SLOAI" , "SLUAI" , "SLUAN" , "SCUAN" ,
"SCUAI" , "SCOEI" , "SCOEN" , "SLOEN" , "SLOEI" , "SLUEI" , "SLUEN" , "SCUEN" , "SCUEI"];

let InstinctualVariants = ["sp/sx" , "sp/so" , "sx/sp" , "sx/so" , "so/sp" , "so/sx"];

let AttitudinalPsyche = ["FVLE" , "FLVE" , "EVLF" , "ELVF" , "LVFE" , "LFVE" , "EVFL" , 
"EFVL" , "VLFE" , "VFLE" , "ELFV" , "EFLV" , "VFEL" , "VEFL" , "LFEV" , "LEFV" , "VLEF" , 
"VELF" , "FLEV" , "FELV" , "LVEF" , "LEVF" , "FVEL" , "FEVL"];

let Temperaments = ["Choleric [Dominant]" , "Melancholic [Dominant]" , "Phlegmatic [Dominant]" , 
"Sanguine [Dominant]" , "Choleric-Melancholic" , "Choleric-Phlegmatic" , "Choleric-Sanguine" , 
"Melancholic-Choleric" , "Melancholic-Phlegmatic" , "Melancholic-Sanguine" , "Phlegmatic-Choleric" , 
"Phlegmatic-Melancholic" , "Phlegmatic-Sanguine" , "Sanguine-Choleric" , "Sanguine-Melancholic" , "Sanguine-Phlegmatic"];

let mbti = ["ISTJ" , "ISTP" , "ISFJ" , "ISFP" , "INFJ" , "INFP" , "INTJ" , "INTP" ,
"ESTP" , "ESTJ" , "ESFP" , "ESFJ" ,  "ENFP" , "ENFJ" , "ENTP" , "ENTJ"];

let Socionics = ["LSI" , "SLI" , "ESI" , "SEI" , "EII" , "IEI" , "LII" , "ILI" , "SLE" , "LSE" , "SEE" , "ESE" , 
  "IEE" , "EIE" , "ILE" , "LIE"];


function pickSoc(word){
    clearWord= word[0] +word[1] +word[2]
    switch (clearWord) {
        case "IST":
            if (Math.floor(Math.random() * 10)>4) {
                return Socionics[0]
            }
            return Socionics[1]
            break;
            case "ISF":
                if (Math.floor(Math.random() * 10)>4) {
                    return Socionics[2]
                }
                return Socionics[3]
                break;
                case "INF":
            if (Math.floor(Math.random() * 10)>4) {
                return Socionics[4]
            }
            return Socionics[5]
            break;
            case "INT":
            if (Math.floor(Math.random() * 10)>4) {
                return Socionics[6]
            }
            return Socionics[7]
            break;
            case "EST":
            if (Math.floor(Math.random() * 10)>4) {
                return Socionics[8]
            }
            return Socionics[9]
            break;
            case "ESF":
            if (Math.floor(Math.random() * 10)>4) {
                return Socionics[10]
            }
            return Socionics[11]
            break;
            case "ENF":
            if (Math.floor(Math.random() * 10)>4) {
                return Socionics[12]
            }
            return Socionics[13]
            break;
            case "ENT":
            if (Math.floor(Math.random() * 10)>4) {
                return Socionics[14]
            }
            return Socionics[15]
            break;
        default:
            break;
    }
}

function tritypes(word){
    let final =""
    switch (parseInt(word[0])) {
        case 1:
            final+=randomtritype("1")
            break;
        case 2:
            final+=randomtritype("2")
            break;
        case 3:
            final+=randomtritype("3")
            break;
        case 4:
            final+=randomtritype("4")
            break;
        case 5:
            final+=randomtritype("5")
            break;
        case 6:
            final+=randomtritype("6")
            break;
        case 7:
            final+=randomtritype("7")
            break;
        case 8:
            final+=randomtritype("8")
            break;
        default:
            final+=randomtritype("9")
            break;
    }
    return final
}

function randomtritype(num){
    let big=[9,8,1]
    let mid=[7,6,5]
    let min=[4,3,2]
    let result=""
    if (num>4 && num<8 ) {
        let num1 = big[Math.floor(Math.random()*big.length)];
        let num2 = min[Math.floor(Math.random()*big.length)];
        if (Math.floor(Math.random() * 10)>4) {
            return result=num+num1+num2;
        }
        return result=num+num2+num1;
    }
    else if (num>1 && num<5 ) {
        let num1 = big[Math.floor(Math.random()*big.length)];
        let num2 = mid[Math.floor(Math.random()*big.length)];
        if (Math.floor(Math.random() * 10)>4) {
            return result=num+num1+num2;
        }
        return result=num+num2+num1;
    }
    else {
        let num1 = min[Math.floor(Math.random()*big.length)];
        let num2 = mid[Math.floor(Math.random()*big.length)];
        if (Math.floor(Math.random() * 10)>4) {
            return result=num+num1+num2;
        }
        return result=num+num2+num1;
    }
}

function generate(){
    let final=""
    let mbtipick=mbti[Math.floor(Math.random()*mbti.length)]
    let enneagrampick=enneagram[Math.floor(Math.random()*enneagram.length)]
    let InstinctualVariantsPick=InstinctualVariants[Math.floor(Math.random()*InstinctualVariants.length)]
    let Tritypespick= tritypes(enneagrampick)
    let Socionicspick = pickSoc(mbtipick)
    let Big5pick= big5[Math.floor(Math.random()*big5.length)]
    let AttitudinalPsychepick = AttitudinalPsyche[Math.floor(Math.random()*AttitudinalPsyche.length)]
    let Temperamentspick = Temperaments[Math.floor(Math.random()*Temperaments.length)]
    final= mbtipick + " , " + enneagrampick + " , " + InstinctualVariantsPick + " , " + Tritypespick + " , " 
        + Socionicspick + " , " + Big5pick + " , " + AttitudinalPsychepick + " , " + Temperamentspick
    
    return final
}


console.log(generate())
