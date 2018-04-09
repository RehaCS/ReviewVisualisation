      // href for clickable pictires
      var x = [
      //Real norot
        '<a href="./ReviewOvertimeHtml/HTMLReal/GruntyGunner.html">',
        '<a href="./ReviewOvertimeHtml/HTMLReal/FlappyAnime.html">', 
        '<a href="./ReviewOvertimeHtml/HTMLReal/NoodleCake.html">',
        '<a href="./ReviewOvertimeHtml/HTMLReal/EscapeGothicVamp.html">',
        '<a href="./ReviewOvertimeHtml/HTMLReal/EscapeUnderground.html">',
        '<a href="./ReviewOvertimeHtml/HTMLReal/DeepUnder.html">',
        '<a href="./ReviewOvertimeHtml/HTMLReal/LibraryEscape.html">',
        '<a href="./ReviewOvertimeHtml/HTMLReal/FarmerHouse.html">',
        '<a href="./ReviewOvertimeHtml/HTMLReal/Pixelolite.html">',
      // Fake norot
        '<a href="./ReviewOvertimeHtml/HTMLFake/CreativeCodeApps.html">',
        '<a href="./ReviewOvertimeHtml/HTMLFake/AirBalooncs.html">',
        '<a href="./ReviewOvertimeHtml/HTMLFake/DiscoStack.html">',
        '<a href="./ReviewOvertimeHtml/HTMLFake/MessyRoom.html">',
        '<a href="./ReviewOvertimeHtml/HTMLFake/RoyalHaircut.html">',
        '<a href="./ReviewOvertimeHtml/HTMLFake/CutePonyCares.html">',
        '<a href="./ReviewOvertimeHtml/HTMLFake/CutePony.html">',
        '<a href="./ReviewOvertimeHtml/HTMLFake/ArmShooting.html">',
        '<a href="./ReviewOvertimeHtml/HTMLFake/PunisherShooting.html">'

      ];
      
      // src for clickable images
      var y = [
        'src="./images/ReviewOvertime/Real/GruntyGunner.png"',
        'src="./images/ReviewOvertime/Real/FlappyAnime.png"',
        'src="./images/ReviewOvertime/Real/NoodleCake.png"',
        'src="./images/ReviewOvertime/Real/EscapeGothicVamp.png"',
        'src="./images/ReviewOvertime/Real/EscapeUnderground.png"',
        'src="./images/ReviewOvertime/Real/DeepUnder.png"',
        'src="./images/ReviewOvertime/Real/LibraryEscape.png"',
        'src="./images/ReviewOvertime/Real/FarmerHouse.png"',
        'src="./images/ReviewOvertime/Real/Pixelolite.png"',

        'src="./images/ReviewOvertime/Fake/CreativeCodeApps.png"',
        'src="./images/ReviewOvertime/Fake/AirBalooncs.png"',
        'src="./images/ReviewOvertime/Fake/DiscoStack.png"',
        'src="./images/ReviewOvertime/Fake/MessyRoom.png"',
        'src="./images/ReviewOvertime/Fake/RoyalHaircut.png"',
        'src="./images/ReviewOvertime/Fake/CutePonyCares.png"',
        'src="./images/ReviewOvertime/Fake/CutePony.png"',
        'src="./images/ReviewOvertime/Fake/ArmShooting.png"',
        'src="./images/ReviewOvertime/Fake/PunisherShooting.png" '

      ];

      $(document).ready(function() {
        for (var i = 0; i < 9; i++) {
          clickImage('.realClickableImage', x[i], y[i]);
        }

        for (var i = 9; i < x.length; i++) {
          clickImage('.fakeClickableImage', x[i], y[i]);
        }

      });

      function clickImage(elem, x , y ) { 

        var el = $(elem);
        el.append( x +
            '<img class="align-self-start mr-3 mb-2 img-thumbnail img-fluid" style="width: 30%;"' + y + 'alt="Generic placeholder image"></a>' 
        ); 
      };
