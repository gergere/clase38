import { fork } from 'child_process';


// const forked = fork(process.cwd() + '/src/api/randomCalc.js')

// export const execChild = (cant) => {
//   return new Promise((res, rej) => {
//     forked.on('message', msg => {
//       if (msg === 'done!') {
//         forked.send(cant)
//       } else {
//         res(msg);
//       }
//     })
//   })
// }
export const calcrdm = (cant) => {
  const obj = {};
  for (let i = 0; i < cant; i++) {
    const rdm = Math.round(Math.random() * 1000);
    if (!obj[rdm]) {
      obj[rdm] = 1;
    } else {
      obj[rdm]++;
    }
  }
  return obj;
}