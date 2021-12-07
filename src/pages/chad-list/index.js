import React,{useState, useEffect} from 'react';

import SectionFulid from '../../components/sections/SectionFulid';
import Title from '../../components/sections/Title';
import SubTitle from '../../components/sections/SubTitle';
import Card from '../../components/cards/Card';
import CardTitle from '../../components/cards/CardTitle';
import CardBottom from '../../components/cards/CardBottom';
import Button from '../../components/forms/Button';

import BackgroundSelect from '../../components/forms/BackgroundSelect';
import BodySelect from '../../components/forms/BodySelect';
import ChainSelect from '../../components/forms/ChainSelect';
import EyeSelect from '../../components/forms/EyeSelect';
import HeadSelect from '../../components/forms/HeadSelect';
import MouthSelect from '../../components/forms/MouthSelect';
import SkintoneSelect from '../../components/forms/SkintoneSelect';
import SwagSelect from '../../components/forms/SwagSelect';

import demoImage3 from '../../assets/images/demo/image_3.png';
import dangerImg from '../../assets/images/danger.png';
import ReactPaginate from 'react-paginate';

const ChadList = () => {

  let chadsListdata =[
    {
      "name": "Chad #0000",
      "description": "Gorgeous Chad",
      "image": "https://opensea-prod.appspot.com/puffs/3.png",
      "attributes": [
      { "trait_type": "BACKGROUND", "value": "Red" },
      { "trait_type": "BODY", "value": "Big" },
      { "trait_type": "CHAIN","value": "X" },
      { "trait_type": "EYE","value": "Small" },
      { "trait_type": "HEAD","value": "Big" },
      { "trait_type": "MOUTH","value": "Y" },
      { "trait_type": "SKINTONE","value": "Black" },
      { "trait_type": "SWAG","value": "Surprised" },
      ],
	  "isavilable": false
      },

      {
        "name": "Chad #0001",
        "description": "Gorgeous Chad 1",
        "image": "https://opensea-prod.appspot.com/puffs/3.png",
        "attributes": [
        { "trait_type": "BACKGROUND", "value": "Red" },
        { "trait_type": "BODY", "value": "Big" },
        { "trait_type": "CHAIN","value": "X" },
        { "trait_type": "EYE","value": "Small" },
        { "trait_type": "HEAD","value": "Big" },
        { "trait_type": "MOUTH","value": "Y" },
        { "trait_type": "SKINTONE","value": "Black" },
        { "trait_type": "SWAG","value": "Surprised" },
        ],
		"isavilable": true
        },

        {
          "name": "Chad #0002",
          "description": "Gorgeous Chad 2",
          "image": "https://opensea-prod.appspot.com/puffs/3.png",
          "attributes": [
          { "trait_type": "BACKGROUND", "value": "Black" },
          { "trait_type": "BODY", "value": "Big" },
          { "trait_type": "CHAIN","value": "X" },
          { "trait_type": "EYE","value": "Small" },
          { "trait_type": "HEAD","value": "Big" },
          { "trait_type": "MOUTH","value": "Y" },
          { "trait_type": "SKINTONE","value": "Black" },
          { "trait_type": "SWAG","value": "Surprised" },
          ],
		  "isavilable": false
          },

          {
            "name": "Chad #0003",
            "description": "Gorgeous Chad 3",
            "image": "https://opensea-prod.appspot.com/puffs/3.png",
            "attributes": [
            { "trait_type": "BACKGROUND", "value": "Black" },
            { "trait_type": "BODY", "value": "Big" },
            { "trait_type": "CHAIN","value": "X" },
            { "trait_type": "EYE","value": "Small" },
            { "trait_type": "HEAD","value": "Big" },
            { "trait_type": "MOUTH","value": "Y" },
            { "trait_type": "SKINTONE","value": "Black" },
            { "trait_type": "SWAG","value": "Surprised" },
            ]
            },

            {
              "name": "Chad #0004",
              "description": "Gorgeous Chad 4",
              "image": "https://opensea-prod.appspot.com/puffs/3.png",
              "attributes": [
              { "trait_type": "BACKGROUND", "value": "Red" },
              { "trait_type": "BODY", "value": "Small" },
              { "trait_type": "CHAIN","value": "X" },
              { "trait_type": "EYE","value": "Small" },
              { "trait_type": "HEAD","value": "Big" },
              { "trait_type": "MOUTH","value": "Y" },
              { "trait_type": "SKINTONE","value": "Black" },
              { "trait_type": "SWAG","value": "Surprised" },
              ],
			  "isavilable": false
              },

              {
                "name": "Chad #0005",
                "description": "Gorgeous Chad 5",
                "image": "https://opensea-prod.appspot.com/puffs/3.png",
                "attributes": [
                { "trait_type": "BACKGROUND", "value": "Black" },
                { "trait_type": "BODY", "value": "Small" },
                { "trait_type": "CHAIN","value": "X" },
                { "trait_type": "EYE","value": "Small" },
                { "trait_type": "HEAD","value": "Big" },
                { "trait_type": "MOUTH","value": "Y" },
                { "trait_type": "SKINTONE","value": "Black" },
                { "trait_type": "SWAG","value": "Surprised" },
                ],
				"isavilable": true
                },
                {
                  "name": "Chad #0006",
                  "description": "Gorgeous Chad 6",
                  "image": "https://opensea-prod.appspot.com/puffs/3.png",
                  "attributes": [
                  { "trait_type": "BACKGROUND", "value": "Green" },
                  { "trait_type": "BODY", "value": "Big" },
                  { "trait_type": "CHAIN","value": "X" },
                  { "trait_type": "EYE","value": "Small" },
                  { "trait_type": "HEAD","value": "Big" },
                  { "trait_type": "MOUTH","value": "Y" },
                  { "trait_type": "SKINTONE","value": "Black" },
                  { "trait_type": "SWAG","value": "Surprised" },
                  ],
				  "isavilable": false
                  }

  ]

  const [chadsList, setChadsList]  = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [itemsPerPage, setItemPerPage] = useState(6);
  const [background, setBackground] = useState();
  const [isClear, setIsClear]   = useState(false);
  

  // useEffect(()=>{

  //   setChadsList(chadsListdata);

  // },[]);


  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setChadsList(chadsListdata.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(chadsListdata.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % chadsListdata.length;
    setItemOffset(newOffset);
  };
  
  const filterBackgroundData = (e) =>{
    if(e!==null){
    const listData= [...chadsListdata];
    const filterData =[];
    //const newListdate= listData.filter(item => item.attributes[].trait_type =="BACKGROUND");
    for(let i=0; i<listData.length; i++){
      let arr = listData[i];
      let filter =  arr.attributes.filter(item => item.trait_type == 'BACKGROUND' && item.value==e.value)
      if(filter.length){
        filterData.push(arr);
      }
    }    
     const endOffset = itemOffset + itemsPerPage;
      setChadsList(filterData.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(filterData.length / itemsPerPage));
  }
  else
  {
    const endOffset = 0 + itemsPerPage;
    setChadsList(chadsListdata.slice(0, endOffset));
    setItemOffset(0)
  }
  }

  const filterBodySize = (e) =>{
    if(e!==null){
    const listData= [...chadsListdata];
    const filterData =[];
    //const newListdate= listData.filter(item => item.attributes[].trait_type =="BACKGROUND");
    for(let i=0; i<listData.length; i++){
      let arr = listData[i];
      let filter =  arr.attributes.filter(item => item.trait_type == 'BODY' && item.value==e.value)
      if(filter.length){
        filterData.push(arr);
      }
    }
      const endOffset = itemOffset + itemsPerPage;
      setChadsList(filterData.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(filterData.length / itemsPerPage));
  }else{
    const endOffset = 0 + itemsPerPage;
    setChadsList(chadsListdata.slice(0, endOffset));
    setItemOffset(0)
  }
}



  return (
    <>
      <SectionFulid>
        <div className="row">
          <div className="col-xl-9">
            <Title className="text-left">CHADSLIST</Title>
            <SubTitle className="text-left">buy and sell gorgeous chads.. buy why would you sell?</SubTitle>
          </div>
          <div className="col-xl-3 mb-4">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <span className="font-Permanent-Marker">FLOOR</span>
              <span className="font-Permanent-Marker">
                <img src={dangerImg} className="mr-3" width="40" alt="danger" />
                1.1
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <span className="font-Permanent-Marker">DAILY</span>
              <span className="font-Permanent-Marker">
                <img src={dangerImg} className="mr-3" width="40" alt="danger" />
                1.1
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <span className="font-Permanent-Marker">TOTAL VOLUME</span>
              <span className="font-Permanent-Marker">
                <img src={dangerImg} className="mr-3" width="40" alt="danger" />
                1.1
              </span>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-xl-9">
            <div className="row">
      {
        chadsList.length > 0 ? 
        chadsList.map((item,i)=>(
		<>
		{
			i == 0 &&
		<div className="col-md-4 col-xl-4 mb-4 chad_list d-xl-none d-block">
      <Title>FILTERS</Title>
             <BackgroundSelect isClear={isClear}  onChangeFunction={(e)=>{filterBackgroundData(e)}}  className="mx-auto" label={'BACKGROUND'} />
             <BodySelect  onChangeFunction={(e)=>{filterBodySize(e)}} className="mx-auto" label={'BODY'} />
             <ChainSelect className="mx-auto" label={'CHAIN'} />
             <EyeSelect className="mx-auto" label={'EYE'} />
             <HeadSelect className="mx-auto" label={'HEAD'} />
             <MouthSelect className="mx-auto" label={'MOUTH'} />
             <SkintoneSelect className="mx-auto" label={'SKINTONE'} />
             <SwagSelect className="mx-auto" label={'SWAG'} />
      </div>
			
		}
       <div key={i+'key'} data={i} className="col-md-4 col-xl-4 mb-4 chad_list">
            <Card>
              <img className="card-image" src={demoImage3} alt="demo" />
              <CardTitle>{item.name}</CardTitle>
              {
                item.attributes.map((attr=>(
                  <div className="d-flex justify-content-between">
                  <span>{attr.trait_type}</span>
                  <span>.....</span>
                  <span>{attr.value}</span>
                </div>
                )))
              }
             
             
			  
			  {
				 item.isavilable ? 
				  <CardBottom>
                <div></div>
                <div className="">
                  <div className="d-flex justify-content-center align-items-center">1.1 <img src={dangerImg} className="ml-2" width="30" alt="danger" /></div>
                  <Button arrow="right">BUY NOW</Button>
                </div>
                <div>Last 1</div>
              </CardBottom>
			  :
			 <CardBottom>
                <div>Not Listed</div>
                <div className="d-flex align-items-center">Last 1 <img src={dangerImg} className="ml-2" width="30" alt="danger" /></div>
              </CardBottom>
			  }
            </Card>
          </div>
		</>
        ))
    
       
        : ''
      }
      </div>
      </div>

      <div className="col-xl-3 mb-4">
	  <div className="d-xl-block d-none">
      <Title>FILTERS</Title>
             <BackgroundSelect  onChangeFunction={(e)=>{filterBackgroundData(e)}}  className="mx-auto" label={'BACKGROUND'} />
             <BodySelect  onChangeFunction={(e)=>{filterBodySize(e)}} className="mx-auto" label={'BODY'} />
             <ChainSelect className="mx-auto" label={'CHAIN'} />
             <EyeSelect className="mx-auto" label={'EYE'} />
             <HeadSelect className="mx-auto" label={'HEAD'} />
             <MouthSelect className="mx-auto" label={'MOUTH'} />
             <SkintoneSelect className="mx-auto" label={'SKINTONE'} />
             <SwagSelect className="mx-auto" label={'SWAG'} />
      </div>
	  </div>
 </div>

{
  chadsList.length>0 ? 

      <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< prev"
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              activeClassName="active"
            />   
          
: ''}     
      </SectionFulid>
    </>
  );
};
export default ChadList;
