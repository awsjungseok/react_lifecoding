import { Component } from "react"

class UpdateContent extends Component {
    render() {
      console.log(this.props)
      return (
        <article>
          <h2>Update</h2>
            <form action="/create_process" method="post" onSubmit={function(e) {
              e.preventDefault()
              this.props.getSubmitData(
                e.target.title.value,
                e.target.desc.value
              )
              alert("Submit!!!")
            }.bind(this)}>
              <p>
                <input type="text" name="title" placeholder="title" value={this.props.data.title}></input>
              </p>
              <p>
                <textarea name="desc" placeholder="description"></textarea>
              </p>
              <p>
                <input type="submit"></input>
              </p>
            </form>
        </article>
      )
    }
}

export default UpdateContent