let withoutUmbrella = ['clear', 'sunny', 'cloudy', 'overcast', 'windy']
let withUmbrella = ['rainy', 'thunderstorms']
let numUmbHome = 0
let numUmbWork = 0

function umb(w) {
    if (withUmbrella.includes(w)) return true
    else if (withoutUmbrella.includes(w)) return false
}

let wDay = ["windy", "windy", "clear", "clear", "clear", "windy", "clear", "windy", "windy", "clear", "clear", "windy", "windy", "clear", "sunny", "sunny", "clear", "sunny", "windy", "windy", "windy", "cloudy", "sunny", "clear", "sunny", "sunny", "cloudy", "windy", "sunny", "clear", "clear", "clear", "clear", "windy", "sunny", "sunny", "sunny", "windy", "clear", "windy", "sunny", "clear", "clear", "windy", "sunny", "windy", "rainy", "cloudy", "sunny", "cloudy", "thunderstorms", "windy", "sunny", "clear", "clear", "cloudy", "sunny", "sunny", "sunny", "clear", "clear", "windy", "clear", "windy", "clear", "clear", "windy", "sunny", "thunderstorms", "clear", "clear", "windy", "sunny", "sunny", "clear", "sunny", "clear", "rainy", "sunny", "sunny", "clear", "clear", "windy", "windy", "windy", "sunny", "clear", "clear", "windy", "windy", "clear", "clear", "windy", "sunny", "sunny", "sunny", "clear", "rainy", "windy", "windy"] //3
// ["sunny", "sunny", "rainy", "sunny", "clear", "rainy", "sunny", "sunny", "sunny", "sunny"] 6

for (var i in wDay) {
    if (i == 0) {
        if (umb(wDay[0])) {
            numUmbWork++
            numUmbHome+=0
        } else {
            numUmbWork+=0
            numUmbHome+=0
        }
    } else if (i % 2 != 0) {
        if (umb(wDay[i]) && umb(wDay[i - 1]) || !umb(wDay[i]) && !umb(wDay[i - 1])) {
            numUmbWork+=0
            numUmbHome+=0
        } else if (umb(wDay[i]) && !umb(wDay[i - 1])) {
            numUmbWork>0?numUmbWork--:numUmbWork+=0
            numUmbHome++
        } else if (!umb(wDay[i]) && umb(wDay[i - 1])) {
            numUmbWork+=0
            numUmbHome+=0
        }
    } else if (i % 2 == 0) {
        if (umb(wDay[i]) && umb(wDay[i - 1])) {
            numUmbWork++
            numUmbHome>0?numUmbHome--:numUmbHome+=0
        } else if (!umb(wDay[i]) && !umb(wDay[i - 1])) {
            numUmbWork+=0
            numUmbHome+=0
        } else if (umb(wDay[i]) && !umb(wDay[i - 1])) {
            numUmbWork++
            numUmbHome>0?numUmbHome--:numUmbHome+=0
        } else if (!umb(wDay[i]) && umb(wDay[i - 1])) {
            numUmbWork+=0
            numUmbHome+=0
        }
    }
}

console.log(numUmbHome + numUmbWork)

// function needAnUmb(w) {
//     const withUmbrella = ['rainy', 'thunderstorms']
//     if (withUmbrella.includes(w)) return true
//     else return false
// }

// function minUmbrellas(weather) {
//     let numUmb = 0
//     for (var pos in weather) {
//         if (pos == 0) {
//             if (needAnUmb(weather[0])) {
//                 numUmb++
//             }
//         } else {
//             if (needAnUmb(weather[pos]) && !needAnUmb(weather[pos - 1])) {
//                 numUmb++
//             }
//         }
//     }
//     return numUmb
// }

// console.log(minUmbrellas(["sunny", "windy", "sunny", "clear"]))