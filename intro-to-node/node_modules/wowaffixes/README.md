# wowaffixes

![https://github.com/Jhosan7/wowaffixes/actions](https://github.com/jhosan7/wowaffixes/workflows/Test/badge.svg)

## Install
    npm install wowaffixes
## How to Use
### Basic

Print currents affixs in EU

	var wowaffixes = require('wowaffixes')
	console.log(`This week: ${wowaffixes()}`)

### Advanced

Print next week affixs in US in English

	var wowaffixes = require('wowaffixes')
	console.log(`Next week: ${wowaffixes('us','en',1)}`)

#### wowaffixes(region,lang,weeks)
- **region**: eu or us (*Default: eu*)
- **lang**: en,es,numbers  (*Default: en*)
- **weeks**: weeks offset number (*Default: 0*)

NodeJS NPM Package implementation from https://github.com/WFrancois/wow-affixes