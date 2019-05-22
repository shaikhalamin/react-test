import React, { Component } from 'react';
import SearchSubCategory from './SearchSubCategory';

export default class SearchListItem extends Component {
    render() {
        let {Name,category} = this.props.item;
       // console.log(category);
        let searchCatItem;
        if(Object.keys(category).length > 0){
            searchCatItem = category.map((categoryItem,index)=>{
                if(categoryItem.index !== null || categoryItem.notifyp !== false){
                    return (
                    <SearchSubCategory key={index} categoryItem={categoryItem} />
                    )
                }
              
            })
          }


        return (
            <div>
                <li>{Name}</li>
                    <ul>
                        {searchCatItem &&
                            searchCatItem
                        }
                    </ul>
                  
            </div>
        )
    }
}
