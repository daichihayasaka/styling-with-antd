import { css } from '@emotion/react'

export const containerStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const buttonStyle = css`
  width: 320px;
  height: 40px;
  font-size: 16px;
`;

export const modalStyle = (isFullscreen) => css`
  top: ${isFullscreen && 0};
  padding: ${isFullscreen && 0};
  height: ${isFullscreen && '100vh'};
  margin: ${isFullscreen && 0};

  .ant-modal-content {
    width: ${isFullscreen && '100vw'};
    height: ${isFullscreen && '100%'};
  }

  .ant-modal-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const iconsStyle = css`
  display: flex;
  
  span {
    margin-left: 8px;
  }
`;