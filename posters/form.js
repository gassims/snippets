const emailsObj = {
  author1: 'bulama@sfhnigeria.org',
  author2: 'VDaudi@fhi360.org',
  author3: 'etideswell@sightsavers.org',
  author4: 'parasisworking@gmail.com',
  author5: 'JLehloka@fhi360.org',
  author6: 'gmbalilaki@monitafrica.com',
  author7: 'fmumba@clintonhealthaccess.org',
  author8: '',
  author9: '',
  author10: '',
  author11: '',
  author12: '',
  author13: ''
};


const titlesObj = {
  author1: `Poster-1: Effect of C4C ON Contraceptive Uptake Among Married Adolescent Girls (15-19 years) In Public Health Facilities In Kano And Jigawa States: NDHIS Retrospective Study On MMA Republication In Northern Nigeria
Organization: Society for Family Health, Nigeria `,
  author2: `Poster-2: Use of DHIS2 tracker in peer-led programmatic mapping and validation reduces implementation time and manpower in limited resource settings: Case of six regions in Tanzania`,
  author3: `Poster-3: The Sightsavers Journey to Integrated Data Collection with DHIS2`,
  author4: `Poster-4: Barriers to Effective Implementation of DHIS2 for Surveillance in Limited Resource Healthcare Settings: A Case of Nepal`,
  author5: `Poster-5: Designed peer-led DHIS2 tracker for key population HIV services: Approaches to capacity building in system use for sustainability`,
  author6: `Poster-6: The AfyaSS Story in Tanzania`,
  author7: `Poster-7: Towards Universal Health Coverage: Improving the quality of immunization data through DHIS2 System-based Data Validation checks and Integrity Rules`,
  author8: ``,
  author9: ``,
  author10: ``,
  author11: ``,
  author12: ``,
  author13: ``
};


const organizationsObj = {
  author1: 'Organization: Society for Family Health, Nigeria',
  author2: 'Organization: Epic Project - Tanzania',
  author3: 'Organization: Sightsavers',
  author4: `Organization: Foundation for Innovative New Diagnostics (FIND)`,
  author5: 'Organization: EpiC project - Lesotho',
  author6: `Organization: monitafrica`,
  author7: `Organization: Clinton Health Access Initiative (CHAI)  Zambia`,
  author8: 'Organization: FHI 360 - BAO Systems',
  author9: 'Organization: Castellum Digital Indonesia & University of Oslo',
  author10: 'Organization: Castellum Digital Indonesia & University of Oslo',
  author11: 'Organization: Castellum Digital Indonesia, University of Oslo',
  author12: 'Organization: Makerere University',
  author13: 'Organization: BAO Systems'
};

 
window.addEventListener('DOMContentLoaded', function () {
  let boxes = document.querySelectorAll('.box');

  Array.from(boxes, function (box) {
    box.addEventListener('click', function () {
      $('#myModal').modal();

      const posterTitle = titlesObj[this.classList[1]];
      const posterOrganization = organizationsObj[this.classList[1]];
      const authorEmail = emailsObj[this.classList[1]];

      //populate the contents
      document.getElementById('posterTitle').innerHTML = posterTitle;
      document.getElementById('posterOrganization').innerHTML = posterOrganization;
      $('#myModal').find('input[name="authorEmail"]').val(authorEmail);
    });
  });
});

$(function () {
  function after_form_submitted(data) {
    if (data.result == 'success') {
      $('form#reused_form').hide();
      $('#success_message').show();
      $('#error_message').hide();
      setTimeout(function () {
        location.reload();
      }, 5000);
    } else {
      $('#error_message').append('<ul></ul>');

      jQuery.each(data.errors, function (key, val) {
        $('#error_message ul').append('<li>' + key + ':' + val + '</li>');
      });
      $('#success_message').hide();
      $('#error_message').show();

      //reverse the response on the button
      $('button[type="button"]', $form).each(function () {
        $btn = $(this);
        label = $btn.prop('orig_label');
        if (label) {
          $btn.prop('type', 'submit');
          $btn.text(label);
          $btn.prop('orig_label', '');
        }
      });
    } //else
  }

  $('#reused_form').submit(function (e) {
    e.preventDefault();

    $form = $(this);
    //show some response on the button
    $('button[type="submit"]', $form).each(function () {
      $btn = $(this);
      $btn.prop('type', 'button');
      $btn.prop('orig_label', $btn.text());
      $btn.text('Sending ...');
    });

    $.ajax({
      type: 'POST',
      url: 'https://www.dhis2academy.org/digital-annual-conference-2021/posters/handler.php',
      data: $form.serialize(),
      success: after_form_submitted,
      dataType: 'json',
    });
  });
});
