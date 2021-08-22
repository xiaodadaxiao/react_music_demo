import styled from "styled-components";

import spriteIcon from '@assets/img/sprite_icon.png'
import progressBar from '@assets/img/progress_bar.png'
export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;
  width: 100%;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 47px;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }
`;

// 播放按钮
export const Control = styled.div`
  button{
    cursor:pointer;
  }
  .prev,
  .next {
    width: 28px;
    height: 28px;
    margin-right: 8px;
    transform: translateY(-10%);
  }

  .prev {
    background-position: 0 -130px;

    &:hover {
      background-position: -30px -130px;
    }
  }

  .play {
    width: 36px;
    height: 36px;
    margin-top: 5px;
    margin-right: 8px;
    background-position: 0 ${(props) => (props.isPlay ? "-165px" : "-204px")};

    &:hover {
      background-position: ${(props) => (props.isPlay ? "-40px" : "-40px")}
        ${(props) => (props.isPlay ? "-165px" : "-204px")};
    }
  }

  .next {
    background-position: -80px -130px;

    &:hover {
      background-position: -110px -130px;
    }
  }
`;

// 播放信息、进度条
export const PlayInfo = styled.div`
  position: relative;
  display: flex;
  width: 608px;

  .image {
    margin: 5px 15px 0 0;
  }

  .info {
    display: flex;
    flex-direction: column;
    width: 608px;

    .song {
      height: 28px;
      display: flex;
      line-height: 28px;

      .song-name {
        color: #e8e8e8;
        max-width: 300px;
        margin-right: 15px;
      }

      .singer-name {
        max-width: 220px;
        /* margin-left: 15px; */
        color: #9b9b9b;
      }
    }

    .progress {
      display: flex;

      .slider {
        width: 493px;
        height: 9px;
        margin: 0;
        margin-right: 5px;
      }
      /* 修改antd 的slider 样式 */
      .ant-slider{
        width: 493px;
        margin-right: 10px;
        .ant-slider-rail{
          height: 9px;
          background: url(${progressBar})right 0;
        }
        .ant-slider-track{
          height: 9px;
          background: url(${progressBar})left -66px;
        }
        .ant-slider-handle{
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          /* background: url("@assets/img/sprite_icon.png")0 -250px; */
          background: url(${spriteIcon})0 -250px;
        }
      }
      .time {
        height: 16px;
        line-height: 16px;
        transform: translateY(-25%);

        .now-time {
          color: #a1a1a1;
        }
        .divider,
        .duration {
          color: #797979;
        }
      }
    }
  }
`;

// 功能按钮
export const Operator = styled.div`
  height: 36px;
  display: flex;

  .btn {
    width: 25px;
    height: 25px;
    margin: 8px 2px 0 0;
  }

  .left {
    display: flex;
    width: 60px;

    /* 收藏按钮 */
    .favor {
      background-position: -88px -163px;

      &:hover {
        background-position: -88px -189px;
      }
    }
    /* 分享按钮 */
    .share {
      background-position: -114px -163px;

      &:hover {
        background-position: -114px -190px;
      }
    }
  }

  .right {
    width: 126px;
    display: flex;

    .volume {
      position: absolute;
      width: 32px;
      height: 113px;
      top: -110px;
      background-position: 0 -503px;

      .slider {
        position: relative;
        width: 4px;
        height: 93px;
        padding: 4px 0;
        top: 7px;

        /* 进度条背景 */
        .ant-slider-track {
          background-color: #c70c0c;
        }
        /* 进度条柄 */
        .ant-slider-handle {
          width: 18px;
          height: 20px;
          background: url(${spriteIcon});
          background-position: -40px -250px;
          border: none;
          margin-left: -7px;
        }
      }
    }

    .icon-volume {
      background-position: -2px -248px;

      &:hover {
        background-position: -31px -248px;
      }
    }

    /* 循环 */
    .icon-loop {
      /* background-position: -3px -344px; */
      background-position: ${(props) => {
    switch (props.playMode) {
      case 0:
        // 循环播放
        return "-3px -344px";
      case 1:
        // 随机播放
        return "-66px -248px";
      case 2:
        // 单曲播放
        return "-66px -344px";
      default:
        // 默认循环播放
        return "-3px -344px";
    }
  }};

      &:hover {
        /* background-position: -33px -344px; */
        background-position: ${(props) => {
    switch (props.playMode) {
      case 0:
        // 循环播放
        return "-33px -344px";
      case 1:
        // 随机播放
        return "-93px -248px;";
      case 2:
        // 单曲播放
        return "-93px -344px;";
      default:
        // 默认循环播放
        return "-33px -344px";
    }
  }};
      }
    }

    .icon-playlist {
      background-position: -42px -68px;
      width: 59px;
      padding-left: 21px;
      line-height: 23px;
      text-align: center;
      color: #666;

      &:hover {
        background-position: -42px -98px;
      }
    }
  }
`;