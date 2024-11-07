function Skeleton({ height, width, customClass }) {
  return (
    <div
      style={{ height: height, width: width }}
      className={`${customClass} bg-brown-100 rounded-lg`}
    ></div>
  );
}

Skeleton.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  customClass: PropTypes.string,
};

export default Skeleton;
