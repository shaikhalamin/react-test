import React, { Component } from 'react'

export default class SubCategory extends Component {
  render() {
    const {cateItem} = this.props;
    //console.log(cateItem);

    let subCatItem;
    if(Object.keys(cateItem.subcategory).length > 0){
        subCatItem = cateItem.subcategory.map((subcat,index)=>{
        return (
        <li key={index}>{subcat.Name}</li>
        )
      })
    }

    return (
      <>
        <li>{cateItem.Name}</li>
        <ul>
        {subCatItem &&
          subCatItem
          }
        </ul>
      </>
    )
  }
}

