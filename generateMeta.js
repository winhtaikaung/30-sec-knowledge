const testFolder = './public/assets/snippets'
const fs = require('fs')

var META = {}
fs.readdir(testFolder, (err, files) => {
  files.forEach((file) => {
    fs.readdir(`${testFolder}/${file}`, (err, lv2dir) => {
      const paths = lv2dir.map((snippet) => `${file}/${snippet}`)

      META[file] = paths
      fs.writeFileSync('./src/data/meta.ts', `export const META=${JSON.stringify(META)}`)
    })
  })
})
