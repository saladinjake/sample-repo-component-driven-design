import Base from "../Base/Base";
import Flex from "../Flex/Flex";
import styled, { css } from "styled-components";
import MediaScreenBuilder, {
  screenDeviceManager,
} from "../../utilities/pixelScreenBuilder";

const widthBlock = (cssString) => css`
  ${cssString}
`;
export const HorizontalScroller = styled(Base)<{
  currentScreen?: string;
}>`
  & div::-webkit-scrollbar {
    display: none;
  }
  ${({ currentScreen }) => {
    switch (currentScreen) {
      case "xs":
      case "sm":
      // return widthBlock(`
      //     position: relative;
      //     height: auto;
      //     padding: 10px;
      //     margin: 1em auto;
      //     border: 1px solid #eaeaea;
      //     overflow-x: initial;
      //     overflow-y: initial;`)
      case "tab":
      case "tabPortrait":
      case "md":
      case "lg":
      case "xl":
      case "2xl":
        return widthBlock(`
            position: relative;
            height: auto;
            padding: 5px;
            margin: 1em auto;
            border: 1px solid #eaeaea;
            overflow-x: hidden;
            overflow-y: hidden;




            `);

      default:
        return widthBlock(``);
    }
  }}

  .innerFilter {
    display: flex;

    ${({ currentScreen }) => {
      switch (currentScreen) {
        case "xs":
        case "sm":
        // return widthBlock(`
        //    flex-direction:column;
        //    text-align: left;
        //    word-spacing: normal;
        //    z-index: 9000000;
        //    gap: 15px 15px;
        // `)
        case "tab":
        case "tabPortrait":
        case "md":
        case "lg":
        case "xl":
        case "2xl":
          return widthBlock(`
            flex-direction: row;
            justify-content: flex-start;
            box-sizing: border-box;
            white-space: nowrap;
            overflow-x: auto;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
            width: 100%;
            height: auto;
            max-height: 140px;
            padding: 1px;
            margin-bottom: 2px;
            margin-top: 7px;
            position: relative;
          `);
        default:
          return widthBlock(``);
      }
    }}
  }

  /*css magic trick
     &:has(> :nth-child(X)){
          // x or more elements...
     }
     &:has(> :last-child:nth-child(-n + X)){
          // between 1 and X or more elements...
     }
     &:has(> :last-child:nth-child(-n + X)){
          // between 1 and X or more elements...
     }
     &:has(> :nth-last-child(X):nth-child(-n (Y-X +1))){
          // between X and Y or more elements...
     }
     &not(:has(*)){
       // div no children
     }
     

     & div:nth-child(n+ 2){
        padding-right: 20px;
     }

      & div:nth-child(n+ 2)  {
       
        &:nth-child(n+ 2){
          background-color: red;
        }
     }*/

  /*.innerFilter div {
    margin-right: 20px;
  }*/

  .displayBoard {
    display: none;
  }

  #displayToggler {
    display: flex;
    justify-content: flex-end;

    z-index: 99999999;
    margin-top: 3px;
    width: 100%;
    margin-bottom: 10px;
    padding-right: 20px;
  }
`;

export const ScrollArrows = styled.div<{ currentScreen?: string }>`
  .arrows {
    position: absolute;

    bottom: 0;
    z-index: 99999999;

    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fafafa;
    box-shadow: 2px 2px 2px #eaeaea;
    padding: 10px;
    top: 17%;

    ${({ currentScreen }) => {
      switch (currentScreen) {
        case "xs":
        case "sm":
        // return widthBlock(`
        // display: none`)
        case "tab":
        case "tabPortrait":
        case "md":
        case "lg":
        case "xl":
        case "2xl":
          return widthBlock(`
            display: inline-block`);

        default:
          return widthBlock(`
            display: inline-block`);
      }
    }}
  }

  .leftArrow {
    left: 0;
    transition: transform 0.6s ease;
    transform: rotate(180deg);
  }
  .rightArrow {
    right: 0;
    transition: transform 0.6s ease;
    transform: rotate(0deg);
    margin-left: 10px;
  }

  .hidden {
    display: none;
  }
`;

export const HorizontalFilter = styled(Base)<{ display?: string }>`
  display: ${({ display }) => (display === "true" ? `block` : `none`)};

  ${MediaScreenBuilder.between("tablets", "largeLaptopsGeneric")`
    display: block;`}
`;

export const FilterMenu = styled.div<{
  display?: string;
}>`
  display: ${(props) => (props.display == "true" ? `block` : `none`)};
  ${MediaScreenBuilder.between("zero", "tablets")`
      
       position:relative;
       height: auto;
       padding: 10px;
       margin: 1em auto;
       border: 1px solid #eaeaea;
       overflow-x: initial;
       overflow-y: initial;

       .relative_block {
         display: flex;
         flex-direction:column;
         text-align: left;
          word-spacing: normal;
          z-index: 9000000;
          gap: 15px 15px;        
       }

       .filterToggle{
         display: block;
       }

   `};

  ${MediaScreenBuilder.between("tablets", "largeLaptopsGeneric")`
    display: block;

   .relative_block {
        display: flex;
        width: 100%;
        gap: 20px;
        flex-direction: row;
        justify-content: flex-start;
        overflow-x: auto;

        /*& div:last-child {
          self-align: flex-end;
          margin-left: auto;
        }  */

        .filterToggle{
         display: none;
       }     
       
     }
   `};
  .displayBoard {
    display: none;
  }
`;

export const FlexAlign = styled.div`
  display: flex;
  flex-direction: row;
`;
