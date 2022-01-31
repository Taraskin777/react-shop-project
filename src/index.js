import React from 'react'
import ReactDom from 'react-dom'

const Header = (props) => {
   return <h1>
     {props.id} Hello {props.title}
   </h1>
}

const Text = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ab
                aspernatur earum aliquam commodi, maiores doloribus. Officia
                iste minima facilis labore dolore error odit impedit. Iusto
                veniam molestiae corporis animi!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ab
                aspernatur earum aliquam commodi, maiores doloribus. Officia
                iste minima facilis labore dolore error odit impedit. Iusto
                veniam molestiae corporis animi!
            </p>
        </>
    )
}

const App = () => {
    return (
        <>
            <Header title="React" id={1} />
          <Text title="App.js" id={2}/>
            <Text />
        </>
    )
}

ReactDom.render(<App />, document.getElementById('root'))
