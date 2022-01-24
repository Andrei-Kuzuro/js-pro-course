let isEqual: boolean = true;
let num: number = 10;
let str: string = 'string';

let arr: number[] = [1, 2, 3];
let arr3: [number, number, number] = [1, 2, 3];

enum OrderPhase {
  DRAFT = 'DRAFT',
  ACCEPTED = 'ACCEPTED',
  FINISHED = 'FINISHED',
}

const STATUS = OrderPhase.DRAFT;

function getNumber(): void {
  console.log(Math.random());
}

function summa(a: number, b: number): number {
  return a + b;
}
summa(10, 10);

function sort(array: number[]): number[] {
  return array.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return;
  });
}

console.log(sort([1, 5, 7, 2]));
