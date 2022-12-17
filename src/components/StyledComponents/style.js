import { Button, Modal } from 'antd';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const StyledButton = styled(Button)`
  width: 320px;
  height: 40px;
  font-size: 16px;
`;

export const StyledModal = styled(Modal)`
  top: ${props => props.isFullscreen && 0};
  padding: ${props => props.isFullscreen && 0};
  height: ${props => props.isFullscreen && '100vh'};
  margin: ${props => props.isFullscreen && 0};

  .ant-modal-content {
    width: ${props => props.isFullscreen && '100vw'};
    height: ${props => props.isFullscreen && '100%'};
  }

  .ant-modal-title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icons {
      display: flex;
    }
  }
`;

export const StyledIcons = styled.div`
  display: flex;

  span {
    margin-left: 8px;
  }
`;
