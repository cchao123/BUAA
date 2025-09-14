// @ts-nocheck
// @ts-ignore
import { SubTitle } from "./SubTitle";
import styles from './FAQ.module.scss'
import { useTranslation } from "react-i18next";


export default function FAQ() {
  const { t } = useTranslation();

  return (
    <div className="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas="">
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
                          </div>
                        </div>
                      </div>

                      {/* <aside className="hero__key-stats">
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
                    </aside> */}
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
                              Call for Paper (Flyer)
                            </h2>
                          </div>
                          <div className="figures-new__text ph3 ph0-lg">
                            <p>All submissions must be done electronically through the Easychair Submission System(投稿链接) .
                            </p>

                          </div>
                          <aside className="figures-new__aside ph3 ph0-lg">
                            <div className="figures-new__box-launch">
                              <h3 className="figures-new__box-launch-title">Call for Paper (Flyer)</h3>
                              <p>Topics of interest for submission include, but are not limited to:</p>
                              <p>* Mobile sensor networks </p>
                              <p>* Image/video analysis </p>
                              <p>* Image-based modeling </p>
                              <p>* Stereo and Structure from motion </p>
                              <a href="/call-for-papers" className="button-new button-new--white">Read more</a>
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
