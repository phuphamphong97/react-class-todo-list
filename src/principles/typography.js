import { css } from '@emotion/core';
import colors from './colors';

const fontFamily = {
  montserrat: '"Montserrat", san-serif',
  openSans: '"Open Sans", sans-serif',
};

const fontWeight = {
  regular: 400,
  semiBold: 600,
  extraBold: 800,
};

const types = {
  XXL: css`
    color: ${colors.black};
    font-family: ${fontFamily.montserrat};
    font-size: 56px;
    font-weight: ${fontWeight.extraBold};
    letter-spacing: 0;
    line-height: 60px;
  `,
  XL: css`
    color: ${colors.black};
    font-family: ${fontFamily.montserrat};
    font-size: 48px;
    font-weight: ${fontWeight.extraBold};
    letter-spacing: 0;
    line-height: 52px;
  `,
  L: css`
    color: ${colors.black};
    font-family: ${fontFamily.montserrat};
    font-size: 36px;
    font-weight: ${fontWeight.extraBold};
    letter-spacing: 0;
    line-height: 40px;
  `,
  MExtra: css`
    color: ${colors.black};
    font-family: ${fontFamily.montserrat};
    font-size: 24px;
    font-weight: ${fontWeight.extraBold};
    letter-spacing: 0;
    line-height: 28px;
  `,
  MSemi: css`
    color: ${colors.black};
    font-family: ${fontFamily.montserrat};
    font-size: 24px;
    font-weight: ${fontWeight.semiBold};
    letter-spacing: 0;
    line-height: 28px;
  `,
  M: css`
    color: ${colors.black};
    font-family: ${fontFamily.montserrat};
    font-size: 24px;
    font-weight: ${fontWeight.regular};
    letter-spacing: 0;
    line-height: 28px;
  `,
  SExtra: css`
    color: ${colors.black};
    font-family: ${fontFamily.montserrat};
    font-size: 18px;
    font-weight: ${fontWeight.extraBold};
    letter-spacing: 0;
    line-height: 22px;
  `,
  SSemi: css`
    color: ${colors.black};
    font-family: ${fontFamily.montserrat};
    font-size: 18px;
    font-weight: ${fontWeight.semiBold};
    letter-spacing: 0;
    line-height: 22px;
  `,
  S: css`
    color: ${colors.black};
    font-family: ${fontFamily.montserrat};
    font-size: 18px;
    font-weight: ${fontWeight.regular};
    letter-spacing: 0;
    line-height: 22px;
  `,
  XSExtra: css`
    color: ${colors.black};
    font-family: ${fontFamily.montserrat};
    font-size: 14px;
    font-weight: ${fontWeight.extraBold};
    letter-spacing: 0;
    line-height: 16px;
  `,
  XSSemi: css`
    color: ${colors.black};
    font-family: ${fontFamily.montserrat};
    font-size: 14px;
    font-weight: ${fontWeight.semiBold};
    letter-spacing: 0;
    line-height: 16px;
  `,
  XS: css`
    color: ${colors.black};
    font-family: ${fontFamily.montserrat};
    font-size: 14px;
    font-weight: ${fontWeight.regular};
    letter-spacing: 0;
    line-height: 16px;
  `,
  body: css`
    color: ${colors.black};
    font-family: ${fontFamily.openSans};
    font-size: 14px;
    font-weight: ${fontWeight.regular};
    letter-spacing: 0;
    line-height: 24px;
  `,
  bodyTight: css`
    color: ${colors.black};
    font-family: ${fontFamily.openSans};
    font-size: 14px;
    font-weight: ${fontWeight.regular};
    letter-spacing: 0;
    line-height: 20px;
  `,
  bodyS: css`
    color: ${colors.black};
    font-family: ${fontFamily.openSans};
    font-size: 10px;
    font-weight: ${fontWeight.regular};
    letter-spacing: 0.7px;
    line-height: 12px;
  `,
};

export default { fontFamily, fontWeight, types };
