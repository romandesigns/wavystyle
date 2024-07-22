export class Particle {
  private homeX: number;
  private homeY: number;
  private x: number;
  private y: number;
  private radius: number;
  private velocity: { y: number };
  private alpha: number;
  private angle: number = Math.random() * Math.PI * 2;
  private orbitRadiusX: number;
  private orbitRadiusY: number;
  private angleIncrement: number;
  private orbiting: boolean = false;
  private orbitDuration: number = 0;
  private particle_color: string;

  constructor(
    x: number,
    y: number,
    radius: number,
    velocity: { y: number },
    particle_color: string
  ) {
    this.homeX = this.x = x;
    this.homeY = this.y = y;
    this.radius = radius;
    this.velocity = velocity;
    this.alpha = 1;
    this.orbitRadiusX = 30 + Math.random() * 20;
    this.orbitRadiusY = 20 + Math.random() * 15;
    this.angleIncrement = 0.05 + Math.random() * 0.05;
    this.particle_color = particle_color;
  }

  draw(ctx: CanvasRenderingContext2D | null) {
    if (!ctx) return;
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.particle_color;
    ctx.fill();
    ctx.restore();
  }

  update(mouseX: number, mouseY: number, mouseActive: boolean) {
    if (mouseActive && this.isNearMouse(mouseX, mouseY)) {
      this.orbiting = true;
      this.angle += this.angleIncrement;
      this.x = mouseX + this.orbitRadiusX * Math.cos(this.angle);
      this.y = mouseY + this.orbitRadiusY * Math.sin(this.angle);
      this.orbitDuration += 1;
    } else {
      if (this.orbiting) {
        this.slingshot();
      }
      this.y -= this.velocity.y;
      const dx = this.homeX - this.x;
      this.x += dx * 0.1;
    }

    this.alpha -= 0.002;
  }

  isAlive() {
    return this.alpha > 0;
  }

  private isNearMouse(mouseX: number, mouseY: number): boolean {
    const distance = Math.sqrt((this.x - mouseX) ** 2 + (this.y - mouseY) ** 2);
    return distance < 100;
  }

  private slingshot() {
    const boost = 5;
    this.velocity.y = -boost * Math.cos(this.angle);
    this.velocity.x = boost * Math.sin(this.angle);
    this.orbiting = false;
    this.orbitDuration = 0;
  }
}
