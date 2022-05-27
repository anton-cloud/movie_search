import styled from "styled-components";

export const CastStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;

  border-top: 2px solid aqua;

  .item {
    flex-basis: calc(100% / 2 - 20px);
    margin-left: 20px;
    margin-top: 20px;

    opacity: 1;

    transition: opacity $transition-duration $transition-timing;

    &:hover,
    &:focus {
      opacity: 0.8;

      transition: all $transition-duration $transition-timing;
    }

    @media screen and (min-width: 768px) and (max-width: 1169px) {
      flex-basis: calc(100% / 3 - 20px);
    }

    @media screen and (min-width: 1170px) {
      flex-basis: calc(100% / 4 - 20px);
    }
  }

  .image {
    width: 300px;
  }

  .nameText {
    font-size: 16px;
    font-weight: 600;
    font-style: italic;
  }
`;
