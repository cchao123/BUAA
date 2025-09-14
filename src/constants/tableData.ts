// 文档表格数据
export interface DocumentItem {
  id: string;
  title: string;
  fileType: string;
  fileSize: string;
  downloadUrl: string;
}

export const documentTableData: DocumentItem[] = [
  {
    id: '1',
    title: 'WFP Annual Review 2020 - Arabic',
    fileType: 'PDF',
    fileSize: '5.47 MB',
    downloadUrl: 'https://docs.wfp.org/api/documents/WFP-0000131398/download/'
  },
  {
    id: '2',
    title: 'WFP Annual Review 2019',
    fileType: 'HTML',
    fileSize: '5.95 KB',
    downloadUrl: 'https://publications.wfp.org/2019/en/annual-report/'
  },
  {
    id: '3',
    title: 'WFP Annual Review 2018 - English',
    fileType: 'HTML',
    fileSize: '5.86 KB',
    downloadUrl: 'https://publications.wfp.org/2018/en/annual-report/'
  },
  {
    id: '4',
    title: 'WFP Annual Review 2018 - French',
    fileType: 'HTML',
    fileSize: '5.85 KB',
    downloadUrl: 'https://publications.wfp.org/fr/rapport-annuel/2018'
  },
  {
    id: '5',
    title: 'WFP Annual Review 2018 - Spanish',
    fileType: 'HTML',
    fileSize: '5.88 KB',
    downloadUrl: 'https://publications.wfp.org/es/reporte-anual/2018/'
  },
  {
    id: '6',
    title: 'WFP Annual Review 2018 - Arabic',
    fileType: 'HTML',
    fileSize: '4.76 KB',
    downloadUrl: 'https://publications.wfp.org/ar/annual-report/2018'
  }
];

// 注册费用表格数据
export interface RegistrationFeeItem {
  id: string;
  category: string;
  author: string;
  presenter: string;
  delegate: string;
}

export const registrationFeeData: RegistrationFeeItem[] = [
  {
    id: '1',
    category: 'Non-Member',
    author: '100 USD',
    presenter: '100 USD',
    delegate: '100 USD'
  },
  {
    id: '2',
    category: 'IEEE Member',
    author: '100 USD',
    presenter: '100 USD',
    delegate: '100 USD'
  },
  {
    id: '3',
    category: 'TPC Member',
    author: '100 USD',
    presenter: '100 USD',
    delegate: '100 USD'
  }
];

// 重要日期表格数据
export interface ImportantDateItem {
  id: string;
  event: string;
  date: string;
}

export const importantDatesData: ImportantDateItem[] = [
  {
    id: '1',
    event: 'Submission of Full Paper',
    date: 'September 20th, 2025'
  },
  {
    id: '2',
    event: 'Notification Deadline',
    date: 'September 30th, 2025'
  },
  {
    id: '3',
    event: 'Registration Deadline',
    date: 'October 10th, 2025'
  },
  {
    id: '4',
    event: 'Conference Dates',
    date: 'October 17-19, 2025'
  }
];

// 演讲者数据
export interface SpeakerItem {
  id: string;
  name: string;
  affiliation: string;
  image: string;
  alt: string;
}

export const speakersData: SpeakerItem[] = [
  {
    id: '1',
    name: 'Xiaojiang Li',
    affiliation: 'Jinan University',
    image: '/images/00001.png',
    alt: 'Xiaojiang Li - Jinan University'
  },
  {
    id: '2',
    name: 'Ke ZHANG',
    affiliation: 'Shenzhen Bay Laboratory',
    image: '/images/00002.png',
    alt: 'Ke ZHANG - Shenzhen Bay Laboratory'
  },
  {
    id: '3',
    name: 'Xiaojiang Li',
    affiliation: 'Jinan University',
    image: '/images/00003.png',
    alt: 'Xiaojiang Li - Jinan University'
  },
  {
    id: '4',
    name: 'Shuying SUN',
    affiliation: 'Johns Hopkins School of Medicine',
    image: '/images/00004.png',
    alt: 'Shuying SUN - Johns Hopkins School of Medicine'
  }
];
