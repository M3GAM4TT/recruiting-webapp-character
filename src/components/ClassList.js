import { CLASS_LIST } from "../consts.js";
import ClassComponent from "./ClassComponent.js";

export default function ClassList(){
    let classes = CLASS_LIST;

    return <div>
        <h2>Classes</h2>
        {Object.keys(classes).map((key) => (
            <ClassComponent key={key}
            name={key}
            strength={classes[key].Strength}
            dexterity={classes[key].Dexterity}
            constitution={classes[key].Constitution}
            intelligence={classes[key].Intelligence}
            wisdom={classes[key].Wisdom}
            charisma={classes[key].Charisma}
            />
    ))}
    </div>
}