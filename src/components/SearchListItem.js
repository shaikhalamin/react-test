import React, { Component } from 'react';
import SearchSubCategory from './SearchSubCategory';

export default class SearchListItem extends Component {
    render() {
        let {item,query} = this.props;
        let {Name,category} = item;
        //console.log(category.length,category);
        let searchCatItem;
        
        if(Object.keys(category).length > 0){
            searchCatItem = category.map((categoryItem,index)=>{
                return (
                <SearchSubCategory key={index} categoryItem={categoryItem} query={query}/>
                )
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
