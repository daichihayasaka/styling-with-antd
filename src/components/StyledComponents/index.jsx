import React, { useState } from 'react';
import { ArrowsAltOutlined, CloseOutlined, ShrinkOutlined } from '@ant-design/icons';
import { StyledButton, StyledIcons, StyledContainer, StyledModal } from './style';

export const StyledComponents = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);
  const handleFullscreen = () => setIsFullscreen(!isFullscreen);

  const modalTitle = (
    <>
      <span>styled-components</span>
      <StyledIcons>
        <Icon isFullscreen={isFullscreen} handleFullscreen={handleFullscreen} />
        <CloseOutlined onClick={handleCancel} />
      </StyledIcons>
    </>
  );

  return (
    <StyledContainer>
      <StyledButton type="primary" onClick={showModal}>
        styled-components
      </StyledButton>
      <StyledModal
        closable={false}
        isFullscreen={isFullscreen}
        onCancel={handleCancel}
        onOk={handleOk}
        open={isModalOpen}
        title={modalTitle}
      >
        <p>styled-components</p>
        <p>styled-components</p>
        <p>styled-components</p>
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