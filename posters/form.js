const emailsObj = {
  author1: 'bulama@sfhnigeria.org',
  author2: 'VDaudi@fhi360.org',
  author3: 'etideswell@sightsavers.org',
  author4: 'parasisworking@gmail.com',
  author5: 'JLehloka@fhi360.org',
  author6: 'gmbalilaki@monitafrica.com',
  author7: 'fmumba@clintonhealthaccess.org',
  author8: 'inyabuto@psi.org',
  author9: 'mohsin@tattvafoundation.org',
  author10: 'jyri@fjelltopp.org',
  author11: 'pkkonwloh2006@gmail.com',
  author12: 'maanivan93@gmail.com',
  author13: 'steviewez@gmail.com',
  author14: 'vshioshvili@gmail.com',
  author15: 'abdulkarim.jaafar@qrcs.org.qa',
  author16: 'keshab.deuba@savethechildren.org',
  author17: 'Banga.Dennis@icf.com',
  author18: 'endashawu.abera@hopewalks.org',
  author19: 'vshioshvili@gmail.com',
  author20: 'fhb.srilanka@gmail.com',
  author21: 'raelmoh@gmail.com',
  author22: 'yibeltal_tebekaw@et.jsi.com',
  author23: 'ahordofa@ghsc-psm.org',
  author24: 'ahordofa@ghsc-psm.org',
  author25: 'nacho@eyeseetea.com',
  author26: 'fhb.srilanka@gmail.com',
  author27: 'nacho@eyeseetea.com',
  author28: 'johnlewis@hispvietnam.org',
  author29: 'johnlewis@hispvietnam.org',
  author30: 'senyoni@hisptanzania.org',
  author31: 'senyoni@hisptanzania.org',
  author32: 'bernard.mussa@gmail.com',
  author33: 'bernard.mussa@gmail.com',
  author34: 'bernard.mussa@gmail.com',
  author35: 'bernard.mussa@gmail.com',
  author36: 'bernard.mussa@gmail.com',
  author37: 'bernard.mussa@gmail.com',
  author38: 'Matthew_Boddie@abtassoc.com',
  author39: 'Kevin.Tan@mottmac.com'
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
  author8: `Poster-8: Positioning National HMIS for Adolescents Girls and Young Women (AGYW) Programming, Case of A360 project in Nigeria`,
  author9: `Poster-9: DHIS2 enabled a Result-Based Financing to enhance Community Action for Health and Nutrition in Nagaland, India`,
  author10: `Poster-10: Integrate Bite Case Management in DHIS2`,
  author11: `Poster-11: Revolutionizing Birth and Death Registration in Liberia: Exploring the Power of DHIS2`,
  author12: `Poster-12: Agricultural Practices and Soil Health: Experiences Dhis2 at Jabba Soil Laboratories (JSL)`,
  author13: `Poster-13: A case of using DHIS2 for poll results transmission and data analytics`,
  author14: `Poster-14: PEPFAR Digital Health Inventory`,
  author15: `Poster-15: Supporting Health Information System in NW Syria`,
  author16: `Poster-16: Use of DHIS2 Tracker in Planning and Implementation of HIV Drug Resistance Surveillance at National Level: Lesson Learnt from Nepal`,
  author17: `Poster-17: Supporting use of standardized Metadata package for TB Stool-based testing and case-based reporting`,
  author18: `Poster-18: Uses of Implementing DHIS2 Tracker Capture for the National Clubfoot Program of Ethiopia`,
  author19: `Poster-19: Supporting data exchange capacity strengthening of multinational program`,
  author20: `Poster-20: Integrating the information systems that capture maternal and newborn health data from curative institutions with DHIS2 based electronic Reproductive Health Management Information System in the public health sector`,
  author21: `Poster-21: DHIS2 & HEALTH EMERGENCY`,
  author22: `Poster-22: Increasing Child Vaccination Uptake in Yemen through Pilot Mobile Notification System at the Community Level`,
  author23: `Poster 23: Improving Supply Chain Data Visibility Using DHIS2 in Botswana`,
  author24: `Poster-24: DHIS2 Customized to Enable Real-time Visibility of COVID-19 Vaccines Supply Chain`,
  author25: `Poster-25: React-based Data Entry custom forms on steroids (d2-autogen-forms)`,
  author26: `Poster-26: Geographical visualization of the availability of family planning commodities at the regional and divisional levels to facilitate efficient stock distribution and redirection in government health sector in Sri Lanka`,
  author27: `Poster-27: Tailoring the Data Entry Experience on Antimicrobial Resistance and Use`,
  author28: `Poster-28: DHIS2 - Cause of Death App`,
  author29: `Poster-29: Integration HIS platform DHIS2`,
  author30: `Poster-30: Data to Action: DHIS2 Accelerating COVID-19 Vaccination in Tanzania`,
  author31: `Poster-31: EAC Integrations: East Africa Community Regional Integration with National Systems`,
  author32: `Poster-32: Implementation of the National Integrated Laboratory Information System for Enhancement of DHIS2 COVID-19 testing and Certificates Generation system in Tanzania`,
  author33: `Poster-33: Integration of Electronic Medical Records (EMR) System and DHIS2-based Electronic Integrated Disease Surveillance and Response System (eIDSR) for Improved Disease Surveillance in Tertiary Hospitals in Tanzania`,
  author34: `Poster-34: DHIS2 Server Capacity Building: The DHIS2 mobile administration application for managing multiple DHIS2 server instances`,
  author35: `Poster-35: Tackling Quality of Data during HMIS Reporting. A Simplified Validation Rules Creator in DHIS2`,
  author36: `Poster-36: Bridging the Gap between Community and Health Care Providers: Active Tuberculosis Case Finding and Treatment using Integrated National TB case-based DHIS2 mobile and Tracker System in Tanzania`,
  author37: `Poster-37: A Flexible and Robust Electronic Event-Based Surveillance System for Reporting and Monitoring Events in Tanzania`,
  author38: `Poster-38: Automatic Synchronization between Disparate DHIS2 Versions for Simpler Roll-Back Options With Less Risk for Data Loss`,
  author39: `Poster-39: Monitoring, evaluation, and reporting of antimicrobial resistance surveillance: DHIS2 application and intended use in a large-scale development programme`
};


const organizationsObj = {
  author1: `Organization: Society for Family Health, Nigeria`,
  author2: `Organization: Epic Project - Tanzania`,
  author3: `Organization: Sightsavers`,
  author4: `Organization: Foundation for Innovative New Diagnostics (FIND)`,
  author5: `Organization: EpiC project - Lesotho`,
  author6: `Organization: monitafrica`,
  author7: `Organization: Clinton Health Access Initiative (CHAI)  Zambia`,
  author8: `Organization: PSI`,
  author9: `Organization: Tattva Foundation`,
  author10: `Organization: Fjelltopp Ltd`,
  author11: `Organization: Ministry of Health, Liberia, UNICEF-Liberia`,
  author12: `Organization: Jabba Soil Laboratories`,
  author13: `Organization: HISP Kenya`,
  author14: `Organization: ICF`,
  author15: `Organization: Qatar Red Crescent`,
  author16: `Organization: Save the Children`,
  author17: `Organization: ICF`,
  author18: `Organization: HOPEWALKS`,
  author19: `Organization: ICF`,
  author20: `Organization: Family Health Bureau, Ministry of Health, Sri Lanka`,
  author21: `Organization: Ministry of Health Botswana`,
  author22: `Organization: John Snow, Inc SHARP, Yemen`,
  author23: `Organization: Ministry of Health in Republic of Borswana, USAID`,
  author24: `Organization: Ministry of Health, Botswana, USAID`,
  author25: `Organization: EyeSeeTea, WHO`,
  author26: `Organization: Family Health Bureau - Sri Lanka`,
  author27: `Organization Name: EyeSeeTea`,
  author28: `Organization: HISP Vietnam`,
  author29: `Organization: HISP Vietnam`,
  author30: `Organization: HISP Tanzania`,
  author31: `Organization: HISP Tanzania`,
  author32: `Organization: UDSM DHIS2 Lab`,
  author33: `Organization: UDSM DHIS2 Lab`,
  author34: `Organization: UDSM DHIS2 Lab`,
  author35: `Organization: UDSM DHIS2 Lab`,
  author36: `Organization: UDSM DHIS2 Lab`,
  author37: `Organization: UDSM DHIS2 Lab`,
  author38: `Organization: PMI Evolve`,
  author39: `Organization: Fleming Fund, Mott MacDonald`,
};

 
window.addEventListener('DOMContentLoaded', function () {
  let boxes = document.querySelectorAll('.content > img'); 

  Array.from(boxes, function (box) {
    box.addEventListener('click', function () {
      $('#myModal').modal();

      const posterTitle = titlesObj[this.parentNode.parentNode.classList[1]];
      const posterOrganization = organizationsObj[this.parentNode.parentNode.classList[1]];
      const authorEmail = emailsObj[this.parentNode.parentNode.classList[1]];

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
