import { useTranslation } from 'react-i18next';

import { mainMenuItems, languageOptions } from '@/constants'

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div id="block-footer">
      <footer className="site-footer" role="contentinfo">
        {/* <nav className="site-footer__menu">
          <div className="site-footer__menu-wrapper wfp-wrapper ph3 ph0-lg">
            <div className="site-footer__menu-item">
              <h2 className="site-footer__menu-item-title">
                Sponsored by
              </h2>
            </div>
            <div className='imgList'>
              <img src="https://www.icrcv.org/assets/img/logo/UR_Logo_Primary_Full_COlour_RGB.png" />
            </div>
          </div>
        </nav>
        
        <nav className="site-footer__menu">
          <div className="site-footer__menu-wrapper wfp-wrapper ph3 ph0-lg">
            <div className="site-footer__menu-item">
              <h2 className="site-footer__menu-item-title">Patrons</h2>
            </div>
            <div className='imgList'>
              <img src="http://www.aees.org/Assets/images/logo/Zhengzhou_University-1.png" />
            </div>
          </div>
        </nav> */}
        <FooterNav />
      </footer>
    </div>
  );
}

function FooterNav() {
  return <div className="site-footer__service">
    <div className="wfp-wrapper ph3 ph0-lg site-footer__service-wrapper">
      <b className="site-footer__copyright">Copyright © XXXXX 2020-2025. All rights reserved.</b>
      <nav className="site-footer__service-menu">
        <ul>
          {
            mainMenuItems.map((item) => <li key={item.title} style={{ fontWeight: 400 }}>
              <a href={item.href}>{item.title}</a>
            </li>
            )
          }
        </ul>
      </nav>
    </div>
  </div>
}