'use client';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';
import FAQ from '@/components/layout/FAQ';


export default function Home() {
  return (
    <>
      <Header />
      <Main customStyle={{ marginTop: '0' }}>
        <FAQ></FAQ>
      </Main>
      <Footer />
    </>
  );
}
