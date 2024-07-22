export class Particle {
  private x: number;
  private y: number;
  private radius: number;
  private velocity: { y: number };
  private alpha: number;

  constructor(x: number, y: number, radius: number, velocity: { y: number }) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocity = velocity;
    this.alpha = 1; // Start fully opaque
  }

  draw(ctx: CanvasRenderingContext2D | null) {
    if (!ctx) return;
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)"; // Soft white color
    ctx.fill();
    ctx.restore();
  }

  update() {
    this.y -= this.velocity.y;
    this.alpha -= 0.002; // Very slow fading
  }

  isAlive() {
    return this.alpha > 0;
  }
}
