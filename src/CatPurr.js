import ReactAudioPlayer from 'react-audio-player';
import soundfile from"./catpurr.mp3"
import "./catpurr.css"

const CatPurr=()=>{
    return(
        <div><div className="styleddiv">
            <b>
                Here you can hear a cat purr!
            </b>
            </div>
            <br/>
        <div>
        <ReactAudioPlayer
            src={soundfile}
            controls
        />
        </div>
        </div>
        
    )
}
export default CatPurr