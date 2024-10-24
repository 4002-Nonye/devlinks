import PropTypes from "prop-types"

Avatar.propTypes={
    avatar:PropTypes.string
}

function Avatar({avatar}) {
  return (
    <img src={avatar} alt="avatar" className="w-24 h-24 rounded-full border-4 object-cover object-top border-blue" />

  )
}

export default Avatar