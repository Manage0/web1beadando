import ReactAudioPlayer from 'react-audio-player';
import soundfile from"./catpurr.mp3"

const CatPurr=()=>{
    return(
        <div>
            <h2>
                Here you can hear a cat purr!
            </h2>
            <br/>
        <ReactAudioPlayer
            src={soundfile}
            controls
        />
        </div>
    )
}
export default CatPurr