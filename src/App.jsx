import SiteWrapper from './components/ui/SiteWrapper';
import Nav from './components/layout/Nav';
import Intro from './components/content/Intro';
import TopSection from './components/content/TopSection';
import RootSection from './components/content/RootSection';
import Timeline from './components/content/TimeLine';

function App() {
  return (
    <SiteWrapper>
      <Nav />
      <Intro />
      <TopSection />
      <Timeline />
      <RootSection />
    </SiteWrapper>
  );
}

export default App;
