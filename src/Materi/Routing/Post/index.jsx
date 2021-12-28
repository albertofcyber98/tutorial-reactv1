import { useParams } from "react-router-dom";
const Post = () => {
    const {id} = useParams()
    return(
        <div className="main">
            <h4>Post ke-{id}</h4>
            <p>Deskripsi</p>
        </div>
    )
}

export default Post;