export interface Figure {
  shape: string;
  color: string;
  getArea(scale?: number): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Invalid triangle: sides must be positive');
    }

    if (!this.isValidTriangle()) {
      throw new Error(
        `throws an error: sides ${this.a}, ${this.b} and ${this.c} can't form a triangle`,
      );
    }
  }

  private isValidTriangle(): boolean {
    return (
      this.a + this.b > this.c &&
      this.b + this.c > this.a &&
      this.a + this.c > this.b
    );
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid circle: radius must be positive');
    }
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle: width and height must be positive');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure): string {
  let area = figure.getArea();

  if (area % 1 !== 0) {
    area = area.toFixed(2);
  }

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
