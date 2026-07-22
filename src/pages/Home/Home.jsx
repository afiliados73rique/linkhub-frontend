import Header from '../../components/HEADER/Header'
import Hero from '../../components/HERO/Hero'
import PlatformBanner from '../../components/PLATFORMBANNER/PlatformBanner'
import ProdutosList from '../../components/PRODUTOLIST/ProdutoList'
import Footer from '../../components/FOOTER/Footer'

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PlatformBanner />
      <ProdutosList />
      <Footer />
    </>
  )
}

export default Home