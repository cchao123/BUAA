export const HEADER_X = 'https://x.com/talkitai';
export const HEADER_INS = 'https://www.instagram.com/talkitai_app/';
export const HEADER_FACEBOOK = 'https://www.facebook.com/people/Talkit-app/61565939621959/';
export const HEADER_TIKTOK = 'https://www.tiktok.com/@talkitai';
export const HEADER_WECHAT = '';

export const TALKIT_FOR_BUSINESS =
  'https://docs.google.com/forms/d/e/1FAIpQLSdQf3O7zzJezOKm1xJl6SylE1ajp6oRrEdur4oE1Wb8Nqjgmw/viewform';

export const RECORD_NUMBER = '京ICP备2024074522号';
export const RECORD_SEARCH = 'https://beian.miit.gov.cn';

export const DOWNLOAD_APPLE_ZH = 'https://apps.apple.com/app/id6743530867';
export const DOWNLOAD_APPLE_EN = 'https://apps.apple.com/app/id6475726422';
export const DOWNLOAD_GOOGLE = 'https://play.google.com/store/apps/details?id=visionflow.ai&pli=1';

export const MDYX_HOST = 'mudiyongxian.com';

export const DOWNLOAD_ONE_LINK = 'https://visionflow.onelink.me/KoVn/h5lkoijm';

export const CONTACT_US = [
  {
    src: 'https://visionflow-video.talkit.ai/vf-talkit/header/x.svg',
    key: 'X',
    link: HEADER_X,
  },
  {
    src: 'https://visionflow-video.talkit.ai/vf-talkit/header/ins.svg',
    key: 'Instagram',
    link: HEADER_INS,
  },
  {
    src: 'https://visionflow-video.talkit.ai/vf-talkit/header/facebook.svg',
    key: 'Facebook',
    link: HEADER_FACEBOOK,
  },
  // {
  //   src: "https://visionflow-video.talkit.ai/vf-talkit/header/tiktok.svg",
  //   key: "Tiktok",
  //   link: HEADER_TIKTOK,
  // },
  // {
  //   src: "https://visionflow-video.talkit.ai/vf-talkit/header/whatsapp.svg",
  //   key: "WhatsApp",
  //   link: HEADER_WECHAT,
  // },
];

export const HEADER_MENU = [
  {
    name: 'Header.Product',
    key: 'product',
    position: 'left',
    subMenu: [
      { name: 'Header.Talkit', link: '/' },
      { name: 'Header.TalkitForBusiness', link: '/business' },
    ],
  },
  {
    name: 'Header.Feature',
    key: 'feature',
    position: 'left',
    subMenu: [
      { name: 'Header.TalkitCourse', link: '/course' },
      { name: 'Header.AiTutor', link: '/tutor' },
      { name: 'Header.AiPodcast', link: '/podcast' },
      { name: 'Header.GlobalConnect', link: '/community' },
    ],
  },
  {
    name: 'Header.Blog',
    key: 'blog',
    link: '/blog',
  },
  {
    name: 'Header.About',
    key: 'about',
    position: 'right',
    subMenu: [
      { name: 'Header.VisionFlow', link: '/about' },
      { name: 'Header.Careers', link: '/career' },
    ],
  },
];

export const FOOTER_MENU = [
  {
    title: 'Footer.Product',
    items: [
      { label: 'Footer.Talkit', link: 'https://talkit.ai' },
      { label: 'Footer.TalkitForBusiness', link: '/business' },
    ],
  },
  {
    title: 'Footer.Feature',
    items: [
      { label: 'Footer.TalkitCourse', link: '/course' },
      { label: 'Footer.AiTutor', link: '/tutor' },
      { label: 'Footer.AiPodcast', link: '/podcast' },
      { label: 'Footer.GlobalConnect', link: '/community' },
    ],
  },
  {
    title: 'Footer.Company',
    items: [
      { label: 'Footer.Visionflow', link: '/about' },
      { label: 'Footer.Careers', link: '/career' },
      { label: 'Footer.Blog', link: '/blog' },
    ],
  },
  {
    title: 'Footer.Support',
    items: [
      { label: 'Footer.TermOfUse', link: 'https://talkit.ai/termsofserviceen' },
      { label: 'Footer.PrivacyPolicy', link: 'https://talkit.ai/privatepolicyen' },
      { label: 'Footer.Feedback', link: 'mailto:feedback@visionflow.ai' },
    ],
  },
];
