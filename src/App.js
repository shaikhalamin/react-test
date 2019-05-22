import React, { Component } from 'react'
import categoriesData from './data/categories.json';
import ListItem from './components/ListItem';
import SearchListItem from './components/SearchListItem';
export default class App extends Component {

state = {
  dataList:[],
  loading:true,
  searchres:[]
}

async componentDidMount(){
  let productsdata = await this.prepareData(categoriesData);
  this.setState({
    dataList: productsdata,
    loading:false,
    searchres:[]
  })
}

prepareData = (products)=>{
  let data = products.filter(item=>item.ParentCategoryId === 0 );
  let wrapData = data.map((item,index)=>{
    let categoryMain = products.filter(pitem => pitem.ParentCategoryId === item.Id);
    let category = categoryMain.map((ssitem,index)=>{
      let subcategory = products.filter(spitem => spitem.ParentCategoryId === ssitem.Id);
      subcategory.index=null;
      subcategory.highlight=null;
      let newSub = {...ssitem,index:null,highlight:null,notifyp:false,subcategory}
     return newSub
    })
    let finalData = {...item,index:null,highlight:null,category}
    return finalData;
  })
  return wrapData;
}

handaleChange = (e)=>{
  let q = e.target.value;
  console.log(q.length);
  let regExp = new RegExp('[a-zA-Z]+');
  if(regExp.test(q) === false){
    q='';
  }
  
  let {dataList} = this.state;
  
  if(q){
    let searchRes = dataList.map((item,index)=>{
      
        
        let martchres = item.Name.toLowerCase().indexOf(q.toLowerCase());
        if(martchres !== -1){
         //console.log(item.Name,martchres,q.length);
          item.index = martchres;
          item.highlight = q.length;
        }
        //console.log(item);

        let categoryNew = {};
        let subCategory = {};
        let category=[];
        
        if(Object.keys(item.category).length > 0){
          categoryNew = item.category.map((catitem,i)=>{

            let catres = catitem.Name.toLowerCase().indexOf(q.toLowerCase());
            
            if(catres !== -1){
              
              catitem.index = catres;
              catitem.highlight = q.length;
              //console.log(catitem);
              category.push(catitem);
              return catitem;
            }

          })

          
          item.category.map((cateItem,i)=>{

             subCategory = cateItem.subcategory.map((subcat,i)=>{
              let subCatRes = subcat.Name.toLowerCase().indexOf(q.toLowerCase());
              if(subCatRes !== -1){
                category = [...category,cateItem]
             // console.log(subcat.Name,subCatRes);
               subcat.index = subCatRes;
               subcat.highlight = q.length;
               //catitem.notifyp = true;
               //console.log(cateItem,subcat)
              //return {cateItem:subcat}
              }
            
              //return subcat;
            })

          })


          //category = Object.assign({}, categoryNew, { subCategory })

          //console.log(category);

        }
        //category = Object.assign(categoryNew, subCategory);
        //console.log(categoryNew,subCategory);
        console.log({...item,category});

        //return {...item,category}

    })

    this.setState({
      //dataList: this.state.dataList,
      //loading:false,
      //searchres:[]
    })

    
    //console.log(searchRes);
  }else{
    this.setState({
      //dataList: this.state.dataList,
      //loading:false,
      //searchres:[]
    })
  }
  
}


  render() {
    const {dataList,loading,searchres} = this.state;
    //let findHomeCat = categoriesData.filter(pitem => pitem.ParentCategoryId === 229);
    //console.log(dataList);

    if(loading){
      return <h3>fetching....</h3>
    }

    if(searchres.length > 0){
      //console.log(searchres)
      return (
        <div>
          <input type="text" name="search" value={this.state.searchq} onChange={this.handaleChange} placeholder="Search..."/>
          <ul>
            {
              searchres.map((sritem,i)=>{
                return <SearchListItem key={i} item={sritem}/>
              })
            }
          </ul>
        </div>
      )
    }

    return (
      <div>
        <input type="text" name="search" value={this.state.searchq} onChange={this.handaleChange} placeholder="Search..."/>
        <ul>
         {dataList.map((item,index)=>{
          return <ListItem key={index} item={item} />
         })}
        </ul>
      </div>
    )
  }
}