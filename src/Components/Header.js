import React from 'react';
import Accordion from './Accordian';
import Dropdown from './DropDown';
import Link from './Link';
import Search from './Search';
import Translate from './Translate';

const Header =({Accordion,Search,Dropdown,Translate})=>{

    return(
        <div className="ui secondary pointing menu">
          <Link href="/" className="item" >Accordian</Link>
          <Link href="/list" className="item" >Search</Link>
          <Link href="/dropdown" className="item" >DropDown</Link>
          <Link href="/translate" className="item" >Translate</Link>
        </div>
    );

};

export default Header;