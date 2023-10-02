import quotes from './quotes'
import {useState} from 'react'


const Quote = ()=>{
    const [num, setNum] = useState(0)

    console.log(quotes.length);

    const random = ((min, max)=>{
        let random;
        do {
           random = Math.floor(Math.random()*(max-min+1));
        }while(
            random===num
        )
        return random;
    })
    
    const ranIndex =random(0, quotes.length);

    const handleClick= ()=>{
        setNum(ranIndex)
    }

    return(
        <div className="container" >
            {quotes[num].quote?
                (
                    <div>
                    <h2 className="quote">"{quotes[num].quote}"</h2>
                    <p className="author">{quotes[num].author}</p>
                    </div>
                ) : (<h2 className="quote">Try again</h2>
                )}
            
            <button className="button" onClick={handleClick}>Generate</button>
        </div>
    )

}

export default Quote