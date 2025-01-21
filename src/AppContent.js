import React, { Component} from "react";

export default class AppContent extends Component {

    constructor(props) {
        super(props);
        this.handlePostChange = this.handlePostChange.bind(this);
    }

    handlePostChange(posts) {
        this.props.handlePostChange(posts);
    }

    state = {posts: []};

    // anotherFunction = () => {
    //     console.log('another function');
    // }

    // thisIsAnotherFunction = () => {
    //     console.log('this is another function');
    // }


    fetchList = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                this.setState({posts: json});
                this.handlePostChange(json);    
                // console.log(json);
                // let posts = document.getElementById('post-list');
                // json.forEach(function(obj){
                //     let li = document.createElement('li');
                //     li.appendChild(document.createTextNode(obj.title))
                //     posts.appendChild(li);
                })
            }

    clickedItem = (x) => {
        console.log("clicked", x);
    }
    

    render() {
        return (
        <div>This is a paragraph classic.
            
            <br />
            <br />
                
        <button onClick={this.fetchList} className="btn btn-primary">Fetch Data</button>   
        
        <hr />

        <p>The posts number are {this.state.posts.length}.</p>
        
        <ul>
            {this.state.posts.map((c) => (
                <li key={c.id}>
                    <a href="#!" onClick={() => this.clickedItem(c.id)}>
                        {c.title}
                    </a>
                </li>
            ) )}
        </ul>
        
        </div>
        );
    }
}