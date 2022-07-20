import {exec as execCallback} from 'node:child_process'

export const exec = (command: string): Promise<string> => {
  // eslint-disable-next-line promise/avoid-new
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line promise/prefer-await-to-callbacks
    execCallback(command, (error, stdout, stderr) => {
      if (error) {
        reject(stderr)
      }

      resolve(stdout)
    })
  })
}

export default exec
