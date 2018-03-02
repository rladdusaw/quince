export class Vector {
  private x: number;
  private y: number;
  private z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  };

  invert() : void {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
  };

  add(v: Vector) : void {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
  };

  subtract(v: Vector) : void {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
  };

  multiply(v: number) : void {
    this.x *= v;
    this.y *= v;
    this.z *= v;
  };

  divide(v: number) : void {
    this.x /= v;
    this.y /= v;
    this.z /= v;
  };

  addScaledVector(v: Vector, s: number) {
    this.x += s * v.x;
    this.y += s * v.y;
    this.z += s * v.z;
  };

  magnitude() : number {
    return Math.sqrt(this.x^2 + this.y^2 + this.z^2);
  };

  squareMagniture() : number {
    return this.x^2 + this.y^2 + this.y^2;
  };

  normalizs() : void {
    const l = this.magnitude();
    if (l > 0) {
      this.divide(l);
    }
  };

  componentProduct(v: Vector) : Vector {
    return new Vector(this.x * v.x, this.y * v.y, this.z * v.z);
  };

  componentProductUpdate(v: Vector) : void {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
  };

  scalarProduct(v: Vector) : number {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  };

  vectorProduct(v: Vector) : Vector {
    return new Vector(
      this.y * v.z - this.z * v.y,
      this.z * v.x - this.x * v.z,
      this.x * v.y - this.y * v.x
    );
  };
}