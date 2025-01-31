import './App.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from 'gsap-trial/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollSmoother);

function App() {
  useGSAP(() => {
    if (!ScrollTrigger.isTouch) {

      ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
      });

      gsap.fromTo('.hero-section',
        { opacity: 10 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: '.hero-section',
            start: 'top center',
            end: 'bottom top',
            scrub: true
          }
        }
      );

      let itemsL = gsap.utils.toArray('.gallery__left .gallery__item');
      itemsL.forEach(item => {
        gsap.fromTo(item,
          { opacity: 0, x: -50 },
          {
            opacity: 1, x: 0,
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              end: 'top 20%',
              scrub: true
            }
          }
        );
      });

      let itemsR = gsap.utils.toArray('.gallery__right .gallery__item');
      itemsR.forEach(item => {
        gsap.fromTo(item,
          { opacity: 0, x: 400 },
          {
            opacity: 1, x: 0,
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              end: 'top 20%',
              scrub: true
            }
          }
        );
      });
    }
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="content">

          <header className="hero-section">
            <img data-speed=".6" className="hero" src="/hero.png" alt="Alt"/>
            <div className="container">
              <div data-speed=".75" className="main-header">
                <h1 className="main-title">creative scroll</h1>
              </div>
            </div>
          </header>

          <div className="portfolio">
            <div className="container">
              <main className="gallery">

                <div data-speed=".9" className="gallery__left">
                  <img className="gallery__item" src="/1.jpg" alt="Alt"/>
                  <img className="gallery__item" src="/2.jpg" alt="Alt"/>

                  <div className="text-block gallery__item">
                    <h2 className="text-block__h">Creative floating scroll with amazing parallax effect</h2>
                    <p className="text-block__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amount scrolling.</p>
                  </div>

                  <img className="gallery__item" src="/6.jpg" alt="Alt"/>
                </div>

                <div data-speed="1.1" className="gallery__right">
                  <div className="text-block gallery__item">
                    <h2 className="text-block__h">Creative floating scroll with amazing parallax effect</h2>
                    <p className="text-block__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amount scrolling.</p>
                  </div>

                  <img className="gallery__item" src="/4.jpg" alt="Alt"/>
                  <img className="gallery__item" src="/5.jpg" alt="Alt"/>
                  <img className="gallery__item" src="/3.jpg" alt="Alt"/>
                </div>

              </main>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
