const App = (props) => {
    const [showContent,setshowContent]=React.useState(false)
    const toggleContent = () => showContent ? setshowContent(false) : setshowContent(true)

    return <div>
        <button onClick={()=>toggleContent()} className="post_user">{props.username}</button>
        <div className={showContent ? "post": "post--collapse"} dangerouslySetInnerHTML={{__html:props.html}}></div>
        <a href={"/posts/"+props.postid}>Go</a>
    </div>
}

const domContainer = document.getElementsByClassName('postitem');

for (let i = 0; i < domContainer.length; i++) {
    let val = {
        username:domContainer[i].getAttribute("user-name"),
        postid:domContainer[i].getAttribute("post-id"),
        html:domContainer[i].innerHTML
    }
    ReactDOM.render(React.createElement(App,val), domContainer[i])
}
