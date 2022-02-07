import { Component } from 'react';
import './App.css';
import TOC from './Components/TOC'
import ReadContent from './Components/ReadContent'
import CreateContent from './Components/CreateContent'
import Subject from './Components/Subject'
import Control from './Components/Control'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode : 'welcome',
      welcome : { title : 'Welcome', desc : 'Hi!' },
      subject : {
        title : 'WEB',
        sub : 'World Wide Web!'
      },
      contents : [
        {id : null, title : "HTML", desc :"HTML HTML"},
        {id : null, title : "CSS", desc :"CSS CSS"},
        {id : null, title : "JS", desc : "JS JS"}
      ],
      selected_content_id : null
    }
  }
  render() {
    var _title, _desc = null
    var _article = null
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title
      _desc = this.state.welcome.desc
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'read') {
      for(let i = 0; i < this.state.contents.length; i++) {
        if(this.state.contents[i].id === this.state.selected_content_id) {
          _title = this.state.contents[i].title
          _desc = this.state.contents[i].desc
        }
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'create') {
      _article = <CreateContent getSubmitData={function(_title, _desc) {
        var _contents = this.state.contents.concat({
          id : this.state.contents.length, 
          title : _title, 
          desc : _desc
        })
        this.setState({
          contents : _contents
        })
      }.bind(this)}></CreateContent>
    }
    return (
      <div className="App">
        <Subject title={this.state.subject.title} onChangePage={function() {
          this.setState({mode:'welcome'})
        }.bind(this)}>{this.state.subject.sub}</Subject>
        <TOC data={this.state.contents} onChangePage={function(id) {
          this.setState({
            mode:'read',
            selected_content_id : id
          })
          console.log(this.state.selected_content_id)
        }.bind(this)}></TOC>
        <Control onChangeMode={function(_mode){
          this.setState({mode : _mode})
        }.bind(this)}></Control>
        {_article}
      </div>
    )
  }
}

export default App;
