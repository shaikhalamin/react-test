import React, { Component } from 'react'
import categoriesData from './data/categories.json';
import ListItem from './ListItem'
export default class App extends Component {

state = {
  dataList:[],
  loading:true

}

async componentDidMount(){
  let productsdata = await this.prepareData(categoriesData);
//console.log(productsdata);
  this.setState({
    dataList: productsdata,
    loading:false
  })
  //console.log(this.state.dataList);
}
//let subCategory = products.filter(pitem => pitem.ParentCategoryId == item.Id);
prepareData = (products)=>{
  let data = products.filter(item=>item.ParentCategoryId === 0 );
  let wrapData = data.map((item,index)=>{
    let subcat = products.filter(pitem => pitem.ParentCategoryId == item.Id);
    let subsubcat = subcat.map((ssitem,index)=>{
      let secondSub = products.filter(spitem => spitem.ParentCategoryId == ssitem.Id);
      let newSub = {
        ssitem,
        secondSub
      }
     return newSub
    })
    let newData = {
      data:item,
      category:{subsubcat}
    }
    return newData;
  })
      
  //console.log(data)
  return wrapData;
}


  render() {
    const {dataList,loading} = this.state;
    console.log(dataList)

    if(loading){
      return <h3>fetching....</h3>
    }
    return (
      <div>
        <h1>Hello json viewer !</h1>
        <ul>
         {dataList.map((item,index)=>{
           return <ListItem key={index} item={item} />
         })}
        </ul>
      </div>
    )
  }
}