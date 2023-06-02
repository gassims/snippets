const emailsObj = {
  author1: 'bulama@sfhnigeria.org',
  author2: 'oslo2023@dhis2.org',
  author3: 'vikwatokamanga@gmail.com',
  author4: 'daniel.hausenkamph@cmi.no',
  author5: 'tsegshsmart@gmail.com',
  author6: 'timilsina.dwas@gmail.com',
  author7: 'GParola@fhi360.org',
  author8: 'KStankevitz@fhi360.org',
  author9: 'yuda.karnaen11@gmail.com',
  author10: 'ekadewi.mulyati@gmail.com',
  author11: 'yuda.karnaen11@gmail.com',
  author12: 'maggien20099@gmail.com',
  author13: 'kkelly@baosystems.com'
};


const titlesObj = {
  author1: `Poster-1: Effect of C4C ON Contraceptive Uptake Among Married Adolescent Girls (15-19 years) In Public Health Facilities In Kano And Jigawa States: NDHIS Retrospective Study On MMA Republication In Northern Nigeria
Organization: Society for Family Health, Nigeria `,
  author2: 'Testing the posters form',
  author3: 'Poster-3: Development of an harmonized monitoring and reporting system in Zambia using DHIS2',
  author4: 'Poster-4: Integratingâ€¯anti-corruption thinking in HMIS: Improving transparency and promoting equity',
  author5: 'Poster-5: How DHIS2 become cornerstone for data use?',
  author6: 'Poster-6: NepalEHR and DHIS2 integration; Automation in submitting facility based digital data into National HMIS using DHIS2 platform in Nepal',
  author7: 'Poster-7: Interface Between DHIS2 (aggregate) and Power BI for Analytics and Visualization',
  author8: "Poster-8: Standardized DHIS2 Tracker Metadata Package for HIV Programs Indonesia's COVID19 Cases System and DHIS2 Contact Tracing : DHIS2 Integration Process from other System",
  author9: 'Poster-9: DHIS2 Helpdesk Unit as the a Main Key of Knowledge',
  author10: 'Poster-10: DHIS2: Contact Tracing Case Study in Indonesia',
  author11: 'Poster-11: DHIS2 Contact Tracing Mobile Application: Local Design and Implementation in Indonesia',
  author12: 'Poster-12: Validation of the Performance-based Evaluation Framework for Electronic Health Information Systems: Case of Uganda',
  author13: 'Poster-13: Leveraging a DHIS2 Custom Dashboard App to Make Standard Analysis More Accessible to Users'
};


const organizationsObj = {
  author1: 'Organization: Society for Family Health, Nigeria',
  author2: 'Gassim!',
  author3: 'Organization: CIDRZ',
  author4: 'Organization: U4 Anti-corruption resource centre',
  author5: 'Organization: ',
  author6: 'Organization: Nyaya Health Nepal (NHN)',
  author7: 'Organization: FHI360',
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
      url: 'handler.php',
      data: $form.serialize(),
      success: after_form_submitted,
      dataType: 'json',
    });
  });
});
