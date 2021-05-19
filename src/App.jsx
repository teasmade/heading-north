import SiteWrapper from './components/ui/SiteWrapper';
import Nav from './components/layout/Nav';
import Intro from './components/content/Intro';
import TopSection from './components/content/TopSection';
import RootSection from './components/content/RootSection';

function App() {
  return (
    <SiteWrapper>
      <Nav />
      <Intro />
      <TopSection />
      <TopSection />
      <TopSection />
      <TopSection />
      <RootSection />
    </SiteWrapper>
  );
}

export default App;
