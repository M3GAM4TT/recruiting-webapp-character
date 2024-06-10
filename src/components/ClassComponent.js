import { useState } from "react";

export default function ClassComponent(props) {
   const name = props.name;
   const str = props.strength;
   const dex = props.dexterity;
   const con = props.constitution;
   const int = props.intelligence;
   const wis = props.wisdom;
   const cha = props.charisma; 

   const [showRequirements, setShowRequirements] = useState(false);

   function toggleShowRequirements() {
      setShowRequirements(!showRequirements);
   }

   return <div>
     <p onClick={toggleShowRequirements}>{name}</p>
     {showRequirements ? 
     <div>
      <div>Strength: {str}</div>
      <div>Dexterity: {dex}</div> 
      <div>Constitution: {con}</div> 
      <div>Intelligence: {int}</div> 
      <div>Wisdom: {wis}</div> 
      <div>Charisma: {cha}</div> 
     </div>: ''}
   </div>
}