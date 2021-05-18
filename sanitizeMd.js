const testFolder = './30-seconds-of-git/snippets/'
const fs = require('fs')

function sanitize(str, regex) {
  str = str.replace(regex, '')
  return str
}

function UpperFirst(str) {
  return ''.concat(str.slice(0, 1).toUpperCase(), str.slice(1, str.length))
}

fs.readdir(testFolder, (err, files) => {
  files.forEach((file) => {
    fs.readFile(`${testFolder}${file}`, (err, data) => {
      const md = sanitize(
        sanitize(
          sanitize(sanitize(sanitize(data.toString(), /(?<=title:)(.*)(?=)/gm), /(?<=tags:)(.*)(?=)/gm), '---'),
          'title:',
        ),
        'tags:',
      )
      const finalData = md
        .replace(
          '---',
          `### ${UpperFirst(
            file
              .replace('.md', '')
              .replace('-', ' ')
              .replace('-', ' ')
              .replace('-', ' ')
              .replace('-', ' ')
              .replace('-', ' '),
          )}\n\n#### Description\n\n`,
        )
        .replace('\n\n\n', '')
      fs.writeFileSync(`${testFolder}${file}`, finalData)
    })
  })
})
