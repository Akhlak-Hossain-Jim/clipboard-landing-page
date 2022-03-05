import styled from "styled-components";

export const StyleCon = styled.div`
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  background-image: url("/images/bg-header-desktop.png");
  background-repeat: no-repeat;
  background-size: 1440px auto;
  background-position: top left;
  @media (max-width: 548px) {
    background-image: url("/images/bg-header-mobile.png");
  }
  header {
    display: flex;
    justify-content: center;
    padding: 131px 30px 57px;
  }
  main {
    h1 {
      &.title_one {
        font-weight: 600;
        font-size: 44px;
        line-height: 55px;
        text-align: center;
        color: #4b545a;
        @media (max-width: 548px) {
          font-size: 30px;
          line-height: 38px;
          padding-left: 20px;
          padding-right: 20px;
        }
      }
    }
    .details {
      &_one {
        font-weight: 400;
        font-size: 20px;
        line-height: 150%;
        padding: 22px 0 0px;
        max-width: 685px;
        margin: 0 auto;
        text-align: center;
        letter-spacing: -0.01em;
        color: #a4a8ab;
        @media (max-width: 548px) {
          font-size: 16px;
          line-height: 160%;
          padding-left: 20px;
          padding-right: 20px;
        }
      }
      &_two {
        max-width: 704px;
        margin: 0 auto;
        padding-top: 18px;
        text-align: center;
        font-weight: 600;
        font-size: 18px;
        line-height: 168%;
        text-align: center;
        letter-spacing: -0.01em;
        color: #a4a8ab;
      }
    }
    .buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      padding-top: 57px;
      @media (max-width: 548px) {
        flex-direction: column;
        padding-left: 32px;
        padding-right: 32px;
      }
      .button {
        background: #26bba5;
        border-radius: 27.5px;
        padding: 19px 36px 21px;
        font-weight: 600;
        font-size: 18px;
        line-height: 100%;
        letter-spacing: 0.03em;
        color: #dbffff;
        @media (max-width: 548px) {
          width: 100%;
          text-align: center;
        }
        &:hover {
          opacity: 0.7;
        }
        &:nth-child(1) {
          box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        &:nth-child(2) {
          background: #6174ff;
        }
      }
    }
    h2 {
      &.title_two {
        font-weight: 600;
        font-size: 36px;
        line-height: 45px;
        letter-spacing: -0.01em;
        color: #4b545a;
        text-align: center;
        &.pad {
          padding-top: 150px;
        }
      }
    }
    .section {
      &_web {
        padding: 82px 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        @media (max-width: 548px) {
          grid-template-columns: 1fr;
        }
        &__element {
          &:nth-child(1) {
            @media (max-width: 768px) {
              display: flex;
              margin: auto;
              margin-left: -32px;
            }
            @media (max-width: 548px) {
              padding: 0 24px;
              margin-left: 0;
            }
            img {
              margin-left: -32px;
              @media (max-width: 768px) {
                width: 100%;
                margin: auto;
                margin-left: -32px;
              }
              @media (max-width: 548px) {
                margin-left: 0;
              }
            }
          }
          &_option {
            display: flex;
            flex-direction: column;
            gap: 8px;
            @media (max-width: 548px) {
              text-align: center;
            }
            &__title {
              font-weight: 600;
              font-size: 24px;
              line-height: 168%;
              letter-spacing: -0.01em;
              color: #4b545a;
            }
            &__details {
              max-width: 400px;
              font-size: 16px;
              line-height: 185%;
              color: #a4a8ab;
            }
          }
          &:nth-child(2) {
            padding: 60px 30px 0 110px;
            display: flex;
            flex-direction: column;
            gap: 56px;
            @media (max-width: 768px) {
              padding: 30px;
            }
          }
        }
      }
      &_tab {
        padding: 68px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: min(905px, 100%);
          height: auto;
          margin: 0 auto;
          padding-top: 102px;
        }
      }
      &_overflow {
        padding: 4px 20px;
        &__options {
          max-width: 1106px;
          margin: auto;
          padding-top: 74px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          @media (max-width: 768px) {
            grid-template-columns: 2fr;
          }
          @media (max-width: 548px) {
            grid-template-columns: 1fr;
          }
        }
        &__option {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: 17px;
          &_title {
            padding-top: 18px;
            font-weight: 600;
            font-size: 24px;
            line-height: 168%;
            letter-spacing: -0.01em;
            color: #4b545a;
          }
          &_details {
            font-size: 16px;
            line-height: 185%;
            text-align: center;
            color: #a4a8ab;
          }
          &:nth-child(2),
          &:nth-child(3) {
            .section_overflow__option_title {
              padding-top: 26px;
            }
          }
        }
      }
      &_companies {
        padding: 159px 20px;
        display: flex;
        align-items: center;
        max-width: 1110px;
        margin: 0 auto;
        gap: 30px;
        flex-wrap: wrap;
        justify-content: space-between;
        @media (max-width: 768px) {
          justify-content: center;
        }
      }
    }
  }
  footer {
    display: flex;
    min-height: 151px;
    background-color: #f5f6f8;
    margin-top: 149px;
    padding: 52px;
    .footer {
      width: min(100%, 1110px);
      padding: 0 20px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 52px;
      @media (max-width: 768px) {
        justify-content: center;
        flex-direction: column;
      }
      &_element {
        img.logo {
          width: 55px;
          height: 55px;
        }
        &:nth-child(2) {
          width: min(499px, 100%);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 22px;
          margin: auto;
          @media (max-width: 548px) {
            grid-template-columns: repeat(1, 1fr);
            text-align: center;
            align-items: center;
            justify-content: center;
          }
        }
        &__link {
          font-size: 18px;
          line-height: 100%;
          width: 129px;
          letter-spacing: 0.03em;
          color: #515254;
          &:hover {
            color: #74d2c6;
          }
          @media (max-width: 548px) {
            width: 100%;
            text-align: center;
          }
        }
        &:nth-child(3) {
          display: flex;
          gap: 24px;
          align-items: center;
          justify-content: flex-end;
          svg {
            fill: #4c545c;
            &:hover {
              fill: #74d2c6;
            }
          }
        }
        @media (max-width: 768px) {
          margin: auto;
        }
      }
    }
  }
`;
