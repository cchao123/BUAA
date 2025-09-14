'use client';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';
import Nav from '@/components/layout/Nav';
import { registrationFeeData } from '@/constants';
import DataTable from '@/components/common/DataTable';

export default function CallForPapers() {
  const feeColumns = [
    { key: 'category', title: 'Categories' },
    { key: 'author', title: 'Author' },
    { key: 'presenter', title: 'Presenter' },
    { key: 'delegate', title: 'Delegate' }
  ];

  return (
    <>
      <Header />
      <Main customStyle={{ marginTop: '0' }}>
        <Nav title="Registration"></Nav>
        <section className="promo-banner">
          <div className="promo-banner__wrapper wfp-wrapper ph3 ph0-lg" style={{ justifyContent: "flex-start" }}>

            <>
              <br />
              <span className="promo-banner__text">Registration Fee</span>

              <div className="figures-new__text ph3 ph0-lg" style={{
                textAlign: 'left',
                width: '100%'
              }}>
                <DataTable 
                  data={registrationFeeData}
                  columns={feeColumns}
                  className="wfp-table--data"
                />
              </div>
            </>

            <>
              <br />
              <span className="promo-banner__text">Important Notice</span>
              <br />
              <br />
              <div className="figures-new__text ph3 ph0-lg" style={{
                textAlign: 'left',
                width: '100%'
              }}>
                <p>1. One regular registration is within <a href="">FIVE</a> Pages including all figures, tables, and references. Extra pages will be charged.</p>
                <p>2. The Additional Paper price is only applied for the registered author who is the first author in both papers. One regular registration with one or more additional papers get only one proceeding.</p>
                <p>3. The Author (Student) price is only applied for the paper whose first author is student. Student' ID card copy should be attached for registration.</p>
                <p>4. At least one author for each accepted final paper must pre-register.</p>
                <p>5. Please send the required documents: a. final paper; b. filled registration form; c. payment proof to <a href="">icrcv_conf@163.com</a>. to finish the registration.</p>
              </div>
            </>

            <>
              <br />
              <span className="promo-banner__text">Delegate Registration</span>
              <br />
              <br />
              <div className="figures-new__text ph3 ph0-lg" style={{
                textAlign: 'left',
                width: '100%'
              }}>
                <p>To Register as a Delegate, please follow the steps below:</p>
                <p>&nbsp;1. Please fill the information and complete the payment via Online Payment System.</p>
                <p>&nbsp;2. You need to email Payment Order ID & Payment Email to icrcv_conf@163.com and wait for the secretary‘s comfirmation.</p>
              </div>
            </>

            <>
              <br />
              <span className="promo-banner__text">Refund/Cancellation Policy</span>
              <br />
              <br />
              <div className="figures-new__text ph3 ph0-lg" style={{
                textAlign: 'left',
                width: '100%'
              }}>
                <p>If the participants request cancellation and refund due to personal reasons, the following refund policy applies.</p>
                <p> &nbsp;* 60 days ahead of the conference: 70% of payment refund</p>
                <p> &nbsp;* 30-60 days ahead of the conference: 50% of payment refund</p>
                <p> &nbsp;* Within 30 days ahead of the conference: no refund</p>
              </div>
            </>

            <>
              <br />
              <span className="promo-banner__text">Attention!</span>
              <br />
              <br />
              <div className="figures-new__text ph3 ph0-lg" style={{
                textAlign: 'left',
                width: '100%'
              }}>
                <p>For safety consideration, please take good care of your belongings in the public places. Please bring your name badge for entering the conference hall. Please do not lend your name badge to people who are not involved with the conference. Please do not take irrelevant people to enter the conference rooms. The Organizers shall not be held responsibility for any loss of personal finance or belongings.</p>
              </div>
            </>
          </div>
        </section>
      </Main>
      <Footer />
    </>
  );
}
