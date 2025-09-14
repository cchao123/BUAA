// @ts-nocheck
// @ts-ignore
import { SubTitle } from "./SubTitle";
import styles from './FAQ.module.scss'
import { useTranslation } from "react-i18next";
import { speakersData, institutionsData, institutionsData1, InstitutionItem } from '@/constants';


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
        <Organizer />
        <div
          className="paragraph paragraph--type-card-links-featured paragraph--view-mode-full wfp-wrapper mv4 mv5-lg">
          <div className="ta-center mv4">
            <a href="/speaker" className="button-new">More Speakers</a>
          </div>
        </div>
        <Patrons title={"Patrons"} list={institutionsData1} />

        <Patrons title="Sponsored by"  list={institutionsData} />

      </div>
    </div>
  );
}

function Organizer() {
  return <aside className="field field--field-related-stories">
    <h2 className="mt5 page-stripe__title wfp-wrapper ph3 ph0-lg">Organizer</h2>
    <div className="grid-up-to-3cols wfp-wrapper ph3 ph0-lg">
      {speakersData.map((speaker, index) => (
        <article 
          key={speaker.id} 
          aria-labelledby={`related-${index}`} 
          className="news-release-teaser-related h-100"
        >
          <div className="news-release-teaser-related__cover">
            <img 
              style={{ transform: 'translateX(50%)' }}
              width={'50%'}
              loading="lazy" 
              src={speaker.image} 
              alt={speaker.alt} 
            />
          </div>
          <div className="news-release-teaser-related__text pt1 pb1">
            <span 
              className="db mt2 mb1 fs6 c-primary" 
              style={{textAlign: 'center'}}
            >
              {speaker.name}
            </span>
            <h3 
              id={`related-${index}`} 
              className="news-release-teaser-related__title db lh-heading fs5" 
              style={{textAlign: 'center'}}
            >
              {speaker.affiliation}
            </h3>
          </div>
        </article>
      ))}
    </div>
  </aside>
}

function Patrons({title , list}: {title: string, list: InstitutionItem[]}) {
  return <aside className="field field--field-related-stories">
    <h2 className="mt5 page-stripe__title wfp-wrapper ph3 ph0-lg">{title}</h2>
    <div 
      className="wfp-wrapper ph3 ph0-lg"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        padding: '20px 0'
      }}
    >
      {list.map((institution) => (
        <div
          key={institution.id}
          style={{
            height: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
          }}
        >
          <img
            src={institution.logo}
            alt={institution.alt}
            style={{
              maxHeight: '100%',
              maxWidth: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain'
            }}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </aside>
}