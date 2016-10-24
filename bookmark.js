/* global btoa */

const version = '0.0.7';

let webClasses = document.querySelector('.progress-group-table').children[1].children
    , classes = [];
let mapsTo = function(input, ap, honors) {
    let working;
    if (93<=input) {
        working = 4.0;
    } else if (90<=input && input<=92) {
        working = 3.7;
    } else if (87<=input && input<=89) {
        working = 3.3;
    } else if (83<=input && input<=86) {
        working = 3.0;
    } else if (80<=input && input<=82) {
        working = 2.7;
    } else if (77<=input && input<=79) {
        working = 2.3;
    } else if (73<=input && input<=76) {
        working = 2.0;
    } else if (70<=input && input<=72) {
        working = 1.7;
    } else if (67<=input && input<=69) {
        working = 1.3;
    } else if (65<=input && input<=66) {
        working = 1.0;
    } else if (input<=64) {
        working = 0;
    } else if (typeof(input) === "object") {
        return null;
    }
    if (ap === true) {
        return working + 0.6;
    } else if (honors === true) {
        return working + 0.3;
    } else {
        return working;
    }
};

for (let i = 0; i<webClasses.length; i++) {
    let title = webClasses[i].children[0].children[0].children[0].innerText;
    let dirtyGrade = webClasses[i].children[3].children[0].children[0].children[0].children[2].children[0].textContent.replace(/ |%| /gi, '');
    
    let ap = title.match(/ap/gi) ? true : false;
    let honors = title.match(/honors/gi) ? true : false;
    let trueGrade = Number(dirtyGrade);
    
    if (isNaN(trueGrade) === false) {
        let grade = Math.round(trueGrade);
        classes.push({
            title,
            honors,
            ap,
            trueGrade,
            grade,
            mapsTo: mapsTo(grade, ap, honors)
        });
    }
}

function average() {
    let total = 0;
    for (let i in classes) { 
        total += classes[i].mapsTo;
    }
    return total/(classes.length);
}

classes.push({gpa: average()});

window.open(`https://calucido.github.io/fh-gpa/index.html#${btoa(JSON.stringify(classes))}&${version}`);

// bookmarklet link = javascript:(function()%7Bconst%20version%3D'0.0.7'%3Blet%20webClasses%3Ddocument.querySelector('.progress-group-table').children%5B1%5D.children%2Cclasses%3D%5B%5D%3Blet%20mapsTo%3Dfunction(input%2Cap%2Chonors)%7Blet%20working%3Bif(93%3C%3Dinput)%7Bworking%3D4.0%7Delse%20if(90%3C%3Dinput%26%26input%3C%3D92)%7Bworking%3D3.7%7Delse%20if(87%3C%3Dinput%26%26input%3C%3D89)%7Bworking%3D3.3%7Delse%20if(83%3C%3Dinput%26%26input%3C%3D86)%7Bworking%3D3.0%7Delse%20if(80%3C%3Dinput%26%26input%3C%3D82)%7Bworking%3D2.7%7Delse%20if(77%3C%3Dinput%26%26input%3C%3D79)%7Bworking%3D2.3%7Delse%20if(73%3C%3Dinput%26%26input%3C%3D76)%7Bworking%3D2.0%7Delse%20if(70%3C%3Dinput%26%26input%3C%3D72)%7Bworking%3D1.7%7Delse%20if(67%3C%3Dinput%26%26input%3C%3D69)%7Bworking%3D1.3%7Delse%20if(65%3C%3Dinput%26%26input%3C%3D66)%7Bworking%3D1.0%7Delse%20if(input%3C%3D64)%7Bworking%3D0%7Delse%20if(typeof(input)%3D%3D%3D%22object%22)%7Breturn%20null%7Dif(ap%3D%3D%3Dtrue)%7Breturn%20working%2B0.6%7Delse%20if(honors%3D%3D%3Dtrue)%7Breturn%20working%2B0.3%7Delse%7Breturn%20working%7D%7D%3Bfor(let%20i%3D0%3Bi%3CwebClasses.length%3Bi%2B%3D1)%7Blet%20title%3DwebClasses%5Bi%5D.children%5B0%5D.children%5B0%5D.children%5B0%5D.innerText%3Blet%20dirtyGrade%3DwebClasses%5Bi%5D.children%5B3%5D.children%5B0%5D.children%5B0%5D.children%5B0%5D.children%5B2%5D.children%5B0%5D.textContent.replace(%2F%20%7C%25%7C%C2%A0%2Fgi%2C'')%3Blet%20ap%3Dtitle.match(%2Fap%2Fgi)%3Ftrue%3Afalse%3Blet%20honors%3Dtitle.match(%2Fhonors%2Fgi)%3Ftrue%3Afalse%3Blet%20trueGrade%3DNumber(dirtyGrade)%3Bif(isNaN(trueGrade)%3D%3D%3Dfalse)%7Blet%20grade%3DMath.round(trueGrade)%3Bclasses.push(%7Bap%2Cgrade%2Chonors%2CmapsTo%3AmapsTo(grade%2Cap%2Chonors)%2Ctitle%2CtrueGrade%7D)%7D%7Dfunction%20average()%7Blet%20total%3D0%3Bfor(let%20i%20in%20classes)%7Btotal%2B%3Dclasses%5Bi%5D.mapsTo%7Dreturn%20total%2F(classes.length)%7Dclasses.push(%7Bgpa%3Aaverage()%7D)%3Bwindow.open(%60https%3A%2F%2Fcalucido.github.io%2Ffh-gpa%2Findex.html%23%24%7Bbtoa(JSON.stringify(classes))%7D%26%24%7B%20version%20%7D%60)%7D)()