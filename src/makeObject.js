function makeObject() {
	return {
		methods: [],
		toObject(data) {
			if(data) {
				return {...data}
			}
			this.methods.push('toObject')
			return this
		},
		vowelsToCapital(data) {
			if(data) {
				if(Array.isArray(data)) {
					return data.map((str, index) => this.isNeedToUpper(str))
				} else {
					return {...Object.keys(data).map(index => this.isNeedToUpper(data[index]))}
				}
			}
			this.methods.push('vowelsToCapital')
			return this
		},
		provideData(data) {
			let mutedData = data.map(item => item.split('').sort().join(''))

			if(this.methods.length) {
				this.methods.forEach(method => {
					mutedData = this[method](mutedData)
				})
			}
			return mutedData
		},
		isLetter(character) {
			return character.match(/[a-z]/i)
		},
		isNeedToUpper(characters) {
			const letters = ['E', 'I', 'O', 'A', 'U']

			return characters.split('').map(character => {
				if (this.isLetter(character)) {
					const findUpperLetter = letters.find(str => str === character.toUpperCase())
					return findUpperLetter ? findUpperLetter : character
				} else return character
			}).join('')
		}
	}
}

// do NOT remove the following line
module.exports = makeObject;
