/**
 * Class继承
 */

class Parent {
  constructor(value) {
    this.value = value;
  }
  getValue() {
    console.log(this.value);
  }
}

class Child extends Parent {
  constructor(value) {
    super(value);
    this.value = value;
  }
}

const child = new Child("child");
child.getValue();
child instanceof Parent;
