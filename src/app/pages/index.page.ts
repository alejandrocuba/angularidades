import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <main>
      <p>Angularidades website is coming soon...</p>
      <div #particles class="particle-container"></div>
    </main>
  `,
  styles: [`
    :host {
      display: block;
      height: 100vh;
      overflow: hidden;
    }
    .particle-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
  `]
})
export default class Home implements AfterViewInit {
  @ViewChild('particles') particleContainer!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    this.createParticles();
  }

  createParticles() {
    const container = this.particleContainer.nativeElement;
    const particleCount = 110;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');

      const size = Math.random() * 8 + 2;
      const xPos = Math.random() * 100;
      const yPos = Math.random() * 100;
      const delay = Math.random() * 15;
      const duration = Math.random() * 7 + 8;
      const xMove = Math.random() * 100 - 50;
      const yMove = Math.random() * 100 - 50;
      const opacityStart = (Math.random() * 0.5 + 0.5).toFixed(2);
      const opacityMid = (Math.random() * 0.3 + 0.7).toFixed(2);
      const opacityHigh = (Math.random() * 0.2 + 0.8).toFixed(2);
      const initialBlur = `${(size / 6).toFixed(1)}px`;

      particle.classList.add('particle');
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.top = `${yPos}%`;
      particle.style.left = `${xPos}%`;
      particle.style.setProperty('--duration', `${duration}s`);
      particle.style.setProperty('--x-move', `${xMove}`);
      particle.style.setProperty('--y-move', `${yMove}`);
      particle.style.setProperty('--opacity-start', `${opacityStart}`);
      particle.style.setProperty('--opacity-mid', `${opacityMid}`);
      particle.style.setProperty('--opacity-high', `${opacityHigh}`);
      particle.style.setProperty('--initial-blur', initialBlur);
      particle.style.animationDelay = `${delay}s`;

      container.appendChild(particle);
    }
  }
}
