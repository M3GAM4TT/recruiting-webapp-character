import { useState } from 'react';
import ClassList from './ClassList.js';
import AbilityScore from './AbilityScore.js';

export default function Character(props) {
    const [str, setStr] = useState(10);
    const [dex, setDex] = useState(10);
    const [con, setCon] = useState(10);
    const [int, setInt] = useState(10);
    const [wis, setWis] = useState(10);
    const [cha, setCha] = useState(10);

    const [attrTotal, setAttr] = useState(str + dex + con + int + wis + cha);

    function incrementAttrTotal() {
        if (attrTotal === 70) {
            alert("Cannot increase attribute total over 70")
            return false;
        }
        setAttr(attrTotal + 1);
        return true;
    }

    // I decided to put a minimum since a maximum exists, even though it's not required
    function decrementAttrTotal() {
        if (attrTotal === 0) {
            alert("Cannot decrease attribute total below 0");
            return false;
        }
        setAttr(attrTotal - 1);
        return true;
    }

    return <div>
        <h1>Attributes</h1>
        <div className="abilityScoreList">
            <AbilityScore name={props.attrList[0]} value={str} setValue={setStr} setAttr={setAttr} incrementAttrTotal={incrementAttrTotal} decrementAttrTotal={decrementAttrTotal}/>     
            <AbilityScore name={props.attrList[1]} value={dex} setValue={setDex} setAttr={setAttr} incrementAttrTotal={incrementAttrTotal} decrementAttrTotal={decrementAttrTotal}/>      
            <AbilityScore name={props.attrList[2]} value={con} setValue={setCon} setAttr={setAttr} incrementAttrTotal={incrementAttrTotal} decrementAttrTotal={decrementAttrTotal}/>     
            <AbilityScore name={props.attrList[3]} value={int} setValue={setInt} setAttr={setAttr} incrementAttrTotal={incrementAttrTotal} decrementAttrTotal={decrementAttrTotal}/>       
            <AbilityScore name={props.attrList[4]} value={wis} setValue={setWis} setAttr={setAttr} incrementAttrTotal={incrementAttrTotal} decrementAttrTotal={decrementAttrTotal}/>       
            <AbilityScore name={props.attrList[5]} value={cha} setValue={setCha} setAttr={setAttr} incrementAttrTotal={incrementAttrTotal} decrementAttrTotal={decrementAttrTotal}/>  
        </div>
        <div className="classList">
            <ClassList/> 
        </div>
    </div>
}