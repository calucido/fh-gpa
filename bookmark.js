/* global btoa */

const version = '0.0.1';

let webClasses = document.querySelector('.progress-group-table').children[1].children
    , classes = [];
let mapsTo = function(input, ap, honors) {
    let working;
    if (93<=input) {
        working = 4.0;
    } else if (90<=input<=92) {
        working = 3.7;
    } else if (87<=input<=89) {
        working = 3.3;
    } else if (83<=input<=86) {
        working = 3.0;
    } else if (80<=input<=82) {
        working = 2.7;
    } else if (77<=input<=79) {
        working = 2.3;
    } else if (73<=input<=76) {
        working = 2.0;
    } else if (70<=input<=72) {
        working = 1.7;
    } else if (67<=input<=69) {
        working = 1.3;
    } else if (65<=input<=66) {
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

window.open(`https://fhs-gpa-clucido.c9users.io/index.html#${btoa(JSON.stringify(classes))}&${version}`);

// bookmarklet link = javascript:(function()%7Bconst%20version%20%3D%20'0.0.1'%3Blet%20webClasses%20%3D%20document.querySelector('.progress-group-table').children%5B1%5D.children%2C%20classes%20%3D%20%5B%5D%3Blet%20mapsTo%20%3D%20function(input%2C%20ap%2C%20honors)%20%7Blet%20working%3Bif%20(93%3C%3Dinput)%20%7Bworking%20%3D%204.0%3B%7D%20else%20if%20(90%3C%3Dinput%3C%3D92)%20%7Bworking%20%3D%203.7%3B%7D%20else%20if%20(87%3C%3Dinput%3C%3D89)%20%7Bworking%20%3D%203.3%3B%7D%20else%20if%20(83%3C%3Dinput%3C%3D86)%20%7Bworking%20%3D%203.0%3B%7D%20else%20if%20(80%3C%3Dinput%3C%3D82)%20%7Bworking%20%3D%202.7%3B%7D%20else%20if%20(77%3C%3Dinput%3C%3D79)%20%7Bworking%20%3D%202.3%3B%7D%20else%20if%20(73%3C%3Dinput%3C%3D76)%20%7Bworking%20%3D%202.0%3B%7D%20else%20if%20(70%3C%3Dinput%3C%3D72)%20%7Bworking%20%3D%201.7%3B%7D%20else%20if%20(67%3C%3Dinput%3C%3D69)%20%7Bworking%20%3D%201.3%3B%7D%20else%20if%20(65%3C%3Dinput%3C%3D66)%20%7Bworking%20%3D%201.0%3B%7D%20else%20if%20(input%3C%3D64)%20%7Bworking%20%3D%200%3B%7D%20else%20if%20(typeof(input)%20%3D%3D%3D%20%22object%22)%20%7Breturn%20null%3B%7Dif%20(ap%20%3D%3D%3D%20true)%20%7Breturn%20working%20%2B%200.6%3B%7D%20else%20if%20(honors%20%3D%3D%3D%20true)%20%7Breturn%20working%20%2B%200.3%3B%7D%20else%20%7Breturn%20working%3B%7D%7D%3Bfor%20(let%20i%20%3D%200%3B%20i%3CwebClasses.length%3B%20i%2B%2B)%20%7Blet%20title%20%3D%20webClasses%5Bi%5D.children%5B0%5D.children%5B0%5D.children%5B0%5D.innerText%3Blet%20dirtyGrade%20%3D%20webClasses%5Bi%5D.children%5B3%5D.children%5B0%5D.children%5B0%5D.children%5B0%5D.children%5B2%5D.children%5B0%5D.textContent.replace(%2F%20%7C%25%7C%C2%A0%2Fgi%2C%20'')%3Blet%20ap%20%3D%20title.match(%2Fap%2Fgi)%20%3F%20true%20%3A%20false%3Blet%20honors%20%3D%20title.match(%2Fhonors%2Fgi)%20%3F%20true%20%3A%20false%3Blet%20trueGrade%20%3D%20Number(dirtyGrade)%3Bif%20(isNaN(trueGrade)%20%3D%3D%3D%20false)%20%7Blet%20grade%20%3D%20Math.round(trueGrade)%3Bclasses.push(%7Btitle%2Chonors%2Cap%2CtrueGrade%2Cgrade%2CmapsTo%3A%20mapsTo(grade%2C%20ap%2C%20honors)%7D)%3B%7D%7Dfunction%20average()%20%7Blet%20total%20%3D%200%3Bfor%20(let%20i%20in%20classes)%20%7Btotal%20%2B%3D%20classes%5Bi%5D.mapsTo%3B%7Dreturn%20total%2F(classes.length)%3B%7Dclasses.push(%7Bgpa%3A%20average()%7D)%3Bwindow.open(%60https%3A%2F%2Ffhs-gpa-clucido.c9users.io%2Findex.html%23%24%7Bbtoa(JSON.stringify(classes))%7D%26%24%7Bversion%7D%60)%7D)()