class A {
  constructor(a) {
    this.a = a;
  }
}

class AA extends A {
  constructor(a, b) {
    super(a);
    this.b = b;
  }
  toString() {
    return this.a + "" + this.b;
  }
}

const aa = new AA(1, 2);
console.log(aa.toString());
