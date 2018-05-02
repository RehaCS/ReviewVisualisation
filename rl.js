
    var x = [
    //href REAL
    'Real/gruntygunner',
    'Real/flappyanime',
    'Real/noodlecake',
    'Real/escapegothicvamp',
    'Real/escapeunderground',
    'Real/deepunder',
    'Real/pixelolite',
    'Real/splillsandthrills',
    'Real/oneeyedjack',
    'Real/buzzmark',
    'Real/edmonton',
    'Real/wakeuppro',
    'Real/electrictoy',
    'Real/watchface',
    'Real/cocomobile',
    'Real/gplaypremium',
    'Real/eternaljourney',
    'Real/houseofdoors',
    'Real/lakehousefull',
    'Real/gplayfreemium',
    'Real/gplaypremium2',
    'Real/straysouls',
    'Real/localregister',
    'Real/sellermobile',
    'Real/brightnest',
    'Real/anyoption',
    'Real/impossible',
    'Real/chromecast',
    'Real/kungfuman',
    'Real/atomicadd',
    'Real/autodesk',
    'Real/bandsintown',
    'Real/dcsounds',
    'Real/plusfree',
    'Real/redshift',
    'Real/cfhhgoogfull',
    'Real/dgpodgoogfull',
    'Real/heshgoogfull',
    'Real/hotdfsgoogfull',
    'Real/spotthediff',


    'Fake/creativecodeapps',
    'Fake/airbalooncs',
    'Fake/messyroom',
    'Fake/royalhaircuts',
    'Fake/cuteponycares',
    'Fake/cutepony',
    'Fake/armshooting',
    'Fake/punishershooting',
    'Fake/soldieronduty',
    'Fake/mahjong',
    'Fake/rakem',
    'Fake/mrludo',
    'Fake/cadie',
    'Fake/spellingbug',
    'Fake/livemaps',
    'Fake/piratesisland',
    'Fake/piranhaqueen',
    'Fake/luxometerthermometer',
    'Fake/zoomandflash',
    'Fake/carkeyssimulator',
    'Fake/liedetector',
    'Fake/facechanger',
    'Fake/funnyjokesenglish',
    'Fake/lovecalculator',
    'Fake/photoeditor',
    'Fake/spiderprank',
    'Fake/stopwatchcountdown',
    'Fake/voicerecorder',
    'Fake/gpslivemaps',
    'Fake/dogwhistle',
    'Fake/musicplayer',
    'Fake/bpscanner',
    'Fake/bpdetector',
    'Fake/bakunow',
    'Fake/satnav',
    'Fake/gpsnav',
    'Fake/estradaovelha',
    'Fake/mwceasy',
    'Fake/cathieapp',
    'Fake/goodandroid',
    'Fake/superduck'

    ];

    var y = [
    //src REAL
    'Real/gruntygunner',
    'Real/flappyanime',
    'Real/noodlecake',
    'Real/escapegothicvamp',
    'Real/escapeunderground',
    'Real/deepunder',
    'Real/libraryescape',
    'Real/pixelolite',
    'Real/splillsandthrills',
    'Real/oneeyedjack',
    'Real/buzzmark',
    'Real/edmonton',
    'Real/wakeuppro',
    'Real/electrictoy',
    'Real/watchface',
    'Real/cocomobile',
    'Real/gplaypremium',
    'Real/eternaljourney',
    'Real/houseofdoors',
    'Real/lakehousefull',
    'Real/gplayfreemium',
    'Real/gplaypremium2',
    'Real/straysouls',
    'Real/localregister',
    'Real/sellermobile',
    'Real/brightnest',
    'Real/anyoption',
    'Real/impossible',
    'Real/chromecast',
    'Real/kungfuman',
    'Real/atomicadd',
    'Real/autodesk',
    'Real/bandsintown',
    'Real/dcsounds',
    'Real/plusfree',
    'Real/redshift',
    'Real/cfhhgoogfull',
    'Real/dgpodgoogfull',
    'Real/heshgoogfull',
    'Real/hotdfsgoogfull',
    'Real/spotthediff',

    'Fake/creativecodeapps',
    'Fake/airbalooncs',
    'Fake/messyroom',
    'Fake/royalhaircuts',
    'Fake/cuteponycares',
    'Fake/cutepony',
    'Fake/armshooting',
    'Fake/punishershooting',
    'Fake/soldieronduty',
    'Fake/mahjong',
    'Fake/rakem',
    'Fake/mrludo',
    'Fake/cadie',
    'Fake/spellingbug',
    'Fake/livemaps',
    'Fake/piratesisland',
    'Fake/piranhaqueen',
    'Fake/luxometerthermometer',
    'Fake/zoomandflash',
    'Fake/carkeyssimulator',
    'Fake/liedetector',
    'Fake/facechanger',
    'Fake/funnyjokesenglish',
    'Fake/lovecalculator',
    'Fake/photoeditor',
    'Fake/spiderprank',
    'Fake/stopwatchcountdown',
    'Fake/voicerecorder',
    'Fake/gpslivemaps',
    'Fake/dogwhistle',
    'Fake/musicplayer',
    'Fake/bpscanner',
    'Fake/bpdetector',
    'Fake/bakunow',
    'Fake/satnav',
    'Fake/gpsnav',
    'Fake/estradaovelha',
    'Fake/mwceasy',
    'Fake/cathieapp',
    'Fake/goodandroid',
    'Fake/superduck'
    ];

    $(document).ready(function(){
      for (var i = 0; i < 40; i++){
        clickImage('.realClickableImage',x[i],y[i]);
      }

      for(var i = 40; i <x.length; i++){
        clickImage('.fakeClickableImage', x[i], y[i]);
      }
    });

    function clickImage (elem, x , y) {
        
      var el = $(elem);
      el.append( '<a href="./ReviewLengthHTML/HTML' + x +
          '.html"><img class="align-self-start mr-3 mb-2 img-thumbnail img-fluid" style="width: 30%;" src="images/ReviewLength/' + y + '.png" alt="Generic placeholder image"></a>' 
      );


    };