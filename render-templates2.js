const nunjucks = require('nunjucks');
const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, 'src', 'templates');
const outputDir = path.join(__dirname, 'dist');

nunjucks.configure(templatesDir, { autoescape: true });

const templates = ['index.njk', 'menu.njk', 'contact.njk'];

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

templates.forEach(template => {
  const rendered = nunjucks.render(template);
  const outputFile = path.join(outputDir, template.replace('.njk', '.html'));
  fs.writeFileSync(outputFile, rendered, 'utf-8');
  console.log(`Rendered ${template} -> ${outputFile}`);
});
