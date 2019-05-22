import React, { Component } from 'react';
import SearchSubCategory from './SearchSubCategory';

export default class SearchListItem extends Component {
    render() {
        let {item,query} = this.props;
        let {Name,category} = item;
        //console.log(category.length,category);
        let searchCatItem;

        let styles = {
            color: 'orange',
          };

          let modifiedCategory = {}
          let filtered ;



        
        if(Object.keys(category).length > 0){
            filtered = category.filter(obj => !modifiedCategory[obj.Id] && (modifiedCategory[obj.Id] = true));
            console.log(filtered);
            
            searchCatItem = filtered.map((categoryItem,index)=>{
                return (
                <SearchSubCategory key={index} categoryItem={categoryItem} query={query}/>
                )
            })
            
          }
        

        return (
            <div>
                <li style={styles}>{Name}</li>
                    <ul>
                        {searchCatItem &&
                            searchCatItem
                        }
                    </ul>
                  
            </div>
        )
    }
}
