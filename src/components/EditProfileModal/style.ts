import styled from 'styled-components';

const StyledContent = styled.div`
  & > :nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      color: var(--color-gray300);
      font-size: clamp(var(--font-size5), 5vw, var(--font-size3));
    }
  }

  & > :nth-child(2) {
    button {
      margin-top: 20px;
    }
  }
`;

export default StyledContent;
