export class ParticlesAnimation {
  private canvas: HTMLCanvasElement | null;
  private ctx: CanvasRenderingContext2D | undefined | null;
  private radius: number = 10;
  private particles: number = 10;
  private x: number = 10;
  private y: number = 10;
  private dx: number = 10;
  private dy: number = 10;

  constructor() {
    this.canvas = document.querySelector("canvas");
    if (!this.canvas) throw new Error("Canvas is required");
    // Set canvas element and properties
    this.canvas.width = 800;
    this.canvas.height = 800;
    this.canvas.style.border = "1px solid black";
    this.ctx = this.canvas?.getContext("2d");
  }

  setCanvas() {}

  drawCircle() {
    this.ctx?.beginPath();
    this.ctx?.arc(this.x, this.x, this.radius, 0, Math.PI * 2, false);
    this.ctx?.fill();
  }

  init() {
    this.drawCircle();
  }
}
