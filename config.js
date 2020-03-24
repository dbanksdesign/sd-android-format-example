const StyleDictionary = require('style-dictionary');

StyleDictionary.registerFormat({
  name: 'android/fontDimens',
  formatter: require(`./formats/android/fontDimens`)
});


module.exports = {
  // You can also override built-in formats like this
  // or use a different name. You can still use .registerFormat as well
  // format: {
  //   'android/fontDimens': require(`./formats/android/fontDimens`)
  // },
  
  source: ['tokens/**/*.json'],
  
  platforms: {
    // Only showing android here for brevity
    android: {
      transformGroup: 'android',
      buildPath: 'dist/android/',
      files: [{
        format: 'android/fontDimens',
        destination: 'fontDimens.xml',
        // You can filter the tokens this way, it will only include tokens that have these attributes
        filter: {
          attributes: {
            category: 'font',
            type: 'scale'
          }
        }
        // Or you can write a custom filter function:
        // filter: (token) => {
        //  return token.attributes.category === 'font' &&
        //         token.attributes.type === 'scale'
        // }
      }]
    }
  }
  
}