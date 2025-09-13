import { useTranslation } from 'react-i18next';

export default function Friend() {
  const { t } = useTranslation();

  return (
    <div id="block-footer">
    <footer className="site-footer" role="contentinfo">
      <nav className="site-footer__menu">
        <div className="site-footer__menu-wrapper wfp-wrapper ph3 ph0-lg">
          <div className="site-footer__menu-item">
            <h2 className="site-footer__menu-item-title">
              Sponsored by
            </h2>
          </div>
          <img src="https://cdn.wfp.org/guides/ui/assets/v0.0.1/logos/standard/en/wfp-logo-standard-white-en.svg" />
        </div>
      </nav>

      <nav className="site-footer__menu">
        <div className="site-footer__menu-wrapper wfp-wrapper ph3 ph0-lg">
          <div className="site-footer__menu-item">
            <h2 className="site-footer__menu-item-title">Patrons</h2>
          </div>
          <img src="https://www.icrcv.org/assets/img/logo/NJLG.png" />
        </div>
      </nav>

      {/* footer 部分 */}
      <div className="site-footer__service">
        <div className="wfp-wrapper ph3 ph0-lg site-footer__service-wrapper">
          <p className="site-footer__copyright">© 2020-2025 BUAA | All rights reserved.</p>
          <nav className="site-footer__service-menu">
            <ul>
              <li>
                <a href="https://donate.wfp.org/1243/donation/regular/?campaign=1517"
                  data-once="button-donate">home</a>
              </li>
              <li>
                <a href="https://www.wfp.org/privacy-policy">Call for Papers</a>
              </li>
              <li>
                <a href="https://www.wfp.org/contact">Submission</a>
              </li>
              <li>
                <a href="https://cdn.wfp.org/legal/terms">Registration</a>
              </li>
              <li>
                <a href="https://executiveboard.wfp.org/">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  </div>
  );
}
