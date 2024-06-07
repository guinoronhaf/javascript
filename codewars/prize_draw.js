function rank (st, we, n) {

    if (!st) return 'No participants';
    else {
        if (st.split(',').length<n) return 'Not enough participants';
        else {
            let data = [];
            const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
            st = st.split(',');
            st.map((firstname, index) => {
                let winningNumber = 0;
                winningNumber += firstname.length;
                let info = {};
                firstname.split('').map((letter) => {
                    winningNumber += alphabet.indexOf(letter.toLowerCase()) + 1;
                });
                winningNumber *= we[index];
                info['name'] = firstname;
                info['points'] = winningNumber;
                data.push(info);
            });
            data.sort(function(a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
            data.sort(function(a, b) {
                if (a.points < b.points) {
                    return 1;
                }
                if (a.points > b.points) {
                    return -1;
                }
                return 0;
            });
            let result = [];
            data.map((information) => {
                result.push(information.name);
            });
            return result[n - 1];
        };
    };

};

console.log(rank("COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH", [1, 4, 4, 5, 2, 1], 4));
