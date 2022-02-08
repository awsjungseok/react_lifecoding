import { Component } from 'react';
import './App.css';
import TOC from './Components/TOC'
import ReadContent from './Components/ReadContent'
import CreateContent from './Components/CreateContent'
import UpdateContent from './Components/UpdateContent';
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
      nonSelectedContent : {id : null, title : "NoN", desc : "Non desc"},
      contents : [
        {id : null, title : "HTML", desc :"HTML HTML"},
        {id : null, title : "CSS", desc :"CSS CSS"},
        {id : null, title : "JS", desc : "JS JS"}
      ],
      selected_content_id : null
    }
  }
  getReadContent() {
    return this.state.selected_content_id === null ? this.state.nonSelectedContent : this.state.contents[this.state.selected_content_id]
  }
  getContent() {
    var _title, _desc = null
    var _article = null
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title
      _desc = this.state.welcome.desc
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'read') {
      var _data = this.getReadContent()
      _title = _data.title
      _desc = _data.desc
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
    } else if (this.state.mode === 'update') {
      var _contents = this.state.contents.concat({
        id : this.state.contents.length, 
        title : _title, 
        desc : _desc
      })
      _data = this.getReadContent()
      _article = <UpdateContent data={_data} getSubmitData={function(_title, _desc) {
        this.setState({
          contents : _contents
        })
      }.bind(this)}></UpdateContent>
    }
    return _article
  }
  render() {
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
        }.bind(this)}></TOC>
        <Control onChangeMode={function(_mode){
          this.setState({mode : _mode})
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    )
  }
}

export default App;
