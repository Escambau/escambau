import styled from "styled-components";

const Card = styled.button`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: white;
  border: 2px solid var(--lightGrey);

  padding: 5px 10px 5px 0px;

  & > div{
    flex-direction: row;

    & > div {
      height: 70px;
      justify-content: space-around;
      width: 100%;
  
      overflow: hidden;
      white-space: nowrap;
      text-align: start;
      text-overflow: ellipsis;
    }
  }

  & > section{
    width: auto;
    align-items: flex-end;
    .edit-delete{
      width: 65%;

      padding: 2px 25px;
      margin-bottom: 5px;
    }

    .edit{
      background-color: var(--mediumGrey);
      border: var(--mediumGrey);

      :hover{
        background-color: var(--grey);
      }
    }
    .delete{
      background-color: var(--mediumOrange);
      border: var(--mediumOrange);

      :hover{
        background-color: var(--orange);
      }
    }
    .infoPlus{
      display: flex;
      align-items: center;
      
      background-color: transparent;
      color: var(--black);
      
      border: none;
      padding: 0px;

      .iconInfo{
        font-size: 20px;
      }
    }
  }

  @media (min-width: 764px){
    & > div{
      width: 50%;
    }
  }
`;

export default Card;