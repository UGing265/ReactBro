import Header from './Header.jsx'
import Food from './Food.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import List from './List.jsx'

function App() {
  const fruits = [{id:1,name:"apple",cali:99},
                    {id:2,name:"orange",cali:34},
                    {id:3,name:"banana",cali:194},
                    {id:4,name:"coconut",cali:534},
                    {id:5,name:"pineapple",cali:45}]

  const vegetables = [{id:1,name:"potatoes",cali:9},
                      {id:2,name:"celery",cali:34},
                      {id:3,name:"carrots",cali:53},
                      {id:4,name:"corn",cali:4},
                      {id:5,name:"broccoli",cali:33}]

    
  return(
    
    <>
      <Header/>
      <List items={fruits} category="Fruits"/>
      <List items={vegetables} category="vegetables"/>
      {/* <Card/> */}

      <Footer/>
      
    </>
  );

}

export default App



/*
  <>
   // <Button />
      //<Card />
      //<Card />
   <Header /> 
    <Food />
    <Footer />
  </>
 */


  /*
      <Student name="Shikano" age={30} isStudent={true}/>
      <Student name="Kotori" age={15} isStudent={true}/>
      <Student name="shido" age={16} isStudent={true}/>
      <Student name="Tohka" age={16} isStudent={true}/>
      <Student />   from Student
      */