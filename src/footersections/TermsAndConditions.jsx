import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 mt-20">
      {termsAndConditionsContent.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{section.sectionTitle}</h2>
          {section.content &&
            section.content.map((paragraph, idx) => (
              <p key={idx} className="mb-2">
                {paragraph}
              </p>
            ))}
          {section.subSections &&
            section.subSections.map((subSection, subIdx) => (
              <div key={subIdx} className="ml-4 mb-4">
                <h3 className="text-xl font-semibold mb-2">
                  {subSection.subTitle}
                </h3>
                {subSection.content.map((subParagraph, subPIdx) => (
                  <p key={subPIdx} className="mb-2">
                    {subParagraph}
                  </p>
                ))}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default TermsAndConditions;

const termsAndConditionsContent = [
  {
    sectionTitle: 'Welcome to Hewlett Hub solutions!',
    content: [
      'These terms and conditions outline the rules and regulations for the use of Hewlett Hub solutions ’ Website, located at https://hewletthubsolutions.com/.',
      'By accessing this website we assume you accept these terms and conditions. Do not continue to use Hewlett Hub solutions if you do not agree to take all of the terms and conditions stated on this page.',
    ],
  },
  {
    sectionTitle: 'Terminology',
    content: [
      'The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company’s terms and conditions.',
      'The Company refers to Hewlett Hub Solutions LLC, and so on...',
    ],
  },
  {
    sectionTitle: 'Cookies',
    content: [
      'We employ the use of cookies. By accessing Hewlett Hub solutions, you agreed to use cookies in agreement with the Hewlett Hub solutions Privacy Policy.',
      'Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website.',
    ],
  },
  {
    sectionTitle: 'License',
    content: [
      'Unless otherwise stated, Hewlett Hub solutions and/or its licensors own the intellectual property rights for all material on Hewlett Hub solutions LLC.',
      'You must not republish material from Hewlett Hub solutions.',
      'This Agreement shall begin on the date hereof.',
    ],
  },
  {
    sectionTitle: 'Comments',
    content: [
      'Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Hewlett Hub solutions LLC does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Hewlett Hub solutions , its agents and/or affiliates.',
      'You warrant and represent that you are entitled to post the Comments on our website and have all necessary licenses and consents to do so;',
      'The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;',
      'The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.',
    ],
  },
  {
    sectionTitle: 'Hyperlinking to our Content',
    subSections: [
      {
        subTitle: 'Approved Organizations',
        content: [
          'The following organizations may link to our Website without prior written approval:',
          'Government agencies;',
          'Search engines;',
          'News organizations;',
          'Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses;',
          'These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services;',
        ],
      },
      {
        subTitle: 'Other Link Requests',
        content: [
          'We may consider and approve other link requests from the following types of organizations:',
          'commonly-known consumer and/or business information sources;',
          'dot.com community sites;',
          'associations or other groups representing charities;',
          'online directory distributors;',
          'internet portals;',
          'We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses;',
          'These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services;',
        ],
      },
    ],
  },
  {
    sectionTitle: 'iFrames',
    content: [
      'Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.',
    ],
  },
  {
    sectionTitle: 'Content Liability',
    content: [
      'We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website.',
    ],
  },
  {
    sectionTitle: 'Reservation of Rights',
    content: [
      'We reserve the right to request that you remove all links or any particular link to our Website. You agree to immediately remove all links to our Website upon request.',
    ],
  },
  {
    sectionTitle: 'Removal of links from our website',
    content: [
      'If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but we are not obligated to or to respond to you directly.',
    ],
  },
  {
    sectionTitle: 'Disclaimer',
    content: [
      'To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:',
      'limit or exclude our or your liability for death or personal injury;',
      'limit or exclude our or your liability for fraud or fraudulent misrepresentation;',
      'limit any of our or your liabilities in any way that is not permitted under applicable law;',
    ],
  },
];
