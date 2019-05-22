import React, { Component } from 'react'
import categoriesData from './data/categories.json';
import ListItem from './ListItem'
export default class ForTesingData extends Component {

state = {
  dataList:[],
  filterData:[],
  uniqueId:[],
  count:[]
}

componentDidMount(){
  let counter = {}
  let featuredProducts = categoriesData.filter(item => item.ParentCategoryId === 7);
  let uniqueCategoryId = [...new Set(categoriesData.map(item => item.ParentCategoryId))];
  //let itemCount = categoriesData.map((item,index)=> {
    //return counter[item.ParentCategoryId] = (counter[item.ParentCategoryId] || 0)+1;
  //})

  let itemCount =  categoriesData.map(function(obj) {
    let parentId = obj.ParentCategoryId;
    let parent = {}
    parent[parentId] = (parent[parentId] || 0)+1;
    counter[parentId] = (counter[parentId] || 0)+1;
    //return parent;
  })

console.log(counter);


  //let itemCount = categoriesData.reduce((item,index)=> item[item.Name] = (item.ParentCategoryId || 0)+1); 
  this.setState({
    dataList: categoriesData,
    filterData:featuredProducts,
    uniqueId:uniqueCategoryId,
    count:itemCount
  })
//console.log(itemCount);
}

formatdata = (id)=>{
  let data = this.state.dataList;
  let subCat = data.filter(item => item.ParentCategoryId === id);
  return subCat;
}

  render() {
    let dataJson = this.state.dataList;
    let filterJson = this.state.filterData
    let id = this.state.uniqueId.sort((a,b)=> {return a-b});
    let dataCount = this.state.count;
   //console.log(dataJson);
   //console.log(filterJson);
   //console.log(id)
    return (
      <div>
        <h1>Hello json viewer !</h1>
        <ul>
        
        </ul>
      </div>
    )
  }
}

