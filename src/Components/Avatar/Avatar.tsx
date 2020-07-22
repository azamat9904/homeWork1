import React from 'react';
import s from './Avatar.module.scss';
export interface Avatar {
    url1:string,
    url2:string,
    name1?:string,
    name2?:string
}
const Avatar = ({url1,url2,name1,name2} : Avatar)=>{
    return (
      <div className={s.avatar}>
          <div className={s.avatar__container}>
              <div className={s.avatar__front}>
                  <img src={url1} alt="avatar" className = {s.avatar__image}/>
                  <h3 className={s.avatar__name}>{name1}</h3>
              </div>
              <div className={s.avatar__back}>
                  <img src={url2} alt="avatar" className = {s.avatar__image}/>
                  <h3 className={s.avatar__name}>{name2}</h3>
              </div>
          </div>
      </div>
    );
};
export default Avatar;
