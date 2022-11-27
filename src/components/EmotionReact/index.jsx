import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button, Modal } from 'antd';
import { ArrowsAltOutlined, CloseOutlined, ShrinkOutlined } from '@ant-design/icons';

export const EmotionReact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);
  const handleFullscreen = () => setIsFullscreen(!isFullscreen);

  const containerStyle = css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
  `;

  const modalStyle = css`
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

  const buttonStyle = css`
    width: 320px;
    height: 40px;
    font-size: 16px;
  `

  const iconsStyle = css`
    display: flex;
    span {
      margin-left: 8px;
    }
  `;

  const modalTitle = (
    <>
      <span>EmotionReact</span>
      <div css={iconsStyle}>
        <Icon 
          isFullscreen={isFullscreen} 
          handleFullscreen={handleFullscreen}
        />
        <CloseOutlined onClick={handleCancel} />
      </div>
    </>
  );

  return (
    <div css={containerStyle}>
      <Button type="primary" onClick={showModal} css={buttonStyle}>
        EmotionReact
      </Button>
      <Modal
        closable={false}
        css={modalStyle}
        isFullscreen={isFullscreen}
        onCancel={handleCancel}
        onOk={handleOk}
        open={isModalOpen}
        title={modalTitle}
      >
        <p>EmotionReact</p>
        <p>EmotionReact</p>
        <p>EmotionReact</p>
      </Modal>
    </div>
  )
};

const Icon = ({ isFullscreen, handleFullscreen }) => (
  isFullscreen ? (
    <ShrinkOutlined onClick={handleFullscreen} />
  ) : (
    <ArrowsAltOutlined onClick={handleFullscreen} />
  )
);