import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { ArrowsAltOutlined, CloseOutlined, ShrinkOutlined } from '@ant-design/icons';
import classNames from "classnames";
import styles from './style.module.scss';

export const CssModules = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);
  const handleFullscreen = () => setIsFullscreen(!isFullscreen);

  const modalTitle = (
    <>
      <span>CSS Modules</span>
      <div className={styles.icons}>
        <Icon isFullscreen={isFullscreen} handleFullscreen={handleFullscreen} />
        <CloseOutlined onClick={handleCancel} />
      </div>
    </>
  );

  const modalClassNames = classNames({
    [styles.modal]: true,
    [styles.fullscreen]: isFullscreen,
  });

  return (
    <div className={styles.container}>
      <Button type="primary" onClick={showModal} className={styles.button}>
        CSS Modules
      </Button>
      <Modal
        className={modalClassNames}
        closable={false}
        onCancel={handleCancel}
        onOk={handleOk} 
        open={isModalOpen} 
        title={modalTitle}
      >
        <p>CSS Modules</p>
        <p>CSS Modules</p>
        <p>CSS Modules</p>
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