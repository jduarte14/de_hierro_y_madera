const WarnPopUp = ({ title, description, cancelButton, passedFunction, closeFunction }) => {
    return (
        <div className="pp-overlay">
            <div className="popup-warn">
                <h1>{title}</h1>
                <div className="popup-info">
                    <p>
                        {description}
                    </p>
                </div>
                <div className="popup-buttons">
                    <button onClick={passedFunction} className="accept">Aceptar</button>
                    {
                        cancelButton ? <button onClick={closeFunction} className="cancel"> Cancelar </button> : null
                    }

                </div>
            </div>
        </div>

    )
}

export default WarnPopUp;