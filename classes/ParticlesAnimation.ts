interface ParticlesTypes {
  bg_color_center: string;
  bg_color_outer: string;
  canvas_height: number;
  canvas_width: number;
  canvas: HTMLCanvasElement;
}

export class ParticlesAnimation {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null;

  constructor(props: ParticlesTypes) {
    this.canvas = props.canvas;
    this.canvas.width = props.canvas_width;
    this.canvas.height = props.canvas_height;
    this.ctx = this.canvas.getContext("2d");
    this.init(props);
  }

  private init(props: ParticlesTypes) {
    if (!this.ctx) return;
    this.drawBackground(props.bg_color_center, props.bg_color_outer);
  }

  private drawBackground(centerColor: string, outerColor: string) {
    if (!this.ctx) return;

    const x = this.canvas.width / 2;
    const y = this.canvas.height / 2;
    const radius = Math.max(this.canvas.width, this.canvas.height) / 2;
    const gradient = this.ctx.createRadialGradient(x, y, 0, x, y, radius);

    gradient.addColorStop(0, centerColor);
    gradient.addColorStop(1, outerColor);

    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
