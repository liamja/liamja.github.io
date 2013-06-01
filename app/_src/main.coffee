part1 = 'abcdefghijklm@.91'
part2 = 'nopqrstuvwxyz@.91'

convert = (text) ->
	output = ""
	for i in [0...text.length]
		index = part1.indexOf text.charAt(i)
		if index isnt -1 then output += part2.charAt index else
			index = part2.indexOf(text.charAt(i))
			output += part1.charAt index
	output

emailElement = document.getElementById('email')

emailElement.innerHTML = convert emailElement.innerHTML
