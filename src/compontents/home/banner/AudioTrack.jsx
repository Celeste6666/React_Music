import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class AudioTrack extends Component {
  porpTypes = {
    audioCtx: PropTypes.object.isRequired,
    analyser: PropTypes.object.isRequired,
    musicBarDataArr: PropTypes.array.isRequired,
  }

  state = {
    barWidth: 1,
    barGap: 1,
    canvasCtx: null,
    canvasMainColor: 'rgba(254,83,0,0.9)',
  }

  updataCanvas = () => {
    const { audioCtx, analyser, musicBarDataArr } = this.props;
    const { width, height } = this.canvasRef;
    const { barWidth, barGap, canvasCtx, canvasMainColor } =this.state;
    if(audioCtx!==null){
      analyser.getByteFrequencyData(musicBarDataArr);
      // 清空畫面後再重新出現空畫布
      canvasCtx.clearRect(0, 0, width, height);
      canvasCtx.fillStyle = 'transparent';
      canvasCtx.fillRect(0, 0, width, height);

      // 繪製畫布中的柱狀圖
      /*
      每個柱狀圖的寬 barWidth 間隔 barGap 總共數量 musicBarDataArr.length
      */
      for(let i=0;i<musicBarDataArr.length;i++){
        const x = (barWidth + barGap) * i;
        // 255 : canvasCtx.height/2 =musicBarDataArr[i]:barHeight
        const barHeight = (musicBarDataArr[i] * height/4) /255;
        const y = height/2 - barHeight - 1;
        canvasCtx.fillStyle = canvasMainColor;
        // 上半部分的音頻
        canvasCtx.fillRect(x, y, barWidth, barHeight);
        // 下半部分的音頻
        canvasCtx.fillRect(x, height/2 + 1, barWidth, barHeight);
      }
    }
    this.drawVisual  = requestAnimationFrame(this.updataCanvas)
  }

  componentDidMount(){
    this.setState(
      {canvasCtx: this.canvasRef.getContext("2d")},
      ()=>{
      this.updataCanvas()
    })
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.drawVisual)
  }

  render() {
    return (
      <Fragment>
        <small>5 months # bass</small>
        <h3  className="my-4">Run The Bass Vol 22</h3>
        <div className="track ">
          <canvas style={{height: '100%', width: '100%'}} ref={canvas => this.canvasRef = canvas}></canvas>
          <div className="track-time d-flex justify-content-center"></div>
        </div>
      </Fragment>
    )
  }
}
