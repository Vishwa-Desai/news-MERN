import "./feed.css";
import { FavoriteBorder, Comment, Share, Report,InsertPhoto} from '@material-ui/icons'
export default function Feed() {
    return (
        <div className="main">
            <div className="newPost">
                <div className="top">
                    <div className="profile"> <img src="/assets/person/1.jpg" alt="logo" align="left" className="profileImg" />
                    <textarea className="input"  type="text" placeholder="What's Happening!!!"></textarea>
                        </div>    
                </div>
                <div className="buttons">
                    <label for="img" id="img1">
                        <InsertPhoto></InsertPhoto>
                    </label>
                    <input type="file" id="img" className="image"></input>
                    <button className="post">Post</button>

                </div>
            </div>
            <div className="feed">
                <div className="container">
                    <div className="top">
                        <div className="profile"> <img src="/assets/person/1.jpg" alt="logo" align="left" className="profileImg" />
                        <span className="profileName"> Ban Awad</span><br />
                        <span className="time">8 months ago </span>
                        </div>
                            
                    </div>
                    <div className="caption">
                        Natural language processing (NLP) is an area of artificial intelligence related to the processing of natural languages by computers.
                        <div className="link">
                            Link To The Article: <br /><a href="https://techibytes.com/finally-android-11-beta-is-here/">https://techibytes.com/finally-android-11-beta-is-here/</a>
                        </div>
                    </div>
                    <div className="img">
                        <img src="/assets/1.png" alt="image" />
                    </div>
                    <div className="icons">
                        <div className="icon"><FavoriteBorder className="icon1"></FavoriteBorder></div>
                        <div className="icon"><Comment className="icon1"></Comment></div>
                        <div className="icon"><Share className="icon1"></Share></div>
                        <div className="icon"><Report className="icon1"></Report></div>
                    </div>

                </div>
            </div>
        </div>
    )
}
