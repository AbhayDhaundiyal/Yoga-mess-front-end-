import React from 'react';

function Createhead(head){
    return <th>{head.name}</th>
}

function Createrow(row){
//    console.log(row);
    const key = row[0];
    const val = row[1];
    if(key=="web_gitlab_branch"){
        const link = 'https://gitlab.pclm.altair.com/altair365/platform/services/-/tree/'+val;
        return <td><a href={link}>{val}</a></td>
    }
    if(typeof(val)=='string'){
    if(isValidURL(val))
        return <td ><a href = {val}>{val}</a></td>;
    }
    else if(typeof(val)=='object'){
        
        return <td><a href = {val[0]}>{val[0]}</a><br /><br /><a href = {val[1]}>{val[1]}</a><br /><br /><a href = {val[2]}>{val[2]}</a></td>;
    }
    return <td>{val}</td>;
    
}

function isValidURL(string) {
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
  };
export  {Createhead, Createrow};
export default Createhead