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
        <Nav title="Call for Papers"></Nav>
        <section className="promo-banner">
          <div className="promo-banner__wrapper wfp-wrapper ph3 ph0-lg" style={{ justifyContent: "flex-start" }}>
            <>
              <br />
              <p className="promo-banner__text" style={{ textAlign: 'left', width: '100%'}}>Template Download</p>
              <br />
              <br />
              {/* <div className="figures-new__text ph3 ph0-lg" style={{
                textAlign: 'left',
                width: '100%'
              }}>
                <p>Please prepare your paper under the <a href="">Template.doc</a> or <a href="">Conference latex template</a> </p>
              </div> */}

              <Download></Download>
              <br />
            </>

            <>
              <br />
              <br />
              <br />
              <p className="promo-banner__text" style={{ textAlign: 'left', width: '100%'}}>Submission Methods</p>
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
                <TableList></TableList>
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


function Download() {
  return <div className="content-side-image__content">
    <aside className="document-download">
      <h2 className="fs5 fs4-lg" style={{ textAlign: 'left'}}>Template.doc</h2>
      <p className="document-download__file-type file-type file-type--document" style={{textAlign: 'left', textIndent: '1rem'}}>127.7 KB</p>
      <div className="document-download__buttons buttons">
        <a href="" className="button-new button-new--primary">Download</a>
      </div>
    </aside>

    <aside className="document-download">
      <h2 className="fs5 fs4-lg" style={{ textAlign: 'left'}}>Conference latex template</h2>
      <p className="document-download__file-type file-type file-type--document" style={{textAlign: 'left', textIndent: '1rem'}}>Zip | 3.02 MB</p>
      <div className="document-download__buttons buttons">
        <a href="" className="button-new button-new--primary">Download</a>
      </div>
    </aside>
    <br />
  </div>
}


import { documentTableData } from '@/constants';
import DataTable from '@/components/common/DataTable';

export function TableList() {
  const columns = [
    {
      key: 'title',
      title: 'Date'
    },
    {
      key: 'actions',
      title: '文件',
      className: 'document-links-table__actions-head',
      render: (value: any, record: any) => (
        <div className="document-links-table__actions-cell">
          <span className="file-type file-type--document">
            {record.fileType} | {record.fileSize}
          </span>
        </div>
      )
    }
  ];

  return <div className="field field--field-publication-links">
    <div>
      <section className="document-links-table">
        <DataTable 
          data={documentTableData}
          columns={columns}
          dataVisibleRows="5"
        />
      </section>
    </div>
  </div>
}