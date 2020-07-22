import React, {useState} from 'react';
import s from './App.module.scss';
import Button from "./Components/Button/Button";
import Avatar from "./Components/Avatar/Avatar";
import avatar1 from './assets/images/avatar1.jpg';
import avatar2 from './assets/images/avatar2.jpg';
function App() {
    const [isAvatarShown, setIsAvatarShown] = useState<boolean>(false);
    const [name1,setName1] = useState<string>('');
    const [name2,setName2] = useState<string>('');
    const setText = (obj : {'propertyName':string,'value':string})=>{
        if(obj.propertyName === 'name1') setName1(obj.value);
        else setName2(obj.value);
    };

    const showAvatar = ()=>{
        if(!isAvatarShown) setIsAvatarShown(true);
    };
    return (
        <div className={s.app}>
            <div className={s.app__container}>
                <Button buttonContent={'Show avatar'} callBack = {showAvatar}/>
                <Button buttonContent={'Show text1'} callBack={()=>setText({'propertyName':'name1','value':'Jah Khalib'})}/>
                <Button buttonContent={'Show text2'} callBack={()=>setText({'propertyName':'name2','value':"Mot"})}/>
            </div>
            <div className={s.app__info}>
                {
                    isAvatarShown && <Avatar url1={avatar1} url2={avatar2} name1 = {name1} name2={name2}/>
                }
            </div>
        </div>
    );
}

export default App;
