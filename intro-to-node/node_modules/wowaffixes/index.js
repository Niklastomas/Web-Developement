const lang = require('./lang')
const US_Start_Week = 1557828000 // US Servers start week
const EU_Start_Week = US_Start_Week + 57600 // +16 hours from US Servers
const Delay = 0 // Only if need some week delay in the future

// Affixes ID list
const Affixes_List = [
	[ 7, 2, 10 ],
	[ 11, 4, 9 ],
	[ 8, 14, 10 ],
	[ 7, 13, 9 ],
	[ 11, 3, 10 ],
	[ 6, 4, 9 ],
	[ 5, 14, 10 ],
	[ 11, 2, 9 ],
	[ 7, 12, 10 ],
	[ 6, 13, 9 ],
	[ 8, 12, 10 ],
	[ 5, 3, 9 ]
]

module.exports = (region = 'eu', _lang = 'en', weeks = 0) => {
	if (region != 'eu' && region != 'us') region = 'eu'
	if (!lang[ _lang ] && _lang != 'numbers') _lang = 'en'
	if (!Number.isInteger(weeks)) weeks = 0

	var current_week

	if (region == 'us')
		current_week = Math.floor((Math.floor(new Date() / 1000) - US_Start_Week) / 604800)
	else
		current_week = Math.floor((Math.floor(new Date() / 1000) - EU_Start_Week) / 604800)

	if (_lang == 'numbers')
		return Affixes_List[ (current_week + Delay) % Affixes_List.length ]
	else {
		var TAffixes = []
		Affixes_List[ (current_week + Delay + weeks) % Affixes_List.length ].forEach(element => {
			if (!lang[ _lang ][ element ])
				if (!lang[ 'en' ][ element ])
					TAffixes.push(element)
				else
					TAffixes.push(lang[ 'en' ][ element ])
			else
				TAffixes.push(lang[ _lang ][ element ])
		})
		if (TAffixes.length > 2)
			return TAffixes
		else
			return null
	}
}