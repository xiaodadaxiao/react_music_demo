import styled from "styled-components";

export const Wrapper = styled.div`
  .content {
    background: url(${require("@/assets/img/wrap-bg.png")}) repeat-y;
    background-color: #fff;
    display: flex;
  }
`;

export const Left = styled.div`
  width: 710px;
  padding: 47px 30px 40px 39px;
`;
export const Right = styled.div`
  width: 270px;
  padding: 20px 40px 40px 30px;
`;