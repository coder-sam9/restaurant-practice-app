import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop}>{props.children}</div>;
};
const ModalOverlays = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const modalPortalPlace=document.getElementById('overlays');
function Modal(props) {
  return (<Fragment>
    {ReactDOM.createPortal(<Backdrop/>,modalPortalPlace)}
    {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>,modalPortalPlace)}
  </Fragment>)
}

export default Modal;
