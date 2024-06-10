import { useState } from 'react';

export default function AbilityScore(props) {
    const [value, setValue] = useState(props.value);

    function increment() {
        if (props.incrementAttrTotal()) {
            setValue(value + 1)
            props.setValue(value + 1)
        }
    }

    function decrement() {
        if (props.decrementAttrTotal()) {
            setValue(value - 1)
            props.setValue(value - 1)
        }
    }

    return <div>
        {props.name}: 
        {value}
           (Modifier: {GetModifier(value)})
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
    </div>
    
    // Converts each ability score to a modifier (eg. score of 13 corresponds to a modifier of 1)
    function GetModifier(score) {
    return Math.round((score - 11) / 2);
  }
}