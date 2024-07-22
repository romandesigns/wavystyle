import { ParticlesTypes } from "@/type";
import { Particle } from "./Particle";

export class ParticlesAnimation {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null;
  private particles: Particle[] = [];

  constructor(props: ParticlesTypes) {
    this.canvas = props.canvas;
    this.canvas.width = props.canvas_width;
    this.canvas.height = props.canvas_height;
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.init(props);
  }

  private init(props: ParticlesTypes) {
    if (!this.ctx) return;
    this.drawBackground(props.bg_color_center, props.bg_color_outer);
    this.animate(props.bg_color_center, props.bg_color_outer);
  }

  private drawBackground(centerColor: string, outerColor: string) {
    if (!this.ctx) return;
    const x = this.canvas.width / 2;
    const y = this.canvas.height * 0.1;
    const radius = Math.max(this.canvas.width, this.canvas.height) / 2;
    const gradient = this.ctx.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, centerColor);
    gradient.addColorStop(1, outerColor);
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private spawnParticle() {
    const x = Math.random() * this.canvas.width;
    const y = Math.random() * this.canvas.height;
    const radius = Math.random() * 0.3 + 0.3;
    const velocity = { y: Math.random() * 0.5 + 0.1 };
    const particle = new Particle(x, y, radius, velocity);
    this.particles.push(particle);
  }

  private animate(color_center: string, color_outer: string) {
    if (!this.ctx) return;
    requestAnimationFrame(() => this.animate(color_center, color_outer));
    this.drawBackground(color_center, color_outer);

    this.particles.forEach((particle, index) => {
      if (!particle.isAlive()) {
        this.particles.splice(index, 1);
      } else {
        particle.update();
        particle.draw(this.ctx);
      }
    });

    if (Math.random() > 0.2) {
      this.spawnParticle();
    }
  }
}
