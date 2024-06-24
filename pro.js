let mesafe = +prompt('Mesafeni Qeyd Edin: ')
let suret = +prompt('Suretinizi qeyd edin: ')
let vaxt = mesafe/suret

let netice =' Şamaxıdan ' + mesafe + ' km mesafe ' + suret + ' km/saat olarsa biz ' + vaxt + ' saata catariq ';

document.getElementById('suret').innerHTML = netice;