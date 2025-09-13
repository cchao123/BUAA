// @ts-nocheck
// @ts-ignore
import { SubTitle } from "./SubTitle";
import styles from './FAQ.module.scss'
import { useTranslation } from "react-i18next";


export default function FAQ() {
  const { t } = useTranslation();

  return (

    <div className="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas="">
      {/* site-header--hide */}
    <header className="site-header" data-js-hook="site-header" role="banner">

      <div className="site-header__wrapper wfp-wrapper">
        <div className="site-header__branding">
          <a href="https://www.wfp.org/" className="site-header__logo">
            <img src="https://static-data.gaokao.cn/upload/logo/47.jpg" alt="UN World Food Programme" />
          </a>
          <a href="https://www.wfp.org/" className="site-header__slogan">
            BUAA‌<br />2025
          </a>
        </div>

        <div className="navigation-main"
          data-once="navigation-area navigation-main">
          <div className="navigation-main__mobile-togglers">
            <a className="search-overlay__toggler search-overlay__toggler--mobile js--fullscreen-overlay__toggler"
              aria-controls="search-overlay"></a>
            <button className="navigation-main__toggler"
              aria-label="Main menu toggler">
              <span className="navigation-main__toggler-label">Menu</span>
              <span className="navigation-main__toggler-icon"></span>
            </button>
          </div>
          <div id="navigation-main__panel" className="navigation-main__panel" aria-hidden="true">
            <div className="navigation-main__panel-content menu-mobile">
              <nav className="menu-secondary" aria-label="Secondary">

                <ul className="menu menu--language-switcher" data-js-hook="menu"
                  data-internal-element-name="language-switcher" data-once="menu">
                  <li className="menu__item menu__item--has-children">
                    <span className="menu__title">English</span>

                    <div className="menu__item-panel"
                      aria-hidden="true">
                      <a className="menu__item-closer--mobile" data-js-hook="menu__panel-closer"
                        href="https://www.wfp.org/#languages-megamenu-panel-e7b04579-9673-4f4f-bdf9-ffc80e7b09eb"
                        aria-controls="languages-megamenu-panel-e7b04579-9673-4f4f-bdf9-ffc80e7b09eb"
                       >Back</a>

                      <div className="menu__item-intro">
                        <h2 className="menu__item-intro-title">Languages</h2>
                      </div>

                      <ul className="menu__submenu menu__submenu--language-links"
                        data-internal-element-name="language-switcher--links">
                        <li className="menu__submenu-item">
                          <ul className="menu__submenu-list">
                            <li>
                              <a href="https://fr.wfp.org/" className="language-link" hrefLang="fr">Français</a>
                            </li>
                            <li>
                              <a href="https://es.wfp.org/" className="language-link" hrefLang="es">Español</a>
                            </li>
                            <li>
                              <a href="https://ar.wfp.org/" className="language-link" hrefLang="ar">العربية</a>
                            </li>
                            <li>
                              <a href="https://zh.wfp.org/" className="language-link" hrefLang="zh-hans">简体中文</a>
                            </li>
                            <li>
                              <a href="https://fa.wfp.org/" className="language-link" hrefLang="fa">فارسی</a>
                            </li>
                            <li>
                              <a href="https://de.wfp.org/" className="language-link" hrefLang="de">Deutsch</a>
                            </li>
                            <li>
                              <a href="https://it.wfp.org/" className="language-link" hrefLang="it">Italiano</a>
                            </li>
                            <li>
                              <a href="https://ja.wfp.org/" className="language-link" hrefLang="ja">日本語</a>
                            </li>
                            <li>
                              <a href="https://ko.wfp.org/" className="language-link" hrefLang="ko">한국어</a>
                            </li>
                            <li>
                              <a href="https://ru.wfp.org/" className="language-link" hrefLang="ru">Русский</a>
                            </li>
                          </ul>
                        </li>
                      </ul>

                    </div>
                  </li>
                </ul>
              </nav>

              <nav className="menu-primary" aria-label="Main">
                <ul className="menu" data-js-hook="menu" data-once="menu">
                  <li className="menu__item menu__item--has-children">
                    <a className="menu__title">Home</a>
                  </li>
                  <li className="menu__item menu__item--has-children">
                    <a className="menu__title">Call for Papers</a>
                  </li> <li className="menu__item menu__item--has-children">
                    <a className="menu__title">Submission</a>
                  </li>
                  <li className="menu__item menu__item--has-children">
                    <a className="menu__title">Registration</a>
                  </li>
                  <li className="menu__item menu__item--has-children">
                    <a className="menu__title">Contact Us</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

      </div>
    </header>


    <main id="main-content">
      <section>
        <div className="layout-content page-body">
          <div>
            <div data-drupal-messages-fallback="" className="hidden"></div>
            <div className="block-region-top">
              <div>
                <div className="field field--field-paragraphs">

                  <section className="hero js--hero" role="banner">
                    <div className="hero__image">
                      <img loading="lazy"
                        srcSet="https://p3-flow-imagex-sign.byteimg.com/ocean-cloud-tos/e58110335801450a92026212c6606c0d.jpeg~tplv-a9rns2rl98-image_raw.png?rcl=202509130047198CBCEAC298ED7DECB10F&rk3s=8e244e95&rrcfp=827586d3&x-expires=2073055664&x-signature=ascw%2FDVE9F%2Bq5Puxz5I7Gsf1nnM%3D"
                        sizes="100vw" width="384" height="256"
                        src="./src/js/WF1942881 20240930_PAL_Ali-Jadallah_AP3I5957 (4)_1.jpg"
                        alt="A man holds a child amid destruction in Gaza" title="Photo: WFP/Ali Jadallah" />
                    </div>
                    <div className="hero__content">
                      <div className="wfp-wrapper hero__inner-wrapper ph3 ph0-lg">
                        <h1 className="hero__title">Call for Paper (Flyer)</h1>
                        <h2 className="hero__title" style={{
                          fontSize: 16
                        }}>Topics of interest for submission include, but
                          are not limited to:</h2>
                        <ul>
                          <li> ALS Cell Biology</li>
                          <li> RNA Metabolism and Stress Granules</li>
                          <li>Liquid-Liquid Phase Separation</li>
                          <li> Animal and iPSC models</li>
                          <li> ALS Diagnosis and Therapeutics</li>
                          <li>Other Neurodegenerative Diseases</li>
                        </ul>
                        <div className="hero__actions">
                          <a href="https://www.wfp.org/stories/famine-grips-gaza-families-turn-desperate-measures-survive"
                            target="_blank" className="button-new button-new--white">Read more</a>
                          {/* <!-- <a href="https://donate.wfp.org/1243/donation/regular?campaign=4574" target="_blank"
                            className="button-new button-new--danger--primary button-new--featured"
                            data-once="button-donate">Donate</a> --> */}
                        </div>
                      </div>
                    </div>

                    <aside className="hero__key-stats">
                      <a className="hero__key-stats-toggler js--hero__key-stats-toggler"
                        href="https://www.wfp.org/#key-stats--4131626" aria-controls="key-stats--4131626"
                        aria-expanded="true">Close</a>
                      <div id="key-stats--4131626" className="hero__key-stats-panel clearfix" aria-hidden="false">
                        <h2 className="hero__key-stats-title">BUAA 2025</h2>
                        <div className="hero__key-stats-image">
                        </div>
                        <dl className="hero__key-stats-figures">
                          <dt>Call for Submission</dt>
                          <dd>ICRCV invites submissions on a wide range of research topics. (Submission System)</dd>

                          <dt>Call for Reviewer</dt>
                          <dd>If you are interested in becoming one of reviewers, please submit your resume to
                            icrcv_conf@163.com.</dd>

                          <dt>Call for Delegate</dt>
                          <dd>Delegate Online Registration (Click)</dd>
                        </dl>
                      </div>
                    </aside>
                  </section>




                  <section className="promo-banner">
                    <div className="promo-banner__wrapper wfp-wrapper ph3 ph0-lg">
                      <span className="promo-banner__text">Welcome Message</span>
                      <br />
                      <br />
                      <div className="figures-new__text ph3 ph0-lg" style={{
                        textAlign: 'left'
                      }}>
                        {/* <!-- <a href="https://www.wfp.org/publications/wfp-2025-global-outlook"className="promo-banner__button button-new">Click</a> --> */}
                      <p>Neuromuscular diseases such as ALS present a global challenge to human health and medicine.
                        Every year, millions suffer from these diseases, and there is still no effective treatment.
                        Emerging efforts from cross-field collaborations led to significant progress toward FDA-approved
                        therapeutics, such as ASO therapies. </p>
                      <br />

                      <p>Our symposium aims to bring together academic, clinical, and industrial experts in ALS and
                        other neuromuscular diseases. Through their brainstorming, we seek to identify ways to conquer
                        the major challenges of these devastating diseases. </p>
                      </div>
                    </div>
                  </section>


                  <div
                    className="paragraph paragraph--type-card-links-featured paragraph--view-mode-full wfp-wrapper mv4 mv5-lg">
                    <div className="ta-center mv4">
                      <a href="https://www.wfp.org/stories" className="button-new">Read more stories</a>
                    </div>
                  </div>

                  <section className="figures-new">
                    <div className="wfp-wrapper figures-new__wrapper">
                      <header className="figures-new__header">
                        <div className="figures-new__title">
                          <h2 className="h3 ph3 ph0-lg">
                            Submissions must be original and should not have been published previously or be under
                            consideration for publication while being evaluated for this conference.
                          </h2>
                        </div>
                        <div className="figures-new__text ph3 ph0-lg">
                          <p>All submissions must be done electronically through the Easychair Submission System(投稿链接) .
                          </p>

                        </div>
                        <aside className="figures-new__aside ph3 ph0-lg">
                          <div className="figures-new__box-launch">
                            <h3 className="figures-new__box-launch-title">Paper Submission</h3>
                            <p>Understand the precautions for submission.</p>
                            <a href="/sub" className="button-new button-new--white">Read more</a>
                          </div>
                        </aside>
                      </header>
                    </div>


                    <section className="key-stats">
                      <div className="wfp-wrapper ph3 ph0-lg">
                        <h2 className="page-stripe__title key-stats__title"><span>Important Dates</span></h2>
                        <ul className="key-stats__items">
                          <li className="key-stats__item key-stats__item--dark-blue">
                            <strong>Submission of Full Paper </strong>
                            September 20th, 2025
                          </li>
                          <li className="key-stats__item key-stats__item--dark-blue">
                            <strong>Notification Deadline</strong>
                            September 30th, 2025
                          </li>
                          <li className="key-stats__item key-stats__item--dark-blue">
                            <strong>Registration Deadline</strong>
                            October 10th, 2025
                          </li>
                        </ul>
                      </div>
                    </section>
                  </section>

                  <section className="theme-launches">
                    <div className="theme-launches__wrapper wfp-wrapper ph3 ph0-md">
                      <header className="theme-launches__header">
                        <h2 className="theme-launches__title">ORGANIZERS</h2>
                        <div className="theme-launches__text">
                          <div className="field field--field-rich-text"></div>
                        </div>
                        {/* <!-- <a href="https://www.wfp.org/our-work" className="theme-launches__button button-new">See all
                          topics</a> --> */}
                      </header>
                      <img width="50px" src="./src/organizer/00001.png" />
                      <img width="50px" src="./src/organizer/00002.png" />
                      <img width="50px" src="./src/organizer/00003.png" />
                      <img width="50px" src="./src/organizer/00004.png" />
                      <div className="theme-launches__items">
                        <article className="theme-launches__item">
                          <a className="theme-launches__item-link" href="https://www.wfp.org/countries">
                            <div className="theme-launches__item-image">
                              <img loading="lazy"
                                srcSet="https://www.wfp.org/sites/default/files/styles/crop_16_9_240x135/public/2023-04/WF123056_MOZ_20190321_WFP-Deborah_Nguyen_13_add6.jpg?itok=Isf803hi 240w, /sites/default/files/styles/crop_16_9_320x180/public/2023-04/WF123056_MOZ_20190321_WFP-Deborah_Nguyen_13_add6.jpg?itok=tkMBPrpU 320w, /sites/default/files/styles/crop_16_9_400x225/public/2023-04/WF123056_MOZ_20190321_WFP-Deborah_Nguyen_13_add6.jpg?itok=cZVk4u4I 400w, /sites/default/files/styles/crop_16_9_480x270/public/2023-04/WF123056_MOZ_20190321_WFP-Deborah_Nguyen_13_add6.jpg?itok=wAB0WZhF 480w, /sites/default/files/styles/crop_16_9_640x360/public/2023-04/WF123056_MOZ_20190321_WFP-Deborah_Nguyen_13_add6.jpg?itok=hbuntwmJ 640w, /sites/default/files/styles/crop_16_9_800x450/public/2023-04/WF123056_MOZ_20190321_WFP-Deborah_Nguyen_13_add6.jpg?itok=BrAXOPVu 800w, /sites/default/files/styles/crop_16_9_1280x720/public/2023-04/WF123056_MOZ_20190321_WFP-Deborah_Nguyen_13_add6.jpg?itok=FQ0-1M1D 1280w, /sites/default/files/styles/crop_16_9_1600x900/public/2023-04/WF123056_MOZ_20190321_WFP-Deborah_Nguyen_13_add6.jpg?itok=hCBP8s25 1600w"
                                sizes="(min-width:1280px) 384px, (min-width:1024px) 311px, (min-width:768px) 240px, 384px"
                                width="400" height="225"
                                src="./src/js/WF123056_MOZ_20190321_WFP-Deborah_Nguyen_13_add6.jpg"
                                alt="On 21 March 2019, after the passage of Cyclone Idai, the WFP helicopter reaches Guaraguara, Mozambique with a load of High Energy Biscuits. WFP/Deborah Nguyen" />
                            </div>
                            <div className="theme-launches__item-content">
                              <h3 className="h6 theme-launches__item-title">Emergencies</h3>
                            </div>
                          </a>
                        </article>
                        <article className="theme-launches__item">
                          <a className="theme-launches__item-link" href="https://www.wfp.org/cash-transfers">
                            <div className="theme-launches__item-image">
                              <img loading="lazy"
                                srcSet="https://www.wfp.org/sites/default/files/styles/crop_16_9_240x135/public/2023-04/WF130391_BOL_20200626_WFP-Morelia_Erostegui_0071.jpg?itok=amCEM1hc 240w, /sites/default/files/styles/crop_16_9_320x180/public/2023-04/WF130391_BOL_20200626_WFP-Morelia_Erostegui_0071.jpg?itok=bah5DYGS 320w, /sites/default/files/styles/crop_16_9_400x225/public/2023-04/WF130391_BOL_20200626_WFP-Morelia_Erostegui_0071.jpg?itok=6sKz6Uaw 400w, /sites/default/files/styles/crop_16_9_480x270/public/2023-04/WF130391_BOL_20200626_WFP-Morelia_Erostegui_0071.jpg?itok=Ov875yfv 480w, /sites/default/files/styles/crop_16_9_640x360/public/2023-04/WF130391_BOL_20200626_WFP-Morelia_Erostegui_0071.jpg?itok=qP65pb14 640w, /sites/default/files/styles/crop_16_9_800x450/public/2023-04/WF130391_BOL_20200626_WFP-Morelia_Erostegui_0071.jpg?itok=6cyQ38IG 800w, /sites/default/files/styles/crop_16_9_1280x720/public/2023-04/WF130391_BOL_20200626_WFP-Morelia_Erostegui_0071.jpg?itok=t7jmh1-T 1280w, /sites/default/files/styles/crop_16_9_1600x900/public/2023-04/WF130391_BOL_20200626_WFP-Morelia_Erostegui_0071.jpg?itok=RALS-V5F 1600w"
                                sizes="(min-width:1280px) 384px, (min-width:1024px) 311px, (min-width:768px) 240px, 384px"
                                width="400" height="225"
                                src="./src/js/WF130391_BOL_20200626_WFP-Morelia_Erostegui_0071.jpg"
                                alt="Eustaquia from the Uru Murato Indigenous community. WFP assisted vulnerable people in Oruro, La Paz and Cochabamba through Food Assistance for Assets programmes in Bolivia. WFP/Morelia Eróstegui" />
                            </div>
                            <div className="theme-launches__item-content">
                              <h3 className="h6 theme-launches__item-title">Cash-based transfers</h3>
                            </div>
                          </a>
                        </article>
                        <article className="theme-launches__item">
                          <a className="theme-launches__item-link" href="https://www.wfp.org/gender-equality">
                            <div className="theme-launches__item-image">
                              <img loading="lazy"
                                srcSet="https://www.wfp.org/sites/default/files/styles/crop_16_9_240x135/public/2023-04/WF126170_CHD_20170327_WFP-Giulio_dAdamo_088_D4B0691.jpg?itok=-dIHu7Nu 240w, /sites/default/files/styles/crop_16_9_320x180/public/2023-04/WF126170_CHD_20170327_WFP-Giulio_dAdamo_088_D4B0691.jpg?itok=-PQj1B3W 320w, /sites/default/files/styles/crop_16_9_400x225/public/2023-04/WF126170_CHD_20170327_WFP-Giulio_dAdamo_088_D4B0691.jpg?itok=N2gkHGKI 400w, /sites/default/files/styles/crop_16_9_480x270/public/2023-04/WF126170_CHD_20170327_WFP-Giulio_dAdamo_088_D4B0691.jpg?itok=fiq9JL2m 480w, /sites/default/files/styles/crop_16_9_640x360/public/2023-04/WF126170_CHD_20170327_WFP-Giulio_dAdamo_088_D4B0691.jpg?itok=znNQClyT 640w, /sites/default/files/styles/crop_16_9_800x450/public/2023-04/WF126170_CHD_20170327_WFP-Giulio_dAdamo_088_D4B0691.jpg?itok=z6SVfTDF 800w, /sites/default/files/styles/crop_16_9_1280x720/public/2023-04/WF126170_CHD_20170327_WFP-Giulio_dAdamo_088_D4B0691.jpg?itok=e7YX427n 1280w, /sites/default/files/styles/crop_16_9_1600x900/public/2023-04/WF126170_CHD_20170327_WFP-Giulio_dAdamo_088_D4B0691.jpg?itok=XfPA1FuF 1600w"
                                sizes="(min-width:1280px) 384px, (min-width:1024px) 311px, (min-width:768px) 240px, 384px"
                                width="400" height="225"
                                src="./src/js/WF126170_CHD_20170327_WFP-Giulio_dAdamo_088_D4B0691.jpg"
                                alt="Kaka Marabou writing her name on the school blackboard in Yakoua, Lake Chad. Refugees, displaced people and other poor communities in the Lake Chad basin are dependent on humanitarian assistance for survival and access to basic education is also limited. WFP/Giulio d&#39;Adamo" />
                            </div>
                            <div className="theme-launches__item-content">
                              <h3 className="h6 theme-launches__item-title">Gender equality</h3>
                            </div>
                          </a>
                        </article>
                        <article className="theme-launches__item">
                          <a className="theme-launches__item-link" href="https://www.wfp.org/nutrition">
                            <div className="theme-launches__item-image">
                              <img loading="lazy"
                                srcSet="https://www.wfp.org/sites/default/files/styles/crop_16_9_240x135/public/2023-04/WF169655_YEM_20200910_MAwadh-30.jpg?itok=HKxEforR 240w, /sites/default/files/styles/crop_16_9_320x180/public/2023-04/WF169655_YEM_20200910_MAwadh-30.jpg?itok=VikuYvN1 320w, /sites/default/files/styles/crop_16_9_400x225/public/2023-04/WF169655_YEM_20200910_MAwadh-30.jpg?itok=qT-o-l2S 400w, /sites/default/files/styles/crop_16_9_480x270/public/2023-04/WF169655_YEM_20200910_MAwadh-30.jpg?itok=0f7qoTDM 480w, /sites/default/files/styles/crop_16_9_640x360/public/2023-04/WF169655_YEM_20200910_MAwadh-30.jpg?itok=jiUzxd2I 640w, /sites/default/files/styles/crop_16_9_800x450/public/2023-04/WF169655_YEM_20200910_MAwadh-30.jpg?itok=xgWjgMny 800w, /sites/default/files/styles/crop_16_9_1280x720/public/2023-04/WF169655_YEM_20200910_MAwadh-30.jpg?itok=LgaiCAmK 1280w, /sites/default/files/styles/crop_16_9_1600x900/public/2023-04/WF169655_YEM_20200910_MAwadh-30.jpg?itok=Hk-CUr3z 1600w"
                                sizes="(min-width:1280px) 384px, (min-width:1024px) 311px, (min-width:768px) 240px, 384px"
                                width="400" height="225" src="./src/js/WF169655_YEM_20200910_MAwadh-30.jpg"
                                alt="Yemen. Sultan&#39;s mother feeds him a nutritious peanut paste at home. He suffers from moderate acute malnutrition. Thanks to the supplementary food he is receiving from WFP, Sultan has started to gain weight and has more energy than before. But he still needs treatment. His family also receive WFP food assistance - flour, dried beans, oil, sugar and salt. WFP/Mohammed Awadh" />
                            </div>
                            <div className="theme-launches__item-content">
                              <h3 className="h6 theme-launches__item-title">Nutrition</h3>
                            </div>
                          </a>
                        </article>
                        <article className="theme-launches__item">
                          <a className="theme-launches__item-link" href="https://www.wfp.org/school-meals">
                            <div className="theme-launches__item-image">
                              <img loading="lazy"
                                srcSet="https://www.wfp.org/sites/default/files/styles/crop_16_9_240x135/public/2023-04/WF131707_HAI_20200303_WFP-Antoine_Vallas_0001.jpg?itok=PthGVuNB 240w, /sites/default/files/styles/crop_16_9_320x180/public/2023-04/WF131707_HAI_20200303_WFP-Antoine_Vallas_0001.jpg?itok=VvXIJrN0 320w, /sites/default/files/styles/crop_16_9_400x225/public/2023-04/WF131707_HAI_20200303_WFP-Antoine_Vallas_0001.jpg?itok=v57a2jNO 400w, /sites/default/files/styles/crop_16_9_480x270/public/2023-04/WF131707_HAI_20200303_WFP-Antoine_Vallas_0001.jpg?itok=-lCRIPvn 480w, /sites/default/files/styles/crop_16_9_640x360/public/2023-04/WF131707_HAI_20200303_WFP-Antoine_Vallas_0001.jpg?itok=xVPv4TJP 640w, /sites/default/files/styles/crop_16_9_800x450/public/2023-04/WF131707_HAI_20200303_WFP-Antoine_Vallas_0001.jpg?itok=K-2Jq258 800w, /sites/default/files/styles/crop_16_9_1280x720/public/2023-04/WF131707_HAI_20200303_WFP-Antoine_Vallas_0001.jpg?itok=Ubo0hxEo 1280w, /sites/default/files/styles/crop_16_9_1600x900/public/2023-04/WF131707_HAI_20200303_WFP-Antoine_Vallas_0001.jpg?itok=MthgO0xP 1600w"
                                sizes="(min-width:1280px) 384px, (min-width:1024px) 311px, (min-width:768px) 240px, 384px"
                                width="400" height="225"
                                src="./src/js/WF131707_HAI_20200303_WFP-Antoine_Vallas_0001.jpg"
                                alt="At Gonaives, Haiti, a schoolgirl is receiving daily hot meals thanks to WFP school feeding programme: it&#39;s considered the largest food safety net in the country. Every school day, WFP delivers hot meals to close to 300,000 children each day across more than 1,000 schools, mainly public, throughout the country.  WFP/Antoine Vallas" />
                            </div>
                            <div className="theme-launches__item-content">
                              <h3 className="h6 theme-launches__item-title">School based programmes</h3>
                            </div>
                          </a>
                        </article>
                        <article className="theme-launches__item">
                          <a className="theme-launches__item-link" href="https://www.wfp.org/social-protection">
                            <div className="theme-launches__item-image">
                              <img loading="lazy"
                                srcSet="https://www.wfp.org/sites/default/files/styles/crop_16_9_240x135/public/2023-04/WF192604_20201005_SYR_Hussam-Al-Saleh_1216.jpg?itok=rBq6uGyd 240w, /sites/default/files/styles/crop_16_9_320x180/public/2023-04/WF192604_20201005_SYR_Hussam-Al-Saleh_1216.jpg?itok=Fxn8KaHO 320w, /sites/default/files/styles/crop_16_9_400x225/public/2023-04/WF192604_20201005_SYR_Hussam-Al-Saleh_1216.jpg?itok=xsXrKtwz 400w, /sites/default/files/styles/crop_16_9_480x270/public/2023-04/WF192604_20201005_SYR_Hussam-Al-Saleh_1216.jpg?itok=-pFrDFHK 480w, /sites/default/files/styles/crop_16_9_640x360/public/2023-04/WF192604_20201005_SYR_Hussam-Al-Saleh_1216.jpg?itok=vUHGF0zi 640w, /sites/default/files/styles/crop_16_9_800x450/public/2023-04/WF192604_20201005_SYR_Hussam-Al-Saleh_1216.jpg?itok=VvqaeMX7 800w, /sites/default/files/styles/crop_16_9_1280x720/public/2023-04/WF192604_20201005_SYR_Hussam-Al-Saleh_1216.jpg?itok=DKZBMiwg 1280w, /sites/default/files/styles/crop_16_9_1600x900/public/2023-04/WF192604_20201005_SYR_Hussam-Al-Saleh_1216.jpg?itok=4xVAFsFJ 1600w"
                                sizes="(min-width:1280px) 384px, (min-width:1024px) 311px, (min-width:768px) 240px, 384px"
                                width="400" height="225" src="./src/js/WF192604_20201005_SYR_Hussam-Al-Saleh_1216.jpg"
                                alt="Engineer supervising the rehabilitation of one of the bakeries in Sakhour area, considered one of the largest in Aleppo, Syria. When this bakery will be put into production, it will be able to provide 12 MT of bread - enough to feed approximately 60,000 people with fresh bread. WFP/Hussam Al Saleh" />
                            </div>
                            <div className="theme-launches__item-content">
                              <h3 className="h6 theme-launches__item-title">Social Protection</h3>
                            </div>
                          </a>
                        </article>
                        <article className="theme-launches__item">
                          <a className="theme-launches__item-link" href="https://www.wfp.org/climate-action">
                            <div className="theme-launches__item-image">
                              <img loading="lazy"
                                srcSet="https://www.wfp.org/sites/default/files/styles/crop_16_9_240x135/public/2023-04/WF137561_BGD_20200701_WFP-Mehedi_Rahman_0002.jpg?itok=N17tGP_W 240w, /sites/default/files/styles/crop_16_9_320x180/public/2023-04/WF137561_BGD_20200701_WFP-Mehedi_Rahman_0002.jpg?itok=7KOvWvuY 320w, /sites/default/files/styles/crop_16_9_400x225/public/2023-04/WF137561_BGD_20200701_WFP-Mehedi_Rahman_0002.jpg?itok=hVjD4FFJ 400w, /sites/default/files/styles/crop_16_9_480x270/public/2023-04/WF137561_BGD_20200701_WFP-Mehedi_Rahman_0002.jpg?itok=O91y72t5 480w, /sites/default/files/styles/crop_16_9_640x360/public/2023-04/WF137561_BGD_20200701_WFP-Mehedi_Rahman_0002.jpg?itok=bXGYBaiR 640w, /sites/default/files/styles/crop_16_9_800x450/public/2023-04/WF137561_BGD_20200701_WFP-Mehedi_Rahman_0002.jpg?itok=qrnebU-F 800w, /sites/default/files/styles/crop_16_9_1280x720/public/2023-04/WF137561_BGD_20200701_WFP-Mehedi_Rahman_0002.jpg?itok=YMuu4RTg 1280w, /sites/default/files/styles/crop_16_9_1600x900/public/2023-04/WF137561_BGD_20200701_WFP-Mehedi_Rahman_0002.jpg?itok=Ua3RKNYF 1600w"
                                sizes="(min-width:1280px) 384px, (min-width:1024px) 311px, (min-width:768px) 240px, 384px"
                                width="400" height="225" src="./src/js/WF137561_BGD_20200701_WFP-Mehedi_Rahman_0002.jpg"
                                alt="The heavy monsoon rains flooded the northern and northeastern districts of Bangladesh in July 2020. Floodwater has inundated Sayema&#39;s house making it very difficult to live a normal life. She and her family suffer from food shortages. The World Food Programme offers cash assistance to almost 6000 families in Kurigram who are most vulnerable and in need of help. WFP/Mehedi Rahman" />
                            </div>
                            <div className="theme-launches__item-content">
                              <h3 className="h6 theme-launches__item-title">Climate action</h3>
                            </div>
                          </a>
                        </article>
                        <article className="theme-launches__item">
                          <a className="theme-launches__item-link" href="https://www.wfp.org/resilience-building">
                            <div className="theme-launches__item-image">
                              <img loading="lazy"
                                srcSet="https://www.wfp.org/sites/default/files/styles/crop_16_9_240x135/public/2023-04/WF137362_BGD_20200517_WFP-Nalifa_Mehelin_6758.jpg?itok=zxOonCDI 240w, /sites/default/files/styles/crop_16_9_320x180/public/2023-04/WF137362_BGD_20200517_WFP-Nalifa_Mehelin_6758.jpg?itok=AyA2KRHO 320w, /sites/default/files/styles/crop_16_9_400x225/public/2023-04/WF137362_BGD_20200517_WFP-Nalifa_Mehelin_6758.jpg?itok=2azViFve 400w, /sites/default/files/styles/crop_16_9_480x270/public/2023-04/WF137362_BGD_20200517_WFP-Nalifa_Mehelin_6758.jpg?itok=vbwnU-x1 480w, /sites/default/files/styles/crop_16_9_640x360/public/2023-04/WF137362_BGD_20200517_WFP-Nalifa_Mehelin_6758.jpg?itok=Ri7D2dyf 640w, /sites/default/files/styles/crop_16_9_800x450/public/2023-04/WF137362_BGD_20200517_WFP-Nalifa_Mehelin_6758.jpg?itok=igJJwTiR 800w, /sites/default/files/styles/crop_16_9_1280x720/public/2023-04/WF137362_BGD_20200517_WFP-Nalifa_Mehelin_6758.jpg?itok=IgBgA71S 1280w, /sites/default/files/styles/crop_16_9_1600x900/public/2023-04/WF137362_BGD_20200517_WFP-Nalifa_Mehelin_6758.jpg?itok=KgSEk_Aa 1600w"
                                sizes="(min-width:1280px) 384px, (min-width:1024px) 311px, (min-width:768px) 240px, 384px"
                                width="400" height="225"
                                src="./src/js/WF137362_BGD_20200517_WFP-Nalifa_Mehelin_6758.jpg"
                                alt="During the covid-19 pandemic, in Cox&#39;s Bazar, Bangladesh, WFP engaged with women from the host community and Rohingya refugees through its livelihood program to make masks that were distributed by local government and humanitarian agencies giving them a monthly stipend, marketable job training and financial literacy, and a scholarship to start a business. WFP/Nalifa Mehelin" />
                            </div>
                            <div className="theme-launches__item-content">
                              <h3 className="h6 theme-launches__item-title">Resilience building</h3>
                            </div>
                          </a>
                        </article>
                        <article className="theme-launches__item">
                          <a className="theme-launches__item-link" href="https://www.wfp.org/innovation">
                            <div className="theme-launches__item-image">
                              <img loading="lazy"
                                srcSet="https://www.wfp.org/sites/default/files/styles/crop_16_9_240x135/public/2023-04/WF1710363_IMG_9748_INNOVATION.jpg?itok=Wef3SE2_ 240w, /sites/default/files/styles/crop_16_9_320x180/public/2023-04/WF1710363_IMG_9748_INNOVATION.jpg?itok=gquwL9rW 320w, /sites/default/files/styles/crop_16_9_400x225/public/2023-04/WF1710363_IMG_9748_INNOVATION.jpg?itok=vpCma81f 400w, /sites/default/files/styles/crop_16_9_480x270/public/2023-04/WF1710363_IMG_9748_INNOVATION.jpg?itok=EEoHJVvD 480w, /sites/default/files/styles/crop_16_9_640x360/public/2023-04/WF1710363_IMG_9748_INNOVATION.jpg?itok=jImDcG_n 640w, /sites/default/files/styles/crop_16_9_800x450/public/2023-04/WF1710363_IMG_9748_INNOVATION.jpg?itok=Hp9aXpnF 800w, /sites/default/files/styles/crop_16_9_1280x720/public/2023-04/WF1710363_IMG_9748_INNOVATION.jpg?itok=hpmMzWq2 1280w, /sites/default/files/styles/crop_16_9_1600x900/public/2023-04/WF1710363_IMG_9748_INNOVATION.jpg?itok=-2L1eTwT 1600w"
                                sizes="(min-width:1280px) 384px, (min-width:1024px) 311px, (min-width:768px) 240px, 384px"
                                width="400" height="225" src="./src/js/WF1710363_IMG_9748_INNOVATION.jpg"
                                alt="In Kibera, Kenya, WFP has implemented Hydroponic Farming at Olympic Primary School, with great participation of students and the local community. WFP/Martin Karimi" />
                            </div>
                            <div className="theme-launches__item-content">
                              <h3 className="h6 theme-launches__item-title">Innovation</h3>
                            </div>
                          </a>
                        </article>
                      </div>
                    </div>
                  </section>


                  <div className="paragraph paragraph--type-card-links-featured paragraph--view-mode-full wfp-wrapper mv4 mv5-lg">
                    <section className="explore-new">
                      <h2 className="page-stripe__title wfp-wrapper ph3 ph0-lg">More from WFP</h2>
                      <div className="explore-new__wrapper wfp-wrapper ph3 ph0-lg">
                        <article className="explore-new__item" aria-labelledby="label--mtEX8Q4ubQg">
                          <a href="https://www.wfp.org/publications/wfp-annual-review" title="WFP Annual Review "
                            target="_blank">
                            <div className="explore-new__item-image">
                            </div>
                            <div className="explore-new__item-text">
                              <p className="explore-new__item-meta">Annual Review</p>
                              <h3 id="label--mtEX8Q4ubQg" className="explore-new__item-title">WFP Annual Review </h3>
                              <p className="explore-new__item-info"><strong>Publication</strong><span
                                  className="explore-new__item-info-date"> | 24 June 2025</span></p>
                            </div>
                          </a>
                        </article>
                        <article className="explore-new__item" aria-labelledby="label--S-0cYSB4Rg0">
                          <a href="https://www.wfp.org/stories/war-ukraine-how-wfp-helping-one-family-plant-seeds-wake-bombs"
                            title="War in Ukraine: How WFP is helping one family plant seeds in the wake of bombs">
                            <div className="explore-new__item-image">
                              {/* <div
                                style="background-image: url(&#39;https://www.wfp.org/sites/default/files/styles/card_featured/public/images/WF11038167%20UKR_20250523_WFP_Sayed-Asif-Mahmud__DSC1726_0.jpg?itok=LSdgAyuy&#39;)">
                              </div> */}
                            </div>
                            <div className="explore-new__item-text">
                              <p className="explore-new__item-meta">Ukraine</p>
                              <h3 id="label--S-0cYSB4Rg0" className="explore-new__item-title">War in Ukraine: How WFP is
                                helping one family plant seeds in the wake of bombs</h3>
                              <p className="explore-new__item-info"><strong>Story</strong><span
                                  className="explore-new__item-info-date"> | 10 July 2025</span></p>
                            </div>
                          </a>
                        </article>
                        <article className="explore-new__item" aria-labelledby="label--zbVsXlVQo_c">
                          <a href="https://www.wfp.org/stories/pastoralism-gets-reboot-drying-kenya"
                            title="Pastoralism gets a reboot in drying Kenya">
                            <div className="explore-new__item-image">
                              {/* <div
                                style="background-image: url(&#39;https://www.wfp.org/sites/default/files/styles/card_featured/public/images/main%20photo_WFP_KEN_Isiolo_Patrick%20Mwangi-29_0.jpg?itok=JQc4kcK2&#39;)">
                              </div> */}
                            </div>
                            <div className="explore-new__item-text">
                              <p className="explore-new__item-meta">Resilience</p>
                              <h3 id="label--zbVsXlVQo_c" className="explore-new__item-title">Pastoralism gets a reboot in
                                drying Kenya</h3>
                              <p className="explore-new__item-info"><strong>Story</strong><span
                                  className="explore-new__item-info-date"> | 4 August 2025</span></p>
                            </div>
                          </a>
                        </article>
                      </div>
                    </section>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
    </main>    
  </div>
  
  );
}
