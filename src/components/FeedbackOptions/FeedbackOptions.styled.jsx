import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  gap: 15px;
`;

export const FeedbackBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: ${({ children }) => {
    switch (children) {
      case 'good':
        return 'rgba(0, 128, 0, 0.8)';
      case 'bad':
        return 'rgba(128, 0, 0, 0.8)';
      case 'neutral':
        return 'rgba(255, 255, 0, 0.8)';

      default:
        return 'rgba(109, 109, 103, 0.8)';
    }
  }};
  border-radius: 5px;
  border: 1px solid rgba(37, 36, 36, 0.263);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${({ children }) => {
      switch (children) {
        case 'good':
          return 'rgba(0, 128, 0, 0.5)';
        case 'bad':
          return 'rgba(128, 0, 0, 0.5)';
        case 'neutral':
          return 'rgba(255, 255, 0, 0.5)';

        default:
          return 'rgba(109, 109, 103, 0.5)';
      }
    }};
  }
`;
