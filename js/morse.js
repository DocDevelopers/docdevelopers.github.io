
var input = prompt("Please enter a sentence: ");

document.getElementById('result').innerHTML = translateSentence(input);

function translateSentence(sentence){
	var result = "";
	sentence = sentence.trim();
	//Find words
	for(var i = 0; i<sentence.length;){
		var indexSpace = sentence.indexOf(" ",i);

		if(indexSpace != -1){
			var word = sentence.substring(i,indexSpace);
			result += convertWord(word)+"| ";
		}

		else{
			var word = sentence.substring(i);
			result += convertWord(word);
			break;
		}

		//Index is not
	  i = 0;

		//Delete extra spaces and remove processed word.
		sentence = sentence.substring(indexSpace+1);
		sentence = sentence.trim();

	}

	return result;

}

function convertWord(word){
	var result = "";
	word = word.trim();
	for(var i = 0; i<word.length; i++){
		result += getLetterInMorse(word.charAt(i)) + " ";
	}

	return result;
}


function getLetterInMorse(letter){
	if(letter.length > 1)
		return "Error: 043";
	else{
		letter = letter.toUpperCase();
		switch (letter) {
			case "A":
				return ".-"
				break;
			case "B":
				return "-..."
				break;
			case "C":
				return "-.-."
				break;
			case "D":
				return "-.."
				break;
			case "E":
				return "."
				break;

			case "F":
				return "..-."
				break;

			case "G":
				return "--."
				break;
			case "H":
				return "...."
				break;
			case "I":
				return ".."
				break;

			case "J":
				return ".---"
				break;

			case "K":
				return "-.-"
				break;
			case "L":
				return ".-.."
				break;
			case "M":
				return "--"
				break;
			case "N":
				return "-."
				break;
			case "O":
				return "---"
				break;
			case "P":
				return ".--."
				break;
			case "Q":
				return "--.-"
				break;
			case "R":
				return ".-."
				break;
			case "S":
				return "..."
				break;

			case "T":
				return "-"
				break;
			case "U":
				return "..-"
				break;
			case "V":
				return "...-"
				break;
			case "W":
				return ".--"
			case "X":
				return "-..-"
				break;
			case "Y":
				return "-.--"
				break;
			case "Z":
				return "--.."
				break;
			case "1":
				return ".----"
				break;
			case "2":
				return "..---"
				break;
			case "3":
				return "...--"
				break;
			case "4":
				return "....-"
				break
			case "5":
				return "....."
				break
			case "6":
				return "-...."
				break
			case "7":
				return "--..."
				break
			case "8":
				return "---"
				break
			case "9":
				return "----"
				break
			case "0":
				return "-----"
				break
			case ".":
				return ".-.-.-"
				break;
			case ",":
				return "--..--"
				break
			case ":":
				return "---..."
				break
			case "?":
				return "..--.."
				break
			case "\'":
				return ".----."
				break
			case "-":
					return "-....-"
					break
			case "/":
				return "-..-."
				break
			case "\\":
				return "-..-."
				break
			case "(":
				return "-.--.-"
				break;
			case ")":
				return "-.--.-"
				break
			case "!":
				return "-.-.--"
			case "\"":
				return ".-..-."
				break
			default:
				return "error: It seems like we don't know what \""+ letter +"\" is in morse code. We will fix this shortly.";

		}
	}
}
