import {levenstein} from "./levenstein.mjs";

export const cer = (a, b) => {
    let replaced_a = a.replace(/\s/g, ``) //.match(/./g)
    let replaced_b = b.replace(/\s/g, ``)  //.match(/./g)

    let result = levenstein(replaced_a, replaced_b)
    return result
}

export const wer = (a, b) => {
    let replaced_a = a.split(/\s+/g) //.match(/./g)
    let replaced_b = b.split(/\s+/g)  //.match(/./g)

    let result = levenstein(replaced_a, replaced_b)
    return result
}
