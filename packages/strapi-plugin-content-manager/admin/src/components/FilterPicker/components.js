import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: -4px;
  > div {
    padding-bottom: 20px;
  }
`;

const Span = styled.span`
  vertical-align: text-top;
  cursor: pointer;

  &:after {
    margin-left: 2px;
    content: '\f077';
    font-family: FontAwesome;
    font-size: 10px;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 0 12px 30px !important;
  margin-top: -10px;
  color: #c3c5c8;
  font-size: 13px;
`;

const Div = styled.div`
  width: calc(100% + 60px);
  margin: ${props =>
    props.show ? '-100px -30px 30px' : `-${props.number}px -30px 103px`};
  background: #fff;
  box-shadow: 3px 2px 4px #e3e9f3;
  padding: 18px 30px 0px 30px;
  transition: ${props => {
    if (props.anim) {
      return props.show
        ? 'margin-top .3s ease-out, margin-bottom .2s ease-out'
        : 'margin .3s ease-in';
    }
  }};
`;

export { Div, Flex, Span, Wrapper };
