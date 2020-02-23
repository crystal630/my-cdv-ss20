let data=[

      {
          "timestamp": "2020-02-19T12:24:54.669Z",
          "Your Name (JapaneseMovie)": 4,
          "Coco": 3,
          "Zootopia": 7,
          "Frozen": 6,
          "How To Train Your Dragon": 5,
          "KungFu Panda": 1,
          "Despicable Me": 4
      },
      {
          "timestamp": "2020-02-19T12:24:56.054Z",
          "yourNameJapaneseMovie": 5,
          "coco": 7,
          "zootopia": 7,
          "frozen": 7,
          "howToTrainYourDragon": 6,
          "kungFuPanda": 6,
          "despicableMe": 6
      },
      {
          "timestamp": "2020-02-19T12:29:56.784Z",
          "yourNameJapaneseMovie": 4,
          "coco": 7,
          "zootopia": 7,
          "frozen": 7,
          "howToTrainYourDragon": 7,
          "kungFuPanda": 6,
          "despicableMe": 6
      },
      {
          "timestamp": "2020-02-19T12:30:04.177Z",
          "yourNameJapaneseMovie": 4,
          "zootopia": 7,
          "frozen": 7,
          "howToTrainYourDragon": 7,
          "kungFuPanda": 5,
          "despicableMe": 5
      },
      {
          "timestamp": "2020-02-19T12:37:44.168Z",
          "yourNameJapaneseMovie": 6,
          "coco": 7,
          "zootopia": 6,
          "frozen": 4,
          "howToTrainYourDragon": 4,
          "kungFuPanda": 5,
          "despicableMe": 5
      },
      {
          "timestamp": "2020-02-19T12:38:00.403Z",
          "yourNameJapaneseMovie": 6,
          "coco": 5,
          "zootopia": 5,
          "frozen": 6,
          "howToTrainYourDragon": 5,
          "kungFuPanda": 5,
          "despicableMe": 5
      },
      {
          "timestamp": "2020-02-19T12:44:02.354Z",
          "yourNameJapaneseMovie": 5,
          "coco": 7,
          "zootopia": 6,
          "frozen": 5,
          "kungFuPanda": 7,
          "despicableMe": 7
      },
      {
          "timestamp": "2020-02-19T12:46:46.581Z",
          "frozen": 5,
          "howToTrainYourDragon": 6,
          "kungFuPanda": 5,
          "despicableMe": 5
      },
      {
          "timestamp": "2020-02-19T12:50:01.528Z",
          "yourNameJapaneseMovie": 4,
          "coco": 5,
          "zootopia": 6,
          "frozen": 6,
          "howToTrainYourDragon": 5,
          "kungFuPanda": 5,
          "despicableMe": 7
      },
      {
          "timestamp": "2020-02-19T12:53:00.905Z",
          "yourNameJapaneseMovie": 7,
          "zootopia": 7,
          "frozen": 7,
          "howToTrainYourDragon": 7,
          "kungFuPanda": 3,
          "despicableMe": 6
      },
      {
          "timestamp": "2020-02-19T12:53:31.037Z",
          "yourNameJapaneseMovie": 4,
          "coco": 5,
          "zootopia": 4,
          "frozen": 3,
          "howToTrainYourDragon": 3,
          "kungFuPanda": 3,
          "despicableMe": 5
      }

]
function averageData(data){
  let newData=[]
  let keys=Object.keys(data[0])
  for (i=0;i<keys.length;i++){
    let key=keys[i]
    let sum=0;
    let num=0;
    for (j=0;j<data.length;j++){
      let datum=data[j];
      if(key in datum){
        sum+=datum[key]
        num++
      }
    }
  let avg=sum/num
  if(!isNaN(avg))  {
    let newDataPoint={"name": key,"average":avg,"numMeasurements":num};
    newData.push(newDataPoint);
  }

  }
  return newData;

}
let transformedData=averageData(data)
for (let i=0; i<transformedData.length;i++){
  let datapoint=transformedData[i];
  console.log(datapoint)
  let bar=document.createElement('div');
  bar.className='bar'
  bar.style.width=datapoint.average*90+'px'
  bar.innerHTML=datapoint.name
  document.getElementById('viz').appendChild(bar);
}
