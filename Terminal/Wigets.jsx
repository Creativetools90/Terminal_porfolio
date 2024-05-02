function Button(props) {
  return (
    <>
      <button className={props.class} onClick={props.Click}>
        {props.title}
      </button>
    </>
  );
}

export default Button