import PropsTypes from 'prop-types';
function List(props){
    // const fruits = ["apple","orange","banana","coconut","pineapple"]
    // const fruits = [{id:1,name:"apple",cali:99},
    //                 {id:2,name:"orange",cali:34},
    //                 {id:3,name:"banana",cali:194},
    //                 {id:4,name:"coconut",cali:534},
    //                 {id:5,name:"pineapple",cali:45}]

    // const vegetables = ["potatoes","celery","carrots","corn","broccoli"]
    
    
    // fruits.sort((a,b) => a.name.localeCompare(b.name));
    // fruits.sort((a,b) => b.name.localeCompare(a.name));
    // fruits.sort((a,b) => a.cali - b.cali);
    // fruits.sort((a,b) => b.cali - a.cali);


    //use filter (instead name fruit to fruitFilter if use filter)
    //const fruitFilter = fruits.filter(fruit => fruit.cali < 100);


    const FruitsList = props.items;

    const itemFruit = FruitsList.map(fruit => <li key={fruit.id}>Name:{fruit.name}&nbsp;{fruit.cali}</li>)

    return( 
        <>
        <h3 className="category-list">{props.category}</h3>
        <ol className="items-list">{itemFruit}</ol> 
        </>
        );

}

List.propTypes = {
    category: PropsTypes.string,
    items: PropsTypes.arrayOf(PropsTypes.shape({
                                                id: PropsTypes.number,
                                                name: PropsTypes.string,
                                                cali: PropsTypes.number
    })),

}

List.defaultProps = {
    category: "Category",
    items: [],
}

export default List