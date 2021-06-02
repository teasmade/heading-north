import SiteWrapper from './components/ui/SiteWrapper';
import Nav from './components/layout/Nav';
import Intro from './components/content/Intro';
import TopSection from './components/content/TopSection';
import RootSection from './components/content/RootSection';
import Timeline from './components/content/TimeLine';
import Footer from './components/layout/Footer';
import { useState } from 'react';

function App() {
  const [translate, setTranslate] = useState(false);

  return (
    <SiteWrapper>
      <Nav translate={translate} setTranslate={setTranslate} />
      <Intro translate={translate} />
      <TopSection translate={translate} />
      <Timeline translate={translate} />
      <RootSection translate={translate} />
      <Footer translate={translate} />
    </SiteWrapper>
  );
}

export default App;
