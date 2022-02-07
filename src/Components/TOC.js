import { Component } from "react";

class TOC extends Component {
    shouldComponentUpdate(newProps, newState) {
        return (JSON.stringify(this.props.data) != JSON.stringify(newProps.data))
    }
    render() {
        var lists = []
        var data = this.props.data
        for(let i=0; i<data.length; i++) {
            data[i].id = i
            lists.push(
                <li key={data[i].id}>
                    <a href={"/content/" + data[i].id} data-id={data[i].id} onClick={function(e) {
                        this.props.onChangePage(data[i].id)
                        e.preventDefault()
                    }.bind(this)}>
                        {data[i].title}
                    </a>
                </li>
            )
        }
        return(
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        )
    }
}

export default TOC