import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import audio from './music.mp3';

class Audioplayer extends Component {
  state={isPlaying: false}

  async componentDidMount(){
    const {getAudioCtx} = this.props
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioCtx.createMediaElementSource(this.audioRef);
    // 创建一个 AnalyserNode
    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 2048;
    const musicBarDataArr = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(musicBarDataArr);
    // source 使用分析器並透過輸出設備輸出聲音
    source.connect(analyser).connect(audioCtx.destination)
    getAudioCtx(audioCtx, analyser, musicBarDataArr);
  }

  toggleAudio= async ()=>{
    const { isPlaying } =this.state;
    const {audioCtx} = this.props;
    if(audioCtx.state === 'suspended'){
      // 如果音頻是暫停的，就恢復到之前暫停的地方
      await audioCtx.resume();
      // 從恢復的時間進程再重新開始撥放
      await this.audioRef.play()
    }else if(audioCtx.state === 'running'){
      // 如果音頻是運行的，就暫停在目前的時間進程
      await audioCtx.suspend();
      // 在目前的時間進程暫停音頻
      await this.audioRef.pause();
    }
    this.setState({isPlaying: !isPlaying});
  }

  render() {
    const { isPlaying } =this.state
    return (
      <div className="player rounded-circle bg-white shadow-sm
      d-flex justify-content-center align-items-center"
      >
        <audio src={audio} ref={audio=>this.audioRef = audio}></audio>
        <button
        onClick={()=>{this.toggleAudio()}}
        className="player-inside bg-warning rounded-circle border border-5 shadow
        d-flex justify-content-center align-items-center"
        >
          <FontAwesomeIcon icon={`fa-solid ${isPlaying? 'fa-pause':'fa-play'}`} size="4x" className="text-white" />
        </button>
      </div>
      
    );
  }
}

export default Audioplayer;
