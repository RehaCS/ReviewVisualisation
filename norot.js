      // href for clickable pictires
      var x = [
      //Real norot
        'Real/GruntyGunner',
        'Real/FlappyAnime', 
        'Real/NoodleCake',
        'Real/EscapeGothicVamp',
        'Real/EscapeUnderground',
        'Real/DeepUnder',
        'Real/LibraryEscape',
        'Real/FarmerHouse',
        'Real/Pixelolite',
        'Real/SplillsAndThrills',
        'Real/OneEyedJack',
        'Real/Buzzmark',
        'Real/Edmonton',
        'Real/WakeUpPro',
        'Real/ElectricToy',
        'Real/WatchFace',
        'Real/CocoMobile',
        'Real/GPlayPremium',
        'Real/EternalJourney',
        'Real/HouseOfDoors',
        'Real/LakehouseFull',
        'Real/GPlayFreemium',
        'Real/GPlayPremium2',
        'Real/StraySouls',
        'Real/LocalRegister',
        'Real/SellerMobile',
        'Real/BrightNest',
        'Real/AnyOption',
        'Real/Impossible',
        'Real/ForChromeCast',
        'Real/KungFuMan',
        'Real/AtomicAdd',
        'Real/AutoDesk',
        'Real/BandsInTown',
        'Real/DCSounds',
        'Real/PlusFree',
        'Real/RedShift',
        'Real/CFHHGoogfull',

      // Fake norot
        'Fake/CreativeCodeApps',
        'Fake/AirBalooncs',
        'Fake/DiscoStack',
        'Fake/MessyRoom',
        'Fake/RoyalHaircut',
        'Fake/CutePonyCares',
        'Fake/CutePony',
        'Fake/ArmShooting',
        'Fake/PunisherShooting',
        'Fake/SoldierOnDuty',
        'Fake/Mahjong',
        'Fake/Rakem',
        'Fake/MrLudo',
        'Fake/Cadie',
        'Fake/GPContainer',
        'Fake/SpellingBug',
        'Fake/LiveMaps',
        'Fake/PiratesLost',
        'Fake/PiranhaQueen',
        'Fake/LuxometerThermometer',
        'Fake/ZoomAndFlash',
        'Fake/BirthdayCalender',
        'Fake/CarKeysSimulator',
        'Fake/FingerLieDetector',
        'Fake/FaceChanger',
        'Fake/FunnyJoke',
        'Fake/LoveCalculator',
        'Fake/PhotoEditor',
        'Fake/SpiderPrank',
        'Fake/StopwatchCountdown',
        'Fake/VoiceRecorder',
        'Fake/GPSLiveMaps',
        'Fake/PadronElectoral',
        'Fake/DogWhistlePro',
        'Fake/MusicPlayer',
        'Fake/BloodPressureScanner',
        'Fake/BloodPressureDetector',
        'Fake/BakuNow',
        'Fake/SatelliteNavigation',
        'Fake/GPSNavigation',
        'Fake/Estradaovelha',
        'Fake/MWCEasy',
        'Fake/CathieApp'

      ];
      

      $(document).ready(function() {
        for (var i = 0; i < 38; i++) {
          clickImage('.realClickableImage', x[i]);
        }

        for (var i = 38; i < x.length; i++) {
          clickImage('.fakeClickableImage', x[i]);
        }

      });

      function clickImage(elem, x ) { 

        var el = $(elem);
        el.append( '<a href="./ReviewOvertimeHtml/HTML' + x +
            '.html"><img class="align-self-start mr-3 mb-2 img-thumbnail img-fluid" style="width: 30%;" src="./images/ReviewOvertime/' + x + '.png" alt="Generic placeholder image"></a>' 
        ); 
      };
