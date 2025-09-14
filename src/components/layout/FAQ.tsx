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
                          <h1 className="hero__title">Metting title</h1>
                          <h2 className="hero__title" style={{
                            fontSize: 16
                          }}>Metting Description</h2>

                          <div className="hero__actions">
                            <a href=""
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
                        {/* <a href="https://www.wfp.org/stories" className="button-new">Read more stories</a> */}
                      </div>
                    </div>

                    <section className="figures-new">
                      <div className="wfp-wrapper figures-new__wrapper">
                        <header className="figures-new__header">
                          <div className="figures-new__title">
                            <div className="figures-new__text ph3 ph0-lg">
                              <p style={{ color: '#000' }}><b style={{
                                color: '#0d295c',
                                fontSize: 24,
                              }}>Call for Submission</b>:
                                <br />
                                ICRCV invites submissions on a wide range of research topics. <a href="">(Submission System)</a></p>
                            </div>
                          </div>
                          <div className="figures-new__text ph3 ph0-lg">
                            <p><b style={{
                              color: '#0d295c',
                              fontSize: 24,
                            }}>Call for Reviewer</b>:
                              <br />If you are interested in becoming one of reviewers, please submit your resume to <a href="">icrcv_conf@163.com</a>.</p>
                            <p><b style={{
                              color: '#0d295c',
                              fontSize: 24,
                            }}>Call for Delegate</b>:<br />Delegate Online Registration <a href="">(Click)</a></p>
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
                        <br />
                        <br />
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

                    {/* <section className="theme-launches">
                      <div className="theme-launches__wrapper wfp-wrapper ph3 ph0-md">
                        <header className="theme-launches__header">
                          <h2 className="theme-launches__title">ORGANIZERS</h2>
                          <div className="theme-launches__text">
                            <div className="field field--field-rich-text"></div>
                          </div>
                       
                        </header>
                        <img width="50px" src="./src/organizer/00001.png" />
                        <img width="50px" src="./src/organizer/00002.png" />
                        <img width="50px" src="./src/organizer/00003.png" />
                        <img width="50px" src="./src/organizer/00004.png" />
                      </div>
                    </section> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="layout-content page-body">
        <Three></Three>
        <div
          className="paragraph paragraph--type-card-links-featured paragraph--view-mode-full wfp-wrapper mv4 mv5-lg">
          <div className="ta-center mv4">
            <a href="/speaker" className="button-new">More Speakers</a>
          </div>
        </div>
        <TechnicallySupported></TechnicallySupported>
      </div>
    </div>
  );
}

function Three() {
  return <aside class="field field--field-related-stories">
    <h2 class="mt5 page-stripe__title wfp-wrapper ph3 ph0-lg">Patrons</h2>
    <div class="grid-up-to-3cols wfp-wrapper ph3 ph0-lg">
      <article aria-labelledby="related" class="news-release-teaser-related h-100">
        <div class="news-release-teaser-related__cover">
          <img loading="lazy" src="/images/00001.png" alt="Patron 1" />
        </div>
        <div class="news-release-teaser-related__text pt1 pb1">
          <span class="db mt2 mb1 fs6 c-primary" style={{textAlign: 'center'}}>
            Xiaojiang Li
          </span>
          <h3 id="related" class="news-release-teaser-related__title db lh-heading fs5" style={{textAlign: 'center'}}>
            Jinan University
          </h3>
        </div>
      </article>

      <article aria-labelledby="related--2" class="news-release-teaser-related h-100">
        <div class="news-release-teaser-related__cover">
          <img loading="lazy" src="/images/00002.png" alt="Patron 2" />
        </div>
        <div class="news-release-teaser-related__text pt1 pb1">
          <span class="db mt2 mb1 fs6 c-primary">Ke ZHANG
          </span>
          <h3 id="related" class="news-release-teaser-related__title db lh-heading fs5">
            Shenzhen Bay Laboratory
          </h3>
        </div>
      </article>

      <article aria-labelledby="related" class="news-release-teaser-related h-100">
        <div class="news-release-teaser-related__cover">
          <img loading="lazy" src="/images/00003.png" alt="Patron 3" />
        </div>
        <div class="news-release-teaser-related__text pt1 pb1">
          <span class="db mt2 mb1 fs6 c-primary">
            Xiaojiang Li
          </span>
          <h3 id="related" class="news-release-teaser-related__title db lh-heading fs5">
            Jinan University
          </h3>
        </div>
      </article>

      <article aria-labelledby="related" class="news-release-teaser-related h-100">

        <div class="news-release-teaser-related__cover">
          <img loading="lazy" src="/images/00004.png" alt="Patron 3" />
        </div>
        <div class="news-release-teaser-related__text pt1 pb1">
          <span class="db mt2 mb1 fs6 c-primary">
            Shuying SUN
          </span>
          <h3 id="related" class="news-release-teaser-related__title db lh-heading fs5">
            Johns Hopkins School of Medicine
          </h3>
        </div>
      </article>
    </div>
  </aside>
}

function TechnicallySupported() {
  return <aside class="field field--field-related-stories">
    <h2 class="mt5 page-stripe__title wfp-wrapper ph3 ph0-lg">Patrons</h2>
    <div class="grid-up-to-3cols wfp-wrapper ph3 ph0-lg">
      <article aria-labelledby="related" class="news-release-teaser-related h-100">
        <a class="news-release-teaser-related__link" href="https://www.wfp.org/stories/gaza-needs-immediate-ceasefire-and-massive-scale-food-assistance">
          <div class="news-release-teaser-related__cover">
            <img loading="lazy" src="http://www.aees.org/Assets/images/logo/Zhengzhou_University-1.png" />
          </div>
          <div class="news-release-teaser-related__text pt1 pb1">
            <span class="db mt2 mb1 fs6 c-primary">
              Xiaojiang Li
            </span>
            <h3 id="related" class="news-release-teaser-related__title db lh-heading fs5">
              Jinan University
            </h3>
          </div>
        </a>
      </article>

      <article aria-labelledby="related--2" class="news-release-teaser-related h-100">
        <a class="news-release-teaser-related__link" href="https://www.wfp.org/stories/understanding-famine-what-it-how-you-can-act">
          <div class="news-release-teaser-related__cover">
            <img loading="lazy" src="/public/images/00001.png" />
          </div>
          <div class="news-release-teaser-related__text pt1 pb1">
            <span class="db mt2 mb1 fs6 c-primary">
              Ke ZHANG
            </span>
            <h3 id="related" class="news-release-teaser-related__title db lh-heading fs5">
              Shenzhen Bay Laboratory
            </h3>
          </div>
        </a>
      </article>

      <article aria-labelledby="related" class="news-release-teaser-related h-100">
        <a class="news-release-teaser-related__link" href="https://www.wfp.org/stories/eyewitness-we-have-plenty-food-ready-go-gaza-we-just-need-go-ahead">
          <div class="news-release-teaser-related__cover">
            <img loading="lazy" src="/public/images/00003.png" />
          </div>
          <div class="news-release-teaser-related__text pt1 pb1">
            <span class="db mt2 mb1 fs6 c-primary">
              <time datetime="2025-05-18T12:00:00Z">18 May 2025</time>

            </span>
            <h3 id="related" class="news-release-teaser-related__title db lh-heading fs5">
              Eyewitness: ‘We have plenty of food ready to go into Gaza – we just need the go-ahead’
            </h3>
          </div>
        </a>
      </article>
    </div>
  </aside>
}