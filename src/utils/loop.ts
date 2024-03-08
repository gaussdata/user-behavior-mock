export function loop(count, callback) {
  Array.from({length: count}).forEach(()=>{
    callback()
  })
}