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
      </Main>
      <Footer />
    </>
  );
}
