import React, { useState } from 'react';
import { ArrowsAltOutlined, CloseOutlined, ShrinkOutlined } from '@ant-design/icons';
import { StyledButton, StyledIcons, StyledContainer, StyledModal } from './style';

export const EmotionStyled = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);
  const handleFullscreen = () => setIsFullscreen(!isFullscreen);

  const modalTitle = (
    <>
      <span>EmotionStyled</span>
      <StyledIcons >
        <Icon isFullscreen={isFullscreen} handleFullscreen={handleFullscreen} />
        <CloseOutlined onClick={handleCancel} />
      </StyledIcons>
    </>
  );

  return (
    <StyledContainer>
      <StyledButton type="primary" onClick={showModal}>
        EmotionStyled
      </StyledButton>
      <StyledModal
        closable={false}
        isFullscreen={isFullscreen}
        onCancel={handleCancel}
        onOk={handleOk}
        open={isModalOpen}
        title={modalTitle}
      >
        <p>EmotionStyled</p>
        <p>EmotionStyled</p>
        <p>EmotionStyled</p>
      </StyledModal>
    </StyledContainer>
  )
};

const Icon = ({ isFullscreen, handleFullscreen }) => (
  isFullscreen ? (
    <ShrinkOutlined onClick={handleFullscreen} />
  ) : (
    <ArrowsAltOutlined onClick={handleFullscreen} />
  )
);