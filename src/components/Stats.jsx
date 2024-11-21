import "./stats.css"

export default function Stats({ feedback }) {
	//calculate sum
	let total = feedback.reduce((acc, cur) => {
		return acc + cur.score
	}, 0)
	// calculate average
	let average = (total / feedback.length).toFixed(1)

	return (
		<div className="stats">
			<h4 className="stats__count">{feedback.length} reviews</h4>
			<h4 className="average">
				Average rating: {isNaN(average) ? 0 : average}
			</h4>
		</div>
	)
}

//isNan - funkcja sprawdza czy zadana wartość jest Nan. jako parametr przekazujemy sprawdzana wartość

//metodę reduce nakładamy na tablicę. spowoduje ona zsumowanie wartości w danej tablicy. jako parametry przyjmuje callback oraz wartość początkową, zazwyczaj 0.
// callback dla reduce budujemy w odpowiedni sposób: ustawiamy dwa parametry: accumulator - wartość zsumowaną oraz current - kolejny element. przy kazdej iteracji wartość accumulator bedzie powiekszana o current

//metoda toFixed() określa ile miejsc po przecinku ma mieć nasz liczba. jako parametr podajemy liczbę
