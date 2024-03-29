import React, { Component } from 'react';
import TOC from "./components/TOC"
import Subject from "./components/Subject"
import CreateContent from "./components/CreateContent"
import ReadContent from "./components/ReadContent"
import UpdateContent from './components/UpdateContent';
import Control from "./components/Control"
import './App.css';



class App extends Component {
  
  // step 1 : Add constructor 
  constructor(props) {
    super(props)
    this.max_content_id = 3; //state.contents 배열에 있는 id값 중 가장 큰 값과 같아야 함
    this.state = {
      mode: 'welcome',
      selected_content_id : 1,
      subject:{title : 'WEB', sub: 'World Wide Web!'},
      welcome: {title:'Welcome!', desc:'Hello, React'},
      contents: [
        {id : 1, title:'HTML', desc:'HTML is for information'},
        {id : 2, title:'CSS', desc:'Css is for design'},
        {id : 3, title:'Javascript', desc:'Javascript is interactive'}

      ]
      
    }
  }


  getReadContent() {
    let i = 0;
    while(i < this.state.contents.length) {
      let data = this.state.contents[i];
      console.log('data', data);
      console.log(data.id)
      console.log(this.state.selected_content_id)
      if(data.id === this.state.selected_content_id) {
        return data;
      }
      i = i + 1;
    }
  }

  getContent() {
    let _title, _desc, _article = null;
    if(this.state.mode === 'welcome') {
      console.log('if')
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'read') {
      let _content = this.getReadContent();
      console.log("######", _content)
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    } else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc) {
        this.max_content_id = this.max_content_id + 1;
        let _contents = this.state.contents.concat(
          {id : this.max_content_id, title:_title, desc: _desc}
        );
        this.setState({
          contents: _contents
        });
        console.log(_title, _desc)
      }.bind(this)}></CreateContent>
    } else if (this.state.mode === 'update') {

      let _content = this.getReadContent();
      
      _article = <UpdateContent data={_content} onSubmit={
        function(_id, _title, _desc){
          
          let _contents = Array.from(this.state.contents);
          let i = 0;
          while(i < _contents.length) {
            if(_contents[i].id === _id) {
              _contents[i] = {id:_id, title:_title, desc:_desc};
              break;
            }
            i++
          }
        // this.max_content_id = this.max_content_id+1;
      
        // let _contents = this.state.contents.concat(
      
        //   {id : this.max_content_id, title:_title, desc: _desc}
      
        //   );
        this.setState({
      
          contents: _contents
      
        });
      }.bind(this)}>

      </UpdateContent>
    }
    return _article;
  }

  render () {

    console.log('App render');
    console.log("render", this)


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
               console.log("here??")
              this.setState({
                mode: 'read',
               selected_content_id:Number(id)
              })
              }.bind(this)}
        data={this.state.contents}>
<<<<<<< HEAD
        <Control onChangeMode={function(_mode) {
            console.log("where is????")
            this.setState({
              mode:_mode
            })
          }.bind(this)}></Control>
=======
>>>>>>> f8b1bdba0c9c9d1959c99a864a1852ae7202b645
        </TOC>
        <Control onChangeMode={function(_mode) {
          this.setState({
            mode:_mode
          });
        }.bind(this)}></Control>
        {this.getContent()}
    </div>

    )
  }
}

export default App;
