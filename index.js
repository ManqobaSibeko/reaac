const reactContentRoot = document.getElementById("roots");
// create react elements 



//  1 takes to argument first the content that we want to display to the screen
// ReactDOM.render('helloW', reactContentRoot)
// ReactDOM.render(myfirstElement, reactContentRoot)

// =-----------------------------------------------------------------------------------
// 2 the name of the element tag you want to , Props and the content you
// const myfirstElement = React.createElement('li',null,'items')
// ReactDOM.render(myfirstElement, reactContentRoot)


// =-----------------------------------------------------------------------------------

// 3 const myfirstElement = React.createElement('ul',null,[
//     React.createElement('li',null,'1 items'), React.createElement('li',null,'2 items')]
//    )
// ReactDOM.render(myfirstElement, reactContentRoot)

// =-----------------------------------------------------------------------------------


// 4 const myJSXElement = (
//     <ul>
//         <li>home</li>
//         <li>about us</li>
//         <li></li>
//         <li></li>
//     </ul>
//     )

// ReactDOM.render(myJSXElement, reactContentRoot);

// =-----------------------------------------------------------------------------------

const myItem = 'services'

const mylist = (
    <ul>
        <li>home</li>
        <li>about us</li>
        <li>{myItem.toUpperCase()}</li>
        <li></li>
    </ul>   
)

ReactDOM.render(mylist,reactContentRoot)