const score = (string) => {
    let points = {
      'aeioulnrst': 1,
      'dg': 2,
      'bcmp': 3,
      'fhvwy': 4,
      'k': 5,
      'jx': 8,
      'qz': 10
    }, p = 0;
  
    string.split('').map((character) => {
      for (item in points) {
          if (item.includes(character) || item.toUpperCase().includes(character)) {
              p += points[item];
            }
      };
    });
    return p;
};

console.log(score('cabbage'));