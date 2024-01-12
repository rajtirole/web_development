import { Icon } from "../icons/Icon";

import css from './card.css';
function Card({player}){
    let icon=<Icon></Icon>
    // icon.addEventListener('click',()=>{
    //     console.log('cklajfdjljk');
    // })
    if(player=='x'){
        icon=<Icon name={'cross'}></Icon>
    }
    else if(player=='o'){
        icon=<Icon name={'circle'}></Icon>
    }
    return (<>
    <div className="card">
        {icon}
    </div>
    </>)
}
export default Card;