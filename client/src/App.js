import TextBlock from './components/TextBlock/TextBlock';
import BasicTimeline from './components/Timeline/BasicTimeline';
import './App.css';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  return (
    <div className='app'>
      <Parallax pages={3} style={{ top: '0', left: '0'}} class="animation">
        <ParallaxLayer offset={0} speed={0.45}>
          <div class="animation_layer parallax" id="background"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1}>
          <h2 >Profolio</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div class="animation_layer parallax" id="men"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.55}>
          <div class="animation_layer parallax" id="tree"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25} style={{ gap: "-13px" }}>
          <BasicTimeline />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.25} style={{ gap: "-13px" }}>
          <TextBlock />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
