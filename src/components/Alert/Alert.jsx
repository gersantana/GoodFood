import propsTypes from "prop-types"
import "./Alert.css"

const Alert = ({ mensaje, render }) => {
	return (
    <div className="text-center alerta">{render.length === 0 && 
        <p className={"alert alert-danger"}>{mensaje}</p>}
    </div>
    )
};

Alert.propTypes = {
    mensaje: propsTypes.string.isRequired,
    render: propsTypes.array.isRequired
}

export default Alert;
