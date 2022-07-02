import React, { Component } from 'react';
import TOC from "./components/TOC"
import Subject from "./components/Subject"
import Content from "./components/Content"
import Control from "./components/Control"
import './App.css';



class App extends Component {
  
  // step 1 : Add constructor 
  constructor(props) {
    super(props)
    this.state = {
      mode: 'welcome',
      selected_content_id : 2,
      subject:{title : 'WEB', sub: 'World Wide Web!'},
      welcome: {title:'Welcome!', desc:'Hello, React'},
      contents: [
        {id : 1, title:'HTML', desc:'HTML is for information'},
        {id : 2, title:'CSS', desc:'Css is for design'},
        {id : 3, title:'Javascript', desc:'Javascript is interactive'}

      ]
      
    }
  }

  render () {

    console.log('App render');
    var _title, _desc = null;
    if(this.state.mode === 'welcome') {
      console.log('if')
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      console.log("else if")
      _title = this.state.contents[0].title
      _desc = this.state.contents[0].desc
    }


    return (
    <div className="App">
     <Subject title={this.state.subject.title} 
      sub={this.state.subject.sub}
      onChangePage={function() {
        this.setState({mode: 'welcome'})
      }.bind(this)}>
        </Subject> 
      <TOC 
            onChangePage={function(id){
              this.setState({
                mode: 'read',
               selected_content_id:Number(id)
              })
              }.bind(this)}
        data={this.state.contents}>
          <Control></Control>
        </TOC>
      <Content title={_title} desc={_desc}></Content>
    </div>

    )
  }
}

export default App;
