import { ParticlesTypes } from "@/type";
import { Particle } from "./Particle";

export class ParticlesAnimation {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null;
  private particles: Particle[] = [];
  private mouseX: number = Infinity;
  private mouseY: number = Infinity;
  private mouseActive: boolean = false;
  private particle_color: string;

  constructor(props: ParticlesTypes) {
    this.canvas = props.canvas;
    this.canvas.width = props.canvas_width;
    this.canvas.height = props.canvas_height;
    this.ctx = this.canvas.getContext("2d");
    this.particle_color = props.particle_color;
    this.particles = [];
    this.init(props);
    this.setupMouseHandlers();
  }

  private setupMouseHandlers() {
    this.canvas.addEventListener("mousemove", (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      this.mouseActive = true;
    });

    this.canvas.addEventListener("mouseleave", () => {
      this.mouseX = Infinity;
      this.mouseY = Infinity;
      this.mouseActive = false;
    });
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
    const radius = Math.random() * 0.2 + 0.2;
    const velocity = { y: Math.random() * 0.15 + 0.15 };
    const particle = new Particle(x, y, radius, velocity, this.particle_color);
    this.particles.push(particle);
  }

  private animate(bg_color_center: string, bg_color_outer: string) {
    if (!this.ctx) return;
    requestAnimationFrame(() => this.animate(bg_color_center, bg_color_outer));
    this.drawBackground(bg_color_center, bg_color_outer);

    this.particles.forEach((particle, index) => {
      if (!particle.isAlive()) {
        this.particles.splice(index, 1);
      } else {
        particle.update(this.mouseX, this.mouseY, this.mouseActive);
        particle.draw(this.ctx);
      }
    });

    if (Math.random() > 0.2) {
      this.spawnParticle();
    }
  }
}
