
'use client';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';
import Nav from '@/components/layout/Nav';

export default function App() {
  return (
    <>
      <Header />
      <Main customStyle={{ marginTop: '0' }}>
        <Nav title="Contact"></Nav>
        <main id="main-content">
          <section>
            <div className="layout-content page-body">
              <div>
                <div data-drupal-messages-fallback="" className="hidden"></div>
                <div className="node node--type-country node--view-mode-full">
                  <div className="field field--field-paragraph-hero">
                    <div>
                      <section className="page-header-2 page-header-2--bg-grey-light contacts" role="banner">
                        <div className="wfp-wrapper ph3 ph0-lg">
                          <div className="page-header-2__grid">

                            <div className="page-header-2__header">
                              <h1 className="page-header-2__title">Contact Us</h1>
                            </div>

                            <div className="page-header-2__image">
                 
                            </div>

                            <div className="page-header-2__stats">
                              <dl>
                                <dt>Ms. Katharine Shui (税女士)</dt>
                                <dd>Monday-Friday; working hour: 09:30-18:00)</dd>

                                <dt>Tel.: </dt>
                                <dd>+86-28-83533337</dd>

                                <dt>Email</dt>
                                <dd>icrcv_conf@163.com</dd>
                              </dl>
                            </div>
                            <div className="page-header-2__actions">
                            </div>
                          </div>
                        </div>
                      </section>

                    </div>

                  </div>


                </div>


              </div>

            </div>
          </section>
        </main>
      </Main>
      <Footer />
    </>
  );
}
