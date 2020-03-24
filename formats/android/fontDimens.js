
module.exports = function(dictionary, config) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<resources>
${dictionary.allProperties.map(token => {
  return `  <dimen name="${token.name}">${token.value}</dimen>`
}).join('\n')}
</resources>`
}