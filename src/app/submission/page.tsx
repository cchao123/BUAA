'use client';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';
import Nav from '@/components/layout/Nav';

export default function CallForPapers() {
  return (
    <>
      <Header />
      <Main customStyle={{ marginTop: '0' }}>
        <Nav title="Submission"></Nav>
        <section className="promo-banner">
          <div className="promo-banner__wrapper wfp-wrapper ph3 ph0-lg" style={{ justifyContent: "flex-start" }}>
            <>
              <br />
              <span className="promo-banner__text">Template Download</span>
              <br />
              <br />
              <div className="figures-new__text ph3 ph0-lg" style={{
                textAlign: 'left',
                width: '100%'
              }}>
                <p>Please prepare your paper under the <a href="">Template.doc</a> or <a href="">Conference latex template</a> </p>
              </div>
            </>

            <>
              <br />
              <span className="promo-banner__text">Submission Methods</span>
              <br />
              <br />
              <div className="figures-new__text ph3 ph0-lg" style={{
                textAlign: 'left',
                width: '100%'
              }}>
                <p>Please log in the <a href="">Easychair Submission System</a>; ( .pdf only) to submit your full paper and abstract.
                </p>

                <p>For any inquiry about the conference, please feel free to contact us at: <a href='email:aees2020@126.com.'>aees2020@126.com.</a> </p>
              </div>
            </>

            <>
              <br />
              <span className="promo-banner__text">Manuscript Submission</span>
              <br />
              <br />
              <div className="figures-new__text ph3 ph0-lg" style={{
                textAlign: 'left',
                width: '100%'
              }}>
                <p>Papers will be reviewed based on the relevance, innovation, integrality, the “literary” presentation and the technical depth. Manuscript should contains text, in sequence of title, authors and their affiliations, abstract, keywords, main text part, acknowledgments, references and figure/table captions list in Word document (maximum 9 pages, including references and tables). Papers should present in a concise way the purpose of the paper, main theoretical framework/ assumptions and if applicable research methods and preliminary and/or expected results.</p>
              </div>
            </>


            <>
              <br />
              <span className="promo-banner__text">Peer Review</span>
              <br />
              <br />
              <div className="figures-new__text ph3 ph0-lg" style={{
                textAlign: 'left',
                width: '100%'
              }}>
                <p>All paper submissions will be peer reviewed and evaluated based on originality, research content, relevance to conference, contributions, and readability. All accepted papers will be published in the Conference Proceedings after proper registration and presentation.</p>
                <p>
                  <b>The AEES2025 is currently recruiting reviewers!</b> Reviewers are asked to review manuscripts for clarity, accuracy, and research rigor, and to provide detailed, constructive feedback intended to improve the quality and substance of research findings. Please send current CV as an attachment and contact at <a href="">aees2020@126.com</a> with questions.  </p>
              </div>
            </>

            <>
              <br />
              <span className="promo-banner__text">Manuscript Submission</span>
              <br />
              <br />
              <div className="figures-new__text ph3 ph0-lg" style={{
                textAlign: 'left',
                width: '100%'
              }}>
                <table width={300} style={{ width: '600px' }}>
                  <thead>
                    <tr>
                      <td>Submission of Full Paper</td>
                      <td>September 20th, 2025</td>
                    </tr></thead>
                  <tbody>
                    <tr>
                      <td>Notification Deadline</td>
                      <td>September 30th, 2025</td>
                    </tr>
                    <tr>
                      <td>Registration Deadline</td>
                      <td>October 10th, 2025</td>
                    </tr>
                    <tr>
                      <td>Conference Dates</td>
                      <td>October 17- 19, 2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>

          </div>
        </section>
      </Main>
      <Footer />
    </>
  );
}
