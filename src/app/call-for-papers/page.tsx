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
        <SubmissionMethods></SubmissionMethods>
      </Main>
      <Footer />
    </>
  );
}


function Download() {
  return <div className="content-side-image__content">
    <aside className="document-download">
      <h2 className="fs5 fs4-lg" style={{ textAlign: 'left' }}>Template.doc</h2>
      <p className="document-download__file-type file-type file-type--document" style={{ textAlign: 'left', textIndent: '1rem' }}>127.7 KB</p>
      <div className="document-download__buttons buttons">
        <a href="" className="button-new button-new--primary">Download</a>
      </div>
    </aside>

    <aside className="document-download">
      <h2 className="fs5 fs4-lg" style={{ textAlign: 'left' }}>Conference latex template</h2>
      <p className="document-download__file-type file-type file-type--document" style={{ textAlign: 'left', textIndent: '1rem' }}>Zip | 3.02 MB</p>
      <div className="document-download__buttons buttons">
        <a href="" className="button-new button-new--primary">Download</a>
      </div>
    </aside>
    <br />
  </div>
}


import { documentTableData, importantDatesData } from '@/constants';
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

function ImportantDatesTable() {
  const columns = [
    {
      key: 'event',
      title: 'Event'
    },
    {
      key: 'date',
      title: 'Date'
    }
  ];

  return (
    <DataTable
      data={importantDatesData}
      columns={columns}
      className="wfp-table--data"
    />
  );
}

function SubmissionMethods() {
  return <div className="paragraph paragraph--type-rich-text paragraph--view-mode-full">
    <div className="field field--field-rich-text wfp-wrapper clearfix">
      <div className="field-rich-text--container mv4 mv5-lg">
        <div>
          <p>
            <strong>ICRCV</strong> will provide an insight into the unique world stemming from the
            interaction between the fields of Robotics and Computer Vision. <a href="">ICRCV</a> will also provide an
            international technical forum for experts from industry and academia to exchange ideas and present
            results of on-going research in most state-of-the-art areas of <b>robotics</b> and <b>robotics</b>.
          </p>

          <>
            <h4 style={{ textAlign: 'left' }}>1. Electric Machines and Drives </h4>
            <ul>
              <li>Electrical machine design and optimization</li>
              <li>Power electronics and motor drives</li>
              <li>Fault detection and diagnosis in electrical machines</li>
              <li>Electric traction systems</li>
              <li>Electromagnetic compatibility and interference</li>
            </ul>
          </>

          <>
            <h4 style={{ textAlign: 'left' }}>2. Power System Analysis and Optimization </h4>
            <ul>
              <li>Electrical machine design and optimization</li>
              <li>Power electronics and motor drives</li>
              <li>Fault detection and diagnosis in electrical machines</li>
              <li>Electric traction systems</li>
              <li>Electromagnetic compatibility and interference</li>
            </ul>
          </>

          <>
            <h4 style={{ textAlign: 'left' }}>3. Renewable Energy Sources and Integration </h4>
            <ul>
              <li>Electrical machine design and optimization</li>
              <li>Power electronics and motor drives</li>
              <li>Fault detection and diagnosis in electrical machines</li>
              <li>Electric traction systems</li>
              <li>Electromagnetic compatibility and interference</li>
            </ul>
          </>

          <>
            <h4 style={{ textAlign: 'left' }}>4. Energy Conversion and Management </h4>
            <ul>
              <li>Electrical machine design and optimization</li>
              <li>Power electronics and motor drives</li>
              <li>Fault detection and diagnosis in electrical machines</li>
              <li>Electric traction systems</li>
              <li>Electromagnetic compatibility and interference</li>
            </ul>
          </>

        </div>
      </div>
    </div>
  </div>
}