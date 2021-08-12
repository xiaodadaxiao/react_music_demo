import styled from "styled-components";
export const HeaderWrapper = styled.div`
  width: auto;
  height: 35px;
  background-position: -225px -156px;
  padding: 0 10px 4px 34px;
  border-bottom: 2px solid #c10d0c;
  line-height: 35px;

  display: flex;
  justify-content: space-between;

  .left {
    display: flex;

    .title {
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      font-size: 20px;
      color: #333;
      margin-right: 20px;
    }
    .keyword {
      display: flex;

      .item {
        margin-right: 15px;
        .divider {
          margin-left: 15px;
          color: #ccc;
        }
      }
    }
  }

  .right {
    .icon {
      display: inline-block;
      background-position: 0 -240px;
      width: 12px;
      height: 12px;
      margin-left: 4px;
    }
  }
`;