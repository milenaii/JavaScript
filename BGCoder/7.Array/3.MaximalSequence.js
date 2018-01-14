function findMaxSeq(args) {

    let input = args[0].split('\n');
    let n = +input[0];

    let arr = args.slice(1, n + 1);

    for (let i = 0; i < n; i++) {
        arr[i] = arr[i + 1];
    }

    let seq = 1;
    let maxSeq = 1;

    for (let i = 0; i < n - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            seq++;
            if (seq > maxSeq) {
                maxSeq = seq;
            }
        }
 else {
            seq = 1;
        }
    }
    console.log(n === 0 ? 0 : maxSeq);
}



findMaxSeq(['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1']);
//findMaxSeq(['10/n2/n1/n1/n2/n3/n3/n2/n2/n2/n1']);
