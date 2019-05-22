import React, { Component } from 'react'

export default class SearchSubCategory extends Component {
    render() {
        let {categoryItem} = this.props;
        //console.log(categoryItem.subCategory)
        
        
        let searchSubCatItem;
        if(categoryItem.subCategory.length > 0){
            searchSubCatItem = categoryItem.subCategory.map((subcatItem,index)=>{
                if(subcatItem.index >= 0){
                    return (
                        <li key={index}>{subcatItem.Name}</li>
                    )
                }
            })
          }
        
        return (
            <>
                <li>{categoryItem.Name}</li>
                <ul>
                    {
                        searchSubCatItem &&
                        searchSubCatItem
                    }
                </ul>
            </>
        )
    }
}
