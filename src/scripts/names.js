import fs from 'fs';

const filelist = fs.readdirSync('/home/ajolipa/performant/editioncrafter-odt-classroom/data/tei-503-504')
for (const f of filelist) {
  const text = fs.readFileSync(`/home/ajolipa/performant/editioncrafter-odt-classroom/data/tei-503-504/${f}`, 'utf-8')
  const name = f.replace('.xml', '').replace('_', ' ').toUpperCase()
  const newText = text.replace('Student TEI template for annotation', name)
  fs.writeFileSync(`/home/ajolipa/performant/editioncrafter-odt-classroom/data/tei-503-504/${f}`, newText)
}