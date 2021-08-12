import styled from "styled-components";
import download from '@assets/img/download.png';
import banner_sprite from '@assets/img/banner_sprite.png'
export const BannerWrapper = styled.div`
/* 拼接背景图片 （背景图片设置?imageView&blur=40x20 请求参数将得到服务器传来的模糊的图片） */
  background: url(${(props) => props.bgImage + "?imageView&blur=40x20"}) center
    center/6000px;
  .banner {
    position: relative;
    display: flex;

    height: 285px;
  }
`;

export const BannerLeft = styled.div`
  width: 730px;

  .image {
    width: 730px;
    height: 285px;
  }
`;

export const BannerRight = styled.div`
  height: 285px;

  .download {
    display: inline-block;
    width: 254px;
    height: 285px; 
    background: url(${download});
    .btn-down {
    display: inline - block;
    width: 215px;
    height: 56px;
    margin: 185px 0 0 19px;
    background-position: 0 9999px;
      &:hover {
        background: url(${download});
        background-position: 0 - 289px;
    }
}

p {
    text-align: center;
    color: #8d8d8d;
}
  }
`;

export const BannerControl = styled.div`
position: absolute;
left: 0;
right: 0;
top: 50%;
transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${banner_sprite});
    background-color: transparent;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
}

  .left {
    left:-68px;
    background-position: 0 -360px;
}

  .right {
    right: -68px;
    background-position: 0 -508px;
}
`;