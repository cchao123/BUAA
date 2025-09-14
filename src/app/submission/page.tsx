
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
          <Nav title="Submission"></Nav>
      </Main>
      <Footer />
    </>
  );
}
