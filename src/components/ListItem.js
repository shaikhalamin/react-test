import React, { Component } from 'react';
import SubCategory from './SubCategory'

export default class ListItem extends Component {

  render() {
    let {Name,category} = this.props.item;
    //console.log(category)
    let subItem;
    
    if(Object.keys(category).length > 0){
      subItem = category.map((cateItem,index)=>{
        return (
        <SubCategory key={index} cateItem={cateItem} />
        )
      })
    }
    
    return (
      <>
        <li>{Name}</li>
        <ul>
          {subItem &&
          subItem
          }
        </ul> 
      </>
    )
  }
}



