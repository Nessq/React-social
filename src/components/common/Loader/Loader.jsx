import React from 'react';
import style from './Loader.module.css'

const Loader = (props) => {
    return (
        <div className={style.loaderWrap}>
          <div className={style.ldsRipple}>
              <div></div>
              <div></div>
          </div>
        </div>

    );
};

export default Loader;