type privacyParagraphType = {
  id: number;
  text: string;
};

type privacyDataType = {
  id: number;
  title: string;
  paragraphs: Array<privacyParagraphType>;
};

export const privacyData: privacyDataType[] = [
  {
    id: 1,
    title: 'Information collection, use, and sharing',
    paragraphs: [{ id: 1, text: 'Personal information you voluntarily give us' }, { id: 2, text: 'This Privacy Policy discloses the privacy practices for First Line Software, Inc. and our website www.softocean.com (the “Site”). This Privacy Policy applies solely to information collected by this website, except where stated otherwise. This Privacy Policy sets forth what information we collect and how we handle information we obtain from you when you visit our Site. By using the Site, you are accepting and consenting to the practices described in this policy. If you would like additional information or need clarification, please send an email to privacy@softocean.com' }, { id: 3, text: 'You can also delete any personal Profile you may have established via our Service by emailing us at privacy@softocean.com and allow up to five (5) business days for us to process your request.' }, { id: 4, text: 'The personal information which we hold will be held securely in accordance with our internal security policy and the law. We will not sell or rent this information to anyone' }],
  },
  {
    id: 2,
    title: 'Automatically collected anonymous data',
    paragraphs: [{ id: 1, text: 'When you browse the Site, we collect basic information from your browser (“Log Data”). In doing so, we follow standard industry practice and use common internet technologies, such as cookies and web server logs. This Log Data may include information such as browser type, browser version, language preference, the pages of our Site that you visit, the time and date of each visit, the time spent on those pages, and other statistics. We also collect potentially identifying information like Internet Protocol (IP) address. However, we do not link IP addresses to any personally identifiable information.' }, { id: 2, text: 'We collect this information to analyze trends, help diagnose problems with our Site, and to monitor traffic/usage in order to provide better service to our clients and Site visitors.' }, { id: 3, text: 'We also use third-party service providers to provide certain features on our Site. These service providers may collect your IP address and non-personally identifiable or de-identified information about your visits to our Site. Such non-personally identifiable information is anonymous or de-identified and does not reflect your name, address, email address or other personal information; however, your IP address may be collected by such services. These third parties may also use cookies to collect and store information.' }, { id: 4, text: 'By using the Site, you agree to the collection and use of information in accordance with this Policy.' }]
  },
  {
    id: 3,
    title: 'Cookies policy',
    paragraphs: [{ id: 1, text: 'You can set your browser to refuse all or some browser cookies or to alert you when websites set or access cookies. For more information about the cookies that First Line Software uses, please see our Cookie Policy' }]
  },
  {
    id: 4,
    title: 'Links',
    paragraphs: [{ id: 1, text: 'This web site contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our visitors to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.' }]
  },
  {
    id: 5,
    title: 'Changes to this privacy policy',
    paragraphs: [{ id: 1, text: 'This Privacy Policy is effective as of 20.01.2022 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.' }, { id: 2, text: 'We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of our Site after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.' }, { id: 3, text: 'If we make any material changes to this Privacy Policy, we will place a prominent notice on our Site.' }]
  },
  {
    id: 6,
    title: 'Security',
    paragraphs: [{ id: 1, text: 'We make every effort to have reasonable security procedures in place to protect the loss, misuse, or alteration of the information under our control. If you have any questions about the security of our Site, you can contact us.' }]
  }
];