type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape = 'triangle',
  ) {
    const half: number = (this.a + this.b + this.c) / 2;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw Error('Only positive numbers');
    }

    if (this.a >= half || this.b >= half || this.c >= half) {
      throw Error('can\'t be a triangle');
    }
  }

  getArea():number {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape = 'circle',
  ) {
    if (this.radius < 0) {
      throw Error('Only positive numbers');
    }
  }

  getArea():number {
    return Math.floor((this.radius ** 2 * Math.PI) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public shape: Shape = 'rectangle',
  ) {
    if (this.a < 0 || this.b < 0) {
      throw Error('Only positive numbers');
    }
  }

  getArea():number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
