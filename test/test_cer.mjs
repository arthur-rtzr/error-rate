import {cer, wer} from "../src/cer.mjs"

console.log(cer("배고픕니다", "배가고픕니다"))
console.log(cer('kitten', 'sitting'));

console.log(cer('서울특별시 동작구 사당동 1005-50', '서울특별시 동작구 사당동 1005 대시 50'));
console.log(wer('서울특별시 동작구 사당동 1005-50', '서울특별시 동작구 사당동 1005 대시 50'));


console.log(cer("배고픕니다", "배가고픕니다"))
console.log(cer('kitten', 'sitting'));

console.log(cer('서울특별시 동작구 사당동 1005-50', '서울특별시 동작구 사당동 1005 대시 50'));
console.log(wer('서울특별시 동작구 사당동 1005-50', '서울특별시 동작구 사당동 1005 대시 50'));

