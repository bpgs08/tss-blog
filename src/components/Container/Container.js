import ClassName from 'models/classname';

import styles from './Container.module.scss';

import styled from 'styled-components';

const Container = ({ children, className }) => {
  const containerClassName = new ClassName(styles.container);

  containerClassName.addIf(className, className);

  return <ContainerFlex className={containerClassName.toString()}>{children}</ContainerFlex>;
};

const ContainerFlex = styled.div`
  @media only screen and (min-width: 1200px) {
    flex-direction: row;
  }
  flex-direction: column;
  display: flex;
  justify-content: space-between;
`;

export default Container;
