
    var x = [
    //href REAL
    'Real/gruntyGunner',
    'Real/flappyAnime',
    'Real/noodleCake',
    'Real/escapeGothicVamp',
    'Real/escapeUnderground',
    'Real/deepUnder',
    'Real/libraryEscape',
    'Real/farmerHouse',
    'Real/pixelolite',
    'Real/splillsAndThrills',
    'Real/sneakyFox',
    'Real/buzzmark',
    'Real/edmonton',
    'Real/wakeUpPro',
    'Real/electricToyDig',
    'Real/watchFace',
    'Real/cocoMobile',
    'Real/gPlayPremium',
    'Real/eternalJourney',
    'Real/houseOfDoors',
    'Real/lakehouseFull',
    'Real/straySouls',
    'Real/localRegister',
    'Real/sellerMobile',
    'Real/bulkyPix',
    'Real/ghostMapper',
    'Real/lTheme',
    'Real/elevate',
    'Real/alertsPro',
    'Real/oneNote',
    'Real/parentToolKit',
    'Real/cpuSaver',
    'Real/teamDigital',
    'Real/cheatSheet',
    'Real/openProject',
    'Real/postLet',
    'Real/stockGlow',
    'Real/fbReader',
    'Real/gPlayFreemium',
    'Real/brightNest',
    'Real/anyOption',
    'Real/impossible',
    //href FAKE
    'Fake/creativeCodeApps',
    'Fake/airBalooncs',
    'Fake/discoStack',
    'Fake/messyRoom',
    'Fake/royalHaircut',
    'Fake/cutePonyCares',
    'Fake/cutePony',
    'Fake/armShooting',
    'Fake/punisherShooting',
    'Fake/soldierOnDuty',
    'Fake/mahjong',
    'Fake/rakem',
    'Fake/mrLudo',
    'Fake/cadie',
    'Fake/gpContainer',
    'Fake/spellingBug',
    'Fake/liveMaps',
    'Fake/piratesLost',
    'Fake/piranhaQueen',
    'Fake/luxometerThermometer',
    'Fake/zoomAndFlash',
    'Fake/birthdayCalender',
    'Fake/carKeysSimulator',
    'Fake/lieDetector',
    'Fake/faceChanger',
    'Fake/funnyJokes',
    'Fake/loveCalculator',
    'Fake/photoEditor',
    'Fake/spiderPrank',
    'Fake/stopwatchCountdown',
    'Fake/voiceRecorder',
    'Fake/gpsLiveMaps',
    'Fake/padronElectoral',
    'Fake/dogWhistle',
    'Fake/musicPlayer',
    'Fake/bpScanner',
    'Fake/bpDetector',
    'Fake/bakuNow',
    'Fake/satNav',
    'Fake/gpsNav',
    'Fake/estradaovelha',
    'Fake/mwcEasy',
    'Fake/cathieApp',
    'Fake/goodAndroid',
    'Fake/superDuck'
    ];

    $(document).ready(function(){
      for (var i = 0; i < 42; i++){
        clickImage('.realClickableImage',x[i]);
      }

      for(var i = 42; i <x.length; i++){
        clickImage('.fakeClickableImage', x[i]);
      }
    });

    function clickImage (elem, x) {
        
      var el = $(elem);
      el.append( '<af href="./RatingDistributionHTML/HTML' + x +
          '.html"><img class="align-self-start mr-3 mb-2 img-thumbnail img-fluid" style="width: 30%;" src="./images/RatingDistribution/' + x + '.png" alt="Generic placeholder image"></a>' 
      );


    };