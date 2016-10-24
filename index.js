/*
  global atob
  global btoa
  global Zepto
  global $
*/

const localVersion = '0.0.5';

function classType(ap, honors) {
  if (ap) {
    return 'AP (+0.6)';
  } else if (honors) {
    return 'Honors (+0.3)';
  } else {
    return 'Regular';
  }
}

function generateTable(array, $) {
  for (let i = 0; i<(array.length - 1); i++) {
    $('tbody').append(` <tr>
                          <td>${array[i].title}</td>
                          <td>${array[i].trueGrade.toPrecision(4)}%</td>
                          <td>${array[i].mapsTo.toPrecision(2)}</td>
                          <td>${classType(array[i].ap, array[i].honors)}</td>
                        </tr>
                      `);
  }
}

const hashString = window.location.hash.substring(1);

Zepto(function($) {
  if (hashString === '') {
    $('#version-warning').remove();
    $('.show-if-valid').remove();
  }
  
  try {
    let remoteVersion = hashString.match(/&(.*)/)[1];
    let array = atob(window.location.hash.substring(1).replace(`&${remoteVersion}`, ''));
    array = JSON.parse(array);
    let trueGpa = array[array.length - 1].gpa;
    
    if (remoteVersion === localVersion) {
      $('#version-warning').remove();
    }
    
    $('#gpa').text(`GPA: ${trueGpa}`);
    generateTable(array, $);
    
    $('#share-url').val(`https://calucido.github.io/fh-gpa#${btoa(JSON.stringify([{gpa:trueGpa}]))}&${localVersion}`);
  }
  catch(e) {
    if (e.message === 'Unexpected end of JSON input') {
      $('.show-if-valid').remove();
    } else {
      throw new Error(e);
    }
  }
});