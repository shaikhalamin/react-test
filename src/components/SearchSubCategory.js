import React, { Component } from 'react'

export default class SearchSubCategory extends Component {
    render() {
        let {categoryItem,query} = this.props;

        //console.log(categoryItem.subcategory)
        
        let searchSubCatItem;
    
        if(Object.keys(categoryItem).length > 0){
            
            searchSubCatItem = categoryItem.subcategory.map((subcatItem,index)=>{
                
                let check = subcatItem.Name.toLowerCase().indexOf(query.toLowerCase());

                if(check !== -1){
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
