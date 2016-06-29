// Styles for Google Maps. These de-emphasize features on the map.
var MAP_STYLE = [
    // to remove buildings
    {"stylers": [ {"visibility": "off" } ] },
    {"featureType": "water","stylers": [{"visibility": "simplified"} ] },
    {"featureType": "poi","stylers": [ {"visibility": "simplified"} ]},
    {"featureType": "transit","stylers": [{ "visibility": "off"}] },
    { "featureType": "landscape","stylers": [ { "visibility": "simplified" } ] },
    { "featureType": "road", "stylers": [{ "visibility": "simplified" } ] },
    { "featureType": "administrative",  "stylers": [{ "visibility": "simplified" } ] },
    // end remove buildings
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e3e3e3"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "color": "#cccccc"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#FFFFFF"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "color": "#94989C"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
];

function buildStaticStyle(styleStruct) {
  var style = "";
  for(var i = 0; i < styleStruct.length;i++){
    s = styleStruct[i];
    strs = [];
    if (s.featureType != null) strs.push( "feature:" + s.featureType );
    if (s.elementType != null) strs.push( "element:" + s.elementType );
    if (s.stylers != null) {
      for (var j=0;j<s.stylers.length;j++) {
        for (var key in s.stylers[j]){
          strs.push( key + ":" + s.stylers[j][key].replace(/#/, '0x') );
        }
      }
    }
    var str = "&style=" + strs.join("%7C");
    style += str;
  }
  return style;
}

var STATIC_MAP_STYLE = buildStaticStyle(MAP_STYLE);
var popular_photos = [{"date": " 1890", "loc": "Ravenna", "height": 150, "id": "1073321872736310", "desc": "Veduta del giardino di Palazzo Rasponi, il Palazzo della Provincia, chiamato anche \"Pincetto\". "}, {"date": " 1935", "loc": "Ravenna", "height": 150, "id": "1072945076107323", "desc": "Piazza Byron , l'anno prima che si chiamasse Piazza San Francesco, il Palazzo della Provincia e la cancellata della Zona del Silenzio. "}, {"date": " Anni '70", "loc": "Ravenna", "height": 133, "id": "1071787619556402", "desc": "Piazza Andrea Costa e Via IV Novembre. "}, {"date": " Anni '60", "loc": "Ravenna", "height": 136, "id": "1071769459558218", "desc": "Il Villaggio del Sole a Marina Romea. "}, {"date": " Anni '50", "loc": "Ravenna", "height": 139, "id": "1071218706279960", "desc": "Veduta aerea del centro di Ravenna. "}, {"date": " Anni '30", "loc": "Ravenna", "height": 134, "id": "1070552166346614", "desc": "Piazza Vittorio Emanuele ora Piazza del Popolo. "}, {"date": " 1928", "loc": "Ravenna", "height": 150, "id": "1069965733071924", "desc": "Piazza Byron oggi Piazza San Francesco. Il palazzo della provincia e la statua di Garibaldi. "}, {"date": " 1890", "loc": "Ravenna", "height": 267, "id": "1069955206406310", "desc": "Il Giardino di Palazzo Rasponi all'epoca dell'Hotel Byron , conosciuto come il Pincetto. "}, {"date": " Primi anni 2000", "loc": "Ravenna", "height": 150, "id": "1069356523132845", "desc": "Il Baretto di Marina di Ravenna. "}, {"date": " Primi anni del '900", "loc": "Ravenna", "height": 123, "id": "1068670126534818", "desc": "Piazza Vittorio Emanuele ora Piazza del Popolo. "}, {"date": " 1964", "loc": "Ravenna", "height": 138, "id": "1068034286598402", "desc": "Viale della Pace ora Viale delle Nazioni a Marina di Ravenna. "}, {"date": " 1934", "loc": "Ravenna", "height": 267, "id": "1068026233265874", "desc": "Il Volto Perelli in via Serafino Ferruzzi, in origine veniva chiamato e' vulton d' parell. "}, {"date": " 1935", "loc": "Ravenna", "height": 124, "id": "1067235916678239", "desc": "Il molo di Marina di Ravenna visto dal faro. "}, {"date": " 1934", "loc": "Ravenna", "height": 267, "id": "1066856443382853", "desc": "Via Cairoli. "}, {"date": " 1954", "loc": "Ravenna", "height": 150, "id": "1066200690115095", "desc": "Viale dei Navigatori a Punta Marina e in fondo la strada per Ravenna. "}, {"date": " Primi anni del '900 ", "loc": "Ravenna", "height": 300, "id": "1066180560117108", "desc": "Piazza Vittorio Emanuele ora Piazza del Popolo. Il palazzo dell'orologio quando ancora al suo interno c'era la macelleria comunale. "}, {"date": " Fine '800", "loc": "Ravenna", "height": 127, "id": "1065566223511875", "desc": "Via Maggiore. "}, {"date": " 1955", "loc": "Ravenna", "height": 140, "id": "1064962230238941", "desc": "L'interno del Teatro Alighieri. "}, {"date": " Anni '50", "loc": "Ravenna", "height": 121, "id": "1064420116959819", "desc": "La Basilica Ursiana vista da Piazza Arcivescovado. "}, {"date": " Primi anni del '900", "loc": "Ravenna", "height": 267, "id": "1064406663627831", "desc": "Piazza del Popolo e l'arco scemo del palazzo comunale. "}, {"date": " Anni 2000", "loc": "Ravenna", "height": 150, "id": "1063882070346957", "desc": "Il Baretto sul molo di Marina di Ravenna. "}, {"date": " Fine '800 ", "loc": "Ravenna", "height": 133, "id": "1063858557015975", "desc": "Viale Farini. "}, {"date": " Anni '50", "loc": "Ravenna", "height": 287, "id": "1063298413738656", "desc": "La spiaggia di Marina di Ravenna. "}, {"date": " 1957", "loc": "Ravenna", "height": 140, "id": "1063217297080101", "desc": "La zona dantesca e la chiesa di San Francesco. "}, {"date": " Anni '80", "loc": "Ravenna", "height": 193, "id": "1062662010468963", "desc": "Il Bar Masters in Piazza del Popolo. "}, {"date": " 1904", "loc": "Ravenna", "height": 145, "id": "1062468703821627", "desc": "L' Esposizione Romgnola ai giardini pubblici. "}, {"date": " 1947", "loc": "Ravenna", "height": 133, "id": "1061996200535544", "desc": "Il nuovo faro di Marina di Ravenna. "}, {"date": " 1910", "loc": "Ravenna", "height": 267, "id": "1061963593872138", "desc": "Porta Pamphilia detta Porta Nuova e Porta Garibaldi. Dietro la porta si intravede la Caserma Garibaldi. "}, {"date": " Primi anni del '900", "loc": "Ravenna", "height": 125, "id": "1061355290599635", "desc": "Il Duomo. "}, {"date": " Primi anni del '900", "loc": "Ravenna", "height": 267, "id": "1060787390656425", "desc": "Il Canale Molino nel Borgo San Rocco. "}, {"date": " Primi anni del '900", "loc": "Ravenna", "height": 123, "id": "1060759530659211", "desc": "La Loggetta Lombardesca. "}, {"date": " Primi anni del '900 ", "loc": "Ravenna", "height": 150, "id": "1060242764044221", "desc": "Porto Corsini poi Marina di Ravenna. Pescherecci di ritorno da una giornata di pesca. "}, {"date": " Primi anni del '900 ", "loc": "Ravenna", "height": 138, "id": "1060230940712070", "desc": "La Basilica di Sant'Apollinare in Classe. "}, {"date": " 1971", "loc": "Ravenna", "height": 150, "id": "1059664094102088", "desc": "Il ponte di barche sulla Baiona a Porto Corsini. "}, {"date": " 2006", "loc": "Ravenna", "height": 150, "id": "1059117044156793", "desc": "Il Baretto di Marina di Ravenna. "}, {"date": " Anni '60", "loc": "Ravenna", "height": 136, "id": "1059108397490991", "desc": "Piazza Garibaldi a Cervia. "}, {"date": " Anni '60", "loc": "Ravenna", "height": 139, "id": "1059096627492168", "desc": "San Giovanni Evangelista. "}, {"date": " Primi anni del '900", "loc": "Ravenna", "height": 127, "id": "1058901024178395", "desc": "Via Romolo Ricci nel Borgo San Rocco. "}, {"date": " Anni '70", "loc": "Ravenna", "height": 138, "id": "1057987720936392", "desc": "Piazza del Popolo. "}, {"date": " 1898", "loc": "Ravenna", "height": 150, "id": "1057142801020884", "desc": "Il Capanno Garibaldi, chiamato Portonaccio dove la notte fra il 6 e 7 Agosto 1849 si rifugi\u00f2 Garibaldi. Il 2 Giugno, come ogni anno, la societ\u00e0 conservatrice del Capanno, nata nel 1882, ricorda l'eroe deponendo una corona in Piazza Garibaldi. "}, {"date": " Anni '30", "loc": "Ravenna", "height": 125, "id": "1056779571057207", "desc": "Via di Roma. "}, {"date": " Anni 2000", "loc": "Ravenna", "height": 150, "id": "1056140467787784", "desc": "Fuochi d'artificio sul molo a Marina di Ravenna. "}, {"date": " Anni '20", "loc": "Ravenna", "height": 123, "id": "1056110037790827", "desc": "Piazza Anita Garibaldi. "}, {"date": " Anni '50", "loc": "Ravenna", "height": 132, "id": "1055627237839107", "desc": "Via Gordini. "}, {"date": " 1939", "loc": "Ravenna", "height": 150, "id": "1055600827841748", "desc": "Piazza Garibaldi. "}, {"date": " Anni '70", "loc": "Ravenna", "height": 126, "id": "1055093831225781", "desc": "Il lungomare D'Annunzio a Cervia. "}, {"date": " 1989", "loc": "Ravenna", "height": 118, "id": "1055077561227408", "desc": "Il Pala de Andr\u00e8 in costruzione. "}, {"date": " 1941", "loc": "Ravenna", "height": 267, "id": "1054490311286133", "desc": "L' allestimento delle protezioni contro i bombardamenti della Seconda Guerra Mondiale sulla tomba di Dante. "}, {"date": " Primi anni 2000", "loc": "Ravenna", "height": 132, "id": "1052636378138193", "desc": "Il Circolo Forestieri a Marina di Ravenna. "}, {"date": " 1905 ", "loc": "Ravenna", "height": 150, "id": "1052384984829999", "desc": "il mercato in Piazza Vittorio Emanuele ora Piazza del Popolo. "}, {"date": " 1971", "loc": "Ravenna", "height": 204, "id": "1051334828268348", "desc": "La zona della Darsena vista da Via Magazzini Posteriori. "}, {"date": " Anni '70", "loc": "Ravenna", "height": 129, "id": "1050724178329413", "desc": "La Strada che collega  Marina di Ravenna a Ravenna. "}, {"date": " 1955", "loc": "Ravenna", "height": 143, "id": "1049912945077203", "desc": "Il Torpedone della compagnia di trasporti SITA davanti a Sant'Apollinare in Classe. "}, {"date": " Anni '50 ", "loc": "Ravenna", "height": 150, "id": "1049893335079164", "desc": "La fontana dell'acqua pisciolina in Piazzale dei Mille a Marina di Ravenna. "}, {"date": " 1955", "loc": "Ravenna", "height": 93, "id": "1049574691777695", "desc": "Il deposito di autobus di Ravenna. Da Sinistra: Alfa Romeo 800A Macchi, Lancia Esatau P Garavini, Alfa 800 A Menarini, Alfa 800 A MAcdchi, Alfa 455A Menarini, Alfa 800 A Macchi, Fiat 682 RN Cansa, Lancia Esatau p. Menarini. "}, {"date": " 1921", "loc": "Ravenna", "height": 133, "id": "1048647155203782", "desc": "Il mercato del pesce a Porto Corsini ora Marina di Ravenna. "}, {"date": " Primi anni del '900", "loc": "Ravenna", "height": 284, "id": "1048279491907215", "desc": "Il Battistero Neoniano e il campanile del Duomo. "}, {"date": " Anni '60", "loc": "Ravenna", "height": 142, "id": "1048059518595879", "desc": "La Rocca Brancaleone. "}, {"date": " Anni '70", "loc": "Ravenna", "height": 135, "id": "1047740435294454", "desc": "Marina di Ravenna. "}, {"date": " 1890", "loc": "Ravenna", "height": 150, "id": "1047717821963382", "desc": "Chiesa sconsacrata  di San Girolamo in piazza del Duomo. Nel 1798 serv\u00ec da magazzino per il foraggio della cavalleria francese. "}, {"date": " 1934", "loc": "Ravenna", "height": 150, "id": "1047108912024273", "desc": "La costruzione di Piazza Kennedy. "}, {"date": " Anni '40", "loc": "Ravenna", "height": 124, "id": "1047089182026246", "desc": "Santa Maria in Porto e a destra la vecchia Caserma Garibaldi. "}, {"date": " Anni '70", "loc": "Ravenna", "height": 148, "id": "1046576175410880", "desc": "Il Circolo Forestieri - Club Le Ruote a Marina di Ravenna. "}, {"date": " Anni '70", "loc": "Ravenna", "height": 139, "id": "1046542508747580", "desc": "Porta Adriana. "}, {"date": " 1928", "loc": "Ravenna", "height": 150, "id": "1045981855470312", "desc": "Ponte mobile tra Via D'Alaggio e lo scalo dei cereali della P.I.R. a Marina di Ravenna. "}, {"date": " Anni '70", "loc": "Ravenna", "height": 133, "id": "1044867902248374", "desc": "Piazza del Popolo. "}, {"date": " Anni '60", "loc": "Ravenna", "height": 278, "id": "1044864742248690", "desc": "Via Mazzini all'altezza di Piazza dei Caduti. "}, {"date": " 1969", "loc": "Ravenna", "height": 140, "id": "1044315525636945", "desc": "Il lungomare Grazia Deledda e la Colonia Dante a Cervia. "}, {"date": " Anni '50", "loc": "Ravenna", "height": 129, "id": "1044312618970569", "desc": "Punta Marina. "}, {"date": " Anni '70", "loc": "Ravenna", "height": 124, "id": "1044143788987452", "desc": "Piazza del Popolo. "}, {"date": " 1920", "loc": "Ravenna", "height": 150, "id": "1043752915693206", "desc": "Porto Corsini ora Marina di Ravenna.Turisti salgono sul traghetto per attraversare il Candiano. "}, {"date": " Anni '70", "loc": "Ravenna", "height": 293, "id": "1043747649027066", "desc": "Porta Sisi e Via Mazzini. "}, {"date": " 1966", "loc": "Ravenna", "height": 136, "id": "1043212862413878", "desc": "Il lungomare Grazia Deledda a Cervia. "}, {"date": " 1930", "loc": "Ravenna", "height": 150, "id": "1043174309084400", "desc": "Via Mazzini, nel tratto che ora \u00e8 Via Corrado Ricci, e il negozio degli idraulici Mazzavillani e Ravaioli davanti alla chiesa si San Francesco. "}, {"date": " Anni '70", "loc": "Ravenna", "height": 139, "id": "1042521529149678", "desc": "La Darsena. "}, {"date": " 1943", "loc": "Ravenna", "height": 147, "id": "1042511512484013", "desc": "Opere murarie poste a protezione del Mausoleo di Galla Placidia per preservarlo dai bombardamenti della Seconda Guerra Mondiale. "}, {"date": " Anni '70", "loc": "Ravenna", "height": 150, "id": "1042367009165130", "desc": "L' interno della Ca' de Ven in in Via Corrado Ricci. "}, {"date": " 1942", "loc": "Ravenna", "height": 267, "id": "1042046112530553", "desc": "Via Ponte Marino e il Mercato Coperto. "}, {"date": " Primi anni del '900", "loc": "Ravenna", "height": 136, "id": "1040864219315409", "desc": "Porta Sisi nel Borgo San Rocco. "}, {"date": " 2007", "loc": "Ravenna", "height": 150, "id": "1040667502668414", "desc": "Il Baretto sul molo di Marina di Ravenna. "}, {"date": " Anni '40", "loc": "Ravenna", "height": 120, "id": "1040326906035807", "desc": "Viale Roma a Cervia "}, {"date": " Anni '30", "loc": "Ravenna", "height": 240, "id": "1040316489370182", "desc": "L' entrata del Mercato Coperto. "}, {"date": " 1911", "loc": "Ravenna", "height": 301, "id": "1039703829431448", "desc": "Il Portonaccio nel Borgo San Rocco. "}, {"date": " 1912", "loc": "Ravenna", "height": 300, "id": "1039531349448696", "desc": "Piazza Andrea Costa. "}, {"date": " Anni '70", "loc": "Ravenna", "height": 140, "id": "1039115366156961", "desc": "Piazza Dora Markus a Marina di Ravenna. "}, {"date": " Anni '80", "loc": "Ravenna", "height": 124, "id": "1038907012844463", "desc": "L' Enoteca Bastione. "}, {"date": " Anni '30", "loc": "Ravenna", "height": 128, "id": "1037972072937957", "desc": "Turisti al Gran Hotel Pineta di Marina di Ravenna, distrutto durante la Seconda Guerra Mondiale. "}, {"date": " Anni '60", "loc": "Ravenna", "height": 139, "id": "1037766602958504", "desc": "Piazza Anita Garibaldi e Viale Farini. "}, {"date": " Anni '90", "loc": "Ravenna", "height": 204, "id": "1037417769660054", "desc": "L' interno della discoteca Santa F\u00e9 a Marina di Ravenna. "}, {"date": " 2015", "loc": "Ravenna", "height": 152, "id": "1036793566389141", "desc": "I mosaici della Basilica di San Michele in Africisco, oggi sconsacrata, sita in piazza Andrea Costa, conservati al Bode Museum di Berlino. "}];
var fb_links = [{"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1073321872736310/?type=3", "id": "1073321872736310"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1072945076107323/?type=3", "id": "1072945076107323"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1071787619556402/?type=3", "id": "1071787619556402"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1071769459558218/?type=3", "id": "1071769459558218"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1071218706279960/?type=3", "id": "1071218706279960"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1070552166346614/?type=3", "id": "1070552166346614"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1069965733071924/?type=3", "id": "1069965733071924"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1069955206406310/?type=3", "id": "1069955206406310"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1069356523132845/?type=3", "id": "1069356523132845"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1068670126534818/?type=3", "id": "1068670126534818"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1068034286598402/?type=3", "id": "1068034286598402"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1068026233265874/?type=3", "id": "1068026233265874"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1067235916678239/?type=3", "id": "1067235916678239"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1066856443382853/?type=3", "id": "1066856443382853"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1066200690115095/?type=3", "id": "1066200690115095"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1066180560117108/?type=3", "id": "1066180560117108"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1065566223511875/?type=3", "id": "1065566223511875"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1064962230238941/?type=3", "id": "1064962230238941"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1064420116959819/?type=3", "id": "1064420116959819"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1064406663627831/?type=3", "id": "1064406663627831"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1063882070346957/?type=3", "id": "1063882070346957"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1063858557015975/?type=3", "id": "1063858557015975"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1063298413738656/?type=3", "id": "1063298413738656"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1063217297080101/?type=3", "id": "1063217297080101"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1062662010468963/?type=3", "id": "1062662010468963"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1062468703821627/?type=3", "id": "1062468703821627"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1061996200535544/?type=3", "id": "1061996200535544"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1061963593872138/?type=3", "id": "1061963593872138"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1061355290599635/?type=3", "id": "1061355290599635"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1060787390656425/?type=3", "id": "1060787390656425"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1060759530659211/?type=3", "id": "1060759530659211"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1060242764044221/?type=3", "id": "1060242764044221"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1060230940712070/?type=3", "id": "1060230940712070"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1059664094102088/?type=3", "id": "1059664094102088"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1059117044156793/?type=3", "id": "1059117044156793"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1059108397490991/?type=3", "id": "1059108397490991"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1059096627492168/?type=3", "id": "1059096627492168"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1058901024178395/?type=3", "id": "1058901024178395"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1057987720936392/?type=3", "id": "1057987720936392"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1057142801020884/?type=3", "id": "1057142801020884"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1056779571057207/?type=3", "id": "1056779571057207"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1056140467787784/?type=3", "id": "1056140467787784"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1056110037790827/?type=3", "id": "1056110037790827"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1055627237839107/?type=3", "id": "1055627237839107"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1055600827841748/?type=3", "id": "1055600827841748"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1055093831225781/?type=3", "id": "1055093831225781"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1055077561227408/?type=3", "id": "1055077561227408"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1054490311286133/?type=3", "id": "1054490311286133"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1052636378138193/?type=3", "id": "1052636378138193"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1052384984829999/?type=3", "id": "1052384984829999"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1051334828268348/?type=3", "id": "1051334828268348"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1050724178329413/?type=3", "id": "1050724178329413"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1049912945077203/?type=3", "id": "1049912945077203"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1049893335079164/?type=3", "id": "1049893335079164"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1049574691777695/?type=3", "id": "1049574691777695"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1048647155203782/?type=3", "id": "1048647155203782"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1048279491907215/?type=3", "id": "1048279491907215"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1048059518595879/?type=3", "id": "1048059518595879"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1047740435294454/?type=3", "id": "1047740435294454"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1047717821963382/?type=3", "id": "1047717821963382"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1047108912024273/?type=3", "id": "1047108912024273"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1047089182026246/?type=3", "id": "1047089182026246"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1046576175410880/?type=3", "id": "1046576175410880"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1046542508747580/?type=3", "id": "1046542508747580"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1045981855470312/?type=3", "id": "1045981855470312"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1044867902248374/?type=3", "id": "1044867902248374"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1044864742248690/?type=3", "id": "1044864742248690"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1044315525636945/?type=3", "id": "1044315525636945"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1044312618970569/?type=3", "id": "1044312618970569"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1044143788987452/?type=3", "id": "1044143788987452"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1043752915693206/?type=3", "id": "1043752915693206"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1043747649027066/?type=3", "id": "1043747649027066"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1043212862413878/?type=3", "id": "1043212862413878"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1043174309084400/?type=3", "id": "1043174309084400"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1042521529149678/?type=3", "id": "1042521529149678"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1042511512484013/?type=3", "id": "1042511512484013"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1042367009165130/?type=3", "id": "1042367009165130"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1042046112530553/?type=3", "id": "1042046112530553"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1040864219315409/?type=3", "id": "1040864219315409"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1040667502668414/?type=3", "id": "1040667502668414"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1040326906035807/?type=3", "id": "1040326906035807"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1040316489370182/?type=3", "id": "1040316489370182"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1039703829431448/?type=3", "id": "1039703829431448"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1039531349448696/?type=3", "id": "1039531349448696"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1039115366156961/?type=3", "id": "1039115366156961"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1038907012844463/?type=3", "id": "1038907012844463"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1037972072937957/?type=3", "id": "1037972072937957"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1037766602958504/?type=3", "id": "1037766602958504"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1037417769660054/?type=3", "id": "1037417769660054"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1036793566389141/?type=3", "id": "1036793566389141"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1036786543056510/?type=3", "id": "1036786543056510"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1036600099741821/?type=3", "id": "1036600099741821"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1036224399779391/?type=3", "id": "1036224399779391"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1036210496447448/?type=3", "id": "1036210496447448"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1035982683136896/?type=3", "id": "1035982683136896"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1034960419905789/?type=3", "id": "1034960419905789"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1034950629906768/?type=3", "id": "1034950629906768"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1034353389966492/?type=3", "id": "1034353389966492"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1034150029986828/?type=3", "id": "1034150029986828"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1034104126658085/?type=3", "id": "1034104126658085"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1033746506693847/?type=3", "id": "1033746506693847"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1033577143377450/?type=3", "id": "1033577143377450"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1033514960050335/?type=3", "id": "1033514960050335"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1033194476749050/?type=3", "id": "1033194476749050"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1032967800105051/?type=3", "id": "1032967800105051"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1032633840138447/?type=3", "id": "1032633840138447"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1032625216805976/?type=3", "id": "1032625216805976"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1032617366806761/?type=3", "id": "1032617366806761"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1032427613492403/?type=3", "id": "1032427613492403"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1032078566860641/?type=3", "id": "1032078566860641"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1032070870194744/?type=3", "id": "1032070870194744"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1032063590195472/?type=3", "id": "1032063590195472"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1031818350219996/?type=3", "id": "1031818350219996"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1031416870260144/?type=3", "id": "1031416870260144"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1031409976927500/?type=3", "id": "1031409976927500"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1031389066929591/?type=3", "id": "1031389066929591"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1031154066953091/?type=3", "id": "1031154066953091"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1030768843658280/?type=3", "id": "1030768843658280"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1030756916992806/?type=3", "id": "1030756916992806"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1030704273664737/?type=3", "id": "1030704273664737"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1030470793688085/?type=3", "id": "1030470793688085"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1029838817084616/?type=3", "id": "1029838817084616"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1029462533788911/?type=3", "id": "1029462533788911"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1029228560478975/?type=3", "id": "1029228560478975"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1028910320510799/?type=3", "id": "1028910320510799"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1028875493847615/?type=3", "id": "1028875493847615"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1028291513906013/?type=3", "id": "1028291513906013"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1028286863906478/?type=3", "id": "1028286863906478"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1027021427366355/?type=3", "id": "1027021427366355"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1027014114033753/?type=3", "id": "1027014114033753"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1027008944034270/?type=3", "id": "1027008944034270"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1026183740783457/?type=3", "id": "1026183740783457"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1025588957509602/?type=3", "id": "1025588957509602"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1025578424177322/?type=3", "id": "1025578424177322"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1025282217540276/?type=3", "id": "1025282217540276"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1024807824254382/?type=3", "id": "1024807824254382"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1024536794281485/?type=3", "id": "1024536794281485"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1024195294315635/?type=3", "id": "1024195294315635"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1023482214386943/?type=3", "id": "1023482214386943"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1023471717721326/?type=3", "id": "1023471717721326"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1021587657909732/?type=3", "id": "1021587657909732"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1021576067910891/?type=3", "id": "1021576067910891"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1020672508001247/?type=3", "id": "1020672508001247"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1020276081374223/?type=3", "id": "1020276081374223"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1020230328045465/?type=3", "id": "1020230328045465"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1019623751439456/?type=3", "id": "1019623751439456"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1018641454871019/?type=3", "id": "1018641454871019"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1018231868245311/?type=3", "id": "1018231868245311"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1016491015086063/?type=3", "id": "1016491015086063"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1016479768420521/?type=3", "id": "1016479768420521"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1015528641848967/?type=3", "id": "1015528641848967"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1015516945183470/?type=3", "id": "1015516945183470"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1015508111851020/?type=3", "id": "1015508111851020"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1014131201988711/?type=3", "id": "1014131201988711"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1013393622062469/?type=3", "id": "1013393622062469"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1012938732107958/?type=3", "id": "1012938732107958"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1012861328782365/?type=3", "id": "1012861328782365"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1012202455514919/?type=3", "id": "1012202455514919"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1012170228851475/?type=3", "id": "1012170228851475"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1011854012216430/?type=3", "id": "1011854012216430"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1010209009047597/?type=3", "id": "1010209009047597"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1010201895714975/?type=3", "id": "1010201895714975"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1010179069050591/?type=3", "id": "1010179069050591"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1009938355741329/?type=3", "id": "1009938355741329"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1009221662479665/?type=3", "id": "1009221662479665"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1009153359153162/?type=3", "id": "1009153359153162"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1008798812521950/?type=3", "id": "1008798812521950"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1008158962585935/?type=3", "id": "1008158962585935"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1008142545920910/?type=3", "id": "1008142545920910"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1008136352588196/?type=3", "id": "1008136352588196"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1007869535948211/?type=3", "id": "1007869535948211"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1007352162666615/?type=3", "id": "1007352162666615"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1007348182667013/?type=3", "id": "1007348182667013"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1007335919334906/?type=3", "id": "1007335919334906"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1006982509370247/?type=3", "id": "1006982509370247"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1006473856087779/?type=3", "id": "1006473856087779"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1006214202780411/?type=3", "id": "1006214202780411"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1005577386177426/?type=3", "id": "1005577386177426"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1003102049758293/?type=3", "id": "1003102049758293"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1003094016425763/?type=3", "id": "1003094016425763"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1003080443093787/?type=3", "id": "1003080443093787"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1002344566500708/?type=3", "id": "1002344566500708"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1001586589909839/?type=3", "id": "1001586589909839"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1001424973259334/?type=3", "id": "1001424973259334"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1001309069937591/?type=3", "id": "1001309069937591"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1000901469978351/?type=3", "id": "1000901469978351"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1000870606648104/?type=3", "id": "1000870606648104"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1000176663384165/?type=3", "id": "1000176663384165"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/1000161390052359/?type=3", "id": "1000161390052359"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/999470640121434/?type=3", "id": "999470640121434"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/998156946919470/?type=3", "id": "998156946919470"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/998143060254192/?type=3", "id": "998143060254192"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/997591433642688/?type=3", "id": "997591433642688"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/997585823643249/?type=3", "id": "997585823643249"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/997578733643958/?type=3", "id": "997578733643958"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/996930790375419/?type=3", "id": "996930790375419"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/996905313711300/?type=3", "id": "996905313711300"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/996685420399956/?type=3", "id": "996685420399956"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/996381307097034/?type=3", "id": "996381307097034"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/996304110438087/?type=3", "id": "996304110438087"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/996154343786397/?type=3", "id": "996154343786397"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/995793937155771/?type=3", "id": "995793937155771"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/995190710549427/?type=3", "id": "995190710549427"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/995181363883695/?type=3", "id": "995181363883695"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/994645203937311/?type=3", "id": "994645203937311"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/994084797326685/?type=3", "id": "994084797326685"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/994032330665265/?type=3", "id": "994032330665265"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/993551260713372/?type=3", "id": "993551260713372"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/993541494047682/?type=3", "id": "993541494047682"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/993536200714878/?type=3", "id": "993536200714878"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/993001277435037/?type=3", "id": "993001277435037"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/992958880772610/?type=3", "id": "992958880772610"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/992794410789057/?type=3", "id": "992794410789057"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/992767784125053/?type=3", "id": "992767784125053"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/991842037550961/?type=3", "id": "991842037550961"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/991309800937518/?type=3", "id": "991309800937518"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/991299650938533/?type=3", "id": "991299650938533"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/990773897657775/?type=3", "id": "990773897657775"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/990761837658981/?type=3", "id": "990761837658981"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/990537294348102/?type=3", "id": "990537294348102"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/989955131072985/?type=3", "id": "989955131072985"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/989948211073677/?type=3", "id": "989948211073677"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/989914637743701/?type=3", "id": "989914637743701"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/989289244472907/?type=3", "id": "989289244472907"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/989285851139913/?type=3", "id": "989285851139913"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/989279474473884/?type=3", "id": "989279474473884"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/988721667862998/?type=3", "id": "988721667862998"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/988715971196901/?type=3", "id": "988715971196901"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/988557107879454/?type=3", "id": "988557107879454"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/988540437881121/?type=3", "id": "988540437881121"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/987923344609497/?type=3", "id": "987923344609497"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/986448218090343/?type=3", "id": "986448218090343"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/986434884758343/?type=3", "id": "986434884758343"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/986416694760162/?type=3", "id": "986416694760162"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/985902271478271/?type=3", "id": "985902271478271"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/985895684812263/?type=3", "id": "985895684812263"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/985889938146171/?type=3", "id": "985889938146171"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/985363114865520/?type=3", "id": "985363114865520"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/985357398199425/?type=3", "id": "985357398199425"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/985350251533473/?type=3", "id": "985350251533473"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/985337621534736/?type=3", "id": "985337621534736"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/984489714952860/?type=3", "id": "984489714952860"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/984046058330559/?type=3", "id": "984046058330559"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/984028131665685/?type=3", "id": "984028131665685"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/983662305035601/?type=3", "id": "983662305035601"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/983519751716523/?type=3", "id": "983519751716523"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/983168398418325/?type=3", "id": "983168398418325"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/983154641753034/?type=3", "id": "983154641753034"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/982599761808522/?type=3", "id": "982599761808522"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/982401925161639/?type=3", "id": "982401925161639"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/982066795195152/?type=3", "id": "982066795195152"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/982061685195663/?type=3", "id": "982061685195663"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/982049495196882/?type=3", "id": "982049495196882"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/981508698584295/?type=3", "id": "981508698584295"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/981478885253943/?type=3", "id": "981478885253943"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/980957578639407/?type=3", "id": "980957578639407"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/980944008640764/?type=3", "id": "980944008640764"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/980872318647933/?type=3", "id": "980872318647933"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/980767631991735/?type=3", "id": "980767631991735"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/980440565357775/?type=3", "id": "980440565357775"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/980198965381935/?type=3", "id": "980198965381935"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/979882205413611/?type=3", "id": "979882205413611"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/979843918750773/?type=3", "id": "979843918750773"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/979709458764219/?type=3", "id": "979709458764219"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/979382452130253/?type=3", "id": "979382452130253"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/979375278797637/?type=3", "id": "979375278797637"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/979168542151644/?type=3", "id": "979168542151644"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/978829405518891/?type=3", "id": "978829405518891"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/978826885519143/?type=3", "id": "978826885519143"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/978340545567777/?type=3", "id": "978340545567777"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/978327862235712/?type=3", "id": "978327862235712"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/978149388920226/?type=3", "id": "978149388920226"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/977766475625184/?type=3", "id": "977766475625184"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/977750735626758/?type=3", "id": "977750735626758"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/977600432308455/?type=3", "id": "977600432308455"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/977538282314670/?type=3", "id": "977538282314670"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/977222335679598/?type=3", "id": "977222335679598"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/977162142352284/?type=3", "id": "977162142352284"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/977042955697536/?type=3", "id": "977042955697536"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/976990749036090/?type=3", "id": "976990749036090"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/976659735735858/?type=3", "id": "976659735735858"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/976530999082065/?type=3", "id": "976530999082065"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/976210445780787/?type=3", "id": "976210445780787"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/976169602451538/?type=3", "id": "976169602451538"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/975969972471501/?type=3", "id": "975969972471501"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/975630295838802/?type=3", "id": "975630295838802"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/975591382509360/?type=3", "id": "975591382509360"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/975421049193060/?type=3", "id": "975421049193060"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/975128535888978/?type=3", "id": "975128535888978"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/975116922556806/?type=3", "id": "975116922556806"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/975105045891327/?type=3", "id": "975105045891327"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/974966805905151/?type=3", "id": "974966805905151"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/974584602610038/?type=3", "id": "974584602610038"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/974572269277938/?type=3", "id": "974572269277938"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/974417812626717/?type=3", "id": "974417812626717"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/974126449322520/?type=3", "id": "974126449322520"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/974097755992056/?type=3", "id": "974097755992056"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/973948599340305/?type=3", "id": "973948599340305"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/973651842703314/?type=3", "id": "973651842703314"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/973640859371079/?type=3", "id": "973640859371079"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/973629366038895/?type=3", "id": "973629366038895"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/973442989390866/?type=3", "id": "973442989390866"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/973133486088483/?type=3", "id": "973133486088483"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/972969322771566/?type=3", "id": "972969322771566"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/972952222773276/?type=3", "id": "972952222773276"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/972680016133830/?type=3", "id": "972680016133830"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/972666446135187/?type=3", "id": "972666446135187"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/972530226148809/?type=3", "id": "972530226148809"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/972240942844404/?type=3", "id": "972240942844404"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/972233059511859/?type=3", "id": "972233059511859"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/972105769524588/?type=3", "id": "972105769524588"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/971760262892472/?type=3", "id": "971760262892472"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/971755932892905/?type=3", "id": "971755932892905"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/971739806227851/?type=3", "id": "971739806227851"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/971277842940714/?type=3", "id": "971277842940714"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/971267992941699/?type=3", "id": "971267992941699"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/971256626276169/?type=3", "id": "971256626276169"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/970796636322168/?type=3", "id": "970796636322168"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/970791756322656/?type=3", "id": "970791756322656"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/970786266323205/?type=3", "id": "970786266323205"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/970777116324120/?type=3", "id": "970777116324120"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/970624936339338/?type=3", "id": "970624936339338"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/970349993033499/?type=3", "id": "970349993033499"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/970344646367367/?type=3", "id": "970344646367367"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/970312616370570/?type=3", "id": "970312616370570"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/970160593052439/?type=3", "id": "970160593052439"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/970142599720905/?type=3", "id": "970142599720905"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/969881799746985/?type=3", "id": "969881799746985"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/969864939748671/?type=3", "id": "969864939748671"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/969640589771106/?type=3", "id": "969640589771106"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/969317603136738/?type=3", "id": "969317603136738"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/969311916470640/?type=3", "id": "969311916470640"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/969296506472181/?type=3", "id": "969296506472181"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/969124739822691/?type=3", "id": "969124739822691"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/968793396522492/?type=3", "id": "968793396522492"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/968786349856530/?type=3", "id": "968786349856530"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/968769773191521/?type=3", "id": "968769773191521"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/968637053204793/?type=3", "id": "968637053204793"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/968346503233848/?type=3", "id": "968346503233848"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/968324806569351/?type=3", "id": "968324806569351"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/968176703250828/?type=3", "id": "968176703250828"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/967894426612389/?type=3", "id": "967894426612389"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/967875756614256/?type=3", "id": "967875756614256"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/967692099965955/?type=3", "id": "967692099965955"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/967652603303238/?type=3", "id": "967652603303238"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/967327643335734/?type=3", "id": "967327643335734"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/967321453336353/?type=3", "id": "967321453336353"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/967136263354872/?type=3", "id": "967136263354872"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/966796840055481/?type=3", "id": "966796840055481"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/966788893389609/?type=3", "id": "966788893389609"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/966762653392233/?type=3", "id": "966762653392233"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/966566523411846/?type=3", "id": "966566523411846"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/966282346773597/?type=3", "id": "966282346773597"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/966270480108117/?type=3", "id": "966270480108117"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/966131763455322/?type=3", "id": "966131763455322"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/965836100151555/?type=3", "id": "965836100151555"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/965831026818729/?type=3", "id": "965831026818729"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/965817770153388/?type=3", "id": "965817770153388"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/965639846837847/?type=3", "id": "965639846837847"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/965354386866393/?type=3", "id": "965354386866393"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/965350406866791/?type=3", "id": "965350406866791"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/965332913535207/?type=3", "id": "965332913535207"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/964894383579060/?type=3", "id": "964894383579060"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/964733443595154/?type=3", "id": "964733443595154"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/964685853599913/?type=3", "id": "964685853599913"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/964369770298188/?type=3", "id": "964369770298188"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/964302786971553/?type=3", "id": "964302786971553"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/964170223651476/?type=3", "id": "964170223651476"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/963850710350094/?type=3", "id": "963850710350094"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/963841883684310/?type=3", "id": "963841883684310"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/963805673687931/?type=3", "id": "963805673687931"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/963684730366692/?type=3", "id": "963684730366692"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/963378573730641/?type=3", "id": "963378573730641"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/963343387067493/?type=3", "id": "963343387067493"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/963202820414883/?type=3", "id": "963202820414883"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/963193963749102/?type=3", "id": "963193963749102"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/962904880444677/?type=3", "id": "962904880444677"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/962880750447090/?type=3", "id": "962880750447090"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/962766313791867/?type=3", "id": "962766313791867"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/962464153822083/?type=3", "id": "962464153822083"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/962291500506015/?type=3", "id": "962291500506015"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/962051213863377/?type=3", "id": "962051213863377"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/961957707206061/?type=3", "id": "961957707206061"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/961354880599677/?type=3", "id": "961354880599677"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/960909403977558/?type=3", "id": "960909403977558"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/960904263978072/?type=3", "id": "960904263978072"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/960394630695702/?type=3", "id": "960394630695702"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/960384040696761/?type=3", "id": "960384040696761"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/959926184075880/?type=3", "id": "959926184075880"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/959891740745991/?type=3", "id": "959891740745991"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/959430310792134/?type=3", "id": "959430310792134"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/958720017529830/?type=3", "id": "958720017529830"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/958367084231790/?type=3", "id": "958367084231790"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/958024540932711/?type=3", "id": "958024540932711"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/957801297621702/?type=3", "id": "957801297621702"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/957458640989301/?type=3", "id": "957458640989301"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/957454897656342/?type=3", "id": "957454897656342"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/957427460992419/?type=3", "id": "957427460992419"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/957312157670616/?type=3", "id": "957312157670616"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/957278524340646/?type=3", "id": "957278524340646"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/956956451039520/?type=3", "id": "956956451039520"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/956757417726090/?type=3", "id": "956757417726090"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/956478437753988/?type=3", "id": "956478437753988"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/956471291088036/?type=3", "id": "956471291088036"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/956000291135136/?type=3", "id": "956000291135136"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/955864751148690/?type=3", "id": "955864751148690"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/955797887822043/?type=3", "id": "955797887822043"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/955550547846777/?type=3", "id": "955550547846777"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/955375551197610/?type=3", "id": "955375551197610"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/954662454602253/?type=3", "id": "954662454602253"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/954651851269980/?type=3", "id": "954651851269980"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/954243707977461/?type=3", "id": "954243707977461"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/953659074702591/?type=3", "id": "953659074702591"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/953338061401359/?type=3", "id": "953338061401359"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/953185348083297/?type=3", "id": "953185348083297"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/952933491441816/?type=3", "id": "952933491441816"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/952930421442123/?type=3", "id": "952930421442123"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/952776978124134/?type=3", "id": "952776978124134"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/952457128156119/?type=3", "id": "952457128156119"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/952337261501439/?type=3", "id": "952337261501439"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/952078984860600/?type=3", "id": "952078984860600"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/952077064860792/?type=3", "id": "952077064860792"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/951561941578971/?type=3", "id": "951561941578971"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/951116618290170/?type=3", "id": "951116618290170"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/951108121624353/?type=3", "id": "951108121624353"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/950705218331310/?type=3", "id": "950705218331310"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/950558558345976/?type=3", "id": "950558558345976"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/949808641754301/?type=3", "id": "949808641754301"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/949723921762773/?type=3", "id": "949723921762773"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/949312425137256/?type=3", "id": "949312425137256"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/947769145291584/?type=3", "id": "947769145291584"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/947758975292601/?type=3", "id": "947758975292601"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/947333118668520/?type=3", "id": "947333118668520"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/946954005373098/?type=3", "id": "946954005373098"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/946798582055307/?type=3", "id": "946798582055307"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/946361488765683/?type=3", "id": "946361488765683"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/945335068868325/?type=3", "id": "945335068868325"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/945147195553779/?type=3", "id": "945147195553779"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/944932048908627/?type=3", "id": "944932048908627"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/944811582254007/?type=3", "id": "944811582254007"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/944783688923463/?type=3", "id": "944783688923463"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/944522912282874/?type=3", "id": "944522912282874"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/944380515630447/?type=3", "id": "944380515630447"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/944101042325061/?type=3", "id": "944101042325061"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/944034262331739/?type=3", "id": "944034262331739"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/943954915673007/?type=3", "id": "943954915673007"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/943667259035106/?type=3", "id": "943667259035106"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/943638089038023/?type=3", "id": "943638089038023"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/943551589046673/?type=3", "id": "943551589046673"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/943309939070838/?type=3", "id": "943309939070838"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/943265029075329/?type=3", "id": "943265029075329"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/943187335749765/?type=3", "id": "943187335749765"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/942403369161495/?type=3", "id": "942403369161495"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/942189852516180/?type=3", "id": "942189852516180"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/942180512517114/?type=3", "id": "942180512517114"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/942166625851836/?type=3", "id": "942166625851836"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/941827655885733/?type=3", "id": "941827655885733"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/941820155886483/?type=3", "id": "941820155886483"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/941458759255956/?type=3", "id": "941458759255956"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/941318079270024/?type=3", "id": "941318079270024"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/941297545938744/?type=3", "id": "941297545938744"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/940945012640664/?type=3", "id": "940945012640664"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/940920032643162/?type=3", "id": "940920032643162"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/940715185996980/?type=3", "id": "940715185996980"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/940700765998422/?type=3", "id": "940700765998422"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/940308069371025/?type=3", "id": "940308069371025"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/940192656049233/?type=3", "id": "940192656049233"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/939979842737181/?type=3", "id": "939979842737181"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/939856596082839/?type=3", "id": "939856596082839"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/939619062773259/?type=3", "id": "939619062773259"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/939612286107270/?type=3", "id": "939612286107270"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/938622146206284/?type=3", "id": "938622146206284"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/937849519616880/?type=3", "id": "937849519616880"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/937809852954180/?type=3", "id": "937809852954180"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/937417956326703/?type=3", "id": "937417956326703"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/936430943092071/?type=3", "id": "936430943092071"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/936190796449419/?type=3", "id": "936190796449419"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/936187963116369/?type=3", "id": "936187963116369"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/936040059797826/?type=3", "id": "936040059797826"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/935816366486862/?type=3", "id": "935816366486862"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/935804636488035/?type=3", "id": "935804636488035"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/935027976565701/?type=3", "id": "935027976565701"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/934511576617341/?type=3", "id": "934511576617341"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/934241116644387/?type=3", "id": "934241116644387"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/934234706645028/?type=3", "id": "934234706645028"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/934092433325922/?type=3", "id": "934092433325922"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/934084153326750/?type=3", "id": "934084153326750"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/933849873350178/?type=3", "id": "933849873350178"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/933483183386847/?type=3", "id": "933483183386847"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/933462390055593/?type=3", "id": "933462390055593"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/932884530113379/?type=3", "id": "932884530113379"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/932606803474485/?type=3", "id": "932606803474485"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/932486776819821/?type=3", "id": "932486776819821"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/931889043546261/?type=3", "id": "931889043546261"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/931468490254983/?type=3", "id": "931468490254983"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/931448643590301/?type=3", "id": "931448643590301"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/930744613660704/?type=3", "id": "930744613660704"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/930702436998255/?type=3", "id": "930702436998255"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/930368573698308/?type=3", "id": "930368573698308"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/930355383699627/?type=3", "id": "930355383699627"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/930209733714192/?type=3", "id": "930209733714192"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/930205880381244/?type=3", "id": "930205880381244"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/929999557068543/?type=3", "id": "929999557068543"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/929877393747426/?type=3", "id": "929877393747426"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/929637363771429/?type=3", "id": "929637363771429"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/928896090512223/?type=3", "id": "928896090512223"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/928884967180002/?type=3", "id": "928884967180002"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/928653733869792/?type=3", "id": "928653733869792"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/928380743897091/?type=3", "id": "928380743897091"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/928372793897886/?type=3", "id": "928372793897886"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/927923483942817/?type=3", "id": "927923483942817"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/925151967553302/?type=3", "id": "925151967553302"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/924768824258283/?type=3", "id": "924768824258283"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/924605097607989/?type=3", "id": "924605097607989"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/924236824311483/?type=3", "id": "924236824311483"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/924002037668295/?type=3", "id": "924002037668295"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/923465091055323/?type=3", "id": "923465091055323"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/923459991055833/?type=3", "id": "923459991055833"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/923089784426187/?type=3", "id": "923089784426187"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/923084724426693/?type=3", "id": "923084724426693"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/922341057834393/?type=3", "id": "922341057834393"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/922338127834686/?type=3", "id": "922338127834686"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/922335304501635/?type=3", "id": "922335304501635"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/921967584538407/?type=3", "id": "921967584538407"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/921473274587838/?type=3", "id": "921473274587838"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/921241974610968/?type=3", "id": "921241974610968"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/920863797982119/?type=3", "id": "920863797982119"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/920468531354979/?type=3", "id": "920468531354979"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/920450071356825/?type=3", "id": "920450071356825"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/920055538062945/?type=3", "id": "920055538062945"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/919635021438330/?type=3", "id": "919635021438330"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/919621194773046/?type=3", "id": "919621194773046"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/919164021485430/?type=3", "id": "919164021485430"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/918996668168832/?type=3", "id": "918996668168832"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/918280791573753/?type=3", "id": "918280791573753"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/917505868317912/?type=3", "id": "917505868317912"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/916892361712596/?type=3", "id": "916892361712596"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/915273135207852/?type=3", "id": "915273135207852"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/913869015348264/?type=3", "id": "913869015348264"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/912452588823240/?type=3", "id": "912452588823240"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/911730525562113/?type=3", "id": "911730525562113"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/910814982320334/?type=3", "id": "910814982320334"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/910300242371808/?type=3", "id": "910300242371808"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/910298355705330/?type=3", "id": "910298355705330"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/909208345814331/?type=3", "id": "909208345814331"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/905784219490077/?type=3", "id": "905784219490077"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/905386429529856/?type=3", "id": "905386429529856"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/905223582879474/?type=3", "id": "905223582879474"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/904914596243706/?type=3", "id": "904914596243706"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/904450512956781/?type=3", "id": "904450512956781"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/904304089638090/?type=3", "id": "904304089638090"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/904028966332269/?type=3", "id": "904028966332269"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/904021659666333/?type=3", "id": "904021659666333"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/903554613046371/?type=3", "id": "903554613046371"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/902924146442751/?type=3", "id": "902924146442751"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/901140779954421/?type=3", "id": "901140779954421"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/901121383289694/?type=3", "id": "901121383289694"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/900413720027127/?type=3", "id": "900413720027127"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/900139243387908/?type=3", "id": "900139243387908"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/900119833389849/?type=3", "id": "900119833389849"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/899714910097008/?type=3", "id": "899714910097008"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/898767880191711/?type=3", "id": "898767880191711"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/896459230422576/?type=3", "id": "896459230422576"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/896447837090382/?type=3", "id": "896447837090382"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/896046933797139/?type=3", "id": "896046933797139"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/894642207270945/?type=3", "id": "894642207270945"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/894000380668461/?type=3", "id": "894000380668461"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/893843270684172/?type=3", "id": "893843270684172"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/893372324064600/?type=3", "id": "893372324064600"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/891898070878692/?type=3", "id": "891898070878692"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/891748100893689/?type=3", "id": "891748100893689"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/891399894261843/?type=3", "id": "891399894261843"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/891392814262551/?type=3", "id": "891392814262551"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/890968014305031/?type=3", "id": "890968014305031"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/889987161069783/?type=3", "id": "889987161069783"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/889067744495058/?type=3", "id": "889067744495058"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/888351311233368/?type=3", "id": "888351311233368"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/887971917937974/?type=3", "id": "887971917937974"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/887042714697561/?type=3", "id": "887042714697561"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/886335621434937/?type=3", "id": "886335621434937"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/885977911470708/?type=3", "id": "885977911470708"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/885977084804124/?type=3", "id": "885977084804124"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/885970034804829/?type=3", "id": "885970034804829"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/885830561485443/?type=3", "id": "885830561485443"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/885559628179203/?type=3", "id": "885559628179203"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/885423924859440/?type=3", "id": "885423924859440"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/882910495110783/?type=3", "id": "882910495110783"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/882865981781901/?type=3", "id": "882865981781901"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/881628211905678/?type=3", "id": "881628211905678"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/880236675378165/?type=3", "id": "880236675378165"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/879899245411908/?type=3", "id": "879899245411908"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/878491358886030/?type=3", "id": "878491358886030"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/878041492264350/?type=3", "id": "878041492264350"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/877857692282730/?type=3", "id": "877857692282730"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/877022042366295/?type=3", "id": "877022042366295"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/876513752417124/?type=3", "id": "876513752417124"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/876009749134191/?type=3", "id": "876009749134191"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/875503925851440/?type=3", "id": "875503925851440"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/874276392640860/?type=3", "id": "874276392640860"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/873780652690434/?type=3", "id": "873780652690434"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/873654692703030/?type=3", "id": "873654692703030"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/867800453288454/?type=3", "id": "867800453288454"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/867666859968480/?type=3", "id": "867666859968480"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/867296880005478/?type=3", "id": "867296880005478"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/866859796715853/?type=3", "id": "866859796715853"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/866855093382990/?type=3", "id": "866855093382990"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/863502993718200/?type=3", "id": "863502993718200"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/862728280462338/?type=3", "id": "862728280462338"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/862468820488284/?type=3", "id": "862468820488284"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/862460360489130/?type=3", "id": "862460360489130"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/862186120516554/?type=3", "id": "862186120516554"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/861770283891471/?type=3", "id": "861770283891471"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/860958337305999/?type=3", "id": "860958337305999"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/860933787308454/?type=3", "id": "860933787308454"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/860312284037271/?type=3", "id": "860312284037271"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/860165510718615/?type=3", "id": "860165510718615"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/860148930720273/?type=3", "id": "860148930720273"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/859788940756272/?type=3", "id": "859788940756272"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/859783470756819/?type=3", "id": "859783470756819"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/857032234365276/?type=3", "id": "857032234365276"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/856986824369817/?type=3", "id": "856986824369817"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/855086891226477/?type=3", "id": "855086891226477"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/854822724586227/?type=3", "id": "854822724586227"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/854115987990234/?type=3", "id": "854115987990234"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/854094917992341/?type=3", "id": "854094917992341"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/852493581485808/?type=3", "id": "852493581485808"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/851182238283609/?type=3", "id": "851182238283609"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/850790628322770/?type=3", "id": "850790628322770"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/850083351726831/?type=3", "id": "850083351726831"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/849808938420939/?type=3", "id": "849808938420939"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/848332115235288/?type=3", "id": "848332115235288"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/848326428569190/?type=3", "id": "848326428569190"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/848323118569521/?type=3", "id": "848323118569521"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/847848261950340/?type=3", "id": "847848261950340"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/847843405284159/?type=3", "id": "847843405284159"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/847428371992329/?type=3", "id": "847428371992329"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/847416895326810/?type=3", "id": "847416895326810"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/846956495372850/?type=3", "id": "846956495372850"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/846758158726017/?type=3", "id": "846758158726017"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/846284692106697/?type=3", "id": "846284692106697"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/845964892138677/?type=3", "id": "845964892138677"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/843933402341826/?type=3", "id": "843933402341826"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/843376065730893/?type=3", "id": "843376065730893"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/843347309067102/?type=3", "id": "843347309067102"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/842892042445962/?type=3", "id": "842892042445962"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/842756525792847/?type=3", "id": "842756525792847"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/842745499127283/?type=3", "id": "842745499127283"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/842741492461017/?type=3", "id": "842741492461017"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/841313055937194/?type=3", "id": "841313055937194"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/841121202623046/?type=3", "id": "841121202623046"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/840490669352766/?type=3", "id": "840490669352766"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/840200446048455/?type=3", "id": "840200446048455"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/840190522716114/?type=3", "id": "840190522716114"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/840019826066517/?type=3", "id": "840019826066517"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/839720242763142/?type=3", "id": "839720242763142"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/839712036097296/?type=3", "id": "839712036097296"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/839683766100123/?type=3", "id": "839683766100123"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/839042062830960/?type=3", "id": "839042062830960"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/838606539541179/?type=3", "id": "838606539541179"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/838585209543312/?type=3", "id": "838585209543312"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/838037779598055/?type=3", "id": "838037779598055"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/838034879598345/?type=3", "id": "838034879598345"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/837853469616486/?type=3", "id": "837853469616486"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/836475196420980/?type=3", "id": "836475196420980"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/836460319755801/?type=3", "id": "836460319755801"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/835982373136929/?type=3", "id": "835982373136929"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/835833276485172/?type=3", "id": "835833276485172"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/835796446488855/?type=3", "id": "835796446488855"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/835076956560804/?type=3", "id": "835076956560804"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/835067156561784/?type=3", "id": "835067156561784"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/834918096576690/?type=3", "id": "834918096576690"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/834651976603302/?type=3", "id": "834651976603302"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/834627603272406/?type=3", "id": "834627603272406"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/834136786654821/?type=3", "id": "834136786654821"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/834126333322533/?type=3", "id": "834126333322533"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/833114516757048/?type=3", "id": "833114516757048"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/831999026868597/?type=3", "id": "831999026868597"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/831987266869773/?type=3", "id": "831987266869773"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/831838913551275/?type=3", "id": "831838913551275"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/828321213903045/?type=3", "id": "828321213903045"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/827745067293993/?type=3", "id": "827745067293993"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/827649653970201/?type=3", "id": "827649653970201"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/827370083998158/?type=3", "id": "827370083998158"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/827238877344612/?type=3", "id": "827238877344612"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/827220867346413/?type=3", "id": "827220867346413"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/826948304040336/?type=3", "id": "826948304040336"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/826923064042860/?type=3", "id": "826923064042860"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/826801804054986/?type=3", "id": "826801804054986"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/826535167414983/?type=3", "id": "826535167414983"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/826525414082625/?type=3", "id": "826525414082625"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/826331717435328/?type=3", "id": "826331717435328"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/826074524127714/?type=3", "id": "826074524127714"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/826055067462993/?type=3", "id": "826055067462993"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/825903767478123/?type=3", "id": "825903767478123"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/825856754149491/?type=3", "id": "825856754149491"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/825467614188405/?type=3", "id": "825467614188405"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/824813747587125/?type=3", "id": "824813747587125"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/823976277670872/?type=3", "id": "823976277670872"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/823697954365371/?type=3", "id": "823697954365371"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/822519144483252/?type=3", "id": "822519144483252"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/822002961201537/?type=3", "id": "822002961201537"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/821994637869036/?type=3", "id": "821994637869036"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/819216171480216/?type=3", "id": "819216171480216"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/819075424827624/?type=3", "id": "819075424827624"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/818590704876096/?type=3", "id": "818590704876096"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/818285914906575/?type=3", "id": "818285914906575"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/818264721575361/?type=3", "id": "818264721575361"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/818145581587275/?type=3", "id": "818145581587275"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/817712718297228/?type=3", "id": "817712718297228"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/816330828435417/?type=3", "id": "816330828435417"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/815564875178679/?type=3", "id": "815564875178679"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/815380431863790/?type=3", "id": "815380431863790"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/814567161945117/?type=3", "id": "814567161945117"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/813646078703892/?type=3", "id": "813646078703892"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/813590878709412/?type=3", "id": "813590878709412"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/813456752056158/?type=3", "id": "813456752056158"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/813424958726004/?type=3", "id": "813424958726004"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/813138835421283/?type=3", "id": "813138835421283"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/812987168769783/?type=3", "id": "812987168769783"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/812113485523818/?type=3", "id": "812113485523818"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/811916525543514/?type=3", "id": "811916525543514"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/811238902277943/?type=3", "id": "811238902277943"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/810786848989815/?type=3", "id": "810786848989815"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/809637592438074/?type=3", "id": "809637592438074"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/808813825853784/?type=3", "id": "808813825853784"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/808658919202608/?type=3", "id": "808658919202608"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/808225112579322/?type=3", "id": "808225112579322"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/808174129251087/?type=3", "id": "808174129251087"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/807701265965040/?type=3", "id": "807701265965040"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/807205632681270/?type=3", "id": "807205632681270"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/807190349349465/?type=3", "id": "807190349349465"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/806369312764902/?type=3", "id": "806369312764902"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/806342522767581/?type=3", "id": "806342522767581"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/805386679529832/?type=3", "id": "805386679529832"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/804781426257024/?type=3", "id": "804781426257024"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/804489879619512/?type=3", "id": "804489879619512"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/804447406290426/?type=3", "id": "804447406290426"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/804026532999180/?type=3", "id": "804026532999180"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/803622689706231/?type=3", "id": "803622689706231"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/803615189706981/?type=3", "id": "803615189706981"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/803125776422589/?type=3", "id": "803125776422589"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/803120933089740/?type=3", "id": "803120933089740"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/802945206440646/?type=3", "id": "802945206440646"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/802911916443975/?type=3", "id": "802911916443975"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/802465953155238/?type=3", "id": "802465953155238"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/801961246539042/?type=3", "id": "801961246539042"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/801680249900475/?type=3", "id": "801680249900475"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/801678223234011/?type=3", "id": "801678223234011"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/801227596612407/?type=3", "id": "801227596612407"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/800796373322196/?type=3", "id": "800796373322196"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/800232430045257/?type=3", "id": "800232430045257"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/799815090086991/?type=3", "id": "799815090086991"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/799810836754083/?type=3", "id": "799810836754083"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/799789780089522/?type=3", "id": "799789780089522"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/799655230102977/?type=3", "id": "799655230102977"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/799622536772913/?type=3", "id": "799622536772913"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/799617223440111/?type=3", "id": "799617223440111"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/799604080108092/?type=3", "id": "799604080108092"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/799150163486817/?type=3", "id": "799150163486817"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/799134606821706/?type=3", "id": "799134606821706"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/798881083513725/?type=3", "id": "798881083513725"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/798768290191671/?type=3", "id": "798768290191671"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/798735483528285/?type=3", "id": "798735483528285"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/798451206890046/?type=3", "id": "798451206890046"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/797876456947521/?type=3", "id": "797876456947521"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/797851916949975/?type=3", "id": "797851916949975"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/797565803645253/?type=3", "id": "797565803645253"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/797401343661699/?type=3", "id": "797401343661699"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/796958970372603/?type=3", "id": "796958970372603"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/796919777043189/?type=3", "id": "796919777043189"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/796597347075432/?type=3", "id": "796597347075432"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/796571273744706/?type=3", "id": "796571273744706"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/796385630429937/?type=3", "id": "796385630429937"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/795331107202056/?type=3", "id": "795331107202056"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/794519110616589/?type=3", "id": "794519110616589"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/793046950763805/?type=3", "id": "793046950763805"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/793008697434297/?type=3", "id": "793008697434297"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/792375894164244/?type=3", "id": "792375894164244"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/791640557571111/?type=3", "id": "791640557571111"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/791306707604496/?type=3", "id": "791306707604496"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/791225257612641/?type=3", "id": "791225257612641"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/788875834514250/?type=3", "id": "788875834514250"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/788329007902266/?type=3", "id": "788329007902266"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/787883744613459/?type=3", "id": "787883744613459"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/787850971283403/?type=3", "id": "787850971283403"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/787616767973490/?type=3", "id": "787616767973490"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/787567944645039/?type=3", "id": "787567944645039"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/786967444705089/?type=3", "id": "786967444705089"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/786260621442438/?type=3", "id": "786260621442438"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/786136028121564/?type=3", "id": "786136028121564"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/785595544842279/?type=3", "id": "785595544842279"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/785573151511185/?type=3", "id": "785573151511185"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/785445224857311/?type=3", "id": "785445224857311"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/785336201534880/?type=3", "id": "785336201534880"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/784257208309446/?type=3", "id": "784257208309446"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/784225608312606/?type=3", "id": "784225608312606"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/783927125009121/?type=3", "id": "783927125009121"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/783759688359198/?type=3", "id": "783759688359198"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/783699758365191/?type=3", "id": "783699758365191"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/783457975056036/?type=3", "id": "783457975056036"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/783426018392565/?type=3", "id": "783426018392565"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/783165241751976/?type=3", "id": "783165241751976"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/783109735090860/?type=3", "id": "783109735090860"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/782550411813459/?type=3", "id": "782550411813459"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/782065908528576/?type=3", "id": "782065908528576"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/781875028547664/?type=3", "id": "781875028547664"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/781558388579328/?type=3", "id": "781558388579328"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/781530958582071/?type=3", "id": "781530958582071"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/781092785292555/?type=3", "id": "781092785292555"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/781045301963970/?type=3", "id": "781045301963970"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/780934558641711/?type=3", "id": "780934558641711"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/780591578676009/?type=3", "id": "780591578676009"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/780567815345052/?type=3", "id": "780567815345052"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/780538362014664/?type=3", "id": "780538362014664"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/780081002060400/?type=3", "id": "780081002060400"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/779902335411600/?type=3", "id": "779902335411600"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/779623658772801/?type=3", "id": "779623658772801"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/779617965440037/?type=3", "id": "779617965440037"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/779156748819492/?type=3", "id": "779156748819492"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/778991045502729/?type=3", "id": "778991045502729"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/778939005507933/?type=3", "id": "778939005507933"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/778915545510279/?type=3", "id": "778915545510279"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/778496562218844/?type=3", "id": "778496562218844"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/778483185553515/?type=3", "id": "778483185553515"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/778313762237124/?type=3", "id": "778313762237124"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/776977689037398/?type=3", "id": "776977689037398"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/776744382394062/?type=3", "id": "776744382394062"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/776424132426087/?type=3", "id": "776424132426087"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/776419185759915/?type=3", "id": "776419185759915"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/776270432441457/?type=3", "id": "776270432441457"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/776076885794145/?type=3", "id": "776076885794145"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/775752529159914/?type=3", "id": "775752529159914"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/775737959161371/?type=3", "id": "775737959161371"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/775274475874386/?type=3", "id": "775274475874386"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/775069625894871/?type=3", "id": "775069625894871"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/774768972591603/?type=3", "id": "774768972591603"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/774661799268987/?type=3", "id": "774661799268987"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/774638245938009/?type=3", "id": "774638245938009"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/774314792637021/?type=3", "id": "774314792637021"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/774179855983848/?type=3", "id": "774179855983848"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/774157372652763/?type=3", "id": "774157372652763"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/773871049348062/?type=3", "id": "773871049348062"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/773845119350655/?type=3", "id": "773845119350655"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/773804926021341/?type=3", "id": "773804926021341"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/773640666037767/?type=3", "id": "773640666037767"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/773251662743334/?type=3", "id": "773251662743334"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/773221559413011/?type=3", "id": "773221559413011"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/772625746139259/?type=3", "id": "772625746139259"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/772552836146550/?type=3", "id": "772552836146550"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/772023632866137/?type=3", "id": "772023632866137"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/771868642881636/?type=3", "id": "771868642881636"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/771765712891929/?type=3", "id": "771765712891929"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/771710246230809/?type=3", "id": "771710246230809"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/771373826264451/?type=3", "id": "771373826264451"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/771346982933802/?type=3", "id": "771346982933802"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/771187006283133/?type=3", "id": "771187006283133"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/771164149618752/?type=3", "id": "771164149618752"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/771149029620264/?type=3", "id": "771149029620264"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/770184783050022/?type=3", "id": "770184783050022"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/770083136393520/?type=3", "id": "770083136393520"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/770027063065794/?type=3", "id": "770027063065794"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/769043609830806/?type=3", "id": "769043609830806"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/768902843178216/?type=3", "id": "768902843178216"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/768543163214184/?type=3", "id": "768543163214184"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/768353526566481/?type=3", "id": "768353526566481"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/767978839937283/?type=3", "id": "767978839937283"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/767830736618760/?type=3", "id": "767830736618760"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/767390583329442/?type=3", "id": "767390583329442"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/767319516669882/?type=3", "id": "767319516669882"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/767203493348151/?type=3", "id": "767203493348151"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/767171040018063/?type=3", "id": "767171040018063"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/766664076735426/?type=3", "id": "766664076735426"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/766627730072394/?type=3", "id": "766627730072394"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/766277326774101/?type=3", "id": "766277326774101"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/766157213452779/?type=3", "id": "766157213452779"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/766121026789731/?type=3", "id": "766121026789731"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/765760613492439/?type=3", "id": "765760613492439"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/765663640168803/?type=3", "id": "765663640168803"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/765374616864372/?type=3", "id": "765374616864372"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/765294186872415/?type=3", "id": "765294186872415"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/765197253548775/?type=3", "id": "765197253548775"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/764428480292319/?type=3", "id": "764428480292319"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/764259916975842/?type=3", "id": "764259916975842"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/764192540315913/?type=3", "id": "764192540315913"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/763892827012551/?type=3", "id": "763892827012551"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/763811947020639/?type=3", "id": "763811947020639"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/763671777034656/?type=3", "id": "763671777034656"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/763344193734081/?type=3", "id": "763344193734081"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/763293807072453/?type=3", "id": "763293807072453"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/763208437080990/?type=3", "id": "763208437080990"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/762921227109711/?type=3", "id": "762921227109711"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/762918087110025/?type=3", "id": "762918087110025"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/762896557112178/?type=3", "id": "762896557112178"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/762736877128146/?type=3", "id": "762736877128146"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/762729147128919/?type=3", "id": "762729147128919"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/762343877167446/?type=3", "id": "762343877167446"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/762319763836524/?type=3", "id": "762319763836524"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/762033497198484/?type=3", "id": "762033497198484"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/761560567245777/?type=3", "id": "761560567245777"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/759197017482132/?type=3", "id": "759197017482132"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/758881434180357/?type=3", "id": "758881434180357"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/758877720847395/?type=3", "id": "758877720847395"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/758619100873257/?type=3", "id": "758619100873257"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/758607334207767/?type=3", "id": "758607334207767"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/758232804245220/?type=3", "id": "758232804245220"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/758194367582397/?type=3", "id": "758194367582397"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/758046797597154/?type=3", "id": "758046797597154"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/757769607624873/?type=3", "id": "757769607624873"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/757764490958718/?type=3", "id": "757764490958718"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/757221961012971/?type=3", "id": "757221961012971"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/757212064347294/?type=3", "id": "757212064347294"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/756187121116455/?type=3", "id": "756187121116455"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/756004954468005/?type=3", "id": "756004954468005"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/755620677839766/?type=3", "id": "755620677839766"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/755528527848981/?type=3", "id": "755528527848981"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/755432564525244/?type=3", "id": "755432564525244"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/754681044600396/?type=3", "id": "754681044600396"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/753721131363054/?type=3", "id": "753721131363054"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/753212151413952/?type=3", "id": "753212151413952"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/753208978080936/?type=3", "id": "753208978080936"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/752731868128647/?type=3", "id": "752731868128647"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/752496618152172/?type=3", "id": "752496618152172"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/752192424849258/?type=3", "id": "752192424849258"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/752153328186501/?type=3", "id": "752153328186501"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/752021974866303/?type=3", "id": "752021974866303"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/751698684898632/?type=3", "id": "751698684898632"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/751524434916057/?type=3", "id": "751524434916057"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/751221271613040/?type=3", "id": "751221271613040"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/751218941613273/?type=3", "id": "751218941613273"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/751077684960732/?type=3", "id": "751077684960732"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/751038858297948/?type=3", "id": "751038858297948"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/750760511659116/?type=3", "id": "750760511659116"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/750751551660012/?type=3", "id": "750751551660012"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/749796571755510/?type=3", "id": "749796571755510"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/749790138422820/?type=3", "id": "749790138422820"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/749304281804739/?type=3", "id": "749304281804739"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/748801558521678/?type=3", "id": "748801558521678"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/748652191869948/?type=3", "id": "748652191869948"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/748611298540704/?type=3", "id": "748611298540704"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/748309941904173/?type=3", "id": "748309941904173"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/748289895239511/?type=3", "id": "748289895239511"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/747823971952770/?type=3", "id": "747823971952770"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/747816361953531/?type=3", "id": "747816361953531"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/747401501995017/?type=3", "id": "747401501995017"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/746925162042651/?type=3", "id": "746925162042651"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/746393958762438/?type=3", "id": "746393958762438"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/745757762159391/?type=3", "id": "745757762159391"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/744132255655275/?type=3", "id": "744132255655275"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/743917572343410/?type=3", "id": "743917572343410"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/743448615723639/?type=3", "id": "743448615723639"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/743218935746607/?type=3", "id": "743218935746607"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/742830385785462/?type=3", "id": "742830385785462"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/742824452452722/?type=3", "id": "742824452452722"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/742258572509310/?type=3", "id": "742258572509310"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/742246885843812/?type=3", "id": "742246885843812"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/742004892534678/?type=3", "id": "742004892534678"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/741656505902850/?type=3", "id": "741656505902850"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/740895285978972/?type=3", "id": "740895285978972"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/740875649314269/?type=3", "id": "740875649314269"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/740540932681074/?type=3", "id": "740540932681074"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/740522289349605/?type=3", "id": "740522289349605"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/739925732742594/?type=3", "id": "739925732742594"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/739026399499194/?type=3", "id": "739026399499194"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/738744172860750/?type=3", "id": "738744172860750"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/738318422903325/?type=3", "id": "738318422903325"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/737599162975251/?type=3", "id": "737599162975251"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/737250716343429/?type=3", "id": "737250716343429"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/737088553026312/?type=3", "id": "737088553026312"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/736836936384807/?type=3", "id": "736836936384807"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/736834039718430/?type=3", "id": "736834039718430"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/736379929763841/?type=3", "id": "736379929763841"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/736373499764484/?type=3", "id": "736373499764484"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/735957923139375/?type=3", "id": "735957923139375"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/735791343156033/?type=3", "id": "735791343156033"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/735530569848777/?type=3", "id": "735530569848777"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/734455766622924/?type=3", "id": "734455766622924"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/734158786652622/?type=3", "id": "734158786652622"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/733713933363774/?type=3", "id": "733713933363774"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/733507816717719/?type=3", "id": "733507816717719"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/733155133419654/?type=3", "id": "733155133419654"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/733152543419913/?type=3", "id": "733152543419913"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/732674790134355/?type=3", "id": "732674790134355"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/732666210135213/?type=3", "id": "732666210135213"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/732247726843728/?type=3", "id": "732247726843728"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/732044200197414/?type=3", "id": "732044200197414"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/731784620223372/?type=3", "id": "731784620223372"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/731191130282721/?type=3", "id": "731191130282721"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/729831103752057/?type=3", "id": "729831103752057"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/729678127100688/?type=3", "id": "729678127100688"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/729458117122689/?type=3", "id": "729458117122689"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/729028353832332/?type=3", "id": "729028353832332"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/729019900499844/?type=3", "id": "729019900499844"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/728856513849516/?type=3", "id": "728856513849516"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/728046470597187/?type=3", "id": "728046470597187"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/726782174056950/?type=3", "id": "726782174056950"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/725444477524053/?type=3", "id": "725444477524053"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/724090047659496/?type=3", "id": "724090047659496"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/723519137716587/?type=3", "id": "723519137716587"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/723215137746987/?type=3", "id": "723215137746987"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/723078264427341/?type=3", "id": "723078264427341"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/722792464455921/?type=3", "id": "722792464455921"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/722379041163930/?type=3", "id": "722379041163930"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/722231857845315/?type=3", "id": "722231857845315"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/722208281181006/?type=3", "id": "722208281181006"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/721421391259695/?type=3", "id": "721421391259695"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/721415381260296/?type=3", "id": "721415381260296"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/721408127927688/?type=3", "id": "721408127927688"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/713303602071474/?type=3", "id": "713303602071474"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/713296988738802/?type=3", "id": "713296988738802"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/712847228783778/?type=3", "id": "712847228783778"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/712388318829669/?type=3", "id": "712388318829669"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/711639038904597/?type=3", "id": "711639038904597"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/711634252238409/?type=3", "id": "711634252238409"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/708286579239843/?type=3", "id": "708286579239843"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/707987662603068/?type=3", "id": "707987662603068"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/707985125936655/?type=3", "id": "707985125936655"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/707810402620794/?type=3", "id": "707810402620794"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/707491099319391/?type=3", "id": "707491099319391"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/706224432779391/?type=3", "id": "706224432779391"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/706058589462642/?type=3", "id": "706058589462642"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/705745729493928/?type=3", "id": "705745729493928"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/705554639513037/?type=3", "id": "705554639513037"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/705205406214627/?type=3", "id": "705205406214627"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/699793633422471/?type=3", "id": "699793633422471"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/699017016833466/?type=3", "id": "699017016833466"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/698494036885764/?type=3", "id": "698494036885764"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/698351483566686/?type=3", "id": "698351483566686"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/698021220266379/?type=3", "id": "698021220266379"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/698017723600062/?type=3", "id": "698017723600062"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/697829190285582/?type=3", "id": "697829190285582"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/697025083699326/?type=3", "id": "697025083699326"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/697017233700111/?type=3", "id": "697017233700111"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/695878140480687/?type=3", "id": "695878140480687"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/695592130509288/?type=3", "id": "695592130509288"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/695587410509760/?type=3", "id": "695587410509760"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/694637840604717/?type=3", "id": "694637840604717"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/694193190649182/?type=3", "id": "694193190649182"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/694167297318438/?type=3", "id": "694167297318438"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/694158783985956/?type=3", "id": "694158783985956"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/693695677365600/?type=3", "id": "693695677365600"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/693692377365930/?type=3", "id": "693692377365930"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/692969630771538/?type=3", "id": "692969630771538"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/692925710775930/?type=3", "id": "692925710775930"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/692679404133894/?type=3", "id": "692679404133894"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/692632947471873/?type=3", "id": "692632947471873"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/692052524196582/?type=3", "id": "692052524196582"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/692048467530321/?type=3", "id": "692048467530321"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/691790700889431/?type=3", "id": "691790700889431"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/691356684266166/?type=3", "id": "691356684266166"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/689578654443969/?type=3", "id": "689578654443969"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/689573577777810/?type=3", "id": "689573577777810"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/689106347824533/?type=3", "id": "689106347824533"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/688093217925846/?type=3", "id": "688093217925846"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/688092204592614/?type=3", "id": "688092204592614"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/687928211275680/?type=3", "id": "687928211275680"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/687605667974601/?type=3", "id": "687605667974601"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/687039418031226/?type=3", "id": "687039418031226"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/687031014698733/?type=3", "id": "687031014698733"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/682129895188845/?type=3", "id": "682129895188845"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/681952825206552/?type=3", "id": "681952825206552"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/681943401874161/?type=3", "id": "681943401874161"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/679356622132839/?type=3", "id": "679356622132839"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/679347878800380/?type=3", "id": "679347878800380"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/678259878909180/?type=3", "id": "678259878909180"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/677598468975321/?type=3", "id": "677598468975321"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/676823899052778/?type=3", "id": "676823899052778"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/676015702466931/?type=3", "id": "676015702466931"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/676012802467221/?type=3", "id": "676012802467221"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/674865879248580/?type=3", "id": "674865879248580"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/674859325915902/?type=3", "id": "674859325915902"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/674854382583063/?type=3", "id": "674854382583063"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/673653852703116/?type=3", "id": "673653852703116"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/672439479491220/?type=3", "id": "672439479491220"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/672437359491432/?type=3", "id": "672437359491432"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/671984872870014/?type=3", "id": "671984872870014"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/671982012870300/?type=3", "id": "671982012870300"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/671502006251634/?type=3", "id": "671502006251634"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/671489479586220/?type=3", "id": "671489479586220"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/671278686273966/?type=3", "id": "671278686273966"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/671257586276076/?type=3", "id": "671257586276076"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/670189056382929/?type=3", "id": "670189056382929"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/669905533077948/?type=3", "id": "669905533077948"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/669083856493449/?type=3", "id": "669083856493449"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/668591586542676/?type=3", "id": "668591586542676"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/667646736637161/?type=3", "id": "667646736637161"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/667487186653116/?type=3", "id": "667487186653116"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/667015340033634/?type=3", "id": "667015340033634"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/666711090064059/?type=3", "id": "666711090064059"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/665842273484274/?type=3", "id": "665842273484274"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/665837130151455/?type=3", "id": "665837130151455"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/665683003500201/?type=3", "id": "665683003500201"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/665350683533433/?type=3", "id": "665350683533433"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/665207340214434/?type=3", "id": "665207340214434"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/664842160250952/?type=3", "id": "664842160250952"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/664835413584960/?type=3", "id": "664835413584960"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/663571690377999/?type=3", "id": "663571690377999"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/663567467045088/?type=3", "id": "663567467045088"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/663224373746064/?type=3", "id": "663224373746064"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/663049983763503/?type=3", "id": "663049983763503"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/662228190512349/?type=3", "id": "662228190512349"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/662222877179547/?type=3", "id": "662222877179547"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/661689357232899/?type=3", "id": "661689357232899"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/660773220657846/?type=3", "id": "660773220657846"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/659508820784286/?type=3", "id": "659508820784286"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/659086557493179/?type=3", "id": "659086557493179"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/659085914159910/?type=3", "id": "659085914159910"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/658108784257623/?type=3", "id": "658108784257623"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/657943107607524/?type=3", "id": "657943107607524"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/657607317641103/?type=3", "id": "657607317641103"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/657099194358582/?type=3", "id": "657099194358582"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/656408757760959/?type=3", "id": "656408757760959"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/656078551127313/?type=3", "id": "656078551127313"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/655418697859965/?type=3", "id": "655418697859965"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/654603404608161/?type=3", "id": "654603404608161"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/653906401344528/?type=3", "id": "653906401344528"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/653516344716867/?type=3", "id": "653516344716867"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/653112554757246/?type=3", "id": "653112554757246"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/653103461424822/?type=3", "id": "653103461424822"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/652932071441961/?type=3", "id": "652932071441961"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/652921574776344/?type=3", "id": "652921574776344"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/652618011473367/?type=3", "id": "652618011473367"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/652454718156363/?type=3", "id": "652454718156363"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/652049534863548/?type=3", "id": "652049534863548"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/651900321545136/?type=3", "id": "651900321545136"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/651558851579283/?type=3", "id": "651558851579283"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/651277888274046/?type=3", "id": "651277888274046"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/650833648318470/?type=3", "id": "650833648318470"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/650518618349973/?type=3", "id": "650518618349973"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/649442301790938/?type=3", "id": "649442301790938"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/649099371825231/?type=3", "id": "649099371825231"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/649040688497766/?type=3", "id": "649040688497766"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/648520635216438/?type=3", "id": "648520635216438"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/648070428594792/?type=3", "id": "648070428594792"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/648039345264567/?type=3", "id": "648039345264567"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/648035875264914/?type=3", "id": "648035875264914"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/647784025290099/?type=3", "id": "647784025290099"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/647779641957204/?type=3", "id": "647779641957204"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/647636998638135/?type=3", "id": "647636998638135"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/647621141973054/?type=3", "id": "647621141973054"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/647268412008327/?type=3", "id": "647268412008327"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/647259748675860/?type=3", "id": "647259748675860"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/647080138693821/?type=3", "id": "647080138693821"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/646809098720925/?type=3", "id": "646809098720925"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/646789768722858/?type=3", "id": "646789768722858"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/646634505405051/?type=3", "id": "646634505405051"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/646609575407544/?type=3", "id": "646609575407544"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/646367812098387/?type=3", "id": "646367812098387"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/646164928785342/?type=3", "id": "646164928785342"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/646159368785898/?type=3", "id": "646159368785898"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/645824838819351/?type=3", "id": "645824838819351"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/645657242169444/?type=3", "id": "645657242169444"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/645636845504817/?type=3", "id": "645636845504817"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/645636032171565/?type=3", "id": "645636032171565"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/645350962200072/?type=3", "id": "645350962200072"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/645320662203102/?type=3", "id": "645320662203102"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/645287775539724/?type=3", "id": "645287775539724"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/645141282221040/?type=3", "id": "645141282221040"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/644686248933210/?type=3", "id": "644686248933210"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/644639702271198/?type=3", "id": "644639702271198"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/644485825619919/?type=3", "id": "644485825619919"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/644485265619975/?type=3", "id": "644485265619975"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/644440385624463/?type=3", "id": "644440385624463"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/644426088959226/?type=3", "id": "644426088959226"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/644142765654225/?type=3", "id": "644142765654225"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/644011405667361/?type=3", "id": "644011405667361"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/643994655669036/?type=3", "id": "643994655669036"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/643693582365810/?type=3", "id": "643693582365810"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/643653129036522/?type=3", "id": "643653129036522"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/643188835749618/?type=3", "id": "643188835749618"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/643181682417000/?type=3", "id": "643181682417000"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/642957395772762/?type=3", "id": "642957395772762"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/642667275801774/?type=3", "id": "642667275801774"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/642510982484070/?type=3", "id": "642510982484070"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/642226379179197/?type=3", "id": "642226379179197"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/642210802514088/?type=3", "id": "642210802514088"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/641994169202418/?type=3", "id": "641994169202418"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/641646042570564/?type=3", "id": "641646042570564"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/641621382573030/?type=3", "id": "641621382573030"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/641459002589268/?type=3", "id": "641459002589268"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/641116945956807/?type=3", "id": "641116945956807"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/640721602663008/?type=3", "id": "640721602663008"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/640707415997760/?type=3", "id": "640707415997760"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/640554059346429/?type=3", "id": "640554059346429"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/639868479414987/?type=3", "id": "639868479414987"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/639854286083073/?type=3", "id": "639854286083073"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/639374112797757/?type=3", "id": "639374112797757"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/638989152836253/?type=3", "id": "638989152836253"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/638827366185765/?type=3", "id": "638827366185765"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/638780626190439/?type=3", "id": "638780626190439"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/638477822887386/?type=3", "id": "638477822887386"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/637942972940871/?type=3", "id": "637942972940871"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/637756836292818/?type=3", "id": "637756836292818"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/636430953092073/?type=3", "id": "636430953092073"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/636430356425466/?type=3", "id": "636430356425466"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/635357606532741/?type=3", "id": "635357606532741"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/635356316532870/?type=3", "id": "635356316532870"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/633891413346027/?type=3", "id": "633891413346027"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/632669840134851/?type=3", "id": "632669840134851"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/632479813487187/?type=3", "id": "632479813487187"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/632004003534768/?type=3", "id": "632004003534768"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/631392596929242/?type=3", "id": "631392596929242"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/630671550334680/?type=3", "id": "630671550334680"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/630519637016538/?type=3", "id": "630519637016538"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/630516083683560/?type=3", "id": "630516083683560"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/630268710374964/?type=3", "id": "630268710374964"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/630111940390641/?type=3", "id": "630111940390641"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/630107983724370/?type=3", "id": "630107983724370"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/629667113768457/?type=3", "id": "629667113768457"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/629255607142941/?type=3", "id": "629255607142941"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/628799167188585/?type=3", "id": "628799167188585"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/628798423855326/?type=3", "id": "628798423855326"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/627971057271396/?type=3", "id": "627971057271396"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/627970360604799/?type=3", "id": "627970360604799"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/627968110605024/?type=3", "id": "627968110605024"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/627859533949215/?type=3", "id": "627859533949215"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/627411703993998/?type=3", "id": "627411703993998"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/627410723994096/?type=3", "id": "627410723994096"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/626999597368542/?type=3", "id": "626999597368542"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/626512394083929/?type=3", "id": "626512394083929"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/626090637459438/?type=3", "id": "626090637459438"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/626081850793650/?type=3", "id": "626081850793650"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/626081260793709/?type=3", "id": "626081260793709"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/626079677460534/?type=3", "id": "626079677460534"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/625766784158490/?type=3", "id": "625766784158490"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/625360477532454/?type=3", "id": "625360477532454"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/624763477592154/?type=3", "id": "624763477592154"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/624312600970575/?type=3", "id": "624312600970575"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/624311864303982/?type=3", "id": "624311864303982"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/624046017663900/?type=3", "id": "624046017663900"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/623571831044652/?type=3", "id": "623571831044652"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/623432821058553/?type=3", "id": "623432821058553"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/623137451088090/?type=3", "id": "623137451088090"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/623114911090344/?type=3", "id": "623114911090344"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/622958707772631/?type=3", "id": "622958707772631"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/622927901109045/?type=3", "id": "622927901109045"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/622620584473110/?type=3", "id": "622620584473110"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/622487217819780/?type=3", "id": "622487217819780"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/622466137821888/?type=3", "id": "622466137821888"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/622182094516959/?type=3", "id": "622182094516959"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/621777857890716/?type=3", "id": "621777857890716"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/621023814632787/?type=3", "id": "621023814632787"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/621020397966462/?type=3", "id": "621020397966462"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/620683731333462/?type=3", "id": "620683731333462"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/620635981338237/?type=3", "id": "620635981338237"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/620479424687226/?type=3", "id": "620479424687226"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/620453361356499/?type=3", "id": "620453361356499"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/620421581359677/?type=3", "id": "620421581359677"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/620212558047246/?type=3", "id": "620212558047246"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/620201058048396/?type=3", "id": "620201058048396"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/619733808095121/?type=3", "id": "619733808095121"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/619718864763282/?type=3", "id": "619718864763282"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/619189048149597/?type=3", "id": "619189048149597"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/619184511483384/?type=3", "id": "619184511483384"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/618578368210665/?type=3", "id": "618578368210665"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/618265458241956/?type=3", "id": "618265458241956"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/617976891604146/?type=3", "id": "617976891604146"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/617487558319746/?type=3", "id": "617487558319746"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/617486958319806/?type=3", "id": "617486958319806"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/617485408319961/?type=3", "id": "617485408319961"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/617052161696619/?type=3", "id": "617052161696619"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/617049038363598/?type=3", "id": "617049038363598"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/616824101719425/?type=3", "id": "616824101719425"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/616823245052844/?type=3", "id": "616823245052844"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/616670855068083/?type=3", "id": "616670855068083"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/616347998433702/?type=3", "id": "616347998433702"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/616346798433822/?type=3", "id": "616346798433822"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/615597741842061/?type=3", "id": "615597741842061"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/615595878508914/?type=3", "id": "615595878508914"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/615283508540151/?type=3", "id": "615283508540151"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/614644131937422/?type=3", "id": "614644131937422"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/614643775270791/?type=3", "id": "614643775270791"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/614293841972451/?type=3", "id": "614293841972451"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/614132758655226/?type=3", "id": "614132758655226"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/613837745351394/?type=3", "id": "613837745351394"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/613662705368898/?type=3", "id": "613662705368898"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/613410745394094/?type=3", "id": "613410745394094"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/613184905416678/?type=3", "id": "613184905416678"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/613168558751646/?type=3", "id": "613168558751646"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/612627882139047/?type=3", "id": "612627882139047"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/612352492166586/?type=3", "id": "612352492166586"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/612197345515434/?type=3", "id": "612197345515434"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/611693165565852/?type=3", "id": "611693165565852"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/611689615566207/?type=3", "id": "611689615566207"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/611415695593599/?type=3", "id": "611415695593599"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/610980868970415/?type=3", "id": "610980868970415"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/610967778971724/?type=3", "id": "610967778971724"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/610940802307755/?type=3", "id": "610940802307755"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/610921452309690/?type=3", "id": "610921452309690"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/610912528977249/?type=3", "id": "610912528977249"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/610898175645351/?type=3", "id": "610898175645351"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/610876595647509/?type=3", "id": "610876595647509"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610844295650739.1073741829.610780312323804/610853298983172/?type=3", "id": "610853298983172"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/610815982320237/?type=3", "id": "610815982320237"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/610810962320739/?type=3", "id": "610810962320739"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/610802745654894/?type=3", "id": "610802745654894"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/610801182321717/?type=3", "id": "610801182321717"}, {"fb_url": "https://www.facebook.com/610780312323804/photos/a.610782392323596.1073741828.610780312323804/610784175656751/?type=3", "id": "610784175656751"}];
// The URL looks like one of these:
// /
// /#photo_id
// /#g:lat,lon
// /#photo_id,g:lat,lon

// Returns {photo_id:string, g:string}
function getCurrentStateObject() {
  if (!$('#expanded').is(':visible')) {
    return {};
  }
  var g = $('#expanded').data('grid-key');
  var selectedId = $('#grid-container').expandableGrid('selectedId');

  return selectedId ? { photo_id: selectedId, g: g } : { g: g };
}

// Converts the string after '#' in a URL into a state object,
// {photo_id:string, g:string}
// This is asynchronous because it may need to fetch ID->lat/lon info.
function hashToStateObject(hash, cb) {
  var m = hash.match(/(.*),g:(.*)/);
  if (m) {
    cb({photo_id: m[1], g: m[2]});
  } else if (hash.substr(0, 2) == 'g:') {
    cb({g: hash.substr(2)});
  } else if (hash.length > 0) {
    var photo_id = hash;
    findLatLonForPhoto(photo_id, function(g) {
      cb({photo_id: hash, g: g});
    });
  } else {
    cb({});
  }
}

function stateObjectToHash(state) {
  if (state.photo_id) {
    if (state.g == 'pop') {
      return state.photo_id + ',g:pop';
    } else {
      return state.photo_id;
    }
  }

  if (state.g) {
    return 'g:' + state.g;
  }
  return '';
}

// Change whatever is currently displayed to reflect the state in obj.
// This change may happen asynchronously.
// This won't affect the URL hash.
function transitionToStateObject(targetState) {
  var currentState = getCurrentStateObject();

  // This normalizes the state, i.e. adds a 'g' field to if it's implied.
  // (it also strips out extraneous fields)
  hashToStateObject(stateObjectToHash(targetState), function(state) {
    if (JSON.stringify(currentState) == JSON.stringify(state)) {
      return;  // nothing to do.
    }

    // Reset to map view.
    if (JSON.stringify(state) == '{}') {
      hideAbout();
      hideExpanded();
    }

    // Show a different grid?
    if (currentState.g != state.g) {
      var lat_lon = state.g;
      var count = lat_lons[lat_lon];
      if (state.g == 'pop') {
        count = getPopularPhotoIds().length;
      } else {
        // Highlight the marker, creating it if necessary.
        var marker = lat_lon_to_marker[lat_lon];
        var latLng = parseLatLon(lat_lon);
        if (!marker) {
          marker = createMarker(lat_lon, latLng);
        }
        if (marker) {
          selectMarker(marker, count);
          if (!map.getBounds().contains(latLng)) {
            map.panTo(latLng);
          }
        }
      }
      loadInfoForLatLon(lat_lon).done(function(photo_ids) {
        showExpanded(state.g, photo_ids, state.photo_id);
      });
      return;
    }

    if (currentState.photo_id && !state.photo_id) {
      // Hide the selected photo
      $('#grid-container').expandableGrid('deselect');
    } else {
      // Show a different photo
      $('#grid-container').expandableGrid('select', state.photo_id);
    }
  });
}


function findLatLonForPhoto(photo_id, cb) {
  var id4 = photo_id.slice(0, 4);
  $.ajax({
    dataType: "json",
    url: '/id4-to-location/' + id4 + '.json',
    success: function(id_to_latlon) {
      cb(id_to_latlon[photo_id])
    }
  });
}
// This file manages all the photo information.
// Some of this comes in via lat-lons.js.
// Some is requested via XHR.

// Maps photo_id -> { title: ..., date: ..., library_url: ... }
var photo_id_to_info = {};

var SITE = '';
var JSON_BASE = SITE + '/by-location';

// The callback is called with the photo_ids that were just loaded, after the
// UI updates.  The callback may assume that infoForPhotoId() will return data
// for all the newly-available photo_ids.
function loadInfoForLatLon(lat_lon) {
  var url;
  if (lat_lon == 'pop') {
    url = SITE + '/popular.json';
  } else {
    url = JSON_BASE + '/' + lat_lon.replace(',', '') + '.json';
  }

  return $.getJSON(url).then(function(response_data, status, xhr) {
    // Add these values to the cache.
    $.extend(photo_id_to_info, response_data);
    var photo_ids = [];
    for (var k in response_data) {
      photo_ids.push(k);
    }
    if (lat_lon != 'pop') {
      lat_lon_to_name[lat_lon] = extractName(response_data);
    }
    return photo_ids;
  });
}

// Returns a {title: ..., date: ..., library_url: ...} object.
// If there's no information about the photo yet, then the values are all set
// to the empty string.
function infoForPhotoId(photo_id) {
  return photo_id_to_info[photo_id] ||
      { title: '', date: '', library_url: '' };
}

// Would it make more sense to incorporate these into infoForPhotoId?
function descriptionForPhotoId(photo_id) {
  var info = infoForPhotoId(photo_id);
  var desc = info.title;
  if (desc) desc += ' ';
  var date = info.date.replace(/n\.d\.?/, 'No Date');
  if (!date) date = 'No Date';
  desc += date;
  return desc;
}

function libraryUrlForPhotoId(photo_id) {

  //fb_links comes from fb_links.js 
  for (var i = 0; i < fb_links.length; i++){
  // look for the entry with a matching `code` value
    if (fb_links[i].id == photo_id){
      return fb_links[i].fb_url;
    }
  }

  //return 'http://digitalcollections.nypl.org/items/image_id/' + photo_id.replace(/-[a-z]$/, '');  VERSIONE ORIGINALE
}

function backId(photo_id) {
  return photo_id.replace('f', 'b').replace(/-[a-z]$/, '');
}

function backOfCardUrlForPhotoId(photo_id) {
  return 'http://images.nypl.org/?id=' + backId(photo_id) + '&t=w';
}


var lat_lon_to_name = {};

// Does this lat_lon have a name, e.g. "Manhattan: 14th Street - 8th Avenue"?
function nameForLatLon(lat_lon) {
  var v = lat_lon_to_name[lat_lon] || '';
  return v.replace(/: | - | & /g, '\n');
}

function extractName(lat_lon_json) {
  // if any entries have an original_title, it's got to be a pure location.
  for (var k in lat_lon_json) {
    var v = lat_lon_json[k];
    if (v.original_title) return v.original_title;
  }
}
function getCanonicalUrlForPhoto(photo_id) {
  return 'http://www.oldra.it/#' + photo_id;
}

function getCommentCount(photo_ids) {
  // There is a batch API:
  // https://developers.facebook.com/docs/graph-api/making-multiple-requests/
  return $.get('https://graph.facebook.com/', {
      'ids': $.map(photo_ids, function(id) {
          return getCanonicalUrlForPhoto(id);
      }).join(',')
  }).then(function(obj) {
    // obj is something like {url: {'id', 'shares', 'comments'}}
    // convert it to {id: comments}
    var newObj = {};
    $.each(obj, function(url, data) {
      newObj[url.replace(/.*#/, '')] = data['comments'] || 0;
    });
    return newObj;
  });
}
/**
 * Common code for recording user feedback.
 * This is shared between the OldNYC site and the OCR feedback tool.
 */

var COOKIE_ID = 'oldnycid';

var firebaseRef = null;
// e.g. if we're offline and the firebase script can't load.
if (typeof(Firebase) !== 'undefined') {
  firebaseRef = new Firebase('https://fluent-fastness-135212.firebaseio.com/');  // brilliant-heat-1088.firebaseio.com/
}

var userLocation = null;
$.get('//ipinfo.io', function(response) {
  userLocation = {
    ip: response.ip,
    location: response.country + '-' + response.region + '-' + response.city
  };
}, 'jsonp');

lastReviewedOcrMsPromise = $.get('/timestamps.json').then(function(data) {
  return data.ocr_ms;
});

function deleteCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function setCookie(name, value) {
  document.cookie = name + "=" + value + "; path=/";
}

function getCookie(name) {
  var b;
  b = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return b ? b.pop() : '';
}

// Assign each user a unique ID for tracking repeat feedback.
var COOKIE = getCookie(COOKIE_ID);
if (!COOKIE) {
  COOKIE = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
  setCookie(COOKIE_ID, COOKIE);
}

// Record one piece of feedback. Returns a jQuery deferred object.
function sendFeedback(photo_id, feedback_type, feedback_obj) {
  ga('send', 'event', 'link', 'feedback', { 'page': '/#' + photo_id });

  feedback_obj.metadata = {
    timestamp: Firebase.ServerValue.TIMESTAMP,
    user_agent: navigator.userAgent,
    user_ip: userLocation ? userLocation.ip : '',
    location: userLocation ? userLocation.location : '',
    cookie: COOKIE
  };

  var path = '/feedback/' + photo_id + '/' + feedback_type;

  var feedbackRef = firebaseRef.child(path);
  var deferred = $.Deferred();
  feedbackRef.push(feedback_obj, function(error) {
    if (error) {
      console.error('Error pushing', error);
      deferred.reject(error);
    } else {
      deferred.resolve();
    }
  });

  return deferred;
}

// Retrieve the most-recent OCR for a backing image.
// Returns a Deferred object which resolves to
// { text: string, metadata: { timestamp: number, ... }
// Resolves with null if there is no OCR text available.
function getFeedbackText(back_id) {
  var deferred = $.Deferred();

  lastReviewedOcrMsPromise.then(function(lastReviewedOcrMs) {
    firebaseRef.child('/feedback/' + back_id + '/text')
      .orderByKey()
      // TODO: start with a key corresponding to lastReviewedOcrMs
      // .limitToLast(1)
      .once('value', function(feedback) {
        var chosen = null;
        feedback.forEach(function(row) {
          var v = row.val();
          if (v.metadata.timestamp > lastReviewedOcrMs) {
            chosen = v;  // take the most-recent one
          }
        });
        // if none are chosen then ther's no text or the static site is up-to-date.
        deferred.resolve(chosen);
      });
  });

  return deferred;
}
var markers = [];
var marker_icons = [];
var lat_lon_to_marker = {};
var selected_marker_icons = [];
var selected_marker, selected_icon;
var map;
var start_date = 1850;
var end_date = 2000;

var FEEDBACK_URL = 'http://old-nyc.appspot.com/rec_feedback'; //FRANCO I think it's not used

var mapPromise = $.Deferred();

// TODO: inline image source into popular-photos.js and get rid of this.
function expandedImageUrl(photo_id) {
  //return 'http://oldnyc-assets.nypl.org/600px/' + photo_id + '.jpg';
  //return 'http://192.168.178.80/thumb/' + photo_id + '.jpg';
  return 'http://www.oldra.it/thumb/' + photo_id + '.jpg';
}

// lat_lon is a "lat,lon" string.
function makeStaticMapsUrl(lat_lon) {
  url = 'http://maps.googleapis.com/maps/api/staticmap?center=' + lat_lon + '&zoom=15&size=150x150&maptype=roadmap&markers=color:red%7C' + lat_lon + '&style=' + STATIC_MAP_STYLE + '&key=AIzaSyCk8AP5p8sQDCTtK7YvAgloH-KyIq5FIR0';
  return url;
}

// Make the given marker the currently selected marker.
// This is purely UI code, it doesn't touch anything other than the marker.
function selectMarker(marker, numPhotos) {
  var zIndex = 0;
  if (selected_marker) {
    zIndex = selected_marker.getZIndex();
    selected_marker.setIcon(selected_icon);
  }

  if (marker) {
    selected_marker = marker;
    selected_icon = marker.getIcon();
    marker.setIcon(selected_marker_icons[numPhotos > 100 ? 100 : numPhotos]);
    marker.setZIndex(100000 + zIndex);
  }
}

// The callback gets fired when the info for all lat/lons at this location
// become available (i.e. after the /info RPC returns).
function displayInfoForLatLon(lat_lon, marker, opt_selectCallback) {
  selectMarker(marker, lat_lons[lat_lon]);

  loadInfoForLatLon(lat_lon).done(function(photoIds) {
    var selectedId = null;
    if (photoIds.length <= 10) {
      selectedId = photoIds[0];
    }
    showExpanded(lat_lon, photoIds, selectedId);
    if (opt_selectCallback && selectedId) {
      opt_selectCallback(selectedId);
    }
  }).fail(function() {
  });
}

function handleClick(e) {
  var lat_lon = e.latLng.lat().toFixed(6) + ',' + e.latLng.lng().toFixed(6)
  var marker = lat_lon_to_marker[lat_lon];
  displayInfoForLatLon(lat_lon, marker, function(photo_id) {
    $(window).trigger('openPreviewPanel');
    $(window).trigger('showPhotoPreview', photo_id);
  });
  $(window).trigger('showGrid', lat_lon);
}

function initialize_map() {
  var latlng = new google.maps.LatLng(44.417778, 12.19944);
  var opts = {
    zoom: 15,
    maxZoom: 18,
    minZoom: 10,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    streetViewControl: true,
    panControl: false,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP
    },
    styles: MAP_STYLE
  };
  
  map = new google.maps.Map($('#map').get(0), opts);

  // This shoves the navigation bits down by a CSS-specified amount
  // (see the .spacer rule). This is surprisingly hard to do.
  var map_spacer = $('<div/>').append($('<div/>').addClass('spacer')).get(0);
  map_spacer.index = -1;
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(map_spacer);

  // The OldSF UI just gets in the way of Street View.
  // Even worse, it blocks the "exit" button!
  var streetView = map.getStreetView();
  google.maps.event.addListener(streetView, 'visible_changed',
      function() {
        $('.streetview-hide').toggle(!streetView.getVisible());
      });

  // Create marker icons for each number.
  marker_icons.push(null);  // it's easier to be 1-based.
  selected_marker_icons.push(null);
  for (var i = 0; i < 100; i++) {
    var num = i + 1;
    var size = (num == 1 ? 9 : 13);
    var selectedSize = (num == 1 ? 15 : 21);
    marker_icons.push(new google.maps.MarkerImage(
      'images/sprite-2014-08-29.png',
      new google.maps.Size(size, size),
      new google.maps.Point((i%10)*39, Math.floor(i/10)*39),
      new google.maps.Point((size - 1) / 2, (size - 1)/2)
    ));
    selected_marker_icons.push(new google.maps.MarkerImage(
      'images/selected-2014-08-29.png',
      new google.maps.Size(selectedSize, selectedSize),
      new google.maps.Point((i%10)*39, Math.floor(i/10)*39),
      new google.maps.Point((selectedSize - 1) / 2, (selectedSize - 1)/2)
    ));
  }

  // Adding markers is expensive -- it's important to defer this when possible.
  var idleListener = google.maps.event.addListener(map, 'idle', function() {
    google.maps.event.removeListener(idleListener);
    addNewlyVisibleMarkers();
    mapPromise.resolve(map);
  });

  google.maps.event.addListener(map, 'bounds_changed', function() {
    addNewlyVisibleMarkers();
  });
}

function addNewlyVisibleMarkers() {
  var bounds = map.getBounds();

  for (var lat_lon in lat_lons) {
    if (lat_lon in lat_lon_to_marker) continue;

    var pos = parseLatLon(lat_lon);
    if (!bounds.contains(pos)) continue;

    createMarker(lat_lon, pos);
  }
}

function parseLatLon(lat_lon) {
  var ll = lat_lon.split(",");
  return new google.maps.LatLng(parseFloat(ll[0]), parseFloat(ll[1]));
}

function createMarker(lat_lon, latLng) {
  var count = lat_lons[lat_lon];
  var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    flat: true,
    visible: true,
    icon: marker_icons[Math.min(count, 100)],
    title: lat_lon
  });
  markers.push(marker);
  lat_lon_to_marker[lat_lon] = marker;
  google.maps.event.addListener(marker, 'click', handleClick);
  return marker;
}


// NOTE: This can only be called when the info for all photo_ids at the current
// position have been loaded (in particular the image widths).
// key is used to construct URL fragments.
function showExpanded(key, photo_ids, opt_selected_id) {
  hideAbout();
  map.set('keyboardShortcuts', false);
  $('#expanded').show().data('grid-key', key);
  $('.location').text(nameForLatLon(key));
  var images = $.map(photo_ids, function(photo_id, idx) {
    var info = infoForPhotoId(photo_id);
    return $.extend({
      id: photo_id,
      largesrc: info.image_url,
      src: info.thumb_url,
      width: 600,   // these are fallbacks
      height: 400
    }, info);
  });
  $('#preview-map').attr('src', makeStaticMapsUrl(key));
  $('#grid-container').expandableGrid({
    rowHeight: 200,
    speed: 200 /* ms for transitions */
  }, images);
  if (opt_selected_id) {
    $('#grid-container').expandableGrid('select', opt_selected_id);
  }
}

function hideExpanded() {
  $('#expanded').hide();
  $(document).unbind('keyup');
  map.set('keyboardShortcuts', true);
}

// This fills out details for either a thumbnail or the expanded image pane.
function fillPhotoPane(photo_id, $pane) {
  // $pane is div.og-details
  // This could be either a thumbnail on the right-hand side or an expanded
  // image, front and center.
  $('.description', $pane).html(descriptionForPhotoId(photo_id));

  var info = infoForPhotoId(photo_id);
  var library_url = libraryUrlForPhotoId(photo_id);

  // this one is actually on the left panel, not $pane.
  $pane.parent().find('.nypl-link a').attr('href', library_url);
  $('.nypl-logo a').attr('href', library_url);

  var canonicalUrl = getCanonicalUrlForPhoto(photo_id);

  // OCR'd text
  getFeedbackText(backId(photo_id)).done(function(ocr) {
    var text = ocr ? ocr.text : info.text;
    var ocr_url = '/ocr.html#' + photo_id,
        hasBack = photo_id.match('[0-9]f');

    if (text) {
      var $text = $pane.find('.text');
      $text.text(text.replace(/\n*$/, ''));
      $text.append($('<i>&nbsp; &nbsp; Typos? Help <a target=_blank href>fix them</a>.</i>'));
      $text.find('a').attr('href', ocr_url);
    } else if (hasBack) {
      var $more = $pane.find('.more-on-back');
      $more.find('a.ocr-tool').attr('href', ocr_url);
      $more.find('a.nypl').attr('href', library_url);
      $more.show();
    }
  });

  if (typeof(FB) != 'undefined') {
    var $comments = $pane.find('.comments');
    var width = $comments.parent().width();
    $comments.empty().append(
        $('<fb:comments data-numposts="5" data-colorscheme="light"/>')
            .attr('data-width', width)
            .attr('data-href', canonicalUrl)
            .attr('data-version', 'v2.3'))
    FB.XFBML.parse($comments.get(0));
    console.log(canonicalUrl);
  }

  // Social links
  var client = new ZeroClipboard($pane.find('.copy-link'));
  client.on('ready', function() {
    client.on('copy', function(event) {
      var clipboard = event.clipboardData;
      clipboard.setData('text/plain', window.location.href);
    });
    client.on( 'aftercopy', function( event ) {
      var $btn = $(event.target);
      $btn.css({width: $btn.get(0).offsetWidth}).addClass('clicked').text('Copied!');
    });
  });
  
  // Some browser plugins block twitter
  if (typeof(twttr) != 'undefined') {
    twttr.widgets.createShareButton(
        document.location.href,
        $pane.find('.tweet').get(0), {
          count: 'none',
          text: (info.original_title || info.title) + ' - ' + info.date,
          via: 'OldRA @eccoilmoro'
        });
  }

  if (typeof(FB) != 'undefined') {
    var $fb_holder = $pane.find('.facebook-holder');
    $fb_holder.empty().append($('<fb:like>').attr({
        'href': canonicalUrl,
        'layout': 'button',
        'action': 'like',
        'show_faces': 'false',
        'share': 'true'
      }));
    FB.XFBML.parse($fb_holder.get(0));
  }

  // Scrolling the panel shouldn't scroll the whole grid.
  // See http://stackoverflow.com/a/10514680/388951
  $pane.off("mousewheel").on("mousewheel", function(event) {
    var height = $pane.height(),
        scrollHeight = $pane.get(0).scrollHeight;
    var blockScrolling = this.scrollTop === scrollHeight - height &&
                         event.deltaY < 0 || this.scrollTop === 0 &&
                         event.deltaY > 0;
    return !blockScrolling;
  });
}

function photoIdFromATag(a) {
  return $(a).attr('href').replace('/#', '');
}

function getPopularPhotoIds() {
  return $('.popular-photo:visible a').map(function(_, a) {
    return photoIdFromATag(a);
  }).toArray();
}

// User selected a photo in the "popular" grid. Update the static map.
function updateStaticMapsUrl(photo_id) {
  var key = 'New York City';
  var lat_lon = findLatLonForPhoto(photo_id);
  if (lat_lon) key = lat_lon;
  $('#preview-map').attr('src', makeStaticMapsUrl(key));
}

function fillPopularImagesPanel() {
  // Rotate the images daily.
  var elapsedMs = new Date().getTime() - new Date('2015/12/15').getTime(),
      elapsedDays = Math.floor(elapsedMs / 86400 / 1000),
      shift = elapsedDays % popular_photos.length;
  var frontPhotos = popular_photos.splice(0, shift);
  popular_photos = popular_photos.concat(frontPhotos);

  var makePanel = function(row) {
    var $panel = $('#popular-photo-template').clone().removeAttr('id');
    $panel.find('a').attr('href', '#' + row.id);
    $panel.find('img')
        .attr('border', '0')  // For IE8
        .attr('data-src', expandedImageUrl(row.id))
        .attr('height', row.height);
    $panel.find('.desc').text(row.desc);
    $panel.find('.loc').text(row.loc);
    if (row.date) $panel.find('.date').text(' (' + row.date + ')');
    return $panel.get(0);
  };

  var popularPhotos = $.map(popular_photos, makePanel);
  $('#popular').append($(popularPhotos).show());
  $(popularPhotos).appear({force_process:true});
  $('#popular').on('appear', '.popular-photo', function() {
    var $img = $(this).find('img[data-src]');
    loadDeferredImage($img.get(0));
  });
}

function loadDeferredImage(img) {
  var $img = $(img);
  if ($img.attr('src')) return;
  $(img)
    .attr('src', $(img).attr('data-src'))
    .removeAttr('data-src');
}

function hidePopular() {
  $('#popular').hide();
  $('.popular-link').show();
}
function showPopular() {
  $('#popular').show();
  $('.popular-link').hide();
  $('#popular').appear({force_process: true});
}

function showAbout() {
  hideExpanded();
  $('#about-page').show();
  // Hack! There's probably a way to do this with CSS
  var $container = $('#about-page .container');
  var w = $container.width();
  var mw = parseInt($container.css('max-width'), 0);
  if (w < mw) {
    $container.css('margin-left', '-' + (w / 2) + 'px');
  }
}
function hideAbout() {
  $('#about-page').hide();
}

// See http://stackoverflow.com/a/30112044/388951
$.fn.scrollGuard = function() {
  return this.on('mousewheel', function(e) {
    //var event = e.originalEvent;
    //var d = event.wheelDelta || -event.detail;
    //this.scrollTop += ( d < 0 ? 1 : -1 ) * 30;
    //e.preventDefault();
    var scrollHeight = this.scrollHeight,
        height = $(this).height();
    var blockScrolling = this.scrollTop === scrollHeight - height && event.deltaY < 0 || this.scrollTop === 0 && event.deltaY > 0;
    return !blockScrolling;
  });
};

$(function() {
  // Clicks on the background or "exit" button should leave the slideshow.
  $(document).on('click', '#expanded .curtains, #expanded .exit', function() {
    hideExpanded();
    $(window).trigger('hideGrid');
  });
  $('#grid-container, #expanded .header').on('click', function(e) {
    if (e.target == this || $(e.target).is('.og-grid')) {
      hideExpanded();
      $(window).trigger('hideGrid');
    }
  });

  // Fill in the expanded preview pane.
  $('#grid-container').on('og-fill', 'li', function(e, div) {
    var id = $(this).data('image-id');
    $(div).empty().append(
        $('#image-details-template').clone().removeAttr('id').show());
    $(div).parent().find('.og-details-left').empty().append(
        $('#image-details-left-template').clone().removeAttr('id').show());
    fillPhotoPane(id, $(div));

    var g = $('#expanded').data('grid-key');
    if (g == 'pop') {
      updateStaticMapsUrl(id);
    }
  })
  .on('click', '.og-fullimg > img', function() {
    var photo_id = $('#grid-container').expandableGrid('selectedId');
    window.open(libraryUrlForPhotoId(photo_id), '_blank');
  });

  $('#grid-container').on('click', '.rotate-image-button', function(e) {
    e.preventDefault();
    var $img = $(this).closest('li').find('.og-fullimg > img');
    var currentRotation = $img.data('rotate') || 0;
    currentRotation += 90;
    $img
      .css('transform', 'rotate(' + currentRotation + 'deg)')
      .data('rotate', currentRotation);

    var photo_id = $('#grid-container').expandableGrid('selectedId');
    ga('send', 'event', 'link', 'rotate', {
      'page': '/#' + photo_id + '(' + currentRotation + ')'
    });
    sendFeedback(photo_id, 'rotate', {
      'rotate': currentRotation,
      'original': infoForPhotoId(photo_id).rotation || null
    });
  }).on('click', '.feedback-button', function(e) {
    e.preventDefault();
    $('#grid-container .details').fadeOut();
    $('#grid-container .feedback').fadeIn();
  }).on('click', 'a.back', function(e) {
    e.preventDefault();
    $('#grid-container .feedback').fadeOut();
    $('#grid-container .details').fadeIn();
  });
  $(document).on('keyup', 'input, textarea', function(e) { e.stopPropagation(); });

  $('.popular-photo').on('click', 'a', function(e) {
    e.preventDefault();
    var selectedPhotoId = photoIdFromATag(this);

    loadInfoForLatLon('pop').done(function(photoIds) {
      showExpanded('pop', photoIds, selectedPhotoId);
      $(window).trigger('showGrid', 'pop');
      $(window).trigger('openPreviewPanel');
      $(window).trigger('showPhotoPreview', selectedPhotoId);
    }).fail(function() {
    });
  });

  // ... it's annoying that we have to do this. jquery.appear.js should work!
  $('#popular').on('scroll', function() {
    $(this).appear({force_process: true});
  });

  // Show/hide popular images
  $('#popular .close').on('click', function() {
    setCookie('nopop', '1');
    hidePopular();
  });
  $('.popular-link a').on('click', function(e) {
    showPopular();
    deleteCookie('nopop');
    e.preventDefault();
  });
  if (document.cookie.indexOf('nopop=') >= 0) {
    hidePopular();
  }

  // Display the about page on top of the map.
  $('#about a').on('click', function(e) {
    e.preventDefault();
    showAbout();
  });
  $('#about-page .curtains, #about-page .exit').on('click', function(e) {
    hideAbout();
  });

  // Record feedback on images. Can have a parameter or not.
  var thanks = function(button) {
    return function() { $(button).text('Thanks!'); };
  };
  $('#grid-container').on('click', '.feedback button[feedback]', function() {
    var $button = $(this);
    var value = true;
    if ($button.attr('feedback-param')) {
      var $input = $button.siblings('input, textarea');
      value = $input.val();
      if (value == '') return;
      $input.prop('disabled', true);
    }
    $button.prop('disabled', true);
    var photo_id = $('#grid-container').expandableGrid('selectedId');
    var type = $button.attr('feedback');
    var obj = {}; obj[type] = value;
    sendFeedback(photo_id, type, obj).then(thanks($button.get(0)));
  });

  $('#grid-container').on('og-select', 'li', function() {
    var photo_id = $(this).data('image-id')
    $(window).trigger('showPhotoPreview', photo_id);
  }).on('og-deselect', function() {
    $(window).trigger('closePreviewPanel');
  }).on('og-openpreview', function() {
    $(window).trigger('openPreviewPanel');
  });
});
// History management service.
// Consider using this instead: https://github.com/browserstate/history.js
var History = function(hashToStateAdapter) {
  this.states = [];
  this.hashToStateAdapter = hashToStateAdapter;
};

History.prototype.initialize = function() {
  var that = this;
  $(window).on('popstate', function(e) {
    that.handlePopState(e.originalEvent.state);
  });

  // Create an artificial initial state
  var state = {initial: true};
  var didSetState = false;

  var rest = function() {
    // Blow away the current state -- it's only going to cause trouble.
    history.replaceState({}, '', document.location.href);
    this.replaceState(state, document.title, document.location.href);

    if (didSetState) {
      $(this).trigger('setStateInResponseToPageLoad', state);
    }
  }.bind(this);

  if (this.hashToStateAdapter && document.location.hash) {
    didSetState = true;
    // Need to honor any hash fragments that the user navigated to.
    this.hashToStateAdapter(document.location.hash, function(newState) {
      state = newState;
      rest();
    });
  } else {
    rest();
  }
};

History.prototype.makeState = function(obj) {
  var currentStateId = null;
  if (history.state && 'id' in history.state) {
    currentStateId = history.state.id;
  }
  return $.extend({
    length: history.length,
    previousStateId: currentStateId,
    id: Date.now() + '' + Math.floor(Math.random() * 100000000)
  }, obj);
};

History.prototype.simplifyState = function(obj) {
  var state = $.extend({}, obj);
  delete state['id'];
  // delete state['length'];
  delete state['previousStateId'];
  return state;
};

History.prototype.handlePopState = function(state) {
  // note: we don't remove entries from this.state here, since the user could
  // still go forward to them.
  if (state && 'id' in state) {
    var stateObj = this.states[this.getStateIndexById(state.id)];
    if (stateObj && stateObj.expectingBack) {
      // This is happening as a result of a call on the History object.
      delete stateObj.expectingBack;
      return;
    }
  }

  var trigger = function() {
    $(this).trigger('setStateInResponseToUser', state);
  }.bind(this);
  if (!state && this.hashToStateAdapter) {
    this.hashToStateAdapter(document.location.hash, function(newState) {
      state = newState;
      trigger();
    });
  } else {
    trigger();
  }
};

// Just like history.pushState.
History.prototype.pushState = function(stateObj, title, url) {
  var state = this.makeState(stateObj);
  this.states.push(state);
  history.pushState(state, title, url);
  document.title = title;
};

// Just like history.replaceState.
History.prototype.replaceState = function(stateObj, title, url) {
  var curState = this.getCurrentState();
  var replaceIdx = null;
  var previousId = null;
  if (curState) {
    if ('id' in curState) {
      replaceIdx = this.getStateIndexById(curState.id);
    }
    if ('previousStateId' in curState) {
      // in replacing the current state, we inherit its parent state.
      previousId = curState.previousStateId;
    }
  }

  var state = this.makeState(stateObj);
  if (previousId !== null) {
    state.previousStateId = previousId;
  }
  if (replaceIdx !== null) {
    this.states[replaceIdx] = state;
  } else {
    this.states.push(state);
  }
  history.replaceState(state, title, url);
  document.title = title;
}

History.prototype.getCurrentState = function() {
  return history.state;
};

History.prototype.getStateIndexById = function(stateId) {
  for (var i = 0; i < this.states.length; i++) {
    if (this.states[i].id == stateId) return i;
  }
  return null;
};

// Get the state object one prior to the given one.
History.prototype.getPreviousState = function(state) {
  if (!('previousStateId' in state)) return null;
  var id = state['previousStateId'];
  if (id == null) return id;

  var idx = this.getStateIndexById(id);
  if (idx !== null) {
    return this.states[idx];
  }
  throw "State out of whack!";
};

/**
 * Go back in history until the predicate is true.
 * If predicate is a string, go back until it's a key in the state object.
 * This will not result in a setStateInResponseToUser event firing.
 * Returns the number of steps back in the history that it went (possibly 0 if
 * the current state matches the predicate).
 * If no matching history state is found, the history stack will be cleared and
 * alternativeState will be pushed on.
 */
History.prototype.goBackUntil = function(predicate, alternativeState) {
  // Convenience for common case of checking if history state has a key.
  if (typeof(predicate) == "string") {
    return this.goBackUntil(
        function(state) { return predicate in state },
        alternativeState);
  }

  var state = this.getCurrentState();
  var numBack = 0;

  var lastState = null;
  while (state && !predicate(state)) {
    lastState = state;
    state = this.getPreviousState(state);
    numBack += 1;
  }
  if (state && numBack) {
    state.expectingBack = true;
    history.go(-numBack);
    return numBack;
  }
  if (numBack == 0) {
    return 0;  // current state fulfilled predicate
  } else {
    // no state fulfilled predicate. Clear the stack to just one state and
    // replace it with alternativeState.
    var stackLen = numBack;
    if (stackLen != 1) {
      lastState.expectingBack = true;
      history.go(-(stackLen - 1));
    }
    this.replaceState(alternativeState[0], alternativeState[1], alternativeState[2]);
  }
};

// Debugging method -- prints the history stack.
History.prototype.logStack = function() {
  var state = this.getCurrentState();
  var i = 0;
  while (state) {
    console.log((i > 0 ? '-' : ' ') + i, this.simplifyState(state));
    state = this.getPreviousState(state);
    i++;
  }
};
// This should go in the $(function()) block below.
// It's exposed to facilitate debugging.
h = new History(function(hash, cb) {
  hashToStateObject(hash.substr(1), cb);
});

// Ping Google Analytics with the current URL (e.g. after history.pushState).
// See http://stackoverflow.com/a/4813223/388951
function trackAnalyticsPageView() {
  var url = location.pathname + location.search  + location.hash;
  ga('send', 'pageview', { 'page': url });
}

var LOG_HISTORY_EVENTS = false;
// var LOG_HISTORY_EVENTS = true;

$(function() {
  // Relevant UI methods:
  // - transitionToStateObject(obj)
  //
  // State/URL manipulation:
  // - stateObjectToHash()
  // - hashToStateObject()
  //
  // State objects look like:
  // {photo_id:string, g:string}

  // Returns URL fragments like '/#g:123'.
  var fragment = function(state) {
    return '/#' + stateObjectToHash(state);
  };

  var title = function(state) {
    var old_nyc = 'Old RA'; //Old NYC
    if ('photo_id' in state) {
      return old_nyc + ' - Photo ' + state.photo_id;
    } else if ('g' in state) {
      // TODO: include cross-streets in the title
      return old_nyc + ' - Grid';
    } else {
      return old_nyc;
    }
  };

  $(window)
    .on('showGrid', function(e, pos) {
      var state = {g:pos};
      h.pushState(state, title(state), fragment(state));
      trackAnalyticsPageView();
    }).on('hideGrid', function() {
      var state = {initial: true};
      h.goBackUntil('initial', [state, title(state), fragment(state)]);
    }).on('openPreviewPanel', function() {
      // This is a transient state -- it should immediately be replaced.
      var state = {photo_id: true};
      h.pushState(state, title(state), fragment(state));
    }).on('showPhotoPreview', function(e, photo_id) {
      var g = $('#expanded').data('grid-key');
      var state = {photo_id:photo_id};
      if (g == 'pop') state.g = 'pop';
      h.replaceState(state, title(state), fragment(state));
      trackAnalyticsPageView();
    }).on('closePreviewPanel', function() {
      var g = $('#expanded').data('grid-key');
      var state = {g: g};
      h.goBackUntil('g', [state, title(state), fragment(state)]);
    });

  // Update the UI in response to hitting the back/forward button,
  // a hash fragment on initial page load or the user editing the URL.
  $(h).on('setStateInResponseToUser setStateInResponseToPageLoad',
  function(e, state) {
    // It's important that these methods only configure the UI.
    // They must not trigger events, or they could cause a loop!
    transitionToStateObject(state);
  });

  $(h).on('setStateInResponseToPageLoad', function(e, state) {
    trackAnalyticsPageView();  // hopefully this helps track social shares
  });

  if (LOG_HISTORY_EVENTS) {
    $(window)
      .on('showGrid', function(e, pos) {
        console.log('showGrid', pos);
      }).on('hideGrid', function() {
        console.log('hideGrid');
      }).on('showPhotoPreview', function(e, photo_id) {
        console.log('showPhotoPreview', photo_id);
      }).on('closePreviewPanel', function() {
        console.log('closePreviewPanel');
      }).on('openPreviewPanel', function() {
        console.log('openPreviewPanel');
      });
    $(h).on('setStateInResponseToUser', function(e, state) {
      console.log('setStateInResponseToUser', state);
    }).on('setStateInResponseToPageLoad', function(e, state) {
      console.log('setStateInResponseToPageLoad', state);
    });
  }

  // To load from a URL fragment, the map object must be ready.
  mapPromise.done(function() {
    h.initialize();
  });

});
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransitions-shiv-cssclasses-prefixed-testprop-testallprops-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.csstransitions=function(){return D("transition")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,e.prefixed=function(a,b,c){return b?D(a,b,c):D(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.3
 */
(function($) {
  var selectors = [];

  var check_binded = false;
  var check_lock = false;
  var defaults = {
    interval: 250,
    force_process: false
  }
  var $window = $(window);

  var $prior_appeared;

  function process() {
    check_lock = false;
    for (var index = 0; index < selectors.length; index++) {
      var $appeared = $(selectors[index]).filter(function() {
        return $(this).is(':appeared');
      });

      $appeared.trigger('appear', [$appeared]);

      if ($prior_appeared) {
        var $disappeared = $prior_appeared.not($appeared);
        $disappeared.trigger('disappear', [$disappeared]);
      }
      $prior_appeared = $appeared;
    }
  }

  // "appeared" custom filter
  $.expr[':']['appeared'] = function(element) {
    var $element = $(element);
    if (!$element.is(':visible')) {
      return false;
    }

    var window_left = $window.scrollLeft();
    var window_top = $window.scrollTop();
    var offset = $element.offset();
    var left = offset.left;
    var top = offset.top;

    if (top + $element.height() >= window_top &&
        top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() &&
        left + $element.width() >= window_left &&
        left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
      return true;
    } else {
      return false;
    }
  }

  $.fn.extend({
    // watching for element's appearance in browser viewport
    appear: function(options) {
      var opts = $.extend({}, defaults, options || {});
      var selector = this.selector || this;
      if (!check_binded) {
        var on_check = function() {
          if (check_lock) {
            return;
          }
          check_lock = true;

          setTimeout(process, opts.interval);
        };

        $(window).scroll(on_check).resize(on_check);
        check_binded = true;
      }

      if (opts.force_process) {
        setTimeout(process, opts.interval);
      }
      selectors.push(selector);
      return $(selector);
    }
  });

  $.extend({
    // force elements's appearance check
    force_appear: function() {
      if (check_binded) {
        process();
        return true;
      };
      return false;
    }
  });
})(jQuery);
/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});/*
* debouncedresize: special jQuery event that happens once after a window resize
*
* latest version and complete README available on Github:
* https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
*
* Copyright 2011 @louis_remi
* Licensed under the MIT license.
*/
var $event = $.event,
$special,
resizeTimeout;


function clientRectIntersect(a, b) {
  var left = Math.max(a.left, b.left);
  var right = Math.min(a.right, b.right);
  var top = Math.max(a.top, b.top);
  var bottom = Math.min(a.bottom, b.bottom);
  return {
    left: left,
    right: Math.max(left, right),
    top: top,
    bottom: Math.max(bottom, top),
    width: Math.max(right - left, 0),
    height: Math.max(bottom - top, 0)
  };
}


// We check for visblity within:
// 1. The window
// 2. Containing scrollable elements
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (el instanceof jQuery) {
    el = el[0];
  }

  var elRect = el.getBoundingClientRect();
  var windowRect = {
    top: 0,
    left: 0,
    bottom: $(window).height(),
    right: $(window).width(),
    height: $(window).height(),
    width: $(window).width()
  };

  elRect = clientRectIntersect(elRect, windowRect);
  if (elRect.width * elRect.height == 0) return false;

  var $scrollParents = scrollableParents(el);
  for (var i = 0; i < $scrollParents.length; i++) {
    var scrollParent = $scrollParents.get(i);
    var scrollParentRect = scrollParent.getBoundingClientRect();
    elRect = clientRectIntersect(elRect, scrollParentRect);
    if (elRect.width * elRect.height == 0) return false;
  }

  return true;
}

function isElementScrollable(el) {
  return el.scrollHeight > el.clientHeight;
}

function scrollableParents(node) {
  var $parents = $(node).parents().filter(function(_, e) {
    return isElementScrollable(e);
  });
  return ($parents.length > 0 ? $parents : $('body'));
}

$special = $event.special.debouncedresize = {
  setup: function() {
    $( this ).on( "resize", $special.handler );
  },
  teardown: function() {
    $( this ).off( "resize", $special.handler );
  },
  handler: function( event, execAsap ) {
    // Save the context
    var context = this,
      args = arguments,
      dispatch = function() {
        // set correct event type
        event.type = "debouncedresize";
        $event.dispatch.apply( context, args );
      };

    if ( resizeTimeout ) {
      clearTimeout( resizeTimeout );
    }

    execAsap ?
      dispatch() :
      resizeTimeout = setTimeout( dispatch, $special.threshold );
  },
  threshold: 250
};

/*
 * throttledresize: special jQuery event that happens at a reduced rate compared to "resize"
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery-smartresize
 *
 * Copyright 2012 @louis_remi
 * Licensed under the MIT license.
 *
 * This saved you an hour of work? 
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 */
(function($) {

var $event = $.event,
	$special,
	dummy = {_:0},
	frame = 0,
	wasResized, animRunning;

$special = $event.special.throttledresize = {
	setup: function() {
		$( this ).on( "resize", $special.handler );
	},
	teardown: function() {
		$( this ).off( "resize", $special.handler );
	},
	handler: function( event, execAsap ) {
		// Save the context
		var context = this,
			args = arguments;

		wasResized = true;

		if ( !animRunning ) {
			setInterval(function(){
				frame++;

				if ( frame > $special.threshold && wasResized || execAsap ) {
					// set correct event type
					event.type = "throttledresize";
					$event.dispatch.apply( context, args );
					wasResized = false;
					frame = 0;
				}
				if ( frame > 9 ) {
					$(dummy).stop();
					animRunning = false;
					frame = 0;
				}
			}, 30);
			animRunning = true;
		}
	},
	threshold: 0
};

})(jQuery);

var Grid = function() {

    // list of items
  var $grid = null,  // $grid is the <ul>
    // the items
    $items = null,  // these are the <li>s
    // current expanded item's index
    current = -1,
    // position (top) of the expanded item
    // used to know if the preview will expand in a different row
    previewPos = -1,
    // extra amount of pixels to scroll the window
    scrollExtra = 0,
    // extra margin when expanded (between preview overlay and the next items)
    marginExpanded = 10,
    $window = $(window), winsize,
    $body = null,
    // transitionend events
    transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd',
      'MozTransition' : 'transitionend',
      'OTransition' : 'oTransitionEnd',
      'msTransition' : 'MSTransitionEnd',
      'transition' : 'transitionend'
    },
    transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
    // support for csstransitions
    support = Modernizr.csstransitions,
    // default settings
    settings = {
      minHeight: 500,
      maxHeight: 750,
      speed: 350,
      easing: 'ease'
    };

  function init(grid, config) {
    $grid = $(grid);
    $items = $grid.children('li');
    $body = $('html, body');

    // the settings..
    settings = $.extend(true, {}, settings, config);

    // save item's size and offset
    saveItemInfo(true);
    // get window's size
    getWinSize();
    // initialize some events
    initEvents();
  }

  // add more items to the grid.
  // the new items need to appended to the grid.
  // after that call Grid.addItems(theItems);
  function addItems($newitems) {
    $items = $items.add( $newitems );

    $newitems.each(function() {
      var $item = $(this);
      $item.data({
        offsetTop: $item.offset().top,
        height: $item.height()
      });
    });

    initItemsEvents($newitems);
  }

  // saves the item´s offset top and height (if saveheight is true)
  function saveItemInfo(saveheight) {
    $items.each(function() {
      var $item = $(this);
      $item.data('offsetTop', $item.offset().top);
      if( saveheight ) {
        $item.data('height', $item.height());
      }
    });
  }

  function initEvents() {
    // when clicking an item, show the preview with the item´s info and large
    // image.
    // close the item if already expanded.
    // also close if clicking on the item´s cross
    initItemsEvents($items);
    
    // on window resize get the window´s size again
    // reset some values..
    $window.on('debouncedresize', function() {
      scrollExtra = 0;
      previewPos = -1;
      // save item´s offset
      saveItemInfo();
      getWinSize();
      var preview = $.data($grid, 'preview');
      if (typeof preview != 'undefined') {
        hidePreview();
      }
    });
  }

  function initItemsEvents($items) {
    $items.on('click', 'span.og-close', function() {
      hidePreview();
      $(this).trigger('og-deselect');
      return false;
    }).children('a').on('click', function(e) {
      var $li = $(this).parent();
      // check if item already opened
      if (current === $li.index()) {
        hidePreview()
        $li.trigger('og-deselect');
      } else {
        var previousSelection = current;
        showPreview($li);
        if (previousSelection == -1) {
          $grid.trigger('og-openpreview');
        }
        $li.trigger('og-select');
      }
      return false;
    });
  }

  function getWinSize() {
    winsize = { width : $window.width(), height : $window.height() };
  }

  function showPreview($item) {
    var preview = $.data($grid, 'preview'),
      // item´s offset top
      position = $item.data('offsetTop');

    scrollExtra = 0;

    // if a preview exists and previewPos is different (different row) from
    // item's top then close it
    if (typeof preview != 'undefined') {
      // not in the same row
      if (previewPos !== position) {
        // if position > previewPos then we need to take te current preview's
        // height in consideration when scrolling the window
        if (position > previewPos) {
          scrollExtra = preview.height;
        }
        hidePreview();
      } else {
        // same row 
        preview.update($item);
        return false;
      }
    }

    // update previewPos
    previewPos = position;
    // initialize new preview for the clicked item
    preview = $.data($grid, 'preview', new Preview($item));
    // expand preview overlay
    preview.open();
  }

  function hidePreview() {
    current = -1;
    var preview = $.data($grid, 'preview');
    preview.close();
    $.removeData($grid, 'preview');
  }

  // the preview obj / overlay
  function Preview($item) {
    this.$item = $item;
    this.expandedIdx = this.$item.index();
    this.create();
    this.update();
  }

  Preview.prototype = {
    create : function() {
      // create Preview structure:
      this.$details = $( '<div class="og-details" />' );
      this.$loading = $( '<div class="og-loading"></div>' );
      this.$fullimage = $( '<div class="og-fullimg"></div>' ).append( this.$loading ).append($('<div class="og-details-left" style="display:none">'));
      this.$closePreview = $( '<span class="og-close"></span>' );
      this.$previewInner = $( '<div class="og-expander-inner"></div>' ).append( this.$closePreview, this.$fullimage, this.$details );
      this.$previewLeft = $('<div class="og-previous"></div>');
      this.$previewRight = $('<div class="og-next"></div>');
      this.$previewEl = $( '<div class="og-expander"></div>' ).append( this.$previewInner, this.$previewLeft, this.$previewRight );
      // append preview element to the item
      this.$item.append(this.getEl());
      // set the transitions for the preview and the item
      if (support) {
        this.setTransition();
      }
    },

    update : function( $item ) {
      if( $item ) {
        this.$item = $item;
      }
      
      // if already expanded remove class "og-expanded" from current item and add it to new item
      // $('.og-grid li').removeClass('og-expanded');
      if( current !== -1 ) {
        var $currentItem = $items.eq(current);
        $currentItem.removeClass('og-expanded');
        this.$item.addClass('og-expanded');
        // position the preview correctly
        this.positionPreview();
      }

      // update current value
      current = this.$item.index();

      // update preview´s content
      var $itemEl = this.$item.children('a'),
        eldata = {
          largesrc: $itemEl.data('largesrc'),
        };

      this.$details.empty();
      this.$fullimage.find('.og-details-left').empty();
      $(this.$item).trigger('og-fill', this.$details);

      var self = this;
      
      // remove the current image in the preview
      if (typeof self.$largeImg != 'undefined') {
        self.$largeImg.remove();
      }

      // preload large image and add it to the preview
      // for smaller screens we don´t display the large image (the media query will hide the fullimage wrapper)
      if (self.$fullimage.is(':visible')) {
        this.$loading.show();
        $('<img/>').load(function() {
          var $img = $(this);
          if ($img.attr('src') === self.$item.children('a').data('largesrc')) {
            var $fullimage = self.$fullimage;
            self.$loading.hide();
            $fullimage.find('.og-loading img').remove();
            self.$largeImg = $img.fadeIn(settings.speed);
            $fullimage.append([
                self.$largeImg,
                self.$fullimage.find('.og-details-left').show()]);
          }
        }).attr('src', eldata.largesrc);
      }
    },

    // Open the preview pane
    open: function() {
      setTimeout($.proxy(function() {  
        // set the height for the preview and the item
        var self = this;
        this.setHeights().then(function() {
          // scroll to position the preview in the right place
          self.positionPreview();
        });
      }, this), 25);

      var self = this;
      var goLeft = function() {
        if (current > 0) {
          var $li = $items.eq(current - 1);
          showPreview($li);
          $li.trigger('og-select');
        }
      };
      var goRight = function() {
        if (current < $items.length) {
          var $li = $items.eq(current + 1);
          showPreview($li);
          $li.trigger('og-select');
        }
      };
      $('.og-previous, .og-next').on('click', function() {
        if ($(this).is('.og-previous')) {
          goLeft();
        } else {
          goRight();
        }
      });
      $(document).on('keyup.og', function(e) {
        if (e.keyCode == 37) {
          goLeft();
        } else if (e.keyCode == 39) {
          goRight();
        } else if (e.keyCode == 27) {  // escape
          self.close();
          $grid.trigger('og-deselect');
        }
      });
    },

    // Close the preview pane
    close : function() {
      $('.og-previous, .og-next').off('click');
      $(document).off('keyup.og');

      var self = this,
        onEndFn = function() {
          self.$item.removeClass( 'og-expanded' );
          self.$item.css('height', '');
          self.$previewEl.remove();
        };

      setTimeout($.proxy(function() {
        if (typeof this.$largeImg !== 'undefined') {
          this.$largeImg.fadeOut('fast');
        }
        this.$previewEl.css('height', 0);
        // the current expanded item (might be different from this.$item)
        var $expandedItem = $items.eq(this.expandedIdx);
        $expandedItem.css('height', $expandedItem.data('height')).one(transEndEventName, onEndFn);

        if (!support) {
          onEndFn.call();
        }
      }, this), 25);
      
      return false;
    },

    // TODO: document, rename all these horrible variables.
    // this.$previewEl is the gray area
    // this.$item is the <li>, so its height must include the thumbnail's height!
    calcHeight: function() {
      var maxMargin = 100;  // image height + margin == previewHeight
      var scrollParents = scrollableParents($grid),
          $scrollParent = $(scrollParents.get(0)),
          scrollParentHeight = Math.min($scrollParent.height(), $(window).height()),
          thumbnailHeight = this.$item.data('height'),
          previewHeight = scrollParentHeight - thumbnailHeight - 50;

      if (previewHeight > settings.maxHeight) {
        previewHeight = settings.maxHeight;
      }

      this.previewHeight = previewHeight;  // this.$item.data('eg-height');  // height of image

      this.itemHeight = previewHeight + thumbnailHeight + 10;
    },

    setHeights: function() {
      var deferred = $.Deferred();
      var self = this,
        onEndFn = function() {
          self.$item.addClass('og-expanded');
          deferred.resolve({});
        };

      this.calcHeight();
      this.$previewEl.css('height', this.previewHeight);
      this.$item
        .css('height', this.itemHeight)
        .one(transEndEventName, onEndFn);

      if (!support) {
        onEndFn.call();
      }
      return deferred;
    },

    positionPreview: function() {
      // Scroll the newly-selected item to the top of the page.
      var $item = this.$item;
      var scrollParents = scrollableParents($grid),
          $scrollParent = $(scrollParents.get(0)),
          parentTop = $item.parent().position().top;
      if ($scrollParent.get(0).tagName == 'BODY') {
        parentTop = 0;  // .position() already accounts for <body>
      }
      $scrollParent.animate(
          {scrollTop: $item.position().top - parentTop},
          settings.speed);
    },

    setTransition: function() {
      this.$previewEl.css('transition', 'height ' + settings.speed + 'ms ' + settings.easing);
      this.$item.css('transition', 'height ' + settings.speed + 'ms ' + settings.easing);
    },

    getEl : function() {
      return this.$previewEl;
    }
  }

  return { 
    init: init,
    addItems: addItems,
    showPreview: showPreview,
    hidePreview: hidePreview
  };
};

(function($) {

  var imageMargin = 12;  // TODO(danvk): measure this.

// Returns an array of { height: XXX, images: [] }
// Each entry in images should have a height/width data field.
// TODO(danvk): could just return {height, startIndex, limitIndex} objects.
function partitionIntoRows(images, containerWidth, maxRowHeight) {
  var rows = [];
  var currentRow = [];
  $.each(images, function(i, image) {
    currentRow.push(image);
    var denom = 0;
    $.each(currentRow, function(_, image) {
      denom += $(image).data('eg-width') / $(image).data('eg-height');
    });
    var height = (containerWidth - imageMargin * currentRow.length) / denom;
    if (height < maxRowHeight) {
      rows.push({ height: height, images: currentRow });
      currentRow = [];
    }
  });
  if (currentRow.length > 0) {
    rows.push({ height: maxRowHeight, images: currentRow });
  }
  return rows;
}


function reflow($container) {
  var options = $container.data('og-options');
  var $ul = $container.find('ul.og-grid');
  flowImages($ul.find('li'), $ul.width(), options.rowHeight);
}


function flowImages(lis, width, maxRowHeight) {
  var rows = partitionIntoRows(lis, width, maxRowHeight);
  $.each(rows, function(_, row) {
    var height = Math.round(row.height);
    $.each(row.images, function(_, li) {
      var imgW = $(li).data('eg-width'),
          imgH = $(li).data('eg-height');
      $(li).find('img').attr({
        'width': Math.floor(imgW * (height / imgH)),
        'height': height
      });
    });
    // line wrap happens naturally here.
  });
}


// The image thumbnails all start hidden (by setting data-src instead of src).
// This shows the ones which are above the fold by transferring attributes.
function loadVisibleImages($container) {
  $container.find('img[data-src]').each(function(i, imgEl) {
    var $img = $(imgEl);
    if (isElementInViewport($img)) {
      $img
        .attr('src', $img.attr('data-src'))
        .removeAttr('data-src');
    }
  });
}

/**
 * options = {
 *   rowHeight: NNN
 * }
 * images = [ { src: "", width: M, height: N, largesrc: "", id: "" }, ... ]
 */
$.fn.expandableGrid = function(arg1) {
  var meth = null;
  if ($.type(arg1) === 'object') {
    meth = createExpandableGrid;
  } else if ($.type(arg1) === 'string') {
    if (arg1 === 'select') {
      meth = selectImage;
    } else if (arg1 == 'deselect') {
      meth = deselect;
    } else if (arg1 == 'selectedId') {
      meth = selectedId;
    }
  }
  if (!meth) {
    throw "Invalid expandableGrid call";
  }
  return meth.apply(this, arguments);
};

var createExpandableGrid = function(options, images) {
  var lis = $.map(images, function(image) {
    var $li = $('<li><a><img /></a></li>');
    $li.find('img').attr({
      'data-src': image.src
    });
    $li.find('a').attr({
      'data-largesrc': image.largesrc,
      'href': '#'
    });
    if (image.hasOwnProperty('id')) {
      $li.data('image-id', image.id);
    }
    $li.data({
      'eg-width': image.width,
      'eg-height': image.height
    });
    return $li.get(0);
  });

  $(this).data('og-options', options);

  var $ul = $('<ul class=og-grid>').append($(lis).hide());
  $ul.appendTo(this.empty());
  reflow(this);
  $(lis).show();
  loadVisibleImages(this);
  var container = this;
  $([this.get(0), document]).on('scroll', function() {
    loadVisibleImages($(container));  // new images may have become visible.
  });
  this.on('og-deselect', function() {
    // hack to load new images through the transition.
    var interval = window.setInterval(function() {
      loadVisibleImages($(container));
    }, 100);
    window.setTimeout(function() {
      window.clearInterval(interval);
    }, 400);
  });

  // This should really be an object...
  g = Grid();
  g.init($ul.get(0), options);
  $(this).data('og-grid', g);

  // The initial display may have resulted in new scroll bars.
  // It would be nice to avoid this.
  reflow(this);

  return this;
};

var deselect = function(_) {
  $(this).data('og-grid').hidePreview();
};

var selectImage = function(_, id) {
  var $li = null;
  $(this).find('li').each(function(_, li) {
    if ($(li).data('image-id') == id) {
      $li = $(li);
      return false;
    }
  });
  if (!$li) {
    return false;
  }

  $(this).data('og-grid').showPreview($li);
  return true;
};

var selectedId = function() {
  return $(this).find('li.og-expanded').data('image-id');
};

$(window).on('resize', function( event ) {
  $('ul.og-grid').each(function(_, ul) {
    reflow($(ul).parent());
  });
});

})(jQuery);
