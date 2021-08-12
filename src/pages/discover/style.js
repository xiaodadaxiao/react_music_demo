import styled from "styled-components";
/* 发现界面 */
export const Wrapper = styled.div`
    /* background-color: #C20C0C; */
`
/* 菜单栏 */
export const Mentu = styled.div`
    background-color: #C20C0C;
    .center{
    display: flex;
    align-items: center;
    padding-left: 122px;
    background-color: #C20C0C;
    }
    .item{
        line-height: 30px; 
        a{
            color: #fff;
            display: inline-block;
            text-decoration:none;
            padding: 0 13px;
            margin: 5px 17px 0;
            line-height: 20px;
            /* 选中和悬浮 */
            &:hover,&.active {
                background-color: #9b0909;
                border-radius: 20px;
            }
        }
    }
`