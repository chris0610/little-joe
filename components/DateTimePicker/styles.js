import css from "styled-jsx/css";

export default css.global`
  .react-datetime-picker {
    width: 100%;
    display: inline-flex;
    position: relative;
  }
  .react-datetime-picker, .react-datetime-picker *, .react-datetime-picker *:before, .react-datetime-picker *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-datetime-picker--disabled {
    background-color: #f0f0f0;
    color: #6d6d6d;
  }
  .react-datetime-picker__wrapper {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    border: thin solid #E2E8F0;
    border-radius: 5px;
    width: 327px;
    height: 40px;
  }
  .react-datetime-picker__inputGroup {
    min-width: calc(4px + (4px * 3) + 3.24em + 0.434em);
    flex-grow: 1;
    padding: 0 2px;
  }
  .react-datetime-picker__inputGroup__divider {
    padding: 1px 0;
    white-space: pre;
  }
  .react-datetime-picker__inputGroup__input {
    min-width: .54em;
    height: calc(98%);
    position: relative;
    padding: 1px;
    border: 0;
    background: none;
    font: inherit;
    box-sizing: content-box;
    -moz-appearance: textfield;
  }
  .react-datetime-picker__inputGroup__input::-webkit-outer-spin-button, .react-datetime-picker__inputGroup__input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .react-datetime-picker__inputGroup__input:invalid {
    // background: rgba(255,0,0,0.1);
  }
  .react-datetime-picker__inputGroup__input--hasLeadingZero {
    margin-left: -0.54em;
    padding-left: calc(1px + .54em);
  }
  .react-datetime-picker__inputGroup__amPm {
    font: inherit;
    -moz-appearance: menulist;
  }
  .react-datetime-picker__button {
    border: 0;
    background: transparent;
    padding: 4px 6px;
  }
  .react-datetime-picker__button:enabled {
    cursor: pointer;
  }
  .react-datetime-picker__button:enabled:hover .react-datetime-picker__button__icon, .react-datetime-picker__button:enabled:focus .react-datetime-picker__button__icon {
    stroke: #0078d7;
  }
  .react-datetime-picker__button:disabled .react-datetime-picker__button__icon {
    stroke: #6d6d6d;
  }
  .react-datetime-picker__button svg {
    display: inherit;
  }
  .react-datetime-picker__calendar, .react-datetime-picker__clock {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    z-index: 100;
  }
  .react-datetime-picker__calendar--closed, .react-datetime-picker__clock--closed {
    display: none;
  }
  .react-datetime-picker__calendar {
    width: 350px;
    max-width: 100vw;
  }
  .react-datetime-picker__calendar .react-calendar {
    border-width: thin;
  }
  .react-datetime-picker__clock {
    width: 200px;
    height: 200px;
    max-width: 100vw;
    padding: 25px;
    background-color: white;
    border: thin solid #a0a096;
  }
`