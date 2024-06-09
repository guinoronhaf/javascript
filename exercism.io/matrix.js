class Matrix {
    constructor(matrix) {
      this.matrix = matrix;
    };
  
    get rows() {
      let a = [], i = 0, k = this.matrix.split('\n');
      while (i < k.length) {
          a.push([]); i++;
      };
      k.map((row, index) => {
          row.split(' ').map((element) => {
              a[index].push(Number(element));
          });
      });
      return a;
    };
  
    get columns() {
      let a = [], i = 0, k = this.matrix.split('\n');
      while (i < k[0].split(' ').length) {
          a.push([]); i++;
      };
      k.map((row) => {
          row.split(' ').map((element, index) => {
              a[index].push(Number(element));
          });
      });
      return a;
    };
}

const m = new Matrix('89 1903 3\n18 3 1\n9 4 800');
console.log(m.columns[1]);