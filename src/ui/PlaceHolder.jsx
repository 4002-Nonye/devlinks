import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

function PlaceHolder({ height, width, customClass, type = 'link' }) {
  return (
    <>
      {type === 'phoneContent' && (
        <div className="flex flex-col items-center gap-2">
          <Skeleton width="100px" height="100px" circle />
          <Skeleton width="200px" height="20px" />
          <Skeleton width="180px" height="10px" />

          <div className="mt-7">
            <Skeleton
              count={4}
              width="210px"
              height="40px"
              style={{
                marginBottom: '5px',
              }}
            />
          </div>
        </div>
      )}

      {type === 'link' && (
        <div
          style={{ height: height, width: width }}
          className={`${customClass} rounded-lg bg-brown-100`}
        ></div>
      )}
    </>
  );
}

PlaceHolder.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  customClass: PropTypes.string,
  type: PropTypes.string,
};

export default PlaceHolder;
