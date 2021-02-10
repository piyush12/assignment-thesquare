import styled from '@emotion/styled';

export const CardStyle = styled.div`
  padding: 10px;

  .card-wrapper {
    padding: 1rem;
    background-color: #fff;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &.active {
      border: 1px solid rgb(225, 52, 53);
    }
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }

    img {
      object-fit: cover;
      width: 100%;
    }
  }
  .card-ammenities {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    h3 {
      font-weight: 400;
      font-size: 1rem;
      margin-bottom: 0;

      &:last-child {
        font-weight: 800;
        font-style: italic;
      }
    }
  }
  .card-ammenities-icon {
    display: flex;
    svg {
      margin-right: 0.4rem;
    }
    h4 {
      margin-right: 1rem;
      margin-top: 0;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0;
    }
  }

  .card-footer {
    border-top: 1px solid #eee;
    padding: 1rem 0 0;
    margin-top: 1rem;

    h5 {
      margin: 0;
      padding: 0.5rem 0;
      display: flex;
      align-items: center;

      svg {
        margin-right: 5px;
      }
    }
    h6 {
      margin: 0;
    }
  }
`;
