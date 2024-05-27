function subs(a, b, o=true) {
    if (!b) return 0;
    else {
        var c = 0;
        a.split('').map((_, pos) => {
            if (a.slice(pos, pos + b.length) == b) {
                c++;
            };
        });
    }

    if (o) return c;
    else return c/c;
}

console.log(subs('aaa', '', false));
