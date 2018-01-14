//'use strict';

function findMaxIncreaseSeq(params) {
    let numbers = params;
 
    let seq = 1;
    let maxSeq = 1;

    for (let i = 0; i < numbers.length - 1 ; i++) {
        if (+numbers[i] < +numbers[i + 1]) {  
            seq++;
            if (seq > maxSeq) {
                maxSeq = seq;
            }
        }
            else {
                seq = 1;
            }
        
    }
    console.log(numbers.length === 0 ? 0 : maxSeq);
  }

findMaxIncreaseSeq(['8', '7', '1', '2', '3', '4', '2', '2', '4']);
// findMaxIncreaseSeq(['10\n1\n2\n7\n5\n3\n1\n1\n4\n1\n2']);          // 2
// findMaxIncreaseSeq(['13\n1\n1\n1\n1\n2\n3\n5\n1\n1\n2\n4\n9\n3']); // 3
// findMaxIncreaseSeq(['8\n7\n3\n2\n3\n4\n2\n2\n4']);                 // 3
// findMaxIncreaseSeq(['8\n7\n3\n2\n5\n4\n2\n2\n4']);                 // 0