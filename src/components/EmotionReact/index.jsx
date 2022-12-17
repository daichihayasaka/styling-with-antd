import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button, Modal } from 'antd';
import { ArrowsAltOutlined, CloseOutlined, ShrinkOutlined } from '@ant-design/icons';
import { containerStyle, buttonStyle, modalStyle, iconsStyle } from './style';

export const EmotionReact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);
  const handleFullscreen = () => setIsFullscreen(!isFullscreen);

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
    <>
      <div css={containerStyle}>
        <Button type="primary" onClick={showModal} css={buttonStyle}>
          EmotionReact
        </Button>
      </div>

      <Modal
        closable={false}
        css={modalStyle(isFullscreen)}
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
    </>
  );
};

const Icon = ({ isFullscreen, handleFullscreen }) => (
  isFullscreen ? (
    <ShrinkOutlined onClick={handleFullscreen} />
  ) : (
    <ArrowsAltOutlined onClick={handleFullscreen} />
  )
);