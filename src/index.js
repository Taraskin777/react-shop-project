import React from 'react'
import ReactDom from 'react-dom'

const Header = () => {
    return <h1>Hello App component</h1>
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
            <Header />
            <Text />
        </>
    )
}

ReactDom.render(<App />, document.getElementById('root'))
