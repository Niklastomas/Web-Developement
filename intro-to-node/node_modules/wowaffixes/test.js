var wowaffixs = require('./index.js')

var affixs = wowaffixs()

if(affixs)
	console.log(`This week: ${affixs}`)
else{
	console.log(`Test failed!`)
	process.exit(1)
}