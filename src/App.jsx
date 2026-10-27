
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const intro = gsap.timeline()

    intro
      .from('.eyebrow', {
        y: 20,
        opacity: 0,
        duration: 0.7,
      })
      .from(
        '.headline',
        {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.3'
      )
      .from(
        '.description',
        {
          y: 20,
          opacity: 0,
          duration: 0.7,
        },
        '-=0.5'
      )
      .from(
        '.stat',
        {
          y: 25,
          opacity: 0,
          duration: 0.6,
          stagger: 0.2,
        },
        '-=0.3'
      )

    gsap.to('.hero-car', {
      x: 260,
      y: 100,
      rotate: -5,
      ease: 'none',
      scrollTrigger: {
        trigger: '.stats-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    })

    return () => {
      intro.kill()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <main>
      <section className="hero">
        <nav className="navbar">
          <a className="logo" href="#">ITZFIZZ<span>.</span></a>
          <span className="nav-label">MOVE DIFFERENTLY</span>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">THE ART OF MOVEMENT</p>

          <h1 className="headline">
            WELCOME
            <br />
            <span>ITZFIZZ</span>
          </h1>

          <p className="description">
            Built for those who refuse to stand still.
            <br />
            Experience motion in a whole new way.
          </p>

          <div className="car-visual hero-car">
            <svg viewBox="0 0 520 220" role="img" aria-label="Sports car illustration">
              <ellipse cx="260" cy="184" rx="210" ry="18" fill="#000" opacity=".35" />
              <path
                d="M65 142 L91 111 Q110 99 165 92 L215 48 Q232 35 270 38 L340 48 Q369 54 398 93 L444 111 Q461 119 465 143 L451 163 L70 163 Z"
                fill="#e74328"
              />
              <path
                d="M184 88 L224 51 Q235 43 267 46 L294 50 L315 88 Z"
                fill="#161c25"
              />
              <path
                d="M307 51 L337 56 Q361 63 383 91 L323 88 Z"
                fill="#161c25"
              />
              <path d="M70 146 L449 146 L437 161 L81 161 Z" fill="#53100e" />
              <circle cx="153" cy="160" r="32" fill="#101216" />
              <circle cx="153" cy="160" r="17" fill="#9ba3ad" />
              <circle cx="153" cy="160" r="7" fill="#272d35" />
              <circle cx="376" cy="160" r="32" fill="#101216" />
              <circle cx="376" cy="160" r="17" fill="#9ba3ad" />
              <circle cx="376" cy="160" r="7" fill="#272d35" />
            </svg>
          </div>

          <a className="scroll-hint" href="#experience">
            SCROLL TO EXPLORE <span>↓</span>
          </a>
        </div>

        <p className="hero-index">01 / THE EXPERIENCE</p>
      </section>

      <section className="stats-section" id="experience">
        <p className="eyebrow">ENGINEERED TO IMPRESS</p>
        <h2>Performance that speaks.</h2>

        <div className="stats-grid">
          <article className="stat">
            <strong>98<span>%</span></strong>
            <p>Customer satisfaction</p>
          </article>

          <article className="stat">
            <strong>2.4<span>s</span></strong>
            <p>Instant response</p>
          </article>

          <article className="stat">
            <strong>100<span>%</span></strong>
            <p>Made for the bold</p>
          </article>
        </div>
      </section>

      <section className="car-section">
        <div className="car-copy">
          <p className="eyebrow">DESIGNED FOR THE DRIVE</p>
          <h2>Feel every<br />moment.</h2>
          <p>Scroll down. Watch the journey unfold.</p>
        </div>

        <p className="car-caption">MOTION IS THE MESSAGE — 2026</p>
      </section>
    </main>
  )
}

export default App
