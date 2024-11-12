function Skeleton({ height, width, customClass }) {
  return (
    <div
      style={{ height: height, width: width }}
      className={`${customClass} rounded-lg bg-brown-100`}
    ></div>
  );
}

Skeleton.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  customClass: PropTypes.string,
};

export default Skeleton;
